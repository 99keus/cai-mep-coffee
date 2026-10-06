import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
export function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${p.slug}`}
        className={`product-image ${p.category === "Ground Coffee" ? "ground" : ""}`}
        aria-label={`View ${p.name}`}
      >
        <Image
          loading="lazy"
          src={p.image}
          alt={p.imageAlt || p.name}
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"
        />
        <span className="image-tag">{p.species || p.type}</span>
      </Link>
      <div className="product-card-body">
        <p className="product-category">{p.category}</p>
        <h3>
          <Link href={`/products/${p.slug}`}>{p.name}</Link>
        </h3>
        <p className="product-attributes">
          {[p.grade, p.screen, p.process].filter(Boolean).join(" · ") ||
            "Specifications upon request"}
        </p>
        <Link className="card-link" href={`/products/${p.slug}`}>
          View Product <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
