# Sanity.io Integration Guide - Investally Blog

Complete guide to integrate Sanity.io headless CMS for managing blog content in the Investally Next.js application.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Sanity Setup](#sanity-setup)
4. [Next.js Integration](#nextjs-integration)
5. [Content Modeling](#content-modeling)
6. [Fetching Content](#fetching-content)
7. [Deployment](#deployment)
8. [Best Practices](#best-practices)

---

## Overview

### What is Sanity.io?

Sanity.io is a headless CMS that provides:
- Real-time collaborative editing
- Structured content with schemas
- Powerful query language (GROQ)
- Image optimization and CDN
- Version control for content
- Role-based access control

### Why Use Sanity for Investally Blog?

✅ **Content Management**: Non-technical team members can manage blog posts
✅ **Rich Media**: Built-in image optimization and CDN
✅ **Real-time Updates**: Content updates reflect immediately
✅ **SEO-Friendly**: Structured data for better search rankings
✅ **Scalable**: Handles growing content efficiently
✅ **Free Tier**: Generous free plan for starting projects

---

## Prerequisites

Before starting, ensure you have:

- [x] Node.js 18+ installed
- [x] npm or yarn package manager
- [x] Next.js project set up (Investally app)
- [x] Sanity.io account (free at [sanity.io](https://www.sanity.io))

---

## Sanity Setup

### Step 1: Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io)
2. Click "Get started for free"
3. Sign up with GitHub, Google, or email
4. Verify your email address

### Step 2: Install Sanity CLI

```bash
# Install globally
npm install -g @sanity/cli

# Or use with npx (no global install needed)
npx sanity@latest
```

### Step 3: Create Sanity Project

```bash
# Navigate to your project root
cd C:\Personal\Calling\Cimulink\Projects\finance-website

# Create Sanity studio directory
mkdir sanity-studio
cd sanity-studio

# Initialize Sanity project
npx sanity@latest init

# Follow the prompts:
# ✓ Select "Create new project"
# ✓ Project name: "investally-blog"
# ✓ Dataset: "production"
# ✓ Output path: Current directory
# ✓ Template: "Clean project with no predefined schemas"
```

### Step 4: Project Structure

After initialization, you'll have:

```
finance-website/
├── nextjs-app/           # Your Next.js app
└── sanity-studio/        # Sanity CMS studio
    ├── sanity.config.ts  # Studio configuration
    ├── sanity.cli.ts     # CLI configuration
    ├── schemas/          # Content schemas
    │   └── index.ts
    ├── package.json
    └── tsconfig.json
```

---

## Next.js Integration

### Step 1: Install Dependencies

```bash
# Navigate to Next.js app
cd ../nextjs-app

# Install Sanity client packages
npm install next-sanity @sanity/image-url @portabletext/react

# Install Sanity Vision plugin (for testing queries)
npm install --save-dev @sanity/vision
```

**Package Purposes:**
- `next-sanity`: Sanity client optimized for Next.js
- `@sanity/image-url`: Image URL builder for optimized images
- `@portabletext/react`: Render rich text content from Sanity

### Step 2: Environment Variables

Create `.env.local` in your Next.js app:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"

# Optional: For authenticated requests (read tokens)
SANITY_API_READ_TOKEN="your-read-token"

# Optional: For write operations (admin operations)
SANITY_API_WRITE_TOKEN="your-write-token"
```

**Finding Your Project ID:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project "investally-blog"
3. Copy the Project ID from the dashboard

**Creating API Tokens:**
1. In project dashboard, go to "API" tab
2. Click "Add API token"
3. For read token: Select "Viewer" role
4. For write token: Select "Editor" or "Administrator" role
5. Copy and save tokens securely

### Step 3: Create Sanity Configuration

Create `lib/sanity.config.ts`:

```typescript
import { defineConfig } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const sanityConfig = defineConfig({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})
```

### Step 4: Create Sanity Client

Create `lib/sanity.client.ts`:

```typescript
import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity.config'

export const client = createClient(sanityConfig)

export async function sanityFetch<QueryResponse>({
  query,
  tags,
}: {
  query: string
  tags?: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, {}, {
    next: {
      revalidate: 3600, // Cache for 1 hour
      tags,
    },
  })
}
```

### Step 5: Create Image URL Builder

Create `lib/sanity.image.ts`:

```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source).auto('format').fit('max')
}
```

---

## Content Modeling

### Blog Post Schema

Create `sanity-studio/schemas/blogPost.ts`:

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as featured to display it prominently',
      initialValue: false,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
      description: 'Estimated reading time in minutes',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{ type: 'string' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      category: 'category.title',
    },
    prepare(selection) {
      const { author, category } = selection
      return {
        ...selection,
        subtitle: `${category} | By ${author}`,
      }
    },
  },
})
```

### Category Schema

Create `sanity-studio/schemas/category.ts`:

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Tailwind color class (e.g., text-teal-600)',
      initialValue: 'text-teal-600',
    }),
  ],
})
```

### Author Schema

Create `sanity-studio/schemas/author.ts`:

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g., Chief Investment Officer, Financial Advisor',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role',
    },
  },
})
```

### Block Content Schema

Create `sanity-studio/schemas/blockContent.ts`:

```typescript
import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
  ],
})
```

### Update Schema Index

Update `sanity-studio/schemas/index.ts`:

```typescript
import blockContent from './blockContent'
import category from './category'
import blogPost from './blogPost'
import author from './author'

export const schemaTypes = [blogPost, author, category, blockContent]
```

---

## Fetching Content

### Type Definitions

Create `lib/sanity.types.ts`:

```typescript
export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt: string
  }
  category: {
    _id: string
    title: string
    slug: {
      current: string
    }
    color: string
  }
  author: {
    _id: string
    name: string
    slug: {
      current: string
    }
    image?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    role?: string
  }
  publishedAt: string
  body: any[] // Portable Text array
  featured: boolean
  tags?: string[]
  readTime?: number
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color: string
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  bio?: string
  role?: string
}
```

### GROQ Queries

Create `lib/sanity.queries.ts`:

```typescript
import { groq } from 'next-sanity'

// Get all blog posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      slug,
      image {
        asset->
      },
      role
    },
    publishedAt,
    featured,
    tags,
    readTime
  }
`

// Get featured blog post
export const featuredPostQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      slug,
      image {
        asset->
      },
      role
    },
    publishedAt,
    body,
    tags,
    readTime
  }
`

// Get single blog post by slug
export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      _id,
      name,
      slug,
      image {
        asset->
      },
      bio,
      role
    },
    publishedAt,
    body,
    featured,
    tags,
    readTime,
    seo
  }
`

// Get blog posts by category
export const postsByCategoryQuery = groq`
  *[_type == "blogPost" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    category->{
      title,
      slug,
      color
    },
    author->{
      name,
      role
    },
    publishedAt,
    readTime
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`

// Get all post slugs for static generation
export const allPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`
```

### API Functions

Create `lib/sanity.api.ts`:

```typescript
import { sanityFetch } from './sanity.client'
import {
  blogPostsQuery,
  featuredPostQuery,
  blogPostBySlugQuery,
  postsByCategoryQuery,
  categoriesQuery,
  allPostSlugsQuery,
} from './sanity.queries'
import type { BlogPost, Category } from './sanity.types'

export async function getAllPosts(): Promise<BlogPost[]> {
  return sanityFetch({
    query: blogPostsQuery,
    tags: ['blogPost'],
  })
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  return sanityFetch({
    query: featuredPostQuery,
    tags: ['blogPost', 'featured'],
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityFetch({
    query: blogPostBySlugQuery,
    tags: ['blogPost', `blogPost:${slug}`],
  })
}

export async function getPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  return sanityFetch({
    query: postsByCategoryQuery,
    tags: ['blogPost', `category:${categorySlug}`],
  })
}

export async function getAllCategories(): Promise<Category[]> {
  return sanityFetch({
    query: categoriesQuery,
    tags: ['category'],
  })
}

export async function getAllPostSlugs(): Promise<string[]> {
  return sanityFetch({
    query: allPostSlugsQuery,
    tags: ['blogPost'],
  })
}
```

---

## Deployment

### Sanity Studio Deployment

```bash
# Navigate to Sanity studio
cd sanity-studio

# Deploy to Sanity's hosting
npx sanity deploy

# Your studio will be available at:
# https://your-project-name.sanity.studio
```

### Next.js Deployment (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy

### Webhook for Revalidation (Optional)

Set up webhooks to trigger revalidation when content changes:

1. In Sanity dashboard, go to API → Webhooks
2. Add new webhook:
   - **URL**: `https://your-site.com/api/revalidate`
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type == "blogPost"`
3. Save secret for verification

Create webhook handler `app/api/revalidate/route.ts`:

```typescript
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  // Verify webhook secret
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const type = body._type

    // Revalidate based on content type
    if (type === 'blogPost') {
      revalidateTag('blogPost')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}
```

---

## Best Practices

### 1. Content Strategy

✅ **Use descriptive titles**: Keep under 60 characters for SEO
✅ **Write compelling excerpts**: 150-200 characters
✅ **Add alt text to images**: Important for accessibility and SEO
✅ **Tag appropriately**: Use consistent, relevant tags
✅ **Set featured posts**: Highlight important content

### 2. Performance

✅ **Enable CDN**: Use `useCdn: true` in production
✅ **Implement caching**: Use Next.js revalidation strategies
✅ **Optimize images**: Use Sanity's image pipeline
✅ **Lazy load images**: Use Next.js Image component
✅ **Paginate results**: Don't fetch all posts at once

### 3. SEO

✅ **Fill SEO fields**: Meta title, description, keywords
✅ **Use structured data**: Add JSON-LD for rich snippets
✅ **Create sitemap**: Generate from Sanity content
✅ **Optimize URLs**: Use clean, descriptive slugs
✅ **Set canonical URLs**: Prevent duplicate content issues

### 4. Security

✅ **Use read tokens**: For public data access
✅ **Protect write tokens**: Never expose in client code
✅ **Verify webhooks**: Use secrets for webhook endpoints
✅ **Set CORS policies**: Restrict API access
✅ **Review permissions**: Use appropriate roles

### 5. Development Workflow

✅ **Use separate datasets**: development, staging, production
✅ **Version control schemas**: Track schema changes in Git
✅ **Test locally**: Use `npm run dev` in studio
✅ **Preview content**: Use draft mode for unpublished content
✅ **Document schemas**: Add helpful descriptions to fields

---

## Troubleshooting

### Common Issues

**Issue**: "Project not found"
**Solution**: Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct

**Issue**: "Dataset not found"
**Solution**: Ensure dataset exists in Sanity dashboard

**Issue**: "CORS error"
**Solution**: Add your domain to CORS origins in Sanity settings

**Issue**: "Images not loading"
**Solution**: Check image URL builder configuration

**Issue**: "Content not updating"
**Solution**: Clear Next.js cache or check revalidation settings

---

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js Integration](https://www.sanity.io/plugins/next-sanity)
- [Sanity Studio Docs](https://www.sanity.io/docs/sanity-studio)
- [Community Slack](https://slack.sanity.io/)

---

## Next Steps

After completing this guide:

1. ✅ Create sample blog posts in Sanity Studio
2. ✅ Update blog pages to fetch from Sanity
3. ✅ Test all functionality locally
4. ✅ Deploy both studio and Next.js app
5. ✅ Set up webhooks for auto-revalidation
6. ✅ Train content editors on using Studio

---

*Last Updated: 2025-11-07*
*Version: 1.0*
