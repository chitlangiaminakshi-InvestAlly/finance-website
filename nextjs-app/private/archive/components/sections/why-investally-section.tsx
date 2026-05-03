"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: "📋",
    title: "Written Financial Plan",
    description: "A documented 5-year roadmap — not vague advice. A strategy you can hold us accountable to.",
  },
  {
    icon: "✨",
    title: "Portfolio Clean-Up in 30 Days",
    description: "We audit and optimize your existing investments. Average: 15 overlapping funds → 5 purposeful ones.",
  },
  {
    icon: "📅",
    title: "Quarterly Reviews — Scheduled",
    description: "Every 90 days on our calendar. Proactive check-ins — not waiting for you to ask.",
  },
  {
    icon: "💬",
    title: "WhatsApp Response in 4 Hours",
    description: "Direct access to your SEBI-registered advisor. No tickets, no intermediaries.",
  },
];

export default function WhyInvestAllySection() {
  return (
    <section id="why-investally" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Why InvestAlly
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
              Why our clients <span className="gradient-text">chose us</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Tired of advisors who disappear after onboarding? Our clients stay because we deliver — clear plans, scheduled reviews, and advisors who actually respond. They sleep better knowing their money is in order.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4"
                >
                  <div className="flex-shrink-0 bg-teal-50 rounded-lg w-12 h-12 flex items-center justify-center border border-teal-100/50">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisor Context Card (Minakshi) */}
          <div className="lg:pl-8 space-y-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src="/minakshi maheshwari.jpg"
                    alt="Minakshi Maheshwari — InvestAlly Advisor"
                    fill
                    className="rounded-full object-cover object-top border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center ring-4 ring-white shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-teal-600 text-xl font-bold">Minakshi Maheshwari</h3>
                  <p className="text-slate-500 text-sm font-medium">Founder & SEBI-Registered Advisor</p>
                  <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full uppercase tracking-wider">Reliability</span>
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full uppercase tracking-wider">Transparency</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-slate-700 italic border-l-4 border-teal-400 pl-6 py-2 leading-relaxed text-lg">
                &ldquo;Wealth creation shouldn&apos;t be stressful. We build structures that are easy to understand, even easier to track, and robust enough to last generations.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
