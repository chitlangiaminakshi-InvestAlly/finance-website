import Link from "next/link";
import { Briefcase, Shield, Home, Check, ArrowRight, CreditCard, TrendingUp, Umbrella, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const mainProducts = [
    {
      icon: TrendingUp,
      title: "Wealth Building",
      description: "We transform your investments into wealth-building engines through Mutual Funds and Portfolio Management Services. Our experts align your portfolio with life goals, providing strategic guidance and quarterly reviews to keep your investments on track.",
      features: [
        "Mutual Funds & SIP Plans",
        "Portfolio Management (PMS)",
        "Quarterly Portfolio Reviews",
      ],
      minLabel: "",
      minValue: "",
      gradient: "from-teal-50 to-teal-100",
      border: "border-teal-200",
      iconBg: "bg-teal-600",
      iconColor: "text-white",
      checkColor: "text-teal-600",
      buttonBg: "bg-teal-600 hover:bg-teal-700",
    },
    {
      icon: Shield,
      title: "Insurance & Protection",
      description: "Your protection matters more than our commission. We decode complex policies, ensuring you're covered for real risks—not oversold. From selection to claims, we're your advocate, making insurance work for you.",
      features: [
        "Term & Health Insurance",
        "Critical Illness Coverage",
        "Child & Family Plans",
      ],
      minLabel: "",
      minValue: "",
      gradient: "from-green-50 to-green-100",
      border: "border-green-200",
      iconBg: "bg-green-600",
      iconColor: "text-white",
      checkColor: "text-green-600",
      buttonBg: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Home,
      title: "Loans & Financing",
      description: "Whether you're buying your dream home or need personal financing, we secure the best rates and fastest approvals. Our network and expertise turn loan applications from headaches into stepping stones.",
      features: [
        "Home Loans - 8.50% p.a. onwards",
        "Personal Loans - Quick Approvals",
        "Up to 30 Years Tenure",
      ],
      minLabel: "",
      minValue: "",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
      iconColor: "text-white",
      checkColor: "text-blue-600",
      buttonBg: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  const additionalServices = [
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Rewards & Cashback",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "SIP from ₹500/month",
      color: "text-teal-600",
    },
    {
      icon: Umbrella,
      title: "Tax Planning",
      description: "Save under 80C",
      color: "text-orange-600",
    },
    {
      icon: Users,
      title: "Retirement Plans",
      description: "Secure Your Future",
      color: "text-indigo-600",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Comprehensive Financial Solutions
            <br />
            <span className="gradient-text">For Every Need</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From wealth creation to protection, we offer end-to-end financial services tailored for Indian families.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mainProducts.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-8 card-hover border-2 ${product.border}`}
            >
              <div className={`${product.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <product.icon className={`${product.iconColor} h-8 w-8`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
              <p className="text-slate-700 mb-6">{product.description}</p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <Check className={`${product.checkColor} h-5 w-5 mr-2 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center justify-between pt-6 border-t ${product.border}`}>
                <div>
                  {product.minLabel && <p className="text-sm text-slate-600">{product.minLabel}</p>}
                  {product.minValue && <p className={`text-xl font-bold ${product.checkColor}`}>{product.minValue}</p>}
                </div>
                <Button asChild className={`${product.buttonBg} text-white rounded-lg`}>
                  <Link href="/services" className="inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-slate-900">
            At <span className="text-teal-600">InvestAlly</span>, your financial success is our only agenda.
          </p>
        </div>
      </div>
    </section>
  );
}
