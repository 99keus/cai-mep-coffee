# First-version verification

Verified 25 September 2026.

- `npm run lint`: passed, no lint errors or warnings.
- `npm run build`: passed; all main routes and 28 product routes statically generated.
- `npm run typecheck`: passed.
- `npm run test:catalogue`: passed. Confirms 28 products (21 green / 4 roasted / 3 ground), unique slugs, exact page names, metadata, inquiry links, omitted unknown specifications, image files and internal asset/route references. Node 26 prints a non-failing module-format notice for this standalone test script.
- Browser: all 28 product detail pages opened successfully with matching titles, visible specification tables and no horizontal overflow at 390px.
- Responsive checks: Home, Products, About, Coffee Origins, Contact, and one detail page per product category checked at 390px, 768px and 1440px. No horizontal overflow. The 320px homepage header was corrected and rechecked.
- Visually reviewed desktop Home, Products and Contact; mobile Home, Products, Product Detail and Coffee Origins.
- Filters: rapid combined category + Robusta + Wet Polished + S18 selection returns only Robusta G1 S18 Wet Polished. Clear restores 28 products. Catimor search returns two products. Unknown search displays the empty state and resets correctly.
- Mobile navigation opens, follows a link and closes correctly.
- Product quote CTA preselects Robusta G1 S18 Wet Polished on Contact.
- Contact required-field validation blocks empty submission. A completed local test request produces the correct review text and explicitly says it has not been sent. No external inquiry was sent.
- Download control is implemented using a local Blob; the embedded browser did not expose a completed download event, so successful file saving was not verified there. The full inquiry remains readable in the review panel.
- Optional WebMCP catalogue query registered successfully, returned three washed Arabica records, and rejected a non-string query field.
- No runtime errors in the final browser log check.

## Handoff limitations

Actual company identity, contact details, product specifications and real product/regional photography remain intentionally unfilled. Inquiry delivery needs a real company email or configured endpoint; README describes both options.

A private Sites project was registered; its identity is preserved in `.openai/hosting.json`. No version was published. During the task the installed Sites plugin directory and its `site-workflow.mjs` publishing helper became unavailable, preventing the prescribed publishing workflow. Do not create a duplicate project when reconnecting; reuse the saved project ID.

## Hydration follow-up

The reported `mdl-js` root class was absent from both application source and the raw server response. Added a documented, root-only `suppressHydrationWarning` for browser-injected HTML attributes; descendants retain hydration checks. Lint and TypeScript passed. A fresh browser load displayed the homepage with no console errors; that browser did not inject `mdl-js`, so the original injection itself could not be reproduced.

## Product photography update — 2026-09-25

- Removed the requested placeholder sentence from Products.
- Replaced product photos across all 28 records with 27 local WebP source photographs; shared G2/G3 S13–14 reference is documented.
- Verified image decoding and presence in all 28 exported detail pages, descriptive alt text and source credits.
- Lint, TypeScript, production build and catalogue checks pass.
- Browser: 1440px catalogue and 375px product detail reviewed; no horizontal overflow in checked views. Ground Coffee filter returns 3 correct products and detail image loads.
- Browser logs contain no errors during this check. Development warnings remain for existing smooth-scroll markup and an above-fold lazy image.
- Source match limitations and unverified commercial reuse rights are recorded in public/images/products/SOURCES.md.


## Cai Mep Coffee brand update — 2026-09-28
- Updated verified company details, supplied logo, metadata, original English brand copy and dropdown navigation.
- Passed lint, TypeScript, production build and catalogue checks (28 product detail pages) in an isolated workspace using the locked dependencies.
- Browser verified: Arabica navigation selects 8 green products; mobile Ground Coffee navigation selects 3 products; Lam Dong anchor resolves correctly; contact details and mailto/tel links match supplied information.
- Checked mobile 375px and tablet 900px: no horizontal document overflow; mobile menu usable; no captured browser console errors.
- Quote form prepares an email draft; no email was sent during QA.
- Local filesystem reads stalled on some existing dependency/generated files. Fresh output was copied using a new directory; previous generated output retained as out-before-brand-update.


## Product details and specification drafts — 2026-09-28
- Added shared gallery and accessible Overview/Specifications tabs to all 28 products; omitted logistics, MOQ and lead-time panels.
- Added 28 sourced reference profiles; 9 technical tables match Binh Minh Cafe values, other profiles carry supplier or analogous-product/standard references. Draft notices and source notes are visible in the Specifications tab.
- Passed ESLint, tsc, Webpack production build and catalogue assertions covering all 28 pages and 5 main routes. Turbopack was blocked by a local port-binding restriction; `npm run build -- --webpack` succeeded.
- Browser checks: desktop two-column layout, 375px mobile with no horizontal overflow, tab click/arrow controls/keyboard navigation, green and ground coffee tables, quote link preselecting Ground Arabica. No inquiry submitted.
- Single-photo products intentionally have one thumbnail and no next/previous photo arrows. Gallery supports additional genuine photos through the existing gallery array.


## Home and navigation revision — 2026-09-30
- Montserrat self-hosted; computed heading font verified as Montserrat and supporting copy as Helvetica.
- Reordered navigation; removed dropdown chevrons, enabled pointer-entry opening, retained mobile tap and keyboard access. Confirmed dropdown opens when pointer is dragged into label without clicking it; Arabica link selects 8 products.
- Removed requested hero eyebrow/CTA, origin strip, portfolio copy and featured slogan. Updated Why Cai Mep Coffee with user-supplied sourcing and volume statements.
- Passed lint, TypeScript, Webpack production build, all 28 detail pages and catalogue checks.
- Desktop and 375px mobile inspected; no horizontal overflow. Chrome reported extension message-channel errors, unrelated to app route rendering.
- Saved refreshed static out/ used by the standalone .command launcher. Screenshot: docs/home-update-20260930.png.

## About editorial revision — 2026-09-30
- Replaced generic About sections with three alternating photo/text sections inspired by the La Cabra reference layout. English copy follows the owner's supplied company story.
- Added two Vietnamese farmer photographs from Pexels and a Vietnamese Robusta pruning photograph from Wikimedia Commons, with local assets and visible source credits. See docs/about-photography.md.
- Passed ESLint, TypeScript, Webpack production build and catalogue checks (all 28 product detail pages and five main routes).
- Browser: all three images loaded; desktop and 375px mobile had no horizontal overflow. Mobile sections stack in narrative order. Verified Montserrat headings and Helvetica supporting copy.
- Updated static out/ used by the standalone launcher; retained previous output in out-before-about-update-20260930. Screenshot: docs/about-update-20260930.png.
