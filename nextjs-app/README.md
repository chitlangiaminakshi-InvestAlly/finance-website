# InvestAlly Next.js App

Production website for InvestAlly, built with Next.js App Router, TypeScript, Tailwind CSS v4, and Sanity CMS.

This app powers the public marketing site, the blog, and supporting lead-generation flows. It is designed for a content-first financial services website with strong SEO, static blog generation, lightweight interactions, and optional blog-only mode for focused content campaigns.

## Overview

The application lives in `nextjs-app/` inside the broader `finance-website` workspace. It is the customer-facing frontend and integrates with a separate `sanity-studio/` project for blog and content management.

Key responsibilities:

- Render the main marketing website and brand pages
- Fetch and render blog content from Sanity
- Generate SEO metadata, sitemap, robots rules, and structured data
- Support social sharing and blog like counts
- Redirect the site into a blog-only experience when required

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui primitives built on Radix UI
- Sanity via `next-sanity`
- `next-sitemap` for sitemap and robots generation

## Main Features

- Marketing pages for home, about, services, solutions, and calculators
- Sanity-backed blog listing and dynamic blog post pages
- Static generation for blog slugs through `generateStaticParams`
- Portable rich text rendering for blog content
- Like API for blog posts using a server-side Sanity write token
- Table of contents, sharing, and copy attribution for articles
- JSON-LD structured data for search engines
- Google Analytics integration
- WhatsApp floating CTA
- Optional blog-only mode controlled by environment variable and edge proxy logic

## Routes

Current route surface:

- `/` - homepage
- `/about-us` - about page
- `/services` - services page
- `/solutions` - solutions overview
- `/calculators` - calculators page
- `/blog` - blog listing
- `/blog/[slug]` - blog detail page
- `/api/blog/like` - increments a blog post like count in Sanity

## Project Structure

```text
nextjs-app/
├── app/
│   ├── layout.tsx              # Root layout, metadata, analytics, JSON-LD
│   ├── page.tsx                # Homepage, redirects to /blog in blog-only mode
│   ├── about-us/
│   ├── services/
│   ├── solutions/
│   ├── calculators/
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog article page
│   └── api/blog/like/route.ts  # Like endpoint
├── components/
│   ├── sections/               # Homepage and page sections
│   ├── ui/                     # Reusable UI primitives
│   └── *.tsx                   # Navigation, footer, blog helpers, widgets
├── hooks/                      # Viewport and responsive hooks
├── lib/
│   ├── sanity.api.ts           # App-facing data functions
│   ├── sanity.client.ts        # Read and write clients
│   ├── sanity.config.ts        # Shared Sanity configuration
│   ├── sanity.image.ts         # Image URL helpers
│   ├── sanity.queries.ts       # GROQ queries
│   └── sanity.types.ts         # Blog and CMS types
├── public/                     # Static assets, logos, generated sitemap/robots
├── private/                    # Internal notes, audits, source assets, archive
├── next.config.ts              # Next.js config and image allowlist
├── next-sitemap.config.js      # Sitemap and robots generation
├── proxy.ts                    # Blog-only redirection logic
└── .env.example                # Public Sanity env template
```

## Getting Started

### Prerequisites

- Node.js 20 or later recommended
- npm
- A Sanity project with the required schemas

### Install

From the `nextjs-app` directory:

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm start
```

`postbuild` automatically runs `next-sitemap`, so the sitemap and robots output stay aligned with the deployed route set.

## Environment Variables

Create `nextjs-app/.env.local` and populate the required values.

### Required for Sanity content

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Optional but important

```env
SANITY_API_WRITE_TOKEN=your_editor_token
SITE_URL=https://investally.co.in
NEXT_PUBLIC_BLOG_ONLY_MODE=false
```

### Variable reference

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
  Sanity project ID used by the frontend client.

- `NEXT_PUBLIC_SANITY_DATASET`
  Sanity dataset, typically `production`.

- `NEXT_PUBLIC_SANITY_API_VERSION`
  Sanity API version used by queries.

- `SANITY_API_WRITE_TOKEN`
  Server-side token used by `/api/blog/like` to increment like counts.
  This should have editor-level write access and must not be exposed client-side.

- `SITE_URL`
  Canonical base URL used by sitemap generation. Defaults to `https://investally.co.in` if omitted.

- `NEXT_PUBLIC_BLOG_ONLY_MODE`
  When set to `true`, the homepage redirects to `/blog` and most non-blog requests are redirected there by `proxy.ts`.

## Sanity Integration

The blog content layer is driven by Sanity and consumed through `next-sanity`.

Read flow:

- Shared settings are defined in `lib/sanity.config.ts`
- Read client is created in `lib/sanity.client.ts`
- GROQ queries live in `lib/sanity.queries.ts`
- App-facing fetch helpers live in `lib/sanity.api.ts`

Write flow:

- `writeClient` in `lib/sanity.client.ts` uses `SANITY_API_WRITE_TOKEN`
- `/api/blog/like` patches the target post and increments `likeCount`

Caching:

- Blog fetches use Next data cache with `revalidate: 3600`
- Tagged fetches are already structured for future cache invalidation improvements

## Blog-Only Mode

This project includes a content-campaign mode where the site behaves like a blog-first property.

When `NEXT_PUBLIC_BLOG_ONLY_MODE=true`:

- `/` redirects to `/blog`
- Non-blog application routes are redirected to `/blog` through `proxy.ts`
- Static assets, Next internals, and API routes continue to work
- The WhatsApp floating button is hidden

This is useful when you want a simplified acquisition funnel centered on articles instead of the full marketing site.

## SEO and Analytics

SEO-related behavior already included in the app:

- Global metadata and Open Graph tags in `app/layout.tsx`
- JSON-LD structured data for `FinancialService`
- `next-sitemap` generated sitemap and robots configuration
- Canonical metadata base set to `https://investally.co.in`
- Google site verification file and metadata
- Google Analytics script integration in the root layout

## Image and Asset Handling

Allowed remote image hosts are configured in `next.config.ts`:

- `cdn.sanity.io`
- `lh3.googleusercontent.com`
- `images.unsplash.com`

Sanity article images are resolved through the helper in `lib/sanity.image.ts`.

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Deployment Notes

- Set all environment variables in the hosting platform before building
- Ensure `SITE_URL` matches the final production domain for sitemap correctness
- Keep `SANITY_API_WRITE_TOKEN` server-only
- Run the separate `sanity-studio/` project for editorial management
- If blog content appears empty locally, verify Sanity credentials first

## Common Setup Issue

### Blog likes are failing

The like endpoint requires a Sanity write token.

1. Create an API token in the Sanity project with editor permissions.
2. Add it to `nextjs-app/.env.local` as:

```env
SANITY_API_WRITE_TOKEN=your_token_here
```

3. Restart the dev server.

Without this token, the site can still read blog content, but the like API will fail.

## Related Workspace

This repository also contains:

- `sanity-studio/` - Sanity Studio used to manage content
- design and archive folders used during website iteration and content planning

If you are onboarding to the full project, start the frontend here and keep the studio available whenever blog schema or content updates are needed.
