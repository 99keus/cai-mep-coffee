import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { origins } from "@/data/origins";
import { OriginScroll } from "@/components/OriginScroll";

export const metadata: Metadata = {
  title: "Vietnam Coffee Origins",
  description: "Discover the coffee landscapes of Đắk Lắk, Gia Lai, Đắk Nông and Lâm Đồng, from Central Highlands Robusta to Arabica around Da Lat.",
};

export default function CoffeeOrigins() {
  return (
    <>
      <h1 className="sr-only">Vietnam Coffee Origins</h1>
      <OriginScroll>
        {origins.map((origin, index) => {
          const species = origin.species.includes("Arabica") ? "Arabica" : "Robusta";
          return (
            <section id={origin.slug} key={origin.slug} className="origin-landscape" aria-labelledby={`${origin.slug}-title`}>
              <Image src={origin.image} alt={origin.imageAlt} fill preload={index === 0} sizes="100vw" className="origin-landscape-image" />
              <div className="origin-landscape-shade" aria-hidden="true" />
              <div className="origin-landscape-inner">
                <div className="origin-landscape-copy">
                  <h2 id={`${origin.slug}-title`}><span>0{index + 1} /</span> {origin.name}</h2>
                  <p className="origin-landscape-lead">{origin.description}</p>
                  <p className="origin-landscape-story">{origin.story}</p>
                  <dl className="origin-landscape-facts">
                    <div><dt>Main coffee species</dt><dd>{origin.species}</dd></div>
                    <div><dt>Typical processing</dt><dd>{origin.processing}</dd></div>
                  </dl>
                  <Link className="origin-landscape-link" href={`/products?species=${species}`}>
                    Explore {species} coffees <ArrowRight size={19} aria-hidden="true" />
                  </Link>
                </div>
                <p className="origin-landscape-caption">
                  <span>{origin.imageCaption}</span>
                  <span className="origin-image-credit">Photo: <a href={origin.imageCredit.url} target="_blank" rel="noreferrer">{origin.imageCredit.name}</a>{" · "}<a href={origin.imageCredit.licenseUrl} target="_blank" rel="noreferrer">{origin.imageCredit.license}</a> · resized &amp; cropped</span>
                </p>
              </div>
            </section>
          );
        })}
      </OriginScroll>
    </>
  );
}
