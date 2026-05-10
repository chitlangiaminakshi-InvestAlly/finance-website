# InvestAlly Website — Performance & Code Quality Audit
**Date:** 2026-05-02  
**Scope:** Full repository analysis — load time optimization, dead code, bundle size, architectural issues

---

> **TL;DR:** The `public/` directory is **80.1 MB**, of which **~55 MB are completely unused files**. After deleting dead assets and converting PNGs to WebP, the deployment should shrink to ~5–8 MB of actual assets. Additionally, ~9 orphaned components and a framer-motion dependency used only for simple fade-ins add unnecessary complexity.

---

## 🔴 Critical Issues

### 1. Massive Unused Images (~53.6 MB of dead weight)

These files exist in `public/animations/` but are **never referenced** anywhere in the codebase:

| File | Size | Status |
|------|------|--------|
| `multi use.png` | 6.99 MB | ❌ Unused |
| `multi use 1.png` | 7.46 MB | ❌ Unused |
| `multi use 2.png` | 7.32 MB | ❌ Unused |
| `multi use 3.png` | 8.05 MB | ❌ Unused |
| `multi use 4.png` | 8.27 MB | ❌ Unused |
| `faces 1.png` | 7.45 MB | ❌ Unused |
| `faces 2.png` | 8.07 MB | ❌ Unused |
| **Subtotal** | **~53.6 MB** | 🗑️ **Delete** |

Additionally unused:

| File | Size | Notes |
|------|------|-------|
| `public/hero-section-image.png` | 1.05 MB | Hero now uses `animations/hero section.png` |
| `public/mission video.mp4` | 4.38 MB | Not referenced in any component |
| `public/animations/animation.avif` | 0.14 MB | Not referenced anywhere |
| `public/animations/philosophy 1.png` | 1.98 MB | `investment-philosophy-section.tsx` is never imported |
| `public/animations/philosophy 2.png` | 2.76 MB | Same — dead component |

> Even though Next.js doesn't include these in the JS bundle, they **bloat the deployment package** and on Vercel every file in `public/` is deployed to the CDN edge.

---

### 2. Unoptimized Hero Image (1.74 MB PNG, above the fold)

**File:** `components/sections/hero-section.tsx` → loads `animations/hero section.png` (1.74 MB)

This is the **first thing users see** (LCP element). While it uses `next/image` with `priority`, the source file is an uncompressed PNG.

**Fix:** Convert to WebP/AVIF. A 1.74 MB PNG typically compresses to ~200–400 KB as WebP at near-identical quality.

---

### 3. Step Images Are Huge Unoptimized PNGs (1.7–2.5 MB each × 5)

Used by the User Journey section (`components/sections/user-journey-section.tsx`):

| Image | Size |
|-------|------|
| `step 1.png` | 1.73 MB |
| `step 2.png` | 2.41 MB |
| `step 3.png` | 2.15 MB |
| `step 4.png` | 1.92 MB |
| `step 5.png` | 2.10 MB |
| **Total** | **~10.3 MB** |

These are in a `"use client"` component without `loading="lazy"` on the `<Image>` tags. On mobile they show inline when accordion expands.

**Fix:** Convert to WebP, resize to max 1200px wide, add `loading="lazy"`.

---

### 4. Solutions Hero Image (2.09 MB PNG)

`animations/solutions_hero_section.png` (2.09 MB) — used on the `/solutions` page. Same issue.

---

## 🟠 Performance Issues

### 5. `framer-motion` Loaded in the Critical Path

- `components/scroll-reveal.tsx` wraps **every homepage section** with `framer-motion`'s `<motion.div>`.
- `components/navigation.tsx` imports `motion` and `AnimatePresence` for the mobile menu.
- `framer-motion` adds **~40–60 KB gzipped** to the JS bundle.
- `ScrollReveal` only fires once per element — a CSS + IntersectionObserver pattern (already used in `faq-section.tsx`) would achieve the same result at zero bundle cost.

**Fix:** Replace `ScrollReveal` with native IntersectionObserver + CSS transitions. Keep `framer-motion` only for genuinely complex animations (e.g., `AnimatePresence` in testimonials).

---

### 6. Contact Section Loads External Script Imperatively

`components/sections/contact-section.tsx` manually injects a `<script>` tag for `tally.so/widgets/embed.js` in a `useEffect`:
- Bypasses Next.js's `<Script>` component and its optimization strategies
- Runs every time the component mounts
- Not deferred/lazy

**Fix:** Use `next/script` with `strategy="lazyOnload"`.

---

### 7. Testimonials Auto-Slide Timer Bug

In `components/sections/testimonials-section.tsx`:
```tsx
useEffect(() => {
  const interval = setInterval(() => { nextSlide(); }, 5000);
  return () => { clearInterval(interval); };
}, [currentIndex]); // ← Re-creates interval on every slide change
```
The interval is cleared and re-created every 5 seconds (every time `currentIndex` changes). The `nextSlide` function also captures a stale `maxIndex` via closure.

**Fix:** Remove `currentIndex` from the dependency array and use a callback `setCurrentIndex(prev => ...)`.

---

### 8. Three `priority` Images in Navigation

`components/navigation.tsx` has `priority` on three images:
- `investally_only_logo.png` (33 KB)
- `investally_logo_name.png` (35 KB) — **hidden on mobile** via `hidden sm:block`

**Fix:** Remove `priority` from the hidden-on-mobile logo. It forces a preload `<link>` in `<head>` even when the image is `display:none`.

---

### 9. No `sizes` Attribute on `fill` Images

Multiple `<Image fill>` usages (hero, team photos, step images, company logos) don't specify `sizes`. Without it, Next.js defaults to `100vw`, serving larger images than needed.

**Fix:** Add appropriate `sizes` attributes, e.g., `sizes="(max-width: 768px) 100vw, 50vw"`.

---

## 🟡 Dead Code & Maintenance Issues

### 10. Orphaned Components (Never Imported by Any Page)

| Component | Size | Notes |
|-----------|------|-------|
| `investment-philosophy-section.tsx` | 9.5 KB | References dead philosophy images |
| `why-choose-section.tsx` | 11 KB | Commented out in `page.tsx` |
| `why-investally-section.tsx` | 4.8 KB | Not imported anywhere |
| `products-section.tsx` | 6.5 KB | Not imported anywhere |
| `cta-section.tsx` | 1.5 KB | Not imported anywhere |
| `challenges-section.tsx` | 7.4 KB | Not imported anywhere |
| `market-tickers.tsx` | 0.7 KB | Not imported anywhere |
| `blog-section.tsx` | 5 KB | Not imported anywhere |
| `newsletter-section.tsx` | 6.4 KB | Not imported anywhere |

These don't affect bundle size (tree-shaking), but create maintenance confusion.

---

### 11. Unused Team Photo Variants (~1.0 MB)

Team photos exist in multiple sizes (`-full`, `-large`, `-medium`, `-small`, `-thumbnail`) but only `-medium` is ever referenced:

Unused: `*-full.jpg`, `*-large.jpg`, `*-small.jpg`, `*-thumbnail.jpg` for both team members, plus `team_mate3_small.jpeg` and `team_mate3_thumbnail.jpeg`.

---

### 12. Stale Root-Level Files

The project root (outside `nextjs-app/`) contains legacy files:
- `index.html` (146 KB) — old static HTML version
- `index-old.html` (126 KB) — even older version
- `services.html` (44 KB) — old services page
- Multiple large PNG images (`step 1-5.png`, `hero-section-image.png`, etc.) duplicated from `public/`

---

## 🟢 Minor Issues & Suggestions

### 13. Middleware Runs on Every Request Unnecessarily

`middleware.ts` runs on every non-static request to check `blogOnlyMode`. When `false` (the normal case), it just calls `NextResponse.next()` — pure overhead.

**Fix:** If `blogOnlyMode` is not toggled frequently, use build-time redirects in `next.config.ts` instead.

---

### 14. `WhatsAppFloat` Ships Client JS Even When Returning `null`

`components/whatsapp-float.tsx` is `"use client"` and checks a build-time env var. When `blogOnlyMode` is true, the component returns `null`, but its JS still ships to the client.

---

### 15. `suppressHydrationWarning` on `<body>`

`app/layout.tsx` uses `suppressHydrationWarning` on `<body>`. This silences legitimate hydration warnings that could mask real bugs.

---

### 16. Duplicate Mobile Detection Patterns

Two different approaches exist:
1. `hooks/useIsMobile.ts` — User-Agent string matching
2. Inline `window.innerWidth < 1024` checks (in `about-section.tsx`, `solutions-section.tsx`)

These can give conflicting results (e.g., tablet with wide viewport but mobile UA).

**Fix:** Consolidate to one approach.

---

### 17. Spaces in File Names

Many files: `hero section.png`, `step 1.png`, `mission video.mp4`, `faces 1.png`. While Next.js handles URL encoding, this is error-prone.

**Fix:** Rename with hyphens during the WebP conversion step.

---

### 18. Dark Mode CSS Variables Defined But Never Used

`app/globals.css` defines a full `.dark` theme (lines 134–166) but no `dark` class is ever applied. ~30 lines of dead CSS.

---

## 📊 Impact Summary

| Category | Estimated Savings | Effort |
|----------|------------------|--------|
| Delete unused images | ~55 MB off deployment | ⚡ Trivial |
| Convert PNGs → WebP | ~10 MB → ~1.5 MB | 🔧 Low |
| Remove dead components | Cleaner codebase | ⚡ Trivial |
| Replace ScrollReveal with CSS | ~40–60 KB JS savings | 🔧 Medium |
| Add `sizes` to `<Image fill>` | Better responsive serving | 🔧 Low |
| Fix Contact script loading | Faster initial paint | ⚡ Trivial |
| Fix testimonial interval bug | Eliminates jank | ⚡ Trivial |

---

## 🎯 Recommended Priority Order

1. **Delete unused images** — instant ~55 MB deployment savings
2. **Convert remaining PNGs to WebP/AVIF** — biggest real-world load time improvement
3. **Add `loading="lazy"` and `sizes` to below-the-fold images** — reduces initial data transfer
4. **Replace `framer-motion` ScrollReveal with CSS + IntersectionObserver** — smaller JS bundle
5. **Fix Contact section script loading** — use `next/script`
6. **Clean up dead components and duplicate files** — maintainability
7. **Consolidate mobile detection** — pick one approach

---

## Checklist for Implementation

- [ ] Delete 7 unused animation PNGs (`multi use*`, `faces*`)
- [ ] Delete `public/hero-section-image.png`, `public/mission video.mp4`, `public/animations/animation.avif`
- [ ] Delete `public/animations/philosophy 1.png` and `philosophy 2.png`
- [ ] Convert `hero section.png` to WebP (~200–400 KB target)
- [ ] Convert 5 `step *.png` to WebP, resize to max 1200px wide
- [ ] Convert `solutions_hero_section.png` to WebP
- [ ] Add `loading="lazy"` to all step images and solutions hero
- [ ] Add `sizes` prop to all `<Image fill>` usages
- [ ] Remove `priority` from hidden-on-mobile nav logo
- [ ] Replace `ScrollReveal` with CSS + IntersectionObserver
- [ ] Fix `contact-section.tsx` to use `next/script`
- [ ] Fix testimonial carousel interval dependency
- [ ] Delete 9 orphaned section components (or move to archive)
- [ ] Delete unused team photo variants (`-full`, `-large`, `-small`, `-thumbnail`)
- [ ] Remove or gate middleware when `blogOnlyMode` is off
- [ ] Consolidate mobile detection to one approach
- [ ] Remove dead `.dark` CSS variables
- [ ] Rename files with spaces to use hyphens
- [ ] Clean up root-level legacy HTML files
