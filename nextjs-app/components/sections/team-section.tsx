import { Award, Shield, Briefcase, TrendingUp, Linkedin, Mail, Users, Target, Compass, Eye, BookOpen } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Adarsh Katta",
      title: "Chief Investment Officer & Founder",
      education: ["MBA Finance", "CFA Charterholder"],
      description: "With over 18 years of experience in portfolio management and wealth advisory, Adarsh has successfully managed ₹2000+ Cr in client assets. His expertise spans across equity research, portfolio construction, and risk management.",
      credentials: [
        { icon: Award, title: "SEBI RIA", subtitle: "Registration: INA000012345" },
        { icon: Shield, title: "SEBI Portfolio Manager", subtitle: "Registration: INP000004567" },
        { icon: Briefcase, title: "NISM Certified", subtitle: "Series XV & XA" },
        { icon: TrendingUp, title: "Track Record", subtitle: "15%+ CAGR | 5000+ clients" },
      ],
      color: "teal"
    },
    {
      name: "Minakshi Chitlangia",
      title: "Head of Wealth Management & Founder",
      education: ["CFP", "CA"],
      description: "Minakshi brings 15+ years of experience in financial planning, insurance advisory, and tax optimization. She specializes in comprehensive wealth management solutions for HNI families and has helped over 3000 clients achieve financial security.",
      credentials: [
        { icon: Award, title: "SEBI RIA", subtitle: "Registration: INA000067890" },
        { icon: Shield, title: "IRDAI Licensed", subtitle: "DB 789456/2010" },
        { icon: Briefcase, title: "CFP® Professional", subtitle: "FPSB India Member" },
        { icon: Users, title: "Specialization", subtitle: "Estate | Tax | Insurance" },
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
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Square Image */}
                  <div className="relative w-48 h-48 mb-4">
                    <div className={`w-full h-full bg-gradient-to-br from-${member.color}-400 to-${member.color}-600 rounded-xl shadow-md flex items-center justify-center text-white text-5xl font-bold`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className={`text-${member.color}-600 font-semibold mb-3`}>{member.title}</p>

                  {/* Education Badges */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.education.map((edu, idx) => (
                      <span key={idx} className={`px-3 py-1 bg-${member.color}-100 text-${member.color}-700 text-xs font-semibold rounded-full`}>
                        {edu}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3 mb-6">
                    <a href="#" className={`bg-${member.color}-100 p-2 rounded-lg hover:bg-${member.color}-200 transition`}>
                      <Linkedin className={`h-5 w-5 text-${member.color}-600`} />
                    </a>
                    <a href="#" className={`bg-${member.color}-100 p-2 rounded-lg hover:bg-${member.color}-200 transition`}>
                      <Mail className={`h-5 w-5 text-${member.color}-600`} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed text-left">
                    {member.description}
                  </p>

                  {/* Credentials */}
                  <div className="w-full space-y-3">
                    {member.credentials.map((cred, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 text-left">
                        <div className="flex items-center mb-1">
                          <cred.icon className={`h-4 w-4 text-${member.color}-600 mr-2`} />
                          <p className="text-sm font-semibold text-slate-900">{cred.title}</p>
                        </div>
                        <p className="text-xs text-slate-500 ml-6">{cred.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
              <div key={index} className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-10 hover:shadow-xl transition`}>
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
