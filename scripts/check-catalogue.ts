import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { products, filterProducts } from "../data/products.ts";
import { productSpecifications } from "../data/product-specifications.ts";

const manifest = JSON.parse(readFileSync("docs/catalogue-word-import-20261003.json", "utf8")) as {
  removedSlugs: string[];
  products: { slug: string; name: string; overview: string; flavorNotes: string; technical: { label: string; value: string }[] }[];
};
assert.deepEqual(products.map(p => p.slug), manifest.products.map(p => p.slug));
for (const source of manifest.products) {
  const product = products.find(p => p.slug === source.slug)!;
  assert.equal(product.name, source.name);
  assert.equal(product.shortDescription, source.overview);
  assert.equal(product.flavorNotes, source.flavorNotes);
  assert.deepEqual(productSpecifications[source.slug].technical, source.technical);
  assert.ok(product.image.startsWith("/images/products/catalogue-20261003/"));
}
for (const slug of manifest.removedSlugs) {
  assert.ok(!products.some(p => p.slug === slug));
  assert.ok(!existsSync(`out/products/${slug}/index.html`), `Removed product still exported: ${slug}`);
}

assert.equal(products.length, 22);
assert.equal(new Set(products.map((p) => p.slug)).size, 22);
assert.deepEqual(
  ["Green Coffee Beans", "Roasted Coffee Beans", "Ground Coffee"].map(
    (category) => filterProducts({ category }).length,
  ),
  [15, 4, 3],
);
assert.deepEqual(
  filterProducts({
    category: "Green Coffee Beans",
    species: "Robusta",
    process: "Wet Polished",
    screen: "S18",
  }).map((p) => p.slug),
  ["robusta-g1-s18-wet-polished"],
);
assert.equal(filterProducts({ search: "CATIMOR" }).length, 1);
assert.equal(
  filterProducts({ category: "Ground Coffee", process: "Washed" }).length,
  0,
);
assert.equal(filterProducts({ species: "Liberica" }).length, 0);
assert.ok(!existsSync("out/products/liberica-natural/index.html"));
for (const product of products) {
  const file = `out/products/${product.slug}/index.html`;
  assert.ok(existsSync(file), file);
  const html = readFileSync(file, "utf8");
  assert.ok(html.includes(`<h1>${product.name}</h1>`), `Missing name: ${file}`);
  assert.ok(
    html.includes(
      `<title>${product.name} | Vietnam ${product.category} | Cai Mep Coffee</title>`,
    ),
    `Missing metadata: ${file}`,
  );
  assert.ok(
    html.includes(`product=${product.slug}`),
    `Missing quote preselection: ${file}`,
  );
  const specs = productSpecifications[product.slug];
  assert.ok(specs, `Missing researched specification profile: ${product.slug}`);
  assert.equal(specs.status, "company-provided");
  assert.ok(specs.technical.length > 0);
  assert.ok(specs.sources.every(source => source.url.startsWith("https://")));
  assert.ok(html.includes('role="tablist"'), `Missing tabs: ${file}`);
  if (specs.technical.some(row => row.value.includes("*")))
    assert.ok(html.includes("Industry reference values"), `Missing asterisk note: ${file}`);
  assert.ok(!html.includes("Reference sources &amp; notes"), `Stale competitor references: ${file}`);
  assert.ok(!html.includes('Logistics &amp; Supply'), `Unexpected logistics section: ${file}`);
  for (const row of specs.technical) {
    const escaped = row.value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
    assert.ok(html.includes(escaped), `Missing SSR specification ${row.label}: ${file}`);
  }
  assert.ok(
    existsSync(`public${product.image}`),
    `Missing image: ${product.image}`,
  );
}
function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((item) =>
    item.isDirectory()
      ? htmlFiles(join(dir, item.name))
      : item.name.endsWith(".html")
        ? [join(dir, item.name)]
        : [],
  );
}
for (const route of ["", "products", "about", "coffee-origins", "contact"])
  assert.ok(
    existsSync(join("out", route, "index.html")),
    `Missing route ${route}`,
  );
assert.ok(
  readFileSync("out/products/index.html", "utf8").includes(
    "Robusta G1 S18 Clean",
  ),
  "Catalogue must be server-rendered for SEO",
);
for (const file of htmlFiles("out")) {
  const html = readFileSync(file, "utf8");
  assert.ok(html.includes("<title>"), `Missing title ${file}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const path = decodeURIComponent(match[1]);
    if (path.startsWith("/_next/")) continue;
    assert.ok(
      existsSync(join("out", path)),
      `Broken local reference ${path} in ${file}`,
    );
  }
}
console.log(
  "PASS: 22 product pages, 5 main routes, metadata, images, internal references, owner-supplied specs, two-tab layout and filter combinations.",
);
