import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CoffeeOrigin } from "@/data/origins";

export function OriginCard({ origin }: { origin: CoffeeOrigin }) {
  return (
    <Link className="origin-card" href={`/coffee-origins#${origin.slug}`}>
      <div className="origin-card-image">
        <Image loading="lazy" src={origin.image} alt={origin.imageAlt} fill
          sizes="(max-width:600px) 90vw,(max-width:1000px) 45vw,25vw" />
      </div>
      <div className="origin-card-caption">
        <div><h3>{origin.name}</h3><p>{origin.speciesSummary || origin.species}</p></div>
        <ArrowUpRight size={22} aria-hidden="true" />
      </div>
    </Link>
  );
}
