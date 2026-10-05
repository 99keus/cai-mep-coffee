"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Keep the origin copy server-rendered; enhance only this route with motion. */
export function OriginScroll({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    function configure() {
      dispose();
      if (!element || preference.matches) return;

      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -100 },
      });
      const sections = Array.from(element.querySelectorAll<HTMLElement>(".origin-landscape"));
      const animations: Animation[] = [];
      let frame = 0;
      element.dataset.motion = "enabled";

      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const content = entry.target.querySelector(".origin-landscape-copy");
          if (content) {
            Array.from(content.children).forEach((child, index) => {
              animations.push(child.animate([
                { opacity: 0, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ], { duration: 800, delay: index * 85, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }));
            });
          }
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.12 });
      sections.forEach(section => observer.observe(section));

      function paint() {
        frame = 0;
        const height = window.innerHeight;
        for (const section of sections) {
          const bounds = section.getBoundingClientRect();
          if (bounds.bottom < 0 || bounds.top > height) continue;
          const progress = (height / 2 - (bounds.top + bounds.height / 2)) / height;
          section.style.setProperty("--origin-parallax", `${Math.max(-32, Math.min(32, progress * 48))}px`);
        }
      }
      function schedule() {
        if (!frame) frame = requestAnimationFrame(paint);
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      paint();

      dispose = () => {
        lenis.destroy();
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        sections.forEach(section => section.style.removeProperty("--origin-parallax"));
        delete element.dataset.motion;
      };
    }

    configure();
    preference.addEventListener("change", configure);
    return () => {
      dispose();
      preference.removeEventListener("change", configure);
    };
  }, []);

  return <div ref={root} className="origin-landscapes">{children}</div>;
}
