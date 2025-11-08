import { groq } from 'next-sanity'

// Get all blog posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    mainVideo {
      videoType,
      videoUrl,
      thumbnail {
        asset->
      }
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
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    mainVideo {
      videoType,
      videoUrl,
      thumbnail {
        asset->
      }
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
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    mainVideo {
      videoType,
      videoUrl,
      thumbnail {
        asset->
      }
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
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    mainVideo {
      videoType,
      videoUrl,
      thumbnail {
        asset->
      }
    },
    category->{
      _id,
      title,
      slug,
      color
    },
    author->{
      name,
      role
    },
    publishedAt,
    readTime,
    tags
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

// Get recent posts (for sidebar)
export const recentPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    publishedAt,
    readTime
  }
`

// Get related posts (by category and tags)
export const relatedPostsQuery = groq`
  *[_type == "blogPost" &&
    _id != $currentPostId &&
    (category._ref == $categoryId || count((tags[])[@ in $tags]) > 0)
  ] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    mainVideo {
      videoType,
      videoUrl,
      thumbnail {
        asset->
      }
    },
    category->{
      title,
      color
    },
    publishedAt,
    readTime
  }
`
