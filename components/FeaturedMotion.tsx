"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function FeaturedMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    function update() {
      frame = 0;
      if (!element) return;
      const top = element.getBoundingClientRect().top;
      const progress = preference.matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight - top) / (window.innerHeight * .85)));
      element.style.setProperty("--featured-scale", `${.92 + progress * .08}`);
      element.style.setProperty("--featured-radius", `${32 * (1 - progress)}px`);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return <div className="featured-frame" ref={root}>{children}</div>;
}
