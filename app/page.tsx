import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Scale,
  Mountain,
  Layers,
  PackageCheck,
  Package,
  ShieldCheck,
  Box,
  ShoppingBag,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductGrid } from "@/components/ProductGrid";
import { OriginCard } from "@/components/OriginCard";
import { featuredProducts } from "@/data/products";
import { origins } from "@/data/origins";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COFFEE PORTFOLIO</p>
            <h2>
              The right coffee.
              <br />
              For your next chapter.
            </h2>
          </div>
        </div>
        <div className="category-grid">
          <CategoryCard
            index={1}
            name="Green Coffee Beans"
            image="/images/products/catalogue-20261003/arabica-catimor-washed.webp"
            description="Robusta, Arabica & Excelsa"
          />
          <CategoryCard
            index={2}
            name="Roasted Coffee Beans"
            image="/images/products/catalogue-20261003/roasted-coffee-blend.webp"
            description="Whole beans. Share your roast requirements."
          />
          <CategoryCard
            index={3}
            name="Ground Coffee"
            image="/images/products/catalogue-20261003/ground-coffee-blend.webp"
            description="Coffee prepared for your brewing needs."
          />
        </div>
      </section>
      <section className="featured-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2 className="eyebrow feature-products-title">FEATURE PRODUCTS</h2>
            </div>
            <Link className="text-link" href="/products">
              View all products <ArrowUpRight size={18} />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
          <p className="image-disclaimer">
            Illustrative photography. Product specifications and availability
            are confirmed per lot.
          </p>
        </div>
      </section>
      <section className="section container why-grid">
        <div className="why-photo why-photo-harvest">
          <Image
            src="/images/company/coffee-cherry-harvest-20261004.webp"
            alt="Hands gathering ripe coffee cherries into a woven harvest basket"
            fill
            sizes="(max-width:760px) 90vw,50vw"
          />
          <span>
            Rooted in Vietnam.
            <br />
            Shared with the world.
          </span>
        </div>
        <div>
          <p className="eyebrow">WHY CAI MEP COFFEE</p>
          <h2>
            Rooted in Vietnam.
            <br />Ready to grow with you.
          </h2>
          <p className="why-lead">
            Our supply network spans Vietnam’s key coffee regions, enabling stable sourcing and scalable shipment planning for importers, roasters, and private label partners. From a few lots to a full container, we help you shape a coffee programme that grows with your business.
          </p>
          <div className="why-points">
            {[
              {
                icon: Scale,
                title: "Flexible volumes",
                text: "Begin with a few lots or plan a full container. Match your order to your business needs.",
              },
              {
                icon: Mountain,
                title: "Connected across Vietnam",
                text: "Our network spans key coffee-growing regions, supporting stable sourcing across your buying programme.",
              },
              {
                icon: Layers,
                title: "Coffee for your business",
                text: "Green, roasted and ground options for importers, roasters and private label partners.",
              },
              {
                icon: PackageCheck,
                title: "Room to scale",
                text: "Plan specifications, volumes and shipment timing with us as your demand grows.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={24} strokeWidth={1.4} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link className="text-link" href="/coffee-origins">
            Discover our coffee origins <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="origins-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KNOW YOUR ORIGIN</p>
              <h2>Different landscapes. A shared love of coffee.</h2>
            </div>
            <Link href="/coffee-origins" className="text-link">
              Explore the regions <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="origin-grid">
            {origins.map((o, i) => (
              <OriginCard key={o.slug} origin={o} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPORT & PACKAGING</p>
            <h2>Care for the journey ahead.</h2>
          </div>
          <p>
            The journey matters as much as the beginning. Let’s discuss packaging that suits your coffee, your destination and the way you work.
          </p>
        </div>
        <div className="packaging-grid">
          {[
            {
              icon: Package,
              name: "Jute bags",
              text: "A traditional green coffee packaging option.",
            },
            {
              icon: Box,
              name: "PP bags",
              text: "Discuss woven bag formats for bulk coffee.",
            },
            {
              icon: ShieldCheck,
              name: "GrainPro liners",
              text: "Ask about protective liner availability.",
            },
            {
              icon: ShoppingBag,
              name: "Retail packaging",
              text: "Explore formats for roasted and ground coffee.",
            },
          ].map(({ icon: Icon, name, text }) => (
            <div key={name}>
              <Icon size={29} strokeWidth={1.3} />
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="image-disclaimer">
          Packaging options, net weights, order quantities and export
          documentation are confirmed with your quotation.
        </p>
      </section>
      <CTASection />
    </>
  );
}
