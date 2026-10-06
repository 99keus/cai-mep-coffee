import { HeroMotion } from "@/components/HeroMotion";
import { HeroShowcase } from "@/components/HeroShowcase";

export function Hero() {
  return (
    <div className="hero-transition">
      <HeroMotion />
      <div className="hero-photo" role="img" aria-label="Illustrative coffee-growing highlands" />
      <section className="hero hero-category-showcase">
        <HeroShowcase />
      </section>
      <div className="hero-gradient-bridge" aria-hidden="true" />
    </div>
  );
}
