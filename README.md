# Vietnam Coffee — B2B export catalogue

Next.js App Router, TypeScript and Tailwind CSS. Includes 22 products from the owner’s revised Word catalogue (3 October 2026), five main pages, static product routes, responsive layouts, combined catalogue filters and quotation enquiries. No ecommerce features.

## Run

Use Node.js 22 LTS or newer and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally http://127.0.0.1:3000).

```bash
npm run lint
npm run typecheck
npm run build
npm run test:catalogue
```

The production build exports the site to `out/`. Serve that directory with any static host supporting directory indexes and a custom `404.html`. `next start` does not serve a static export. For a local production preview, run `python3 -m http.server 3001 --directory out` and open http://localhost:3001.

## Product data

Edit `data/products.ts` for product names, stable slugs, category/filter fields, overview, flavor notes and image paths. Edit `data/product-specifications.ts` for the exact specification table rows. The current catalogue was imported from `Coffee_Product_Catalog_Content.docx` supplied on 3 October 2026.

To add a product, copy an entry, choose a unique slug and add its specification profile. Unknown values should remain blank. Update `featuredProducts` for the home selection, and filter choices in `components/ProductFilters.tsx` when necessary. Rebuild to generate product routes and update the quotation product selector.

## Replace images

- `public/images/products/catalogue-20261003/`: current product images extracted from the Word file and converted to WebP without cropping, recoloring or enlargement. Each product has its own path; the three ground coffees intentionally use the same supplied photograph.
- `public/images/origins/`: regional photography, configured in `data/origins.ts`.
- `public/images/company/`: brand, home and About photography.

Set each product's `image` in `data/products.ts`, and add optional `gallery` paths for additional views. Homepage category images are selected in `app/page.tsx`. Prior sourced images remain on disk but are no longer used by the catalogue. Previous data files are archived in `docs/backups/catalogue-before-word-20261003/`.

`docs/catalogue-word-import-20261003.json` records the source document hash, exact imported text/tables, image relationships and removed products. Update the expected source fixture when deliberately revising the catalogue. The prior shared sample-photo preview is disabled and no longer applied by the product data.

## Company and inquiry delivery

`data/company.ts` contains the supplied Cai Mep Coffee brand, legal name, address, email and WhatsApp contact. The footer links directly to `https://wa.me/84334717101`. The current supplied CM Coffee wordmark is `public/images/company/cm-coffee-logo-20261004.webp`, used by the header, footer and favicon. `components/BrandLogo.tsx` and `.brand-wordmark` frame its original whitespace. The home harvest photo is `public/images/company/coffee-cherry-harvest-20261004.webp`. No certifications, capacity, history, farm ownership or export markets are claimed.

The Products and Coffee Origins navigation disclosures are in `components/Header.tsx`. Product links apply catalogue filters; region links jump to anchors on the origins page. Desktop dropdowns open on pointer entry without arrows. Mobile dropdowns open by tapping the label. Keyboard activation, Escape and outside-click dismissal remain supported.

The form validates inputs, preserves product preselection and opens an email draft addressed to **imex@caimeptrading.com.vn**. The visitor must review and send it from their email app. It does not automatically deliver email or store enquiries on a server. A downloadable copy is also provided.

To activate delivery, either:

1. Keep `company.email` configured (current setup). The form opens a populated email draft; the buyer must send it.
2. Set `NEXT_PUBLIC_INQUIRY_ENDPOINT` in `.env.local` before building. The endpoint must accept JSON POST fields `name`, `company`, `email`, `country`, `product` (display name), `quantity`, `message`, and return a 2xx status only after accepting delivery. Configure CORS for the site origin and implement validation, rate limiting and email/storage on that service. A failed response keeps a downloadable draft. No endpoint secrets belong in browser code.

`.env.example` lists the supported build-time variables. Changing `NEXT_PUBLIC_` values requires rebuilding. The current static architecture intentionally has no database or email provider dependency. To add a CMS, replace the product data adapter while preserving `Product`; use build-time CMS reads for static output or remove `output: 'export'` when adding Next.js server functionality.

## Structure and content

- `app/`: Home, Products, `/products/[slug]`, About, Coffee Origins, Contact, 404 and metadata.
- `components/`: requested shared UI components plus progressive-enhancement catalogue query tool.
- `data/`: product records, company settings and regional educational copy.
- `lib/useQueryParams.ts`: URL filters that preserve server-rendered catalogue content.
- `app/globals.css`: shared visual tokens, layout and responsive rules; Tailwind utilities remain available.

Regional background links are included on the origins page. Traditional coffee-region names are used as supplied; they are not statements about current administrative boundaries or actual product traceability.

## Checks

`npm run test:catalogue` verifies category counts, unique slugs, every generated product page, page metadata, missing specification handling, internal links and local image references, plus representative combined-filter results. Run it after `npm run build`. Browser QA also covers combined filters, clear/reset, no results, search, quote preselection, form validation, draft preparation, mobile navigation and responsive widths. See `QA.md` for the implementation check record.


## Product detail layout and draft specifications

`components/ProductGallery.tsx` and `components/ProductDetailTabs.tsx` provide the image gallery and Overview/Specifications tabs. Add actual alternative images to a product's `gallery` array to enable photo arrows and swipe. The current single-photo products do not show inactive arrows.

Profiles now use `status: "company-provided"`, not laboratory confirmation. Values marked `*` in the Word file retain their asterisks and display an English explanation that they are industry references requiring confirmation against the lot COA. No previous competitor specifications are merged into the revised tables.

If Turbopack is blocked from binding a local worker port, run `npm run build -- --webpack` to produce the same static export using Webpack.

Typography: Montserrat is bundled locally in `public/fonts/` with its OFL license and loaded by `next/font/local`; small/supporting copy uses the system Helvetica font with Arial fallback.

### About page
The company story and photo captions are in `app/about/page.tsx`. Its layout uses the `.about-editorial` styles at the end of `app/globals.css`. The local photographs are in `public/images/company/`; sources and licence details are recorded in `docs/about-photography.md`. Update the visible credits when replacing sourced photos with company photography.

## cPanel Node.js deployment

Use Node.js 22 and set Application root to the repository directory (for example,
`repositories/cai-mep-coffee`), Application mode to Production, and Application
startup file to `app.js`. Select the website domain and leave the URL path empty
to serve its root. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS website URL.

After creating the application, copy the environment activation command shown by
cPanel into its Terminal. From the repository directory, run:

```bash
npm install --include=dev
npm run build -- --webpack
```

Then restart the application in cPanel. `app.js` serves only the generated `out/`
directory and requires `out/index.html` to exist before startup. `npm start` runs
the same server locally, using `PORT` when supplied or port 3000 otherwise.
The cPanel Passenger integration manages public HTTP/HTTPS routing; do not open
port 3000 manually. Resolve domain DNS and AutoSSL separately.

For updates, pull the GitHub changes, install dependencies, rebuild, and restart
the application. Build dependencies are needed even in Production mode, so keep
`--include=dev` when installing on the server. On CloudLinux, use the activated
environment's npm and preserve its managed `node_modules` directory or symlink.

## Netlify deployment

`netlify.toml` configures the build command and `out` publish directory. For a manual deployment, upload the **contents of `out`** (or a ZIP with `index.html` at its root) through Netlify Drop. Do not upload the entire workspace or backup folders.

A first Netlify Drop preview was uploaded on 2026-10-04 at `https://zingy-salamander-f06c3c.netlify.app`. It is **not a permanent launch yet**: account sign-in and claiming are pending. Netlify says this unclaimed preview expires after one hour. Continue from `https://app.netlify.com/drop/zingy-salamander-f06c3c/claim` before expiry. For subsequent updates, deploy to that same claimed project rather than creating another site.

The current Contact form prepares an email in the visitor's email app; deployment alone does not turn it into a server-submitted inquiry form.
