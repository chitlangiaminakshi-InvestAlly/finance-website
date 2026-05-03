# Execution Plan
**Date:** 2026-05-03
**Goal:** Move `nextjs-app/` from "builds but noisy and inefficient" to "clean, lighter, and ready for confident deployment"

## Operating Rules
- `ME` = work I can execute directly in the codebase
- `YOU` = decision or asset input required from you
- `JOINT` = I can prepare the change, but I need your decision to finalize it

## Phase 0: Freeze Scope
Status: `DONE`
1. `[DONE]` `YOU` confirm whether dead sections should be deleted permanently or moved to an archive folder.
2. `[DONE]` `YOU` confirm whether root-level legacy HTML files outside `nextjs-app/` should also be cleaned in the same pass.
3. `[DONE]` `YOU` confirm whether image conversion can change filenames and formats, for example `hero section.png` to `hero-section.webp`.

## Phase 1: Correctness and Green Baseline
Status: `DONE`
1. `[DONE]` `ME` fix the testimonial carousel effect/timer bug.
2. `[DONE]` `ME` fix `quote-popup.tsx` effect/state pattern.
3. `[DONE]` `ME` replace imperative Tally script loading with `next/script`.
4. `[DONE]` `ME` clean obvious live-file lint issues in `contact-section.tsx`, `about-us/page.tsx`, and `services/page.tsx`.
5. `[DONE]` `ME` reduce or eliminate `any` in live Sanity/blog utility paths where the types are already inferable.
6. `[DONE]` `ME` rerun `npm run lint`.
7. `[DONE]` `ME` rerun `npm run build`.

Intervention required:
- none, unless lint exposes a business-rule ambiguity in content or Sanity schema assumptions

## Phase 2: Asset Cleanup
Status: `DONE`
1. `[DONE]` `ME` remove confirmed dead assets from `nextjs-app/public/`.
2. `[DONE]` `ME` remove dead team image variants if you approve deletion instead of retention.
3. `[DONE]` `ME` keep `robots.txt`, `sitemap.xml`, and `google265b8628398af32c.html` untouched.
4. `[DONE]` `ME` document final size reduction after cleanup.

Intervention required:
- `YOU` approve permanent deletion vs archival retention for dead assets

## Phase 3: Image Optimization
Status: `DONE`
1. `[DONE]` `YOU` provide approval that visual fidelity can be slightly changed for better performance.
2. `[DONE]` `ME` convert hero, solutions hero, and journey step images to WebP or AVIF.
3. `[DONE]` `ME` normalize filenames to hyphenated names if approved.
4. `[DONE]` `ME` update all code references.
5. `[DONE]` `ME` add `sizes` to all `fill` images in live components.
6. `[DONE]` `ME` remove unnecessary `priority` from the hidden nav logo.
7. `[DONE]` `ME` rerun build and spot-check for broken image references.

Intervention required:
- `YOU` approve format conversion and any acceptable quality tradeoff
- `YOU` may want to visually review the converted assets before final merge

## Phase 4: Reduce Client-Side Work
Status: `DONE`
1. `[DONE]` `ME` refactor `/solutions` so the page shell is server-rendered.
2. `[DONE]` `ME` isolate only the interactive part of `/solutions` into a smaller client component if needed.
3. `[DONE]` `ME` remove JS-based height synchronization if CSS can solve the layout.
4. `[DONE]` `ME` replace generic `ScrollReveal` usage with a lighter approach or restrict it to fewer sections.
5. `[DONE]` `ME` stop always-on `requestAnimationFrame` loops when sections are offscreen, or replace them with user-driven interaction.
6. `[DONE]` `ME` standardize mobile detection logic.

Intervention required:
- none for the technical refactor
- `YOU` only if you want to preserve the exact current motion behavior rather than a lighter equivalent

## Phase 5: Dead Code Cleanup
Status: `PARTIAL`
1. `[DONE AS ARCHIVE]` `ME` delete unreachable section files after your approval.
2. `[DONE AS ARCHIVE]` `ME` delete transitive dead helpers such as `blog-grid-client.tsx` if the owning dead section is removed.
3. `[DONE]` `ME` remove stale commented renders and unused imports created by that cleanup.
4. `[DONE]` `ME` rerun lint and build.

Intervention required:
- `YOU` decide delete vs archive for dormant sections

## Phase 6: Final Validation
Status: `PARTIAL`
1. `[DONE]` `ME` run `npm run lint`.
2. `[DONE]` `ME` run `npm run build`.
3. `[DONE]` `ME` record before/after metrics:
   - `public/` total size
   - list of deleted assets
   - list of converted images
   - lint status
   - build status
4. `[PARTIAL]` `ME` provide a final summary with any residual risks.

Intervention required:
- none

## Recommended Implementation Sequence
If you want the safest path, execute in this exact order:
1. Phase 0 decisions
2. Phase 1 correctness cleanup
3. Phase 2 asset deletion
4. Phase 3 image optimization
5. Phase 4 client-work reduction
6. Phase 5 dead-code cleanup
7. Phase 6 final validation

## Fastest Low-Risk First Pass
If you want the quickest meaningful improvement with minimal business review:
1. Fix lint-blocking live-code issues
2. Delete confirmed dead assets
3. Add missing `sizes`
4. Remove nav `priority` misuse
5. Replace Tally script loading
6. Fix testimonials effect

## What I Can Handle End-to-End Without You
- lint and build remediation
- effect cleanup
- script loading fixes
- `sizes` and image prop fixes
- `/solutions` technical refactor
- motion/runtime cleanup
- validation and reporting

## What Requires Your Input
- whether dormant sections should be deleted or archived
- whether dead assets should be deleted or archived
- whether image format conversion and filename normalization are acceptable
- whether preserving exact current motion aesthetics matters more than bundle/runtime reduction
