"use client";

import { useState, useMemo } from "react";
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
  author?: {
    name: string;
    image?: {
      asset: any;
    };
  };
  publishedAt: string;
  readTime?: number;
  body?: any;
}

interface BlogListingClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogListingClient({ posts, categories }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== "All Articles") {
      filtered = filtered.filter(
        (post) => post.category?.title === selectedCategory
      );
    }

    // Filter by search query
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
  }, [posts, selectedCategory, searchQuery]);

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
      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles by title, content, or topic..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-full focus:border-teal-600 focus:outline-none text-slate-700 placeholder-slate-400 bg-white"
          />
        </div>
      </div>

      {/* Categories Filter */}
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

      {/* Results count */}
      {(searchQuery || selectedCategory !== "All Articles") && (
        <div className="text-center mb-6 text-slate-600">
          Found {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </div>
      )}

      {/* Blog Grid */}
      {paginatedPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {paginatedPosts.map((post) => {
              const imageUrl = post.mainImage?.asset
                ? urlForImage(post.mainImage).width(600).height(400).url()
                : null;
              const authorInitials = post.author?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'UN';
              const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });

              return (
                <article key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
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
                    <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold text-lg">
                      {post.title.substring(0, 30)}...
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: post.category?.color || '#0d9488' }}
                      >
                        {post.category?.title || 'Uncategorized'}
                      </span>
                      <span className="text-xs text-slate-500">{formattedDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-teal-600 transition">
                      <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center">
                        {post.author?.image?.asset ? (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={urlForImage(post.author.image).width(32).height(32).url()}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-2 text-xs">
                            {authorInitials}
                          </div>
                        )}
                        <span className="text-sm text-slate-600">{post.author?.name || 'Anonymous'}</span>
                      </div>
                      <Link href={`/blog/${post.slug.current}`} className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Articles");
              setCurrentPage(1);
            }}
            className="mt-4 text-teal-600 hover:text-teal-700 font-semibold"
          >
            Clear filters
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
