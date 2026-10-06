import { HeroMotion } from "@/components/HeroMotion";
import { HeroShowcase } from "@/components/HeroShowcase";

export function Hero() {
  return (
    <section className="hero hero-category-showcase">
      <HeroMotion />
      <div className="hero-photo" role="img" aria-label="Illustrative coffee-growing highlands" />
      <HeroShowcase />
    </section>
  );
}
