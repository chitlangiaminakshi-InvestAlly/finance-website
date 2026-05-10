# InvestAlly Next.js Master Audit
**Date:** 2026-05-03
**Scope:** Verification of `private/context/performance-audit.md` plus runtime, maintainability, and delivery-readiness review of `nextjs-app/`

## Executive Verdict
The app is functional and `npm run build` succeeds as of 2026-05-03, but it is not in a clean or efficient state.

What is good:
- the app builds successfully in production mode
- route structure is straightforward
- most core pages are prerendered
- the existing performance audit is directionally useful

What is not good enough yet:
- `npm run lint` fails with **51 errors** and **19 warnings**
- `public/` is **80.1 MB**, with a large amount of confirmed dead media
- the homepage and `/solutions` ship more client work than necessary
- some performance issues in the current audit are correct, but a few claims are incomplete or overstated

## Verified Findings

### Critical
1. **Large dead asset footprint in `public/`**
   - Confirmed unused heavy files include `public/animations/multi use*.png`, `faces 1.png`, `faces 2.png`, `hero-section-image.png`, `mission video.mp4`, `animation.avif`, `philosophy 1.png`, `philosophy 2.png`, and unused team-photo variants.
   - `public/` totals **80.1 MB**.
   - This does not bloat JS bundles directly, but it does bloat deployment payload and static asset surface area.

2. **Oversized hero and journey imagery**
   - `components/sections/hero-section.tsx` uses `/animations/hero section.png` at **1.74 MB** with `priority`.
   - `app/solutions/page.tsx` uses `/animations/solutions_hero_section.png` at **2.09 MB** with `priority`.
   - `components/sections/user-journey-section.tsx` references five step PNGs totalling about **10.3 MB**.

3. **`/solutions` is fully client-rendered despite being mostly static**
   - `app/solutions/page.tsx` starts with `"use client"`.
   - It performs mount-time DOM measurement, `querySelectorAll`, `offsetHeight`, `requestAnimationFrame`, `setTimeout`, and resize listeners for layout synchronization.
   - This is an avoidable SSR/CSR inefficiency for a marketing page.

4. **Current lint state is not release-clean**
   - `npm run lint` fails with 51 errors and 19 warnings.
   - Errors include real runtime-quality issues, not just style concerns.

### High
5. **Homepage critical path includes `framer-motion` broadly**
   - `app/page.tsx` wraps most homepage sections with `ScrollReveal`.
   - `components/scroll-reveal.tsx` is a client `motion.div`.
   - `navigation.tsx` and `testimonials-section.tsx` also use `framer-motion`.

6. **Continuous client animation loops**
   - `components/sections/about-section.tsx` runs an always-on `requestAnimationFrame` auto-scroll loop.
   - `components/sections/solutions-section.tsx` runs a similar mobile auto-scroll loop.
   - These are persistent CPU/battery costs, especially on mobile.

7. **Testimonials carousel has a real effect/timer bug**
   - `components/sections/testimonials-section.tsx` recreates the interval on every `currentIndex` change.
   - It also calls `nextSlide()` before the function is declared.
   - Lint flags this as a correctness issue.

8. **Third-party script loading is implemented imperatively**
   - `components/sections/contact-section.tsx` injects `https://tally.so/widgets/embed.js` via `document.createElement("script")`.
   - This bypasses `next/script` and makes load behavior harder to control.

### Medium
9. **Missing `sizes` on many `fill` images**
   - Confirmed in `hero-section.tsx`, `navigation.tsx`, `user-journey-section.tsx`, `team-section.tsx`, blog card components, and `/solutions`.
   - This can cause larger-than-needed image candidates to be served.

10. **Middleware runs even when blog-only mode is off**
   - `middleware.ts` executes broadly and immediately returns `NextResponse.next()` when disabled.
   - Next.js 16 also warns that `middleware` should move to `proxy`.

11. **Dead/unreachable section components create maintenance drag**
   - Confirmed dead section files include `why-choose`, `why-investally`, `products`, `cta`, `challenges`, `market-tickers`, `newsletter`, `investment-philosophy`, `calculators-section`, and `blog-section`.
   - `blog-grid-client.tsx` is also dead transitively.

12. **Viewport/mobile detection is inconsistent**
   - `useIsMobile()` uses user-agent detection.
   - Other components use `window.innerWidth` checks with different breakpoints.

### Lower Priority but Valid
13. `navigation.tsx` preloads a hidden mobile-inactive logo with `priority`.
14. `components/quote-popup.tsx` performs synchronous state updates inside `useEffect`.
15. `components/portable-text.tsx` still uses raw `<img>` for GIF-like content; that may be intentional, but it should be an explicit tradeoff.
16. `app/layout.tsx` contains `suppressHydrationWarning`; this is a risk flag, though this audit did not prove a specific hidden hydration bug.

## Verification of `performance-audit.md`
Accurate:
- dead heavy asset problem
- oversized hero/solutions/journey images
- `framer-motion` overuse on the homepage
- contact-section script injection
- testimonial timer problem
- missing `sizes`
- unnecessary middleware execution
- duplicate mobile detection concern

Needs refinement:
- explicit `loading="lazy"` on journey images is not the core issue; oversized assets and missing `sizes` matter more
- orphaned components are mainly a maintainability issue, not a direct runtime issue
- `suppressHydrationWarning` is a valid concern, but the current audit states the risk more strongly than the evidence supports

Incorrect or incomplete:
- the current dead-component count is understated
- `investment-philosophy-section.tsx` was linked to philosophy images incorrectly
- the current audit misses the `/solutions` client-rendering issue
- it also misses the always-on `requestAnimationFrame` loops

## Build and Readiness Status
- `npm run build`: **passes** on 2026-05-03 in the main workspace
- `npm run lint`: **fails**
- deployment/readiness conclusion: **not ready for a clean handoff without another remediation pass**

## Recommended Next Move
Do not start with cosmetic cleanup. Start with:
1. lint-blocking correctness issues
2. heavy asset reduction
3. `/solutions` de-clientification
4. homepage JS reduction
