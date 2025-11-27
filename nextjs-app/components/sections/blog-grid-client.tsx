"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import { urlForImage } from "@/lib/sanity.image";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage?: {
    asset: any;
    alt?: string;
  };
  category?: {
    title: string;
    color?: string;
  };
  readTime?: number;
  body?: any;
}

interface BlogGridClientProps {
  posts: BlogPost[];
  categories: string[];
  isHomePage?: boolean;
}

export default function BlogGridClient({ posts, categories, isHomePage = false }: BlogGridClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const postsPerPage = 6;

  // Detect screen size after mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // On home page, limit posts based on screen size
    if (isHomePage) {
      // Show 6 on server, then adjust on client after mount
      const limit = !mounted ? 6 : (isMobile ? 3 : 6);
      return filtered.slice(0, limit);
    }

    // Filter by category (only on blog page)
    if (selectedCategory !== "All Topics") {
      filtered = filtered.filter(
        (post) => post.category?.title === selectedCategory
      );
    }

    // Filter by search query (only on blog page)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt?.toLowerCase().includes(query) || false;

        // Search in body text (if available)
        let bodyMatch = false;
        if (post.body) {
          const bodyText = extractTextFromBody(post.body);
          bodyMatch = bodyText.toLowerCase().includes(query);
        }

        return titleMatch || excerptMatch || bodyMatch;
      });
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery, isHomePage, isMobile, mounted]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Search Bar - Only show on blog page */}
      {!isHomePage && (
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles by title, content, or topic..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-full focus:border-teal-600 focus:outline-none text-slate-700 placeholder-slate-400"
            />
          </div>
        </div>
      )}

      {/* Categories - Only show on blog page */}
      {!isHomePage && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 font-medium rounded-full border-2 transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white border-teal-600 hover:bg-teal-700"
                  : "bg-white text-slate-700 border-slate-200 hover:border-teal-600 hover:text-teal-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Results count - Only show on blog page */}
      {!isHomePage && (searchQuery || selectedCategory !== "All Topics") && (
        <div className="text-center mb-6 text-slate-600">
          Found {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </div>
      )}

      {/* Blog Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => {
            const imageUrl = post.mainImage?.asset
              ? urlForImage(post.mainImage).width(400).height(300).url()
              : null;

            return (
              <article
                key={post._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                {imageUrl ? (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold">
                    {post.title.substring(0, 30)}...
                  </div>
                )}
                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: post.category?.color || "#0d9488" }}
                  >
                    {post.category?.title || "Uncategorized"}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 hover:text-teal-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">
                      {post.readTime ? `${post.readTime} min read` : "Read"}
                    </span>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Topics");
              setCurrentPage(1);
            }}
            className="mt-4 text-teal-600 hover:text-teal-700 font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Pagination - Only show on blog page */}
      {!isHomePage && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 1
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === page
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

// Helper function to extract text from Portable Text body
function extractTextFromBody(body: any): string {
  if (!body || !Array.isArray(body)) return "";

  return body
    .map((block: any) => {
      if (block._type === "block" && block.children) {
        return block.children
          .map((child: any) => child.text || "")
          .join(" ");
      }
      return "";
    })
    .join(" ");
}
