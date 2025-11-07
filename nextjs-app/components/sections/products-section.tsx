import Link from "next/link";
import { Briefcase, Shield, Home, Check, ArrowRight, CreditCard, TrendingUp, Umbrella, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const mainProducts = [
    {
      icon: Briefcase,
      title: "Portfolio Management",
      description: "Professional management of your equity and debt investments with personalized strategies and direct ownership.",
      features: [
        "Customized investment strategies",
        "Direct ownership of securities",
        "Expert fund managers",
      ],
      minLabel: "Min. Investment",
      minValue: "₹50 Lakhs",
      gradient: "from-teal-50 to-teal-100",
      border: "border-teal-200",
      iconBg: "bg-teal-600",
      iconColor: "text-white",
      checkColor: "text-teal-600",
      buttonBg: "bg-teal-600 hover:bg-teal-700",
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive protection plans for life, health, and family security. Compare from 20+ top insurers.",
      features: [
        "Term & Health Insurance",
        "Critical illness coverage",
        "Child education plans",
      ],
      minLabel: "Starting From",
      minValue: "₹500/month",
      gradient: "from-green-50 to-green-100",
      border: "border-green-200",
      iconBg: "bg-green-600",
      iconColor: "text-white",
      checkColor: "text-green-600",
      buttonBg: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Home,
      title: "Home & Personal Loans",
      description: "Quick approvals and best interest rates for home purchase, construction, and personal financing needs.",
      features: [
        "Interest from 8.50% p.a.",
        "Up to 30 years tenure",
        "90% LTV ratio available",
      ],
      minLabel: "Approval Time",
      minValue: "48 Hours",
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
                  <p className="text-sm text-slate-600">{product.minLabel}</p>
                  <p className={`text-xl font-bold ${product.checkColor}`}>{product.minValue}</p>
                </div>
                <Button asChild className={`${product.buttonBg} text-white rounded-lg`}>
                  <Link href="#contact" className="inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition cursor-pointer"
            >
              <service.icon className={`${service.color} h-8 w-8 mx-auto mb-3`} />
              <h4 className="font-bold text-slate-900">{service.title}</h4>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
