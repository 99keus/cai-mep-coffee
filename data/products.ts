export type ProductCategory =
  "Green Coffee Beans" | "Roasted Coffee Beans" | "Ground Coffee";
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  species?: "Robusta" | "Arabica" | "Excelsa";
  grade?: string;
  screen?: string;
  process?: string;
  variety?: string;
  quality?: string;
  type?: string;
  shortDescription: string;
  description: string;
  flavorNotes?: string;
  origin?: string;
  altitude?: string;
  cropYear?: string;
  moisture?: string;
  foreignMatter?: string;
  blackBeans?: string;
  brokenBeans?: string;
  packing?: string;
  minimumOrderQuantity?: string;
  roastLevel?: string;
  grindSize?: string;
  image: string;
  imageAlt?: string;
  imageCredit?: { name: string; url: string };
  gallery: string[];
  featured: boolean;
}

// Owner-supplied catalogue, imported from Coffee_Product_Catalog_Content.docx (2026-10-03).
export const products: Product[] = [
  {
    "id": "coffee-01",
    "origin": "Vietnam",
    "featured": false,
    "slug": "robusta-g1-s18-clean",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "grade": "G1",
    "screen": "S18",
    "process": "Clean",
    "name": "Robusta G1 S18 Clean",
    "shortDescription": "Grade 1, screen 18 — the standard pick for buyers blending large-bean Robusta into commercial roasts without needing the extra wet-polished finish.",
    "description": "",
    "flavorNotes": "bold, earthy, heavy body.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-g1-s18-clean.webp",
    "imageAlt": "Robusta G1 S18 Clean — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-02",
    "origin": "Vietnam",
    "featured": true,
    "slug": "robusta-g1-s16-clean",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "grade": "G1",
    "screen": "S16",
    "process": "Clean",
    "name": "Robusta G1 S16 Clean",
    "shortDescription": "A mid-size grade 1 bean at a lower price point than S18, common in instant coffee lines and everyday commercial blends.",
    "description": "",
    "flavorNotes": "strong, earthy, full-bodied.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-g1-s16-clean.webp",
    "imageAlt": "Robusta G1 S16 Clean — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-03",
    "origin": "Vietnam",
    "featured": true,
    "slug": "robusta-g1-s18-wet-polished",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "grade": "G1",
    "screen": "S18",
    "process": "Wet Polished",
    "name": "Robusta G1 S18 Wet Polished",
    "shortDescription": "Large beans with the surface polished after wet processing, giving the cleaner look buyers look for in espresso blends and premium commercial lines.",
    "description": "",
    "flavorNotes": "bold, earthy, heavy body.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-g1-s18-wet-polished.webp",
    "imageAlt": "Robusta G1 S18 Wet Polished — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-04",
    "origin": "Vietnam",
    "featured": false,
    "slug": "robusta-g1-s16-wet-polished",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "grade": "G1",
    "screen": "S16",
    "process": "Wet Polished",
    "name": "Robusta G1 S16 Wet Polished",
    "shortDescription": "The same polished finish as the S18 grade, in a smaller bean for buyers who don't need the largest screen size.",
    "description": "",
    "flavorNotes": "bold, nutty, heavy body.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-g1-s16-wet-polished.webp",
    "imageAlt": "Robusta G1 S16 Wet Polished — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-06",
    "origin": "Vietnam",
    "featured": false,
    "slug": "robusta-g2-s13-14",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "grade": "G2",
    "screen": "S13-14",
    "name": "Robusta G2 S13–14",
    "shortDescription": "Vietnam's standard commodity Robusta — the grade most instant coffee manufacturers and value blends are built on.",
    "description": "",
    "flavorNotes": "bitter, earthy, high intensity.",
    "gallery": [],
    "moisture": "≤ 13%",
    "foreignMatter": "≤ 1.0%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-g2-s13-14.webp",
    "imageAlt": "Robusta G2 S13–14 — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-08",
    "origin": "Vietnam",
    "featured": false,
    "slug": "robusta-peaberry",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "type": "Peaberry",
    "name": "Robusta Peaberry (Culi)",
    "shortDescription": "A naturally occurring round bean, sorted out of the regular crop rather than grown separately. Buyers typically take it as a small-volume, talking-point lot.",
    "description": "",
    "flavorNotes": "concentrated, heavy, intense.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.2%*",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/robusta-peaberry.webp",
    "imageAlt": "Robusta Peaberry (Culi) — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-09",
    "origin": "Vietnam",
    "featured": true,
    "slug": "fine-robusta-natural",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "quality": "Fine Robusta",
    "process": "Natural",
    "name": "Fine Robusta Natural",
    "shortDescription": "Hand-sorted Robusta dried with the cherry skin on, held to a tighter defect standard than the commercial grades for roasters building a quality Robusta line.",
    "description": "",
    "flavorNotes": "sweet, fruit-forward, full body.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%*",
    "packing": "60kg jute bags, or GrainPro liner on request",
    "image": "/images/products/catalogue-20261003/fine-robusta-natural.webp",
    "imageAlt": "Fine Robusta Natural — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-10",
    "origin": "Vietnam",
    "featured": false,
    "slug": "fine-robusta-honey",
    "category": "Green Coffee Beans",
    "species": "Robusta",
    "quality": "Fine Robusta",
    "process": "Honey",
    "name": "Fine Robusta Honey",
    "shortDescription": "Part of the mucilage stays on the bean during drying, adding a sweetness most standard Robusta doesn't have — aimed at specialty buyers looking past washed and natural.",
    "description": "",
    "flavorNotes": "honeyed, dried fruit, full body.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%*",
    "packing": "60kg jute bags, or GrainPro liner on request",
    "image": "/images/products/catalogue-20261003/fine-robusta-honey.webp",
    "imageAlt": "Fine Robusta Honey — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-11",
    "origin": "Vietnam",
    "featured": true,
    "slug": "arabica-g1-s18-washed",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "grade": "G1",
    "screen": "S18",
    "process": "Washed",
    "name": "Arabica G1 S18 Washed",
    "shortDescription": "Large, fully washed beans — the grade most specialty and premium commercial roasters default to for a clean cup.",
    "description": "",
    "flavorNotes": "bright acidity, clean, light fruit.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/arabica-g1-s18-washed.webp",
    "imageAlt": "Arabica G1 S18 Washed — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-12",
    "origin": "Vietnam",
    "featured": false,
    "slug": "arabica-g1-s16-washed",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "grade": "G1",
    "screen": "S16",
    "process": "Washed",
    "name": "Arabica G1 S16 Washed",
    "shortDescription": "The same washed process as the S18 grade, in a smaller bean for roasters who don't need maximum screen size.",
    "description": "",
    "flavorNotes": "bright, balanced acidity.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/arabica-g1-s16-washed.webp",
    "imageAlt": "Arabica G1 S16 Washed — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-13",
    "origin": "Vietnam",
    "featured": false,
    "slug": "arabica-g1-s18-natural",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "grade": "G1",
    "screen": "S18",
    "process": "Natural",
    "name": "Arabica G1 S18 Natural",
    "shortDescription": "Cherries dried whole instead of pulped first, which brings more sweetness and body than the washed lots — a common request from roasters chasing fruit-forward profiles.",
    "description": "",
    "flavorNotes": "fruity, winey, syrupy sweetness.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.2%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/arabica-g1-s18-natural.webp",
    "imageAlt": "Arabica G1 S18 Natural — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-14",
    "origin": "Vietnam",
    "featured": false,
    "slug": "arabica-g2-s13-14",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "grade": "G2",
    "screen": "S13-14",
    "name": "Arabica G2 S13–14",
    "shortDescription": "The commercial-grade Arabica most buyers reach for when price matters more than bean size or sorting.",
    "description": "",
    "flavorNotes": "mild acidity, smooth, easy-drinking.",
    "gallery": [],
    "moisture": "≤ 13%",
    "foreignMatter": "≤ 1.0%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/arabica-g2-s13-14.webp",
    "imageAlt": "Arabica G2 S13–14 — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-15",
    "origin": "Vietnam",
    "featured": true,
    "slug": "arabica-catimor-washed",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "variety": "Catimor",
    "process": "Washed",
    "name": "Arabica Catimor Washed",
    "shortDescription": "Catimor is the high-yield cultivar grown across Vietnam's Arabica regions, washed here for a straightforward, reliable cup.",
    "description": "",
    "flavorNotes": "mild acidity, light body, clean finish.",
    "gallery": [],
    "moisture": "≤ 12.5%",
    "foreignMatter": "≤ 0.1%",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/arabica-catimor-washed.webp",
    "imageAlt": "Arabica Catimor Washed — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-17",
    "origin": "Vietnam",
    "featured": false,
    "slug": "arabica-moka",
    "category": "Green Coffee Beans",
    "species": "Arabica",
    "variety": "Moka",
    "name": "Arabica Moka Washed",
    "shortDescription": "A rare heirloom variety grown in small volume in Vietnam's highlands, washed here and offered mainly as a micro-lot for specialty buyers.",
    "description": "",
    "flavorNotes": "delicate, floral, subtly sweet.",
    "gallery": [],
    "process": "Washed",
    "moisture": "≤ 12.5%*",
    "foreignMatter": "≤ 0.2%*",
    "packing": "30kg or 60kg bags, GrainPro liner recommended",
    "image": "/images/products/catalogue-20261003/arabica-moka.webp",
    "imageAlt": "Arabica Moka Washed — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-19",
    "origin": "Vietnam",
    "featured": true,
    "slug": "excelsa-g1-s16-clean",
    "category": "Green Coffee Beans",
    "species": "Excelsa",
    "grade": "G1",
    "screen": "S16",
    "process": "Clean",
    "name": "Excelsa G1 S16 Clean",
    "shortDescription": "A separate coffee species altogether, grown in small volume in Vietnam. Buyers use it for single-origin specialty offers or to add complexity to a blend.",
    "description": "",
    "flavorNotes": "tart, fruity, unlike either Robusta or Arabica.",
    "gallery": [],
    "moisture": "≤ 13%",
    "foreignMatter": "≤ 0.2%*",
    "packing": "60kg jute bags",
    "image": "/images/products/catalogue-20261003/excelsa-g1-s16-clean.webp",
    "imageAlt": "Excelsa G1 S16 Clean — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-21",
    "origin": "Vietnam",
    "featured": false,
    "slug": "roasted-robusta",
    "category": "Roasted Coffee Beans",
    "species": "Robusta",
    "name": "Roasted Robusta",
    "shortDescription": "Whole bean, roasted to the buyer's specification from our green Robusta lots — ready to brew with no further processing needed on the buyer's end.",
    "description": "",
    "flavorNotes": "bold, bitter-chocolate, heavy body.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "roastLevel": "Light / Medium / Dark — customizable",
    "packing": "Valve-sealed bags, custom weight",
    "image": "/images/products/catalogue-20261003/roasted-robusta.webp",
    "imageAlt": "Roasted Robusta — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-22",
    "origin": "Vietnam",
    "featured": false,
    "slug": "roasted-arabica",
    "category": "Roasted Coffee Beans",
    "species": "Arabica",
    "name": "Roasted Arabica",
    "shortDescription": "Whole bean, roasted to order — the straightforward choice for buyers wanting a finished product with Vietnamese Arabica's cleaner character.",
    "description": "",
    "flavorNotes": "balanced acidity, light-medium body.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "roastLevel": "Light / Medium / Dark — customizable",
    "packing": "Valve-sealed bags, custom weight",
    "image": "/images/products/catalogue-20261003/roasted-arabica.webp",
    "imageAlt": "Roasted Arabica — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-23",
    "origin": "Vietnam",
    "featured": false,
    "slug": "roasted-excelsa",
    "category": "Roasted Coffee Beans",
    "species": "Excelsa",
    "name": "Roasted Excelsa",
    "shortDescription": "A finished, ready-to-brew version of our Excelsa lot, roasted on the lighter side to keep the variety's unusual character intact.",
    "description": "",
    "flavorNotes": "tart, fruity, complex.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "roastLevel": "Medium — recommended to preserve varietal character",
    "packing": "Valve-sealed bags, custom weight",
    "image": "/images/products/catalogue-20261003/roasted-excelsa.webp",
    "imageAlt": "Roasted Excelsa — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-24",
    "origin": "Vietnam",
    "featured": false,
    "slug": "roasted-coffee-blend",
    "category": "Roasted Coffee Beans",
    "type": "Blend",
    "name": "Roasted Coffee Blend",
    "shortDescription": "Robusta, Arabica, and Excelsa combined to the buyer's recipe — built for private-label buyers who want a signature blend without managing green sourcing themselves.",
    "description": "",
    "flavorNotes": "set by the buyer's chosen ratio.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "packing": "Valve-sealed bags, custom weight",
    "image": "/images/products/catalogue-20261003/roasted-coffee-blend.webp",
    "imageAlt": "Roasted Coffee Blend — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-25",
    "origin": "Vietnam",
    "featured": false,
    "slug": "ground-robusta",
    "category": "Ground Coffee",
    "species": "Robusta",
    "name": "Ground Robusta",
    "shortDescription": "Milled to a specified particle size, ready for retail or foodservice use without the buyer needing a grinding setup of their own.",
    "description": "",
    "flavorNotes": "bold, bitter-chocolate, heavy body.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "grindSize": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order",
    "packing": "Airtight, moisture-barrier bags",
    "image": "/images/products/catalogue-20261003/ground-robusta.webp",
    "imageAlt": "Ground Robusta — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-26",
    "origin": "Vietnam",
    "featured": false,
    "slug": "ground-arabica",
    "category": "Ground Coffee",
    "species": "Arabica",
    "name": "Ground Arabica",
    "shortDescription": "Milled to order, for buyers who need a finished retail or foodservice product rather than whole bean.",
    "description": "",
    "flavorNotes": "balanced acidity, light-medium body.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "grindSize": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order",
    "packing": "Airtight, moisture-barrier bags",
    "image": "/images/products/catalogue-20261003/ground-arabica.webp",
    "imageAlt": "Ground Arabica — product photograph supplied by Cai Mep Coffee"
  },
  {
    "id": "coffee-27",
    "origin": "Vietnam",
    "featured": false,
    "slug": "ground-coffee-blend",
    "category": "Ground Coffee",
    "type": "Blend",
    "name": "Ground Coffee Blend",
    "shortDescription": "A custom Robusta / Arabica / Excelsa recipe, milled and ready for private-label packaging.",
    "description": "",
    "flavorNotes": "set by the buyer's chosen ratio.",
    "gallery": [],
    "moisture": "≤ 5%*",
    "grindSize": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order",
    "packing": "Airtight, moisture-barrier bags",
    "image": "/images/products/catalogue-20261003/ground-coffee-blend.webp",
    "imageAlt": "Ground Coffee Blend — product photograph supplied by Cai Mep Coffee"
  }
];
export const categories: ProductCategory[] = [
  "Green Coffee Beans",
  "Roasted Coffee Beans",
  "Ground Coffee",
];
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
export const featuredProducts = [
  "robusta-g1-s18-wet-polished",
  "robusta-g1-s16-clean",
  "arabica-g1-s18-washed",
  "arabica-catimor-washed",
  "fine-robusta-natural",
  "excelsa-g1-s16-clean",
].map((slug) => getProduct(slug)!);

export interface CatalogueQuery {
  search?: string;
  category?: string;
  species?: string;
  process?: string;
  screen?: string;
}
export function filterProducts(query: CatalogueQuery): Product[] {
  return products.filter(
    (p) =>
      p.name
        .toLowerCase()
        .includes((query.search || "").trim().toLowerCase()) &&
      (["category", "species", "process", "screen"] as const).every(
        (key) => !query[key] || p[key] === query[key],
      ),
  );
}
