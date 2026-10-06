import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CoffeeOrigin } from "@/data/origins";
export function OriginCard({
  origin,
  index,
}: {
  origin: CoffeeOrigin;
  index: number;
}) {
  return (
    <Link className="origin-card" href={`/coffee-origins#${origin.slug}`}>
      <div className="origin-card-top">
        <span>0{index + 1} / CENTRAL HIGHLANDS</span>
        <ArrowUpRight size={18} />
      </div>
      <div className="origin-card-image">
        <Image
          loading="lazy"
          src={origin.image}
          alt={origin.imageAlt}
          fill
          sizes="(max-width:760px) 45vw,25vw"
        />
      </div>
      <h3>{origin.name}</h3>
      <p>{origin.speciesSummary || origin.species}</p>
    </Link>
  );
}
