"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function WhyMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const section = element.closest<HTMLElement>(".why-section");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const words = element.querySelectorAll<HTMLElement>(".why-word-inner");
    const animations: Animation[] = [];
    if (!preference.matches) words.forEach((word) => {
      word.style.opacity = "0.5";
    });
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      words.forEach((word, index) => {
        if (!preference.matches) animations.push(word.animate(
          [{ opacity: .5 }, { opacity: 1 }],
          { duration: 1200, delay: index * 75, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" },
        ));
        else { word.style.transform = ""; word.style.opacity = ""; }
      });
      observer.disconnect();
    }, { threshold: .2, rootMargin: "0px 0px -10% 0px" });
    const title = element.querySelector(".why-statement");
    if (title) observer.observe(title);
    const cards = element.querySelectorAll<HTMLElement>(".why-points > div");
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target as HTMLElement;
        if (!preference.matches) animations.push(card.animate(
          [{ opacity: 0, transform: "translateY(28px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 750, delay: Array.from(cards).indexOf(card) * 100, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" },
        ));
        else { card.style.opacity = ""; card.style.transform = ""; }
        cardObserver.unobserve(card);
      });
    }, { threshold: .15 });
    cards.forEach((card) => {
      if (!preference.matches) { card.style.opacity = "0"; card.style.transform = "translateY(28px)"; }
      cardObserver.observe(card);
    });
    function update() {
      frame = 0;
      if (!element) return;
      const top = element.getBoundingClientRect().top;
      const photo = element.querySelector(".why-photo-stage");
      const photoTop = photo?.getBoundingClientRect().top ?? top;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - photoTop) / (window.innerHeight * .8)));
      element.style.setProperty("--why-photo-scale", preference.matches ? "1" : `${.7 + progress * .3}`);
      const startWidth = Math.min(640, window.innerWidth - 40);
      const expansion = preference.matches ? 1 : progress;
      element.style.setProperty("--why-photo-width", `${startWidth + (window.innerWidth - startWidth) * expansion}px`);
      element.style.setProperty("--why-photo-radius", `${24 * (1 - expansion)}px`);
      const glowProgress = Math.max(0, Math.min(1, (window.innerHeight - photoTop) / window.innerHeight));
      element.style.setProperty("--why-glow-scale", preference.matches ? "1" : `${.4 + glowProgress * 1.1}`);
      const sectionTop = section?.getBoundingClientRect().top ?? top;
      const offset = Math.max(-120, Math.min(180, -sectionTop * .2));
      section?.style.setProperty("--why-gradient-offset", preference.matches ? "0px" : `${offset}px`);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      cardObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      words.forEach((word) => { word.style.transform = ""; word.style.opacity = ""; });
      cards.forEach((card) => { card.style.transform = ""; card.style.opacity = ""; });
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      element.style.removeProperty("--why-photo-scale");
      element.style.removeProperty("--why-photo-width");
      element.style.removeProperty("--why-photo-radius");
      element.style.removeProperty("--why-glow-scale");
      section?.style.removeProperty("--why-gradient-offset");
    };
  }, []);
  return <div className="container section why-grid" ref={root}>
    {children}
  </div>;
}
