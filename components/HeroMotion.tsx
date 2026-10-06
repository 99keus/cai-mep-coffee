"use client";

import { useEffect, useRef } from "react";

export function HeroMotion() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hero = marker.current?.closest<HTMLElement>(".hero");
    if (!hero) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    function update() {
      frame = 0;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const progress = preference.matches ? 0 : Math.max(0, Math.min(1, -bounds.top / bounds.height));
      hero.style.setProperty("--hero-parallax", `${(progress * bounds.height * .3).toFixed(2)}px`);
      hero.style.setProperty("--hero-photo-opacity", `${1 - progress}`);
      hero.style.setProperty("--hero-blur", `${(progress * 12).toFixed(2)}px`);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      ["--hero-parallax", "--hero-photo-opacity", "--hero-blur"].forEach(name => hero.style.removeProperty(name));
    };
  }, []);

  return <span hidden ref={marker} />;
}
