# Coffee origins photography

Updated 2 October 2026. Local WebP assets are used on the Coffee origins page and the home origin cards. Source attribution and license links are included in the small caption on each origin photograph.

| Region / local asset | Photographer | Source | License |
| --- | --- | --- | --- |
| Đắk Lắk / `public/images/origins/dak-lak.webp` | Nguyễn Đông Sơn | https://commons.wikimedia.org/wiki/File:Lak_Lake.jpg | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Gia Lai / `public/images/origins/gia-lai.webp` | Quang Nguyen Vinh | https://www.pexels.com/photo/calm-lake-near-trees-under-the-cloudy-sky-6346491/ | [Pexels](https://www.pexels.com/license/) |
| Đắk Nông / `public/images/origins/dak-nong.webp` | Quang Nguyen Vinh | https://www.pexels.com/photo/ta-dung-lake-in-vietnam-14023888/ | [Pexels](https://www.pexels.com/license/) |
| Lâm Đồng / `public/images/origins/lam-dong.webp` | P. Hughes | https://commons.wikimedia.org/wiki/File:Vietnam_-_coffee_plantation.jpg | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |

Photos are converted to WebP and resized without enlargement to a maximum width of 1800px. The website crops the display with CSS and adds a dark overlay. The adapted Lak Lake image remains available under CC BY-SA 3.0; this does not relicense the website code or other assets.

Regional copy, order, captions, image paths and credits are in `data/origins.ts`. Layout is in `app/coffee-origins/page.tsx`; responsive styles use the `origin-landscape` prefix in `app/globals.css`.

## Verification

- ESLint, TypeScript, production static build and catalogue checks passed on 2 October 2026 (27 product routes and five main routes).
- Browser checked at 1440 × 1000 and 390 × 844. All four landscape photos loaded; mobile content has no horizontal overflow.
- Origin CTA navigation verified: Robusta selects 12 products; Arabica selects 10 products.
- Desktop screenshot: `docs/origins-update-20261002.png`.

## Centered layout and motion update — 2 October 2026

- Origin sections now center their text and use at least the available viewport height; long mobile sections grow naturally.
- Removed the separate Photography credits strip and closing quotation CTA. Attribution remains in each photo caption.
- `components/OriginScroll.tsx` enhances server-rendered content with Lenis wheel momentum, native touch scrolling, a staggered section entrance and subtle background parallax. Animations run once per section visit. Reduced-motion preference disables the effects, including when changed while the page is open.
- The component destroys the scroll instance, observers, animations and listeners on route exit. Browser verification confirmed the Lenis root class is removed on navigation to Products.
- Lint, TypeScript, production build and all catalogue route checks passed. Desktop and mobile layouts were checked for centered text and no horizontal overflow.
