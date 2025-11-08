import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Briefcase, Shield, Home, TrendingUp, Calculator } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getAllPosts, getAllCategories } from "@/lib/sanity.api";
import { urlForImage } from "@/lib/sanity.image";

export default async function BlogListingPage() {
  // Fetch posts and categories from Sanity
  const blogPosts = await getAllPosts();
  const sanityCategories = await getAllCategories();

  // Add "All Articles" to the beginning of categories
  const categories = ["All Articles", ...sanityCategories.map(cat => cat.title)];

  return (
    <>
      <Navigation />
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Financial <span className="gradient-text">Knowledge Center</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of articles, guides, and insights to help you make informed financial decisions.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-6 py-2 font-${index === 0 ? 'semibold' : 'medium'} rounded-full border-2 transition ${
                  index === 0
                    ? 'bg-teal-600 text-white border-teal-600 hover:bg-teal-700'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Grid (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {blogPosts.length === 0 ? (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-slate-600 text-lg mb-4">No blog posts found.</p>
                    <p className="text-slate-500">Create your first blog post in Sanity Studio!</p>
                  </div>
                ) : (
                  blogPosts.map((post) => {
                    const imageUrl = post.mainImage?.asset ? urlForImage(post.mainImage).width(600).height(400).url() : null;
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
                  })
                )}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition">1</button>
                <button className="px-4 py-2 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600 transition">2</button>
                <button className="px-4 py-2 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600 transition">3</button>
                <button className="px-4 py-2 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600 transition">Next</button>
              </div>
            </div>

            {/* Sticky Sidebar (Right - 1 column) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Product Metrics 2x2 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                    Our Products
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/#products" className="group bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-teal-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Briefcase className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">PMS</p>
                      <p className="text-xs text-slate-600">₹50L+ min</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Shield className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Insurance</p>
                      <p className="text-xs text-slate-600">₹500/mo</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Home className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Loans</p>
                      <p className="text-xs text-slate-600">8.5% p.a.</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Mutual Funds</p>
                      <p className="text-xs text-slate-600">SIP ₹500+</p>
                    </Link>
                  </div>
                </div>

                {/* Quick Calculators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Calculator className="h-5 w-5 text-teal-600 mr-2" />
                    Quick Calculators
                  </h3>
                  <div className="space-y-3">
                    <Link href="/#calculators" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">SIP Calculator</p>
                          <p className="text-xs text-slate-600">Plan your investments</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>

                    <Link href="/#calculators" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">EMI Calculator</p>
                          <p className="text-xs text-slate-600">Calculate loan EMI</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Need Expert Advice?</h3>
                  <p className="text-teal-50 text-sm mb-4">Get personalized financial guidance from our SEBI-registered experts.</p>
                  <Link href="/#contact" className="block w-full px-4 py-3 bg-white text-teal-600 font-bold text-center rounded-lg hover:bg-teal-50 transition">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
