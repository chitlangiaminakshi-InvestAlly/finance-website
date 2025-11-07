import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const categories = ["All Topics", "Investing", "Insurance", "Loans", "Tax Planning", "Retirement"];

  const blogPosts = [
    {
      image: "Investing+Tips",
      category: "Investing",
      categoryColor: "text-teal-600",
      title: "5 Simple Rules of Successful Investing for Beginners",
      excerpt: "Learn the foundational principles that can help you start your investment journey with confidence...",
      readTime: "5 min read"
    },
    {
      image: "Insurance+Guide",
      category: "Insurance",
      categoryColor: "text-green-600",
      title: "How Much Life Insurance Do You Really Need?",
      excerpt: "Calculate your insurance needs based on your family's requirements and financial goals...",
      readTime: "7 min read"
    },
    {
      image: "Home+Loans",
      category: "Loans",
      categoryColor: "text-blue-600",
      title: "Home Loan Guide: Everything First-Time Buyers Need to Know",
      excerpt: "From eligibility to EMI calculation, understand everything about home loans in India...",
      readTime: "10 min read"
    },
    {
      image: "Tax+Saving",
      category: "Tax Planning",
      categoryColor: "text-purple-600",
      title: "Top 10 Tax-Saving Investment Options Under Section 80C",
      excerpt: "Maximize your tax savings with these government-approved investment instruments...",
      readTime: "8 min read"
    },
    {
      image: "Retirement",
      category: "Retirement",
      categoryColor: "text-orange-600",
      title: "Building Your Retirement Corpus: A Step-by-Step Guide",
      excerpt: "Start planning for a comfortable retirement today with the right investment strategy...",
      readTime: "12 min read"
    },
    {
      image: "Mutual+Funds",
      category: "Investing",
      categoryColor: "text-pink-600",
      title: "SIP vs Lump Sum: Which Investment Strategy is Right for You?",
      excerpt: "Compare systematic investment plans with lump sum investments to find the best approach...",
      readTime: "6 min read"
    }
  ];

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

        {/* Featured Article */}
        <div className="mb-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Featured</span>
              <h3 className="text-3xl md:text-4xl font-black mb-4">Complete Guide to Portfolio Management Services in India</h3>
              <p className="text-teal-50 mb-6 text-lg">Discover how PMS can help you build wealth through professionally managed, personalized investment strategies. Learn about benefits, costs, and how to get started.</p>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center font-bold text-teal-800 mr-3">
                  RK
                </div>
                <div>
                  <p className="font-semibold">Rajesh Kumar</p>
                  <p className="text-teal-100 text-sm">Chief Investment Officer</p>
                </div>
              </div>
              <Link href="/blog/portfolio-management-guide" className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition">
                Read Full Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-full bg-teal-400 flex items-center justify-center text-white text-2xl font-bold">
                Featured Article
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className={`w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold`}>
                {post.image.replace(/\+/g, ' ')}
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold uppercase tracking-wider ${post.categoryColor}`}>{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 hover:text-teal-600 transition">
                  <Link href={`/blog/post-${index + 1}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                  <Link href={`/blog/post-${index + 1}`} className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
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
