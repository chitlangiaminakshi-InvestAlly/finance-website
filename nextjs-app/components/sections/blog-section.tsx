import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts, getAllCategories } from "@/lib/sanity.api";
import { urlForImage } from "@/lib/sanity.image";

export default async function BlogSection() {
  // Fetch posts and categories from Sanity
  const allPosts = await getAllPosts();
  const sanityCategories = await getAllCategories();

  // Get featured post (first post with featured flag, or first post)
  const featuredPost = allPosts.find(post => post.featured) || allPosts[0];

  // Get latest 6 posts (excluding featured if it's in the list)
  const blogPosts = allPosts
    .filter(post => post._id !== featuredPost?._id)
    .slice(0, 6);

  // Build categories list
  const categories = ["All Topics", ...sanityCategories.map(cat => cat.title)];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Learn & Grow</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Financial <span className="gradient-text">Knowledge Center</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering you with insights, tips, and strategies to make smarter financial decisions.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-6 py-2 font-${index === 0 ? 'semibold' : 'medium'} rounded-full border-2 transition-all duration-300 ${
                index === 0
                  ? 'bg-teal-600 text-white border-teal-600 hover:bg-teal-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-teal-600 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Featured</span>
                <h3 className="text-3xl md:text-4xl font-black mb-4">{featuredPost.title}</h3>
                <p className="text-teal-50 mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6">
                  {featuredPost.author?.image?.asset ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={urlForImage(featuredPost.author.image).width(48).height(48).url()}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center font-bold text-teal-800 mr-3">
                      {featuredPost.author?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'UN'}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{featuredPost.author?.name || 'Anonymous'}</p>
                    <p className="text-teal-100 text-sm">{featuredPost.author?.role || 'Author'}</p>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.slug.current}`} className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors duration-300">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="hidden lg:block relative">
                {featuredPost.mainImage?.asset ? (
                  <Image
                    src={urlForImage(featuredPost.mainImage).width(800).height(600).url()}
                    alt={featuredPost.mainImage.alt || featuredPost.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-teal-400 flex items-center justify-center text-white text-2xl font-bold">
                    Featured Article
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const imageUrl = post.mainImage?.asset ? urlForImage(post.mainImage).width(400).height(300).url() : null;

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
                  <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold">
                    {post.title.substring(0, 30)}...
                  </div>
                )}
                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: post.category?.color || '#0d9488' }}
                  >
                    {post.category?.title || 'Uncategorized'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 hover:text-teal-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">
                      {post.readTime ? `${post.readTime} min read` : 'Read'}
                    </span>
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

        {/* View All Posts */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 rounded-full shadow-lg font-bold">
            <Link href="/blog" className="inline-flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
