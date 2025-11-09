import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, TrendingUp, Briefcase, Shield, Home, Calculator, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity.api";
import { urlForImage } from "@/lib/sanity.image";
import PortableText from "@/components/portable-text";
import LikeButton from "@/components/like-button";
import ShareButton from "@/components/share-button";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage?.asset ? urlForImage(post.mainImage).width(1200).height(600).url() : null;
  const authorImageUrl = post.author?.image?.asset ? urlForImage(post.author.image).width(48).height(48).url() : null;
  const authorInitials = post.author?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'UN';
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
      <Navigation />
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Content (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <article>
                <div className="mb-8">
                  <span
                    className="inline-block px-4 py-2 font-semibold text-sm rounded-full mb-4"
                    style={{
                      backgroundColor: `${post.category?.color}15`,
                      color: post.category?.color || '#0d9488'
                    }}
                  >
                    {post.category?.title || 'Uncategorized'}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Author & Meta */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8 flex-wrap gap-4">
                    <div className="flex items-center">
                      {authorImageUrl ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={authorImageUrl}
                            alt={post.author?.name || 'Author'}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-4">
                          {authorInitials}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-slate-900">{post.author?.name || 'Anonymous'}</p>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                          {post.author?.role && <span>{post.author.role}</span>}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formattedDate}
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime} min read
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <LikeButton postId={post._id} initialLikeCount={post.likeCount || 0} />
                      <ShareButton
                        url={`/blog/${post.slug.current}`}
                        title={post.title}
                        description={post.excerpt}
                      />
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                {imageUrl ? (
                  <div className="relative w-full h-96 rounded-2xl shadow-xl mb-12 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={post.mainImage?.alt || post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-xl mb-12 flex items-center justify-center text-white text-3xl font-bold">
                    {post.title.substring(0, 20)}
                  </div>
                )}

                {/* Article Excerpt */}
                {post.excerpt && (
                  <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                    {post.excerpt}
                  </p>
                )}

                {/* Article Content using PortableText */}
                <PortableText value={post.body} />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-600 mb-3">Tags:</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Sticky Sidebar (Right - 1 column) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Product Metrics 2x2 */}
                <div className="bg-slate-50 rounded-xl shadow-lg p-6">
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
                <div className="bg-slate-50 rounded-xl shadow-lg p-6">
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
