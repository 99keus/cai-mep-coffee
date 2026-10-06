"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Enhance server-rendered sections without hiding content before hydration. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function configure() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = entry.target;
          const target = section.querySelector(".origin-landscape-copy") || section;
          const animation = target.animate([
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer?.unobserve(section);
        }
      }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

      document.querySelectorAll<HTMLElement>("main section:not([role='tabpanel']), main .product-detail-layout").forEach(section => {
        // Keep the initial viewport stable; reveal each later section once.
        if (section.getBoundingClientRect().top < window.innerHeight) return;
        observer?.observe(section);
      });
    }

    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener("change", configure);
    };
  }, [pathname]);

  return null;
}
