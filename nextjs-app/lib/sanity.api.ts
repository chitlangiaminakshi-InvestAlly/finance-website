import { sanityFetch } from './sanity.client'
import {
  blogPostsQuery,
  featuredPostQuery,
  blogPostBySlugQuery,
  postsByCategoryQuery,
  categoriesQuery,
  allPostSlugsQuery,
  recentPostsQuery,
  relatedPostsQuery,
} from './sanity.queries'
import type { BlogPost, Category } from './sanity.types'

/**
 * Get all blog posts ordered by publish date (newest first)
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  return sanityFetch({
    query: blogPostsQuery,
    tags: ['blogPost'],
  })
}

/**
 * Get the featured blog post
 */
export async function getFeaturedPost(): Promise<BlogPost | null> {
  return sanityFetch({
    query: featuredPostQuery,
    tags: ['blogPost', 'featured'],
  })
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug },
    tags: ['blogPost', `blogPost:${slug}`],
  })
}

/**
 * Get all blog posts in a specific category
 */
export async function getPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  return sanityFetch({
    query: postsByCategoryQuery,
    params: { categorySlug },
    tags: ['blogPost', `category:${categorySlug}`],
  })
}

/**
 * Get all categories
 */
export async function getAllCategories(): Promise<Category[]> {
  return sanityFetch({
    query: categoriesQuery,
    tags: ['category'],
  })
}

/**
 * Get all post slugs (for static generation)
 */
export async function getAllPostSlugs(): Promise<string[]> {
  return sanityFetch({
    query: allPostSlugsQuery,
    tags: ['blogPost'],
  })
}

/**
 * Get recent posts (for sidebar)
 */
export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  return sanityFetch({
    query: recentPostsQuery,
    tags: ['blogPost'],
  })
}

/**
 * Get related posts by category and tags
 */
export async function getRelatedPosts(
  currentPostId: string,
  categoryId: string,
  tags: string[] = []
): Promise<BlogPost[]> {
  return sanityFetch({
    query: relatedPostsQuery,
    params: { currentPostId, categoryId, tags },
    tags: ['blogPost'],
  })
}
