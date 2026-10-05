import type { Metadata } from "next";
import { CatalogueTools } from "@/components/CatalogueTools";
import { Suspense } from "react";
import { ProductFilters } from "@/components/ProductFilters";
export const metadata: Metadata = {
  title: "Coffee Products",
  description:
    "Explore Vietnamese green, roasted and ground coffees. Filter by species, grade-related screen size and processing method to find coffee for your business.",
};
export default function Products() {
  return (
    <>
      <CatalogueTools />
      <section className="container catalogue-section">
        <Suspense
          fallback={<p className="loading">Loading coffee catalogue…</p>}
        >
          <ProductFilters />
        </Suspense>
      </section>
    </>
  );
}
