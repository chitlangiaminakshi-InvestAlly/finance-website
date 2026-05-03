"use client";

import Image from "next/image";
import { Award, Shield, Briefcase, Users, TrendingUp, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Adarsh Katta",
    title: "Co-Founder",
    subtitle: "Chartered Accountant",
    linkedin: "https://www.linkedin.com/in/adarsh-katta",
    email: "adarsh.katta@investally.co.in",
    image: "/team/adarsh katta-medium.jpg",
    description:
      "Before starting InvestAlly, Adarsh spent nearly a decade at global institutions — HSBC and JP Morgan — deciding which fund managers were worth trusting with hundreds of millions of dollars. He evaluated strategies, stress-tested risk frameworks, and scrutinised every assumption before a single allocation was made. He started InvestAlly because he saw a gap: most families never get access to that level of rigour. Now they do. He is the research brain behind InvestAlly.",
    tags: ["Chartered Accountant", "ARN 339359", "APRN08555 - PMS Code"],
    tagIcons: [Award, Shield, Briefcase],
    accentFrom: "from-teal-500",
    titleColor: "text-teal-600",
    tagColor: "text-teal-700 bg-teal-50 border-teal-200",
    socialColor: "text-teal-600 hover:text-teal-700",
    workedAt: [
      { src: "/company-logos/morgan-stanley-logo.png", alt: "Morgan Stanley" },
      { src: "/company-logos/jpmorgan-chase-logo.svg", alt: "JPMorgan Chase" },
      { src: "/company-logos/hsbc-logo.png", alt: "HSBC" },
    ],
  },
  {
    name: "Minakshi Maheshwari",
    title: "Co-Founder & Client Strategy Lead",
    subtitle: "Chartered Accountant · Business Analyst",
    linkedin: "https://www.linkedin.com/in/minaxi-maheshwari-207bb3b0/",
    email: "support@investally.co.in",
    image: "/team/minakshi maheshwari-medium.jpg",
    description:
      "Minakshi is a Chartered Accountant and Business Analyst who helps people make confident financial decisions. Her experience in understanding numbers, analysing risks, and simplifying complex financial information ensures that every client gets clear guidance tailored to their goals. At InvestAlly, she focuses on creating practical, easy-to-follow plans that help families protect, grow, and manage their wealth with confidence.",
    tags: ["Chartered Accountant", "ARN 345644", "Business Analyst"],
    tagIcons: [Award, Users, Shield],
    accentFrom: "from-green-500",
    titleColor: "text-green-600",
    tagColor: "text-green-700 bg-green-50 border-green-200",
    socialColor: "text-green-600 hover:text-green-700",
    workedAt: [
      { src: "/company-logos/morgan-stanley-logo.png", alt: "Morgan Stanley" },
      { src: "/company-logos/societe-generale-logo.png", alt: "Societe Generale" },
      { src: "/company-logos/ltimindtree-logo.svg", alt: "LTIMindtree" },
    ],
  },
  {
    name: "Sailesh Jain",
    title: "Loans Advisor",
    subtitle: "Chartered Accountant",
    linkedin: "https://www.linkedin.com/in/shailesh-jain-322423178",
    email: "support@investally.co.in",
    image: "/team/team_mate3_medium.jpeg",
    description:
      "Shailesh brings over a decade of experience in loan syndication and subsidy consultancy—working closely with businesses and individuals to structure financing and unlock benefits under government incentive schemes. His strength lies in navigating the intersection of credit, policy, and execution—ensuring clients access the right funding while optimizing available subsidies. At InvestAlly, we collaborate with him to support clients on the lending side—helping them make informed borrowing decisions that align with their overall financial plan.",
    tags: ["Chartered Accountant", "Loans Advisor", "Loan Syndication"],
    tagIcons: [Award, Briefcase, TrendingUp],
    accentFrom: "from-blue-500",
    titleColor: "text-blue-600",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
    socialColor: "text-blue-600 hover:text-blue-700",
    hideWorkedAt: true,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-200 rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full opacity-[0.10] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-3 tracking-tight">
            Led by{" "}
            <span className="gradient-text">Expert Professionals</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            SEBI-registered advisors with decades of combined expertise in Indian financial markets.
          </p>
        </div>

        {/* Members */}
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start bg-slate-50/50 rounded-xl p-4 md:p-5 border border-slate-100/50 transition-colors duration-300 hover:bg-slate-50">
                
                {/* Photo */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                  <div className="relative">
                    {/* Decorative accent square behind photo */}
                    <div className={`absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-gradient-to-br ${member.accentFrom} to-transparent opacity-20`} />
                    <div className="relative w-36 h-44 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="144px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-6xl font-black text-white">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center md:justify-start gap-3 mt-1">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${member.socialColor}`}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    <span className="text-slate-300">·</span>
                    <a
                      href={`mailto:${member.email}`}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${member.socialColor}`}
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 text-center md:text-left w-full">

                  {/* Name, Title and Worked-at row */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:pr-10">

                    {/* Name & title */}
                    <div className="min-w-0">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                        {member.name}
                      </h3>
                      <p className={`text-base font-semibold mt-1 ${member.titleColor}`}>
                        {member.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-0.5">{member.subtitle}</p>
                    </div>

                    {/* Worked at — centered on mobile, right-aligned on desktop */}
                    {!member.hideWorkedAt && (
                      <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-2 mt-2 md:mt-0">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                          Worked at
                        </span>
                        <div className="flex gap-2.5 items-center">
                          {member.workedAt?.map((company) => (
                            <div
                              key={company.alt}
                              className="relative w-10 md:w-11 h-10 md:h-11 rounded-xl bg-white border border-slate-200 shadow-sm ring-1 ring-slate-100 overflow-hidden flex-shrink-0 transition-transform duration-200 hover:scale-110"
                            >
                              <Image
                                src={company.src}
                                alt={company.alt}
                                fill
                                sizes="44px"
                                className="object-contain p-1.5"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Thin accent rule — centered on mobile */}
                  <div className={`mt-2 mb-2 h-px w-16 bg-gradient-to-r ${member.accentFrom} to-transparent mx-auto md:mx-0`} />

                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed text-[0.95rem] max-w-2xl mx-auto md:mx-0">
                    {member.description}
                  </p>

                  {/* Credential tags — centered on mobile */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                    {member.tags.map((tag, tIdx) => {
                      const Icon = member.tagIcons[tIdx];
                      return (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${member.tagColor}`}
                        >
                          <Icon className="h-3 w-3 flex-shrink-0" />
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Divider — except after last */}
              {index < teamMembers.length - 1 && (
                <div className="mt-4 border-t border-dashed border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
