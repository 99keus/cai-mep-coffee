"use client";
import { useQueryParams, replaceQuery } from "@/lib/useQueryParams";
import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { filterProducts, categories } from "@/data/products";
import { ProductGrid } from "./ProductGrid";
const speciesOptions = ["Robusta", "Arabica", "Excelsa"];
const filterDefs = [
  { key: "category", label: "Product Type", options: categories },
  {
    key: "species",
    label: "Coffee Species",
    options: speciesOptions,
  },
  {
    key: "process",
    label: "Processing Method",
    options: ["Clean", "Wet Polished", "Washed", "Natural", "Honey"],
  },
  { key: "screen", label: "Screen Size", options: ["S18", "S16", "S13-14"] },
];
export function ProductFilters() {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const params = useQueryParams();
  const search = params.get("q") || "";
  const setSearch = (value: string) => change("q", value);
  const chosen = Object.fromEntries(
    filterDefs.map((d) => [d.key, params.get(d.key) || ""]),
  );
  const result = filterProducts({ ...chosen, search });
  const active = filterDefs.some((d) => chosen[d.key]) || Boolean(search);
  function change(key: string, value: string) {
    const next = new URLSearchParams(window.location.search);
    if (value) next.set(key, value);
    else next.delete(key);
    replaceQuery(`/products/${next.size ? "?" + next.toString() : ""}`);
  }
  function clear() {
    replaceQuery("/products/");
  }
  return (
    <div className="catalogue-browser">
      <div className="catalogue-toolbar">
        <h1>Products</h1>
        <div className="catalogue-controls">
          <div className="catalogue-search">
            <Search size={18} aria-hidden="true" />
            <input type="search" aria-label="Search products" value={search}
              onChange={e => setSearch(e.target.value)} placeholder="Search coffee…" />
          </div>
          <button type="button" className="filter-toggle" aria-expanded={filtersVisible}
            aria-controls="catalogue-filters" onClick={() => setFiltersVisible(value => !value)}>
            {filtersVisible ? "Hide Filters" : "Show Filters"} <SlidersHorizontal size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className={`catalogue-layout${filtersVisible ? "" : " filters-hidden"}`}>
        <aside id="catalogue-filters" className="filter-sidebar" hidden={!filtersVisible} aria-label="Product filters">
          {filterDefs.map(d => (
            <details className="filter-accordion" key={d.key} open>
              <summary>{d.label}<ChevronDown size={18} aria-hidden="true" /></summary>
              <div className="filter-options" role="group" aria-label={d.label}>
                {d.options.map(option => (
                  <label key={option} className="filter-option">
                    <input type="checkbox" checked={chosen[d.key] === option}
                      onChange={() => change(d.key, chosen[d.key] === option ? "" : option)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </details>
          ))}
          {active && <button type="button" className="clear catalogue-clear" onClick={clear}>Clear all filters</button>}
        </aside>
      <div>
        <div className="species-pills" role="group" aria-label="Filter by coffee species">
          {["", ...speciesOptions].map(species => (
            <button key={species || "all"} type="button"
              aria-pressed={chosen.species === species}
              onClick={() => change("species", species)}>
              {species || "All"}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{result.length} products found</p>
        {active && (
          <div className="active-filters">
            {filterDefs
              .filter((d) => chosen[d.key])
              .map((d) => (
                <button
                  key={d.key}
                  onClick={() => change(d.key, "")}
                  aria-label={`Remove ${chosen[d.key]} filter`}
                >
                  {chosen[d.key]}
                  <X size={13} />
                </button>
              ))}
            {search && (
              <button onClick={() => setSearch("")}>
                “{search}”<X size={13} />
              </button>
            )}
          </div>
        )}
        {result.length ? (
          <ProductGrid products={result} />
        ) : (
          <div className="empty-state">
            <Search size={32} />
            <h2>No coffees match these filters</h2>
            <p>
              Try a different search or remove a filter to explore more
              products.
            </p>
            <button className="button" onClick={clear}>
              Clear filters
            </button>
          </div>
        )}
        <p className="image-disclaimer">
          Actual product appearance and
          lot specifications are confirmed upon request.
        </p>
      </div>
      </div>
    </div>
  );
}
