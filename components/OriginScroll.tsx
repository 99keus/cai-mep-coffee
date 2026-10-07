"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Keep origin parallax separate from the site's shared scroll controller. */
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

      const sections = Array.from(element.querySelectorAll<HTMLElement>(".origin-landscape"));
      let frame = 0;
      element.dataset.motion = "enabled";

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
