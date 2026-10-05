import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-photo"
        role="img"
        aria-label="Illustrative coffee-growing highlands"
      />
      <div className="container hero-content">
        <h1>
          Vietnamese roots.
          <br />
          A world to share<span className="accent">.</span>
        </h1>
        <p className="hero-description">
          From the highlands of Vietnam to the coffee you make your own. Discover green beans, roasted coffee and ground coffee — and begin a story that connects our origin with your world.
        </p>
        <div className="button-row">
          <Link className="button cream" href="/products">
            Explore Products <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
      <div className="hero-caption">
        <span>EVERY COFFEE BEGINS SOMEWHERE</span>
        <span>Vietnam’s Central Highlands</span>
      </div>
    </section>
  );
}
