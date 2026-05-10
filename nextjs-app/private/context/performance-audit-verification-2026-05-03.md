# Next.js Performance Audit Verification
**Date:** 2026-05-03
**Scope:** `nextjs-app/` runtime/performance review with verification of `private/context/performance-audit.md`

## Verdict
The original audit is directionally useful, but it mixes confirmed issues with a few overstated or incomplete claims.

Confirmed:
- oversized local images in critical and near-critical UI
- `framer-motion` on the homepage critical path
- manual third-party script injection in the contact section
- unnecessary middleware execution when blog-only mode is off
- missing `sizes` on many `fill` images

Refined or partially refuted:
- the user-journey images are large, but the missing explicit `loading="lazy"` is not the main issue because they are `next/image` instances without `priority`
- the "orphaned components" claim is broadly true, but it was framed as a dead-code cleanup item, not a runtime problem
- `suppressHydrationWarning` exists, but there is no concrete hydration bug shown in this review

Missed by the original audit:
- `/solutions` is a full client-rendered page even though most of its content is static marketing content
- multiple homepage sections run continuous `requestAnimationFrame` auto-scroll loops on the client
- the codebase currently fails `npm run lint`
- a production build could not be rerun because another Next process already holds `.next/lock`

## Validation Notes
- `public/` size is **80.1 MB** across **57 files**
- `npm run lint` fails with 51 errors and 19 warnings
- `npm run build` was blocked by an existing lock file at `.next/lock`, so I could not complete a fresh production build in this session

## High-Priority Findings

### 1. `/solutions` is unnecessarily client-rendered and does DOM measurement on mount
**Confirmed**

Evidence:
- [`app/solutions/page.tsx:1`](app/solutions/page.tsx) starts with `"use client"`.
- The page contains mostly static section data and markup, but still ships the whole route as client JS.
- [`app/solutions/page.tsx:291`](app/solutions/page.tsx) to [`app/solutions/page.tsx:329`](app/solutions/page.tsx) measures card heights with `querySelectorAll`, `offsetHeight`, `requestAnimationFrame`, `setTimeout`, and a `resize` listener.

Impact:
- extra JS and hydration cost for a marketing page
- forced client-side layout measurement after mount
- poorer SSR/streaming value than necessary

Recommendation:
- split the page into a server-rendered shell and isolate only genuinely interactive pieces as client components
- avoid height synchronization through client JS if CSS grid/flex layout can solve it

### 2. Homepage loads `framer-motion` across the main content path
**Confirmed**

Evidence:
- [`app/page.tsx:37`](app/page.tsx) to [`app/page.tsx:47`](app/page.tsx) wraps almost every homepage section in `ScrollReveal`
- [`components/scroll-reveal.tsx:1`](components/scroll-reveal.tsx) to [`components/scroll-reveal.tsx:50`](components/scroll-reveal.tsx) is a client component built on `framer-motion`
- [`components/navigation.tsx:8`](components/navigation.tsx) also imports `motion` and `AnimatePresence`
- [`components/sections/testimonials-section.tsx:6`](components/sections/testimonials-section.tsx) also imports `framer-motion`

Impact:
- more JS on initial route
- the reveal wrapper turns otherwise static section boundaries into animated client work

Recommendation:
- replace generic scroll reveal with CSS plus IntersectionObserver, or reduce it to only a few sections where the animation actually matters

### 3. Contact section injects a third-party script manually
**Confirmed**

Evidence:
- [`components/sections/contact-section.tsx:21`](components/sections/contact-section.tsx) to [`components/sections/contact-section.tsx:38`](components/sections/contact-section.tsx) creates and appends `https://tally.so/widgets/embed.js` via `document.createElement("script")`

Impact:
- bypasses `next/script`
- makes loading strategy harder to control
- remounting the component reinjects the script

Recommendation:
- use `next/script` with `strategy="lazyOnload"` or load the embed only when the section becomes visible

### 4. Continuous `requestAnimationFrame` loops on the homepage
**Confirmed and missed by original audit**

Evidence:
- [`components/sections/about-section.tsx:128`](components/sections/about-section.tsx) to [`components/sections/about-section.tsx:168`](components/sections/about-section.tsx) runs an always-on animation loop for auto-scrolling columns
- [`components/sections/solutions-section.tsx:21`](components/sections/solutions-section.tsx) to [`components/sections/solutions-section.tsx:40`](components/sections/solutions-section.tsx) runs another auto-scroll loop on mobile

Impact:
- sustained CPU work while the page is open
- extra battery drain on mobile devices
- higher main-thread contention during scrolling and interaction

Recommendation:
- stop these loops when the section is offscreen
- prefer CSS scroll-snap plus user-driven interaction, or gate animation behind reduced-motion and viewport visibility

### 5. Testimonials interval/effect implementation is buggy
**Confirmed**

Evidence:
- [`components/sections/testimonials-section.tsx:97`](components/sections/testimonials-section.tsx) to [`components/sections/testimonials-section.tsx:123`](components/sections/testimonials-section.tsx)
- the effect depends on `currentIndex`, so the interval is recreated on every slide advance
- the effect calls `nextSlide()` before `nextSlide` is declared
- lint already flags this exact issue

Impact:
- avoidable timer churn
- fragile closure behavior around `maxIndex`
- current implementation is noisy enough that lint reports it as a correctness problem, not just style

Recommendation:
- compute `slidesToShow` in one effect
- use a stable interval callback based on functional state updates

## Image Findings

### 6. Oversized LCP and near-LCP images are real issues
**Confirmed**

Evidence:
- [`components/sections/hero-section.tsx:12`](components/sections/hero-section.tsx) to [`components/sections/hero-section.tsx:18`](components/sections/hero-section.tsx) loads `/animations/hero section.png` with `priority`
- [`app/solutions/page.tsx:420`](app/solutions/page.tsx) to [`app/solutions/page.tsx:428`](app/solutions/page.tsx) loads `/animations/solutions_hero_section.png` with `priority`
- [`components/sections/user-journey-section.tsx:34`](components/sections/user-journey-section.tsx), [`52`](components/sections/user-journey-section.tsx), [`70`](components/sections/user-journey-section.tsx), [`88`](components/sections/user-journey-section.tsx), [`106`](components/sections/user-journey-section.tsx) define five large step PNGs

Measured file sizes:
- `public/animations/hero section.png`: **1.74 MB**
- `public/animations/solutions_hero_section.png`: **2.09 MB**
- `public/animations/step 1.png` to `step 5.png`: **1.73 MB**, **2.41 MB**, **2.15 MB**, **1.92 MB**, **2.10 MB**

Recommendation:
- convert these to WebP/AVIF
- resize to realistic display widths

### 7. Missing `sizes` on many `fill` images is a real optimization gap
**Confirmed**

Examples:
- [`components/sections/hero-section.tsx:12`](components/sections/hero-section.tsx) to [`18`](components/sections/hero-section.tsx)
- [`components/navigation.tsx:58`](components/navigation.tsx) to [`73`](components/navigation.tsx)
- [`components/sections/user-journey-section.tsx:234`](components/sections/user-journey-section.tsx) to [`239`](components/sections/user-journey-section.tsx)
- [`components/sections/user-journey-section.tsx:297`](components/sections/user-journey-section.tsx) to [`303`](components/sections/user-journey-section.tsx)
- [`components/sections/team-section.tsx:104`](components/sections/team-section.tsx) to [`109`](components/sections/team-section.tsx)
- [`components/sections/team-section.tsx:171`](components/sections/team-section.tsx) to [`176`](components/sections/team-section.tsx)

Impact:
- Next.js may generate overly large candidates for smaller viewports

Recommendation:
- add explicit `sizes` per layout context

### 8. The "step images need `loading=\"lazy\"`" claim is overstated
**Partially refuted**

Evidence:
- [`components/sections/user-journey-section.tsx:234`](components/sections/user-journey-section.tsx) to [`239`](components/sections/user-journey-section.tsx)
- [`components/sections/user-journey-section.tsx:297`](components/sections/user-journey-section.tsx) to [`303`](components/sections/user-journey-section.tsx)

Why this needs refinement:
- these are `next/image` components without `priority`
- the real confirmed issue is oversized source files plus missing `sizes`

Recommendation:
- keep focus on file conversion and responsive sizing first

### 9. Extra `priority` in navigation is a valid but minor issue
**Confirmed**

Evidence:
- [`components/navigation.tsx:58`](components/navigation.tsx) to [`73`](components/navigation.tsx)
- the text logo is hidden on small screens via `hidden sm:block` but still marked `priority`

Impact:
- unnecessary preload on mobile

Recommendation:
- remove `priority` from the hidden mobile logo

### 10. Unused assets claim is mostly correct
**Confirmed**

Referenced nowhere outside the audit note:
- `public/animations/multi use.png`
- `public/animations/multi use 1.png`
- `public/animations/multi use 2.png`
- `public/animations/multi use 3.png`
- `public/animations/multi use 4.png`
- `public/animations/faces 1.png`
- `public/animations/faces 2.png`
- `public/hero-section-image.png`
- `public/mission video.mp4`
- `public/animations/animation.avif`

Likely unused because the owning component is not imported:
- `public/animations/philosophy 1.png`
- `public/animations/philosophy 2.png`

Related evidence:
- homepage imports in [`app/page.tsx:13`](app/page.tsx) to [`app/page.tsx:21`](app/page.tsx) do not include `investment-philosophy-section`
- no source imports were found for the section files listed as orphaned

Note:
- these files do not affect the JS bundle directly, but they do bloat `public/` and deployment payloads

## Middleware and SSR/CSR Findings

### 11. Middleware overhead claim is correct
**Confirmed**

Evidence:
- [`middleware.ts:4`](middleware.ts) to [`middleware.ts:10`](middleware.ts) immediately checks `NEXT_PUBLIC_BLOG_ONLY_MODE`
- [`middleware.ts:42`](middleware.ts) matcher still applies the middleware broadly

Impact:
- every matched request pays middleware startup cost even when blog-only mode is off

Recommendation:
- remove the middleware unless the mode is active, or replace the behavior with config/build-time routing if the mode is rare

### 12. `WhatsAppFloat` ships client JS for an env-gated null render
**Confirmed**

Evidence:
- [`app/layout.tsx:165`](app/layout.tsx) renders `<WhatsAppFloat />`
- `components/whatsapp-float.tsx` is a client component and returns `null` only after evaluating `NEXT_PUBLIC_BLOG_ONLY_MODE`

Impact:
- small but avoidable client payload

Recommendation:
- gate the component from the server layout instead of inside a client component

### 13. `suppressHydrationWarning` is present, but the audit overstates the risk
**Partially refuted**

Evidence:
- [`app/layout.tsx:86`](app/layout.tsx) to [`app/layout.tsx:89`](app/layout.tsx)

Assessment:
- this can hide real hydration mismatches
- however, this review did not find a concrete mismatch that it is masking

Recommendation:
- remove it once the actual reason for needing it is understood

## Dead Code / Maintainability Findings

### 14. The orphaned section component claim is broadly correct
**Confirmed**

No source imports were found for:
- `components/sections/investment-philosophy-section.tsx`
- `components/sections/why-choose-section.tsx`
- `components/sections/why-investally-section.tsx`
- `components/sections/products-section.tsx`
- `components/sections/cta-section.tsx`
- `components/sections/challenges-section.tsx`
- `components/sections/market-tickers.tsx`
- `components/sections/blog-section.tsx`
- `components/sections/newsletter-section.tsx`

Important nuance:
- this is mainly a maintainability issue
- tree-shaking means these files are not automatically part of runtime cost unless imported

### 15. Team photo variant cleanup is a low-risk optimization
**Mostly confirmed**

Evidence:
- active team images use only medium variants in [`components/sections/team-section.tsx:13`](components/sections/team-section.tsx), [`34`](components/sections/team-section.tsx), and [`55`](components/sections/team-section.tsx)
- current team asset directory contains many other variants

Nuance:
- cleanup is reasonable, but the absolute savings are modest compared with the animation PNGs

## Additional Runtime Findings Not in the Original Audit

### 16. Quote popup performs synchronous state changes inside `useEffect`
**Confirmed**

Evidence:
- [`components/quote-popup.tsx:38`](components/quote-popup.tsx) to [`components/quote-popup.tsx:55`](components/quote-popup.tsx)
- lint flags `setSelectedQuote(...)` inside the effect body

Impact:
- avoidable extra render during mount

### 17. Home/about/blog components duplicate viewport detection logic
**Confirmed**

Evidence:
- [`hooks/useIsMobile.ts:12`](hooks/useIsMobile.ts) to [`hooks/useIsMobile.ts:26`](hooks/useIsMobile.ts) uses user-agent detection
- [`components/sections/about-section.tsx:86`](components/sections/about-section.tsx) to [`90`](components/sections/about-section.tsx) uses `window.innerWidth < 1024`
- [`components/sections/solutions-section.tsx:14`](components/sections/solutions-section.tsx) to [`18`](components/sections/solutions-section.tsx) uses `window.innerWidth < 1024`
- [`components/sections/blog-grid-client.tsx:42`](components/sections/blog-grid-client.tsx) to [`47`](components/sections/blog-grid-client.tsx) uses `window.innerWidth < 768`

Impact:
- inconsistent behavior across devices
- extra resize listeners spread across the app

### 18. `portable-text` still uses raw `<img>` for GIF embeds
**Confirmed**

Evidence:
- [`components/portable-text.tsx:222`](components/portable-text.tsx) to [`227`](components/portable-text.tsx)

Impact:
- no Next image optimization for GIF content
- potential large transfers depending on CMS content

Note:
- this may be an intentional tradeoff because animated GIF handling with `next/image` is limited, so this is not automatically a defect

## Claim-by-Claim Summary for `performance-audit.md`

Accurate:
- unused heavy assets
- oversized hero and solutions images
- `framer-motion` in critical path
- contact script injection
- testimonial interval bug
- extra nav `priority`
- missing `sizes`
- middleware overhead
- `WhatsAppFloat` env-gated client payload
- duplicate mobile detection

Needs refinement:
- step images lacking explicit lazy loading
- `suppressHydrationWarning` framed as if it already hides a known bug
- orphaned components presented as if they materially affect runtime

Missed:
- `/solutions` client-rendering and mount-time DOM measurement
- continuous animation loops in homepage sections
- current lint failures as a quality/runtime signal

## Recommended Order of Work
1. Convert critical PNGs and add `sizes` to all `fill` images.
2. Move `/solutions` back toward SSR and remove mount-time height synchronization.
3. Replace generic `ScrollReveal` usage to shrink homepage JS.
4. Fix contact script loading and testimonial timer logic.
5. Remove or gate always-on animation loops.
6. Clean up unused assets and orphaned sections.
7. Resolve lint failures, then rerun a clean production build after the existing `.next/lock` owner is stopped.
