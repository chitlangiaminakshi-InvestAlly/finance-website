import Image from "next/image";
import { Award, Shield, Briefcase, TrendingUp, Linkedin, Mail, Users, Target, Compass, Eye, BookOpen } from "lucide-react";

export default function TeamSection() {
  // Color scheme mapping for Tailwind class generation
  const colorSchemes = {
    teal: {
      gradient: "bg-gradient-to-br from-teal-400 to-teal-600",
      text: "text-teal-600",
      badge: "bg-teal-100 text-teal-700",
      socialBg: "bg-teal-100",
      socialHover: "hover:bg-teal-200",
      icon: "text-teal-600"
    },
    green: {
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      text: "text-green-600",
      badge: "bg-green-100 text-green-700",
      socialBg: "bg-green-100",
      socialHover: "hover:bg-green-200",
      icon: "text-green-600"
    }
  } as const;

  const teamMembers = [
    {
      name: "Adarsh Katta",
      title: "Co-Founder, InvestAlly",
      subtitle: "Chartered Accountant • CFA Level II",
      linkedin: "https://www.linkedin.com/in/adarsh-katta",
      email: "adarsh.katta@investally.co.in",
      image: "/adarsh katta.JPG",
      description: "Adarsh is the research brain behind InvestAlly. With deep experience as a Private Equity and Mutual Fund Expert across global institutions like Brookfield, HSBC and JP Morgan, he specialises in identifying the right funds, evaluating risks, and conducting high-quality due diligence. His expertise helps clients make smarter, more informed investment decisions. He brings a sharp analytical eye, a disciplined research approach, and a strong understanding of how great investments are built — ensuring that data, clarity, and conviction back every recommendation at InvestAlly.",
      credentials: [
        { icon: Award, title: "Chartered Accountant", subtitle: "CFA Level II" },
        { icon: Shield, title: "Mutual Fund Distributor", subtitle: "ARN Number: 339359" },
        { icon: Briefcase, title: "Experience", subtitle: "Private Equity Specialist - Brookfield, HSBC, JP Morgan" },
      ],
      color: "teal"
    },
    {
      name: "Minakshi Maheshwari",
      title: "Co-Founder, InvestAlly",
      subtitle: "Chartered Accountant · Business Analyst",
      linkedin: "https://www.linkedin.com/in/minaxi-maheshwari-207bb3b0/",
      email: "support@investally.co.in",
      image: "/minakshi maheshwari.jpg",
      description: "Minakshi is a Chartered Accountant and Business Analyst who helps people make confident financial decisions. Her experience in understanding numbers, analysing risks, and simplifying complex financial information ensures that every client gets clear guidance tailored to their goals. She focuses on creating practical, easy-to-follow plans that help families protect, grow, and manage their wealth with confidence.",
      credentials: [
        { icon: Award, title: "Chartered Accountant", subtitle: "Business Analyst" },
        { icon: Shield, title: "Mutual Fund Distributor", subtitle: "ARN Number: 345644" },
        { icon: Users, title: "Specialization", subtitle: "Financial Planning & Risk Analysis" },
      ],
      color: "green"
    }
  ];

  const philosophy = [
    {
      icon: Target,
      title: "Client-First Approach",
      description: "Your goals, risk appetite, and financial well-being are at the center of everything we do. We act as fiduciaries, always putting your interests first.",
      gradient: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-600"
    },
    {
      icon: Compass,
      title: "Long-Term Value",
      description: "We focus on sustainable wealth creation through disciplined, research-backed strategies rather than short-term market speculation.",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600"
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "No hidden fees, no jargon, no surprises. You'll always know exactly what you're invested in and why, with full visibility into costs and performance.",
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600"
    },
    {
      icon: BookOpen,
      title: "Continuous Education",
      description: "We empower you with knowledge through regular insights, market updates, and educational content to help you make informed decisions.",
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Led by <span className="gradient-text">Expert Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our SEBI-registered advisors bring decades of expertise in Indian financial markets to help you achieve your goals.
          </p>
        </div>

        {/* Team Members */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const colors = colorSchemes[member.color as keyof typeof colorSchemes];
              return (
                <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Square Image */}
                    <div className="relative w-48 h-48 mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                      />
                    </div>

                    {/* Name and Title */}
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                    <p className={`${colors.text} font-semibold mb-1`}>{member.title}</p>
                    {member.subtitle && (
                      <p className="text-slate-600 text-sm font-medium mb-2">{member.subtitle}</p>
                    )}

                    {/* Social Links */}
                    <div className="flex space-x-3 mb-6">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`${colors.socialBg} p-2 rounded-lg ${colors.socialHover} transition-all duration-300`}>
                          <Linkedin className={`h-5 w-5 ${colors.icon}`} />
                        </a>
                      )}
                      <a href={`mailto:${member.email}`} className={`${colors.socialBg} p-2 rounded-lg ${colors.socialHover} transition-all duration-300`}>
                        <Mail className={`h-5 w-5 ${colors.icon}`} />
                      </a>
                    </div>

                    {/* Description */}
                    <div className="flex-grow flex items-center">
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed text-center">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Credentials - Aligned to bottom */}
                  <div className="w-full space-y-3 mt-auto">
                    {member.credentials.map((cred, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 text-left">
                        <div className="flex items-center mb-1">
                          <cred.icon className={`h-4 w-4 ${colors.icon} mr-2`} />
                          <p className="text-sm font-semibold text-slate-900">{cred.title}</p>
                        </div>
                        <p className="text-xs text-slate-500 ml-6">{cred.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Philosophy */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Our <span className="gradient-text">Investment Philosophy</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four core principles that guide every decision we make for your financial success.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-10 hover:shadow-xl transition-shadow duration-300`}>
                <div className={`${item.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className="text-white h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
