import Link from "next/link";
import { ArrowLeft, TrendingUp, Shield, Home, Check, ArrowRight, FileText, BookOpen, PieChart, Heart, DollarSign, CreditCard, Calculator, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: "Our Services - Investally | Comprehensive Financial Solutions",
  description: "Comprehensive financial solutions designed to help you build wealth, protect your family, and achieve your dreams.",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help you build wealth, protect your family, and achieve your dreams.
          </p>
        </div>

        {/* WE FILTER IT FOR YOU Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-teal-200 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                WE FILTER IT <span className="gradient-text">FOR YOU</span>
              </h2>
              <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto font-semibold">
                We help you navigate across a sea of financial products.
              </p>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                There are more than <span className="text-teal-600 font-bold">10,000 financial products</span>. Based on research, our team selects a handful of investment instruments as per your risk profile & life goals.
              </p>
            </div>

            {/* Product Categories */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
              <span className="px-5 py-2.5 bg-white text-teal-700 rounded-full text-sm font-bold shadow-sm border-2 border-teal-200 hover:shadow-md transition-shadow">
                MUTUAL FUNDS
              </span>
              <span className="px-5 py-2.5 bg-white text-green-700 rounded-full text-sm font-bold shadow-sm border-2 border-green-200 hover:shadow-md transition-shadow">
                LIFE INSURANCE
              </span>
              <span className="px-5 py-2.5 bg-white text-blue-700 rounded-full text-sm font-bold shadow-sm border-2 border-blue-200 hover:shadow-md transition-shadow">
                FIXED DEPOSITS
              </span>
              <span className="px-5 py-2.5 bg-white text-purple-700 rounded-full text-sm font-bold shadow-sm border-2 border-purple-200 hover:shadow-md transition-shadow">
                HEALTH INSURANCE
              </span>
              <span className="px-5 py-2.5 bg-white text-indigo-700 rounded-full text-sm font-bold shadow-sm border-2 border-indigo-200 hover:shadow-md transition-shadow">
                ALTERNATIVE INVESTMENT FUNDS
              </span>
              <span className="px-5 py-2.5 bg-white text-orange-700 rounded-full text-sm font-bold shadow-sm border-2 border-orange-200 hover:shadow-md transition-shadow">
                DIGITAL GOLD
              </span>
              <span className="px-5 py-2.5 bg-white text-pink-700 rounded-full text-sm font-bold shadow-sm border-2 border-pink-200 hover:shadow-md transition-shadow">
                PORTFOLIO MANAGEMENT SERVICES
              </span>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (Left - 2 columns) */}
          <div className="lg:col-span-2 space-y-16">

            {/* ===== SECTION 1: WEALTH BUILDING ===== */}
            <section id="wealth-building">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-teal-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mr-5">
                    <TrendingUp className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">Wealth Building</h2>
                    <p className="text-teal-600 font-semibold">Transform Your Financial Future</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Building sustainable wealth requires more than just investing—it demands strategy, discipline, and expert guidance. Our wealth building services are designed to help you grow your money systematically while managing risk effectively.
                </p>

                {/* Services Grid */}
                <div className="space-y-4">
                  {/* Comprehensive Investment Advisory */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-lg p-3 mr-4">
                        <PieChart className="text-teal-600 h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Investment Advisory</h3>

                        {/* Mutual Fund Advisory */}
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-teal-600 mb-2">Mutual Fund Advisory</h4>
                          <p className="text-slate-700">We transform your investments into wealth-building engines. Our experts review your current portfolio, align it with your life goals, and recommend strategic changes with clear explanations. With quarterly reviews, your investments stay on track as your life evolves.</p>
                        </div>

                        {/* AIF (Alternative Investment Funds) */}
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-teal-600 mb-2">Alternative Investment Funds (AIF) Advisory</h4>
                          <p className="text-slate-700">Access exclusive investment opportunities beyond traditional markets. We guide you through sophisticated investment vehicles like Category I, II, and III AIFs, helping you diversify into venture capital, private equity, hedge funds, and structured products tailored for high-net-worth individuals.</p>
                        </div>

                        {/* Portfolio Advisory */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-teal-600 mb-2">Portfolio Management Advisory</h4>
                          <p className="text-slate-700">Get expert guidance on building and managing a holistic investment portfolio. We provide comprehensive advisory across asset classes—equities, debt, gold, real estate, and alternative investments—creating a balanced portfolio strategy aligned with your risk profile and financial objectives.</p>
                        </div>

                        {/* Common Features for All Services */}
                        <div className="pt-4 border-t border-slate-200">
                          <p className="text-sm font-semibold text-slate-900 mb-3">Our Advisory Includes:</p>
                          <ul className="space-y-2">
                            <li className="flex items-center text-slate-600">
                              <Check className="text-teal-600 h-5 w-5 mr-2 flex-shrink-0" />
                              Portfolio Review & Analysis
                            </li>
                            <li className="flex items-center text-slate-600">
                              <Check className="text-teal-600 h-5 w-5 mr-2 flex-shrink-0" />
                              Goal-Aligned Fund Selection
                            </li>
                            <li className="flex items-center text-slate-600">
                              <Check className="text-teal-600 h-5 w-5 mr-2 flex-shrink-0" />
                              Quarterly Performance Reviews
                            </li>
                            <li className="flex items-center text-slate-600">
                              <Check className="text-teal-600 h-5 w-5 mr-2 flex-shrink-0" />
                              SIP Planning & Optimization
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-teal-200">
                  <div className="flex items-center justify-end">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-lg">
                      <Link href="/#contact" className="inline-flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== SECTION 2: INSURANCE & PROTECTION ===== */}
            <section id="insurance-protection">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mr-5">
                    <Shield className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">Insurance & Protection</h2>
                    <p className="text-green-600 font-semibold">Safeguard What Matters Most</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  True financial planning isn't complete without adequate protection. We help you secure your family's future with the right insurance coverage—ensuring you're protected for real risks, not oversold on unnecessary policies.
                </p>

                {/* Disclaimer */}
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 mb-8">
                  <p className="text-sm text-amber-900 font-semibold">
                    Insurance advisory services available. Execution done through licensed partners
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-4">
                  {/* Insurance Advisory */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-3 mr-4">
                        <Heart className="text-green-600 h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Insurance Advisory</h3>
                        <p className="text-slate-700 mb-4">Your protection matters more than our commission. We decode complex policies, ensuring you're covered for real risks—not oversold. From selection to claims, we're your advocate, making insurance work for you.</p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-slate-600">
                            <Check className="text-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Unbiased Policy Recommendations
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Coverage Need Analysis
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Claims Assistance & Support
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-green-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Policy Comparison & Review
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Insurance Types */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-green-200">
                      <div className="flex items-center mb-3">
                        <Check className="text-green-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Term Insurance</h4>
                      </div>
                      <p className="text-sm text-slate-600">Pure life coverage at affordable premiums</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-green-200">
                      <div className="flex items-center mb-3">
                        <Check className="text-green-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Health Insurance</h4>
                      </div>
                      <p className="text-sm text-slate-600">Medical coverage for you and your family</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-green-200">
                      <div className="flex items-center mb-3">
                        <Check className="text-green-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Critical Illness</h4>
                      </div>
                      <p className="text-sm text-slate-600">Financial support during health crises</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-green-200">
                      <div className="flex items-center mb-3">
                        <Check className="text-green-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Child & Family Plans</h4>
                      </div>
                      <p className="text-sm text-slate-600">Secure your children's future</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-green-200">
                  <div className="flex items-center justify-end">
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg">
                      <Link href="/#contact" className="inline-flex items-center">
                        Get Protected
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== SECTION 3: LOANS & FINANCING ===== */}
            <section id="loans-financing">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mr-5">
                    <Home className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">Loans & Financing</h2>
                    <p className="text-blue-600 font-semibold">Fast Approvals, Best Rates</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Whether you're buying your dream home, expanding your business, or need personal financing, we help you secure the best loan options with competitive rates and quick approvals.
                </p>

                {/* Services Grid */}
                <div className="space-y-4">
                  {/* Loan Solutions */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <DollarSign className="text-blue-600 h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Loan Solutions</h3>
                        <p className="text-slate-700 mb-4">Whether you're buying your dream home or fueling business growth, we secure the best rates and fastest approvals. Our network and expertise turn loan applications from headaches into stepping stones.</p>
                        <ul className="space-y-2">
                          <li className="flex items-center text-slate-600">
                            <Check className="text-blue-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Compare Rates Across Banks
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-blue-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Documentation Support
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-blue-600 h-5 w-5 mr-2 flex-shrink-0" />
                            Faster Approval Process
                          </li>
                          <li className="flex items-center text-slate-600">
                            <Check className="text-blue-600 h-5 w-5 mr-2 flex-shrink-0" />
                            End-to-End Assistance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Loan Types */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-5 border border-blue-200">
                      <div className="flex items-center mb-3">
                        <Home className="text-blue-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Home Loans</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Competitive interest rates</p>
                      <p className="text-xs text-slate-500">Flexible tenure options</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-blue-200">
                      <div className="flex items-center mb-3">
                        <CreditCard className="text-blue-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Personal Loans</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Quick approvals</p>
                      <p className="text-xs text-slate-500">Minimal documentation</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-blue-200">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="text-blue-600 h-5 w-5 mr-2" />
                        <h4 className="font-bold text-slate-900">Business Loans</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Fuel your growth</p>
                      <p className="text-xs text-slate-500">Flexible repayment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-200">
                  <div className="flex items-center justify-end">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg">
                      <Link href="/#contact" className="inline-flex items-center">
                        Apply Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* ===== ADDITIONAL SERVICES HIGHLIGHT ===== */}
            <section id="additional-services">
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border-2 border-slate-200">
                <h2 className="text-3xl font-black text-slate-900 mb-6 text-center">Additional Expert Services</h2>
                <p className="text-center text-slate-600 mb-10">Beyond our core offerings, we provide specialized services to complete your financial journey.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Tax Consultancy */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-sm hover:shadow-lg transition">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-3 mr-4">
                        <FileText className="text-orange-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Tax Consultancy</h3>
                        <p className="text-slate-700">As chartered accountants, we speak the language of tax savings fluently. We craft strategies that keep more money in your pocket legally, turning tax planning from a burden into an opportunity.</p>
                      </div>
                    </div>
                  </div>

                  {/* Financial Education */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm hover:shadow-lg transition">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-3 mr-4">
                        <BookOpen className="text-purple-600 h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Education</h3>
                        <p className="text-slate-700">Knowledge empowers wealth. Through easy-to-digest blogs and interactive sessions, we demystify finance. Because when you understand your money, you control your future.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing Statement */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Transform Your Financial Future?</h2>
              <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">At InvestAlly, your financial success is our only agenda. Let's start building your wealth together.</p>
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-black text-lg rounded-lg shadow-lg">
                <Link href="/#contact" className="inline-flex items-center">
                  Book Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>

          {/* ===== STICKY SIDEBAR (Right - 1 column) ===== */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Quick Calculators */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Calculator className="h-5 w-5 text-teal-600 mr-2" />
                  Quick Calculators
                </h3>
                <div className="space-y-3">
                  {/* SIP Calculator */}
                  <Link href="/#calculators" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">SIP Calculator</p>
                        <p className="text-xs text-slate-600">Plan your investments</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>

                  {/* EMI Calculator */}
                  <Link href="/#calculators" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">EMI Calculator</p>
                        <p className="text-xs text-slate-600">Calculate loan EMI</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>

                  {/* Cost Of Delay */}
                  <Link href="/#calculators" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">Cost Of Delay Calculator</p>
                        <p className="text-xs text-slate-600">Plan your future</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Need Expert Advice CTA */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Need Expert Advice?</h3>
                <p className="text-teal-50 text-sm mb-4">Schedule a free consultation with our SEBI-registered advisors.</p>
                <Button asChild className="w-full bg-white text-teal-600 hover:bg-teal-50 font-bold">
                  <Link href="/#contact">Contact Us</Link>
                </Button>
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
