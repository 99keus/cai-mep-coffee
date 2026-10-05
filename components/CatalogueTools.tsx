"use client";
import { useEffect } from "react";
import { filterProducts, type CatalogueQuery } from "@/data/products";
interface ModelContext {
  registerTool(
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean };
      execute: (input: unknown) => unknown;
    },
    options: { signal: AbortSignal },
  ): void | Promise<void>;
}
/** Progressive enhancement: a read-only catalogue query in supporting browsers. */
export function CatalogueTools() {
  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext })
      .modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const keys = ["search", "category", "species", "process", "screen"];
    const tool = {
      name: "query_coffee_catalogue",
      title: "Search the coffee catalogue",
      description:
        "Read matching coffee products by name, category, species, processing method or screen size. Does not submit an inquiry or change filters.",
      inputSchema: {
        type: "object",
        properties: Object.fromEntries(
          keys.map((key) => [key, { type: "string" }]),
        ),
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute(input: unknown) {
        if (!input || typeof input !== "object" || Array.isArray(input))
          throw new Error("Expected a query object.");
        for (const [key, value] of Object.entries(input)) {
          if (!keys.includes(key) || typeof value !== "string")
            throw new Error("Query fields must be supported string values.");
        }
        const matches = filterProducts(input as CatalogueQuery);
        return {
          count: matches.length,
          products: matches.map((p) => ({
            name: p.name,
            slug: p.slug,
            category: p.category,
            species: p.species,
            grade: p.grade,
            screen: p.screen,
            process: p.process,
            url: `/products/${p.slug}/`,
          })),
        };
      },
    };
    try {
      Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => {});
    } catch {
      /* Unsupported implementations must not affect the catalogue. */
    }
    return () => lifecycle.abort();
  }, []);
  return null;
}
