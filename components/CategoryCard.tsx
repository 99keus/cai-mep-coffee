import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";
export function CategoryCard({
  name,
  image,
  description,
  index,
}: {
  name: ProductCategory;
  image: string;
  description: string;
  index: number;
}) {
  return (
    <Link
      href={`/products?category=${encodeURIComponent(name)}`}
      className="category-card"
    >
      <span className="category-number">0{index}</span>
      <div className="category-photo">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width:760px) 90vw,33vw"
        />
      </div>
      <div className="category-label">
        <h3>{name}</h3>
        <ArrowUpRight />
      </div>
      <p>{description}</p>
    </Link>
  );
}
