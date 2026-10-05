import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin } from "lucide-react";
import { products, getProduct } from "@/data/products";
import { company } from "@/data/company";
import { ProductSpecs } from "@/components/ProductSpecs";
import { ProductDetailTabs } from "@/components/ProductDetailTabs";
import { ProductGallery } from "@/components/ProductGallery";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return p
    ? {
        title: { absolute: `${p.name} | Vietnam ${p.category} | ${company.name}` },
        description: p.shortDescription,
      }
    : {};
}
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return (
    <div className="container detail-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <ChevronRight size={12} />
        <Link href="/products">Products</Link>
        <ChevronRight size={12} />
        <span>{p.name}</span>
      </nav>
      <div className="product-detail-layout">
        <div className="product-visuals">
          <ProductGallery image={p.image} gallery={p.gallery} name={p.name} alt={p.imageAlt}/>
          <p className="image-disclaimer">Actual lot images available upon request.{p.imageCredit && <> Reference photo: <a href={p.imageCredit.url} target="_blank" rel="noopener noreferrer">{p.imageCredit.name}</a>.</>}</p>
        </div>
        <div className="product-story">
          <span className="product-species-badge">{p.species || p.type || p.category}</span>
          <h1>{p.name}</h1>
          <p className="product-origin"><MapPin size={20}/>{p.origin}</p>
          <ProductDetailTabs slug={p.slug} specifications={<ProductSpecs product={p}/>} overview={<>
            <h2>Product Overview</h2>
            <p>{p.shortDescription}</p>
            {p.description && <p>{p.description}</p>}
            {p.flavorNotes && <p className="product-flavor-notes"><strong>Flavor notes:</strong> {p.flavorNotes}</p>}
            <div className="detail-chips">{[p.category, p.grade, p.screen, p.process, p.variety, p.quality, p.type].filter(Boolean).map(value=><span key={value}>{value}</span>)}</div>
          </>}/>
        </div>
      </div>
    </div>
  );
}
