# Sanity.io Quick Start Guide

Get your blog up and running with Sanity CMS in 15 minutes!

---

## ✅ What's Already Set Up

The integration files are ready in your Next.js project:
- ✅ Dependencies installed (`next-sanity`, `@sanity/image-url`, `@portabletext/react`)
- ✅ Sanity client configured (`lib/sanity.client.ts`)
- ✅ Image URL builder ready (`lib/sanity.image.ts`)
- ✅ TypeScript types defined (`lib/sanity.types.ts`)
- ✅ GROQ queries prepared (`lib/sanity.queries.ts`)
- ✅ API functions created (`lib/sanity.api.ts`)
- ✅ PortableText component for rendering content (`components/portable-text.tsx`)

---

## 🚀 Steps to Complete Integration

### Step 1: Create Sanity Account & Project (5 minutes)

1. Go to [sanity.io](https://www.sanity.io) and create a free account
2. Click "Create new project"
3. Name it: **"investally-blog"**
4. Dataset: **"production"**
5. Template: **"Clean project"** (no predefined schemas)

### Step 2: Set Up Sanity Studio (5 minutes)

```bash
# Navigate to project root
cd C:\Personal\Calling\Cimulink\Projects\finance-website

# Create studio directory
mkdir sanity-studio
cd sanity-studio

# Initialize Sanity (use your project ID from step 1)
npx sanity@latest init

# Follow prompts:
# - Select existing project: investally-blog
# - Dataset: production
# - Output path: current directory
# - Template: Clean project
```

### Step 3: Add Environment Variables (2 minutes)

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cd ../nextjs-app
   cp .env.local.example .env.local
   ```

2. Fill in your Sanity credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"  # From Sanity dashboard
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
   ```

**Finding Your Project ID:**
- Go to [sanity.io/manage](https://www.sanity.io/manage)
- Select "investally-blog"
- Copy Project ID

### Step 4: Create Content Schemas (3 minutes)

Create these 4 schema files in `sanity-studio/schemas/`:

**1. `blockContent.ts`** - Rich text editor configuration
**2. `author.ts`** - Author profiles
**3. `category.ts`** - Blog categories
**4. `blogPost.ts`** - Blog post structure

Then update `schemas/index.ts`:

```typescript
import blockContent from './blockContent'
import category from './category'
import blogPost from './blogPost'
import author from './author'

export const schemaTypes = [blogPost, author, category, blockContent]
```

**💡 TIP**: Copy the complete schemas from `SANITY_INTEGRATION_GUIDE.md` → "Content Modeling" section

### Step 5: Start Sanity Studio (1 minute)

```bash
cd ../sanity-studio
npm run dev

# Studio will open at http://localhost:3333
```

### Step 6: Add Sample Content (Optional)

In Sanity Studio:
1. Create a **Category** (e.g., "Portfolio Management")
2. Create an **Author** (e.g., "Adarsh Katta")
3. Create a **Blog Post** with:
   - Title
   - Slug (auto-generated)
   - Excerpt
   - Main image
   - Category & Author
   - Body content
   - Mark as "Featured" (optional)

### Step 7: Test the Integration

Your Next.js app is ready to fetch from Sanity!

**Example usage in a page:**

```typescript
// app/blog/page.tsx
import { getAllPosts } from '@/lib/sanity.api'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1>Blog Posts from Sanity</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## 📚 Key Sanity Functions Available

### Fetching Content

```typescript
import {
  getAllPosts,
  getFeaturedPost,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
  getRecentPosts,
} from '@/lib/sanity.api'

// Get all posts
const posts = await getAllPosts()

// Get single post
const post = await getPostBySlug('my-post-slug')

// Get featured post
const featured = await getFeaturedPost()

// Get posts by category
const categoryPosts = await getPostsByCategory('portfolio-management')
```

### Working with Images

```typescript
import { urlForImage, getImageUrl } from '@/lib/sanity.image'
import Image from 'next/image'

// In your component
<Image
  src={getImageUrl(post.mainImage, 800, 600)}
  alt={post.mainImage.alt}
  width={800}
  height={600}
/>
```

### Rendering Rich Text

```typescript
import PortableText from '@/components/portable-text'

// In your component
<PortableText value={post.body} />
```

---

## 🎯 Next Steps

### Update Existing Blog Pages

You have these pages to update:

1. **`app/blog/page.tsx`** - Blog listing page
   - Use `getAllPosts()` to fetch posts
   - Use `getAllCategories()` for category filter

2. **`app/blog/[slug]/page.tsx`** - Individual blog post page
   - Use `getPostBySlug(params.slug)` to fetch post
   - Use `<PortableText>` component to render body

3. **`components/sections/blog-section.tsx`** - Homepage blog section
   - Use `getFeaturedPost()` for featured article
   - Use `getAllPosts()` with slice for recent posts

### Optional Enhancements

- **SEO**: Use post.seo fields for metadata
- **Sitemap**: Generate from `getAllPostSlugs()`
- **Related Posts**: Use `getRelatedPosts()` function
- **Search**: Implement with Sanity's GROQ queries
- **Draft Mode**: Preview unpublished content

---

## 🔧 Troubleshooting

### "Project ID not found"
✅ Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`

### "Cannot fetch data"
✅ Ensure Sanity Studio is running and has content
✅ Check project ID and dataset name match

### "Images not loading"
✅ Verify image URLs with `urlForImage()`
✅ Check CORS settings in Sanity dashboard

### "Module not found: next-sanity"
✅ Run `npm install` in nextjs-app directory
✅ Restart dev server

---

## 📖 Resources

- **Full Integration Guide**: `SANITY_INTEGRATION_GUIDE.md`
- **Sanity Docs**: [sanity.io/docs](https://www.sanity.io/docs)
- **GROQ Cheat Sheet**: [sanity.io/docs/query-cheat-sheet](https://www.sanity.io/docs/query-cheat-sheet)
- **Next.js Integration**: [github.com/sanity-io/next-sanity](https://github.com/sanity-io/next-sanity)

---

## ⏱️ Time Estimate

- ✅ **Already Done**: Integration files created (0 min)
- ⏳ **To Do**:
  - Create Sanity account & project: **5 min**
  - Set up Sanity Studio: **5 min**
  - Add environment variables: **2 min**
  - Create content schemas: **3 min**
  - Add sample content: **5 min** (optional)

**Total: ~15 minutes** (excluding optional content creation)

---

*Ready to start? Follow Step 1 above! 🚀*
