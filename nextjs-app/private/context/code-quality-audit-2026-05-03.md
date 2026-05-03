# Code Quality Audit
**Date:** 2026-05-03
**Scope:** `nextjs-app/` correctness, maintainability, and release hygiene

## Summary
The main code-quality problem is not architecture alone. It is that the repo is currently failing its own lint gate, and several of those failures point to real correctness and maintainability issues.

## Current Validation State
- `npm run lint`: fails with **51 errors** and **19 warnings**
- `npm run build`: passes on **2026-05-03**

## Highest-Value Code Quality Findings

### 1. Lint errors are concentrated in production code, not only dead code
Examples:
- `components/sections/testimonials-section.tsx`
- `components/sections/contact-section.tsx`
- `components/quote-popup.tsx`
- `components/portable-text.tsx`
- `components/blog-listing-client.tsx`
- `components/table-of-contents.tsx`
- `lib/sanity.client.ts`
- `lib/sanity.types.ts`

This matters because the project currently has no clean static-quality baseline.

### 2. Correctness issue in testimonial carousel
- Interval lifecycle is unstable.
- Function ordering and effect dependencies are wrong.
- This is both a lint problem and a behavior-risk problem.

### 3. Overuse of `any`
- Blog, portable-text, Sanity, and TOC-related code contain repeated `any` usage.
- This reduces the value of TypeScript in the parts of the app that handle content-heavy data.

### 4. Effect patterns need cleanup
Examples:
- `quote-popup.tsx` sets state directly in an effect.
- `blog-grid-client.tsx` uses mount-state bookkeeping that React lint now flags.
- Several components duplicate viewport listeners and effect-driven sizing logic.

### 5. Unescaped entity errors show content is being written into JSX in a brittle way
Affected areas include:
- `app/about-us/page.tsx`
- `app/services/page.tsx`
- `contact-section.tsx`
- `quote-popup.tsx`

This is easy to fix, but the count is high enough to indicate weak content hygiene.

### 6. Dead code is masking actual maintenance cost
There are multiple unreachable section components and at least one dead helper component.
That increases search noise and raises the chance of editing the wrong implementation.

## Recommended Remediation Order
1. Fix runtime/correctness lint errors first.
2. Fix content hygiene errors like unescaped entities.
3. Remove `any` from the live Sanity/blog paths.
4. Remove dead sections and dead helpers.
5. Standardize viewport detection and effect patterns.
6. Re-run lint and keep the repo green before performance refactors continue.

## Pass/Fail Verdict
**Fail for release hygiene.**

Reason:
- the app builds, but the codebase is not in a clean maintainable state while lint is failing at this scale.
