import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";
export function CategoryCard({
  name,
  image,
  description,
}: {
  name: ProductCategory;
  image: string;
  description: string;
}) {
  return (
    <Link
      href={`/products?category=${encodeURIComponent(name)}`}
      className="category-card"
    >
      <div className="category-photo">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          fill
          sizes="(max-width:760px) 90vw, (max-width:1600px) 30vw, 500px"
        />
      </div>
      <div className="category-label">
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
    </Link>
  );
}
