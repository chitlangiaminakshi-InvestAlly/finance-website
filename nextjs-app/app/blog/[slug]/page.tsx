import Link from "next/link";
import { ArrowLeft, Bookmark, Share2, ArrowRight, Briefcase, Shield, Home, TrendingUp, Calculator } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
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
                  <span className="inline-block px-4 py-2 bg-teal-100 text-teal-600 font-semibold text-sm rounded-full mb-4">Investing</span>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    Complete Guide to Portfolio Management Services in India
                  </h1>

                  {/* Author & Meta */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-4">
                        RK
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Rajesh Kumar</p>
                        <p className="text-sm text-slate-500">Chief Investment Officer • Feb 1, 2025 • 12 min read</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="p-2 text-slate-600 hover:text-teal-600 transition">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-slate-600 hover:text-teal-600 transition">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="w-full h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-xl mb-12 flex items-center justify-center text-white text-3xl font-bold">
                  Portfolio Management
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    Portfolio Management Services (PMS) has become an increasingly popular investment avenue for high-net-worth individuals in India. With the promise of personalized strategies and professional management, PMS offers a unique blend of flexibility and expertise.
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is Portfolio Management Services?</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Portfolio Management Service is a professional service where qualified and experienced portfolio managers backed by a research team manage equity and equity-related instruments on behalf of clients. Unlike mutual funds, PMS offers direct ownership of securities in your Demat account.
                  </p>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8 rounded-r-lg">
                    <p className="text-slate-900 font-semibold mb-2">Key Highlight:</p>
                    <p className="text-slate-700">
                      PMS requires a minimum investment of ₹50 lakhs as per SEBI regulations, making it suitable for high-net-worth individuals seeking personalized investment strategies.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Types of Portfolio Management Services</h2>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Discretionary PMS</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    In this model, the portfolio manager has complete authority to make investment decisions on behalf of the client. The manager decides which securities to buy, sell, or hold based on the investment strategy agreed upon.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Non-Discretionary PMS</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Here, the portfolio manager provides investment advice and recommendations, but the final decision rests with the client. The manager executes trades only after receiving explicit approval.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Advisory PMS</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    In this model, the portfolio manager simply provides advisory services. The client retains complete control over investment decisions and execution.
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Benefits of PMS</h2>
                  <ul className="list-disc list-inside space-y-3 text-slate-700 mb-8">
                    <li><strong>Personalized Strategy:</strong> Investment approach tailored to your risk profile and goals</li>
                    <li><strong>Direct Ownership:</strong> Securities are held in your name in your Demat account</li>
                    <li><strong>Professional Management:</strong> Expert fund managers with proven track records</li>
                    <li><strong>Transparency:</strong> Complete visibility into portfolio holdings and transactions</li>
                    <li><strong>Tax Efficiency:</strong> Better control over tax implications through strategic timing</li>
                    <li><strong>Customization:</strong> Ability to exclude specific sectors or stocks as per preferences</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Portfolio Management Services offer a compelling investment option for wealthy individuals seeking professional management with personalization. However, it's crucial to choose the right PMS provider based on their track record, investment philosophy, and fee structure.
                  </p>

                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl text-white mt-12">
                    <h3 className="text-2xl font-bold mb-4">Ready to explore PMS for your portfolio?</h3>
                    <p className="mb-6">Schedule a free consultation with our investment experts to discuss if PMS is right for you.</p>
                    <Button asChild className="bg-white text-teal-600 hover:bg-teal-50">
                      <Link href="/#contact" className="inline-flex items-center">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-600 mb-3">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">PMS</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">Portfolio Management</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">Investing</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">Wealth Creation</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">SEBI</span>
                  </div>
                </div>
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
