"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function WhyMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const section = element.closest<HTMLElement>(".why-section");
    const photo = element.querySelector<HTMLElement>(".why-photo-stage");
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
    const cards = element.querySelectorAll<HTMLElement>(".why-lead, .why-points > div");
    const revealTarget = (card: HTMLElement) => card.querySelector<HTMLElement>(".why-point-content") ?? card;
    const cardAnimations = new Map<HTMLElement, Animation>();
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const card = revealTarget(entry.target as HTMLElement);
        cardAnimations.get(card)?.cancel();
        cardAnimations.delete(card);
        if (preference.matches) { card.style.opacity = ""; card.style.transform = ""; return; }
        if (entry.intersectionRatio < .15) {
          card.style.opacity = "0";
          card.style.transform = "translateY(28px)";
          return;
        }
        cardAnimations.set(card, card.animate(
          [{ opacity: 0, transform: "translateY(28px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 750, delay: Array.from(cards).indexOf(entry.target as HTMLElement) * 100, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" },
        ));
      });
    }, { threshold: [0, .15], rootMargin: "0px 0px -8% 0px" });
    cards.forEach((card) => {
      const target = revealTarget(card);
      if (!preference.matches) { target.style.opacity = "0"; target.style.transform = "translateY(28px)"; }
      cardObserver.observe(card);
    });
    function update() {
      frame = 0;
      if (!element) return;
      if (preference.matches) {
        cardAnimations.forEach((animation) => animation.cancel());
        cardAnimations.clear();
        cards.forEach((card) => { const target = revealTarget(card); target.style.opacity = ""; target.style.transform = ""; });
      }
      const top = element.getBoundingClientRect().top;
      const photoTop = photo?.getBoundingClientRect().top ?? top;
      // The stage's top stays fixed as the frame grows, so progress never
      // depends on the animated dimensions or pushes the animation forward.
      const progress = Math.max(0, Math.min(1, (window.innerHeight * .85 - photoTop) / (window.innerHeight * .85)));
      element.style.setProperty("--why-photo-scale", preference.matches ? "1" : `${.7 + progress * .3}`);
      const expansion = preference.matches ? 1 : progress * progress * (3 - 2 * progress);
      if (photo) {
        const viewportWidth = document.documentElement.clientWidth;
        const gutter = parseFloat(getComputedStyle(element).getPropertyValue("--page-gutter")) || 24;
        const initialWidth = Math.min(640, viewportWidth - gutter * 2);
        const initialHeight = Math.min(640, window.innerHeight * .7);
        const fullHeight = Math.max(1400, window.innerHeight);
        element.style.setProperty("--why-frame-width", `${initialWidth + (viewportWidth - initialWidth) * expansion}px`);
        element.style.setProperty("--why-frame-height", `${initialHeight + (fullHeight - initialHeight) * expansion}px`);
        element.style.setProperty("--why-frame-radius", `${24 * (1 - expansion)}px`);
      }
      element.style.setProperty("--why-image-zoom", preference.matches ? "1" : `${1 + expansion * .06}`);
      element.style.setProperty("--why-image-parallax", preference.matches ? "0px" : `${-80 * expansion}px`);
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
      cardAnimations.forEach((animation) => animation.cancel());
      animations.forEach((animation) => animation.cancel());
      words.forEach((word) => { word.style.transform = ""; word.style.opacity = ""; });
      cards.forEach((card) => { const target = revealTarget(card); target.style.transform = ""; target.style.opacity = ""; });
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      element.style.removeProperty("--why-photo-scale");
      element.style.removeProperty("--why-frame-width");
      element.style.removeProperty("--why-frame-height");
      element.style.removeProperty("--why-frame-radius");
      element.style.removeProperty("--why-image-zoom");
      element.style.removeProperty("--why-image-parallax");
      element.style.removeProperty("--why-glow-scale");
      section?.style.removeProperty("--why-gradient-offset");
    };
  }, []);
  return <div className="container section why-grid" ref={root}>
    {children}
  </div>;
}
