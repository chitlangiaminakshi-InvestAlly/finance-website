# InvestAlly Finance Website

Production website workspace for InvestAlly, centered around a Next.js frontend and a separate Sanity Studio for content management.

This repository contains the public marketing website, Sanity-backed blog flow, supporting design artifacts, and internal implementation notes used during site iteration.

## Workspace Overview

The main application is in `nextjs-app/`. That is the customer-facing Next.js site. The CMS authoring environment lives in `sanity-studio/`.

Key responsibilities of this workspace:

- Render the public marketing website
- Fetch and display blog content from Sanity
- Generate SEO metadata, sitemap, robots rules, and structured data
- Support article likes and sharing
- Allow the frontend to run in an optional blog-only mode

## Repository Structure

```text
finance-website/
├── README.md
├── nextjs-app/                     # Main Next.js frontend
│   ├── app/                        # App Router pages and API routes
│   ├── components/                 # UI, sections, blog helpers
│   ├── hooks/                      # Responsive hooks
│   ├── lib/                        # Sanity config, queries, data helpers
│   ├── public/                     # Static public assets
│   ├── private/                    # Internal notes, audits, archive
│   ├── next.config.ts
│   ├── next-sitemap.config.js
│   ├── proxy.ts
│   └── .env.example
├── sanity-studio/                  # Sanity CMS studio
├── solutions-child-page/           # Design/reference artifact
├── solutions-design/               # Design/reference artifact
├── team-page/                      # Design/reference artifact
└── assorted images/docs/html files # Source/reference materials
```

## Main App

The production frontend is a Next.js 16 App Router application built with:

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Radix UI and shadcn/ui-style primitives
- Sanity via `next-sanity`
- `next-sitemap`

Main features:

- Marketing pages for home, about, services, solutions, and calculators
- Sanity-backed blog listing and blog article pages
- Static blog slug generation
- Portable rich text rendering
- Blog like endpoint backed by a server-side Sanity write token
- JSON-LD structured data, metadata, and sitemap generation
- Google Analytics integration
- WhatsApp floating CTA
- Blog-only mode controlled by environment variables

## App Routes

Current frontend route surface in `nextjs-app/`:

- `/`
- `/about-us`
- `/services`
- `/solutions`
- `/calculators`
- `/blog`
- `/blog/[slug]`
- `/api/blog/like`

## Getting Started

### Prerequisites

- Node.js 20 or later recommended
- npm
- A Sanity project with the required schemas

### Frontend setup

```bash
cd nextjs-app
npm install
```

Create `nextjs-app/.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_WRITE_TOKEN=your_editor_token
SITE_URL=https://investally.co.in
NEXT_PUBLIC_BLOG_ONLY_MODE=false
```

Start the frontend:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
cd nextjs-app
npm run build
npm start
```

`postbuild` also runs `next-sitemap`.

## Environment Variables

Environment variables currently used by the frontend:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset, typically `production`
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version for queries
- `SANITY_API_WRITE_TOKEN` - required for `/api/blog/like`
- `SITE_URL` - canonical URL used for sitemap generation
- `NEXT_PUBLIC_BLOG_ONLY_MODE` - redirects most routes to `/blog` when `true`

## Sanity Integration

The blog content flow is wired through `nextjs-app/lib/`:

- `sanity.config.ts` defines shared config
- `sanity.client.ts` defines read and write clients
- `sanity.queries.ts` holds GROQ queries
- `sanity.api.ts` provides app-facing fetch helpers

The like API uses the write client and increments `likeCount` on a Sanity post document.

The separate `sanity-studio/` folder contains the editorial studio and schema definitions.

## Blog-Only Mode

When `NEXT_PUBLIC_BLOG_ONLY_MODE=true`:

- `/` redirects to `/blog`
- most non-blog routes are redirected to `/blog` through `nextjs-app/proxy.ts`
- API routes and static assets continue to work
- the WhatsApp floating button is hidden

## SEO and Analytics

The frontend already includes:

- global metadata and Open Graph configuration
- JSON-LD structured data for a financial services business
- sitemap and robots generation through `next-sitemap`
- Google site verification
- Google Analytics integration

## Common Setup Issue

If article likes fail, the usual cause is a missing Sanity write token.

Add this to `nextjs-app/.env.local`:

```env
SANITY_API_WRITE_TOKEN=your_token_here
```

Then restart the dev server.

## Useful Commands

Frontend:

```bash
cd nextjs-app
npm run dev
npm run build
npm run start
npm run lint
```

Sanity Studio:

```bash
cd sanity-studio
npm install
npm run dev
```

## Notes

- `nextjs-app/private/` contains internal audits, execution notes, and archived assets
- top-level HTML, image, and design folders are reference material and not part of the runtime app
- if local blog content does not load, verify the Sanity environment variables first
