# Dead Code and Asset Audit
**Date:** 2026-05-03
**Scope:** `nextjs-app/components/sections/*` and `nextjs-app/public/*`

## Method
- Traced runtime imports from `app/*` and `components/*`.
- Matched `public/*` files against string references in runtime code.
- Treated files in `public/` that are meant to be fetched directly by crawlers or third parties as "intentional static files", not dead assets.

## Live Section Components
These section components are currently reachable from pages:

- `hero-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:9) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:36)
- `about-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:13) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:37)
- `solutions-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:14) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:38)
- `user-journey-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:15) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:40)
- `team-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:16) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:42)
- `testimonials-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:17) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:43)
- `faq-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:18) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:44)
- `contact-section.tsx` via [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:19) and rendered at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:45)
- `family-office-section.tsx` via [app/services/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/services/page.tsx:6) and rendered at [app/services/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/services/page.tsx:472)

## Confirmed Dead or Unreachable Section Components
These section files have no runtime import from pages/components in the current app:

- [why-choose-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/why-choose-section.tsx:145)
  The only evidence of prior use is a commented-out render at [app/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/page.tsx:39).
- [why-investally-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/why-investally-section.tsx:1)
- [products-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/products-section.tsx:5)
- [cta-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/cta-section.tsx:1)
- [challenges-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/challenges-section.tsx:24)
- [market-tickers.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/market-tickers.tsx:3)
- [newsletter-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/newsletter-section.tsx:13)
- [investment-philosophy-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/investment-philosophy-section.tsx:41)
- [calculators-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/calculators-section.tsx:8)
- [blog-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/blog-section.tsx:8)

## Transitive Dead Code
- [blog-grid-client.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/blog-grid-client.tsx:33) is only imported by [blog-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/blog-section.tsx:6), so it is dead as a section helper in the current app. This does not affect [components/blog-listing-client.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/blog-listing-client.tsx:1), which is live on `/blog`.

## Confirmed Live Public Assets
These assets are referenced directly by runtime code:

- `/animations/hero section.png` from [components/sections/hero-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/hero-section.tsx:13)
- `/animations/solutions_hero_section.png` from [app/solutions/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/solutions/page.tsx:423)
- `/animations/step 1.png` through `/animations/step 5.png` from [components/sections/user-journey-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/user-journey-section.tsx:34)
- `/animations/testimonial-faces/face-1.png` through `/face-9.png` from [components/sections/testimonials-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/testimonials-section.tsx:28)
- `/company-logos/*` from [components/sections/team-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/team-section.tsx:23)
- `/team/adarsh katta-medium.jpg`, `/team/minakshi maheshwari-medium.jpg`, `/team/team_mate3_medium.jpeg` from [components/sections/team-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/team-section.tsx:13)
- `/investally_only_logo.png` from [app/layout.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/layout.tsx:31), [app/about-us/page.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/app/about-us/page.tsx:38), and [components/navigation.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/navigation.tsx:59)
- `/investally_logo_name.png` from [components/navigation.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/navigation.tsx:68)
- `/investally_logo.png` from [components/footer.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/footer.tsx:14)

## Confirmed Unreferenced Public Assets
These files have no runtime reference in `app/`, `components/`, `lib/`, `middleware.ts`, or `next.config.ts`:

- `public/animations/multi use.png` (7156.6 KB)
- `public/animations/multi use 1.png` (7636.1 KB)
- `public/animations/multi use 2.png` (7491.1 KB)
- `public/animations/multi use 3.png` (8244.1 KB)
- `public/animations/multi use 4.png` (8466.0 KB)
- `public/animations/faces 1.png` (7630.8 KB)
- `public/animations/faces 2.png` (8259.0 KB)
- `public/animations/animation.avif` (144.9 KB)
- `public/animations/philosophy 1.png` (2025.7 KB)
- `public/animations/philosophy 2.png` (2825.5 KB)
- `public/hero-section-image.png` (1077.9 KB)
- `public/mission video.mp4` (4487.3 KB)
- `public/team/adarsh katta-full.jpg` (213.8 KB)
- `public/team/adarsh katta-large.jpg` (104.3 KB)
- `public/team/adarsh katta-small.jpg` (26.9 KB)
- `public/team/adarsh katta-thumbnail.jpg` (24.2 KB)
- `public/team/minakshi maheshwari-full.jpg` (367.9 KB)
- `public/team/minakshi maheshwari-large.jpg` (160.4 KB)
- `public/team/minakshi maheshwari-small.jpg` (31.2 KB)
- `public/team/minakshi maheshwari-thumbnail.jpg` (27.8 KB)
- `public/team/team_mate3_small.jpeg` (30.2 KB)
- `public/team/team_mate3_thumbnail.jpeg` (4.5 KB)
- `public/file.svg` (0.4 KB)
- `public/globe.svg` (1.0 KB)
- `public/next.svg` (1.3 KB)
- `public/vercel.svg` (0.1 KB)
- `public/window.svg` (0.4 KB)

## Unreferenced but Potentially Intentional Static Files
These are not imported by React code, but that alone does not make them dead:

- `public/google265b8628398af32c.html`
  Likely used for Google Search Console site verification. No app import is expected.
- `public/robots.txt`
  Intended to be fetched by crawlers directly.
- `public/sitemap.xml`
  Intended to be fetched by crawlers directly.

## Broken Reference Inside Dead Code
- [challenges-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/challenges-section.tsx:68) points to `/team/adarsh katta-small.JPG`, but the actual file on disk is `public/team/adarsh katta-small.jpg`.
  If this section is ever re-enabled on a case-sensitive filesystem or CDN path, that image path is likely to fail.

## False Positives and Gaps in `performance-audit.md`
The current audit in [private/context/performance-audit.md](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/private/context/performance-audit.md:136) is directionally useful, but the dead-code section is incomplete:

- It says there are "9 orphaned components" at [performance-audit.md:136](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/private/context/performance-audit.md:136), but the current repo has at least 10 unreachable section files if `calculators-section.tsx` is included.
- It omits [calculators-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/calculators-section.tsx:8), which has no runtime import.
- It does not mention that [blog-grid-client.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/blog-grid-client.tsx:33) is only reachable from dead `blog-section.tsx`.
- It treats `public/google265b8628398af32c.html`, `robots.txt`, and `sitemap.xml` as generic unreferenced public files by omission, but those should be reviewed as static infrastructure files, not ordinary dead assets.
- Its note about unused team photo variants at [performance-audit.md:154](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/private/context/performance-audit.md:154) is materially correct for current runtime usage.
- Its claim that `investment-philosophy-section.tsx` references dead philosophy images at [performance-audit.md:140](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/private/context/performance-audit.md:140) is incorrect in the current code. [investment-philosophy-section.tsx](C:/Personal/Calling/Cimulink/Projects/investally/investally_demo/nextjs-app/components/sections/investment-philosophy-section.tsx:1) does not reference any image asset.

## Practical Cleanup Order
1. Delete the confirmed dead heavy assets in `public/animations/*` and the unused `hero-section-image.png` and `mission video.mp4`.
2. Remove dead section files that have no current route usage.
3. Remove dead helper `components/sections/blog-grid-client.tsx` if `blog-section.tsx` is removed.
4. Decide whether the extra team image variants should be kept for future responsive work or deleted now.
5. Leave `robots.txt`, `sitemap.xml`, and `google265b8628398af32c.html` alone unless you explicitly want to replace that infrastructure.
