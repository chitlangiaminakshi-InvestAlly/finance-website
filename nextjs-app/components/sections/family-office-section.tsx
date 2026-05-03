"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Shield,
    Landmark,
    Receipt,
    CreditCard,
    Users,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        id: "protection",
        icon: Shield,
        number: "01",
        title: "Smart Protection",
        badge: "Insurance",
        headline: "Pure risk cover.\nWe never mix insurance with investment.",
        description:
            "We cut through the noise and recommend only what protects you — term life and health insurance. No ULIPs, no endowment plans. Just pure, affordable coverage that does exactly what insurance is supposed to do.",
        proof: "Your family's safety, not our commission.",
        stat: "₹1 Cr",
        statLabel: "term cover from ~₹800/month",
        bgGradient: "from-teal-950 to-slate-900",
        accentColor: "text-teal-400",
        borderColor: "border-teal-500/30",
        iconBg: "bg-teal-600",
        pillBg: "bg-teal-900/60 border-teal-700/50 text-teal-300",
    },
    {
        id: "leverage",
        icon: Landmark,
        number: "02",
        title: "Smart Leverage",
        badge: "Loans",
        headline: "Unlock liquidity\nwithout selling your assets.",
        description:
            "Why liquidate your portfolio when you need funds? We help you leverage your existing investments — loans against mutual funds, securities, and competitive home finance — so your wealth keeps compounding uninterrupted.",
        proof: "Your portfolio works twice as hard.",
        stat: "8–9%",
        statLabel: "typical loan against securities rate",
        bgGradient: "from-blue-950 to-slate-900",
        accentColor: "text-blue-400",
        borderColor: "border-blue-500/30",
        iconBg: "bg-blue-600",
        pillBg: "bg-blue-900/60 border-blue-700/50 text-blue-300",
    },
    {
        id: "tax",
        icon: Receipt,
        number: "03",
        title: "Tax Efficiency",
        badge: "Tax Planning",
        headline: "Keep more of\nwhat you earn.",
        description:
            "We proactively manage your tax liability — from capital gains harvesting to LTCG/STCG optimization. Every rupee saved in tax is a rupee that stays invested and compounds for you over the long term.",
        proof: "Tax saved is wealth earned.",
        stat: "30%",
        statLabel: "tax bracket savings possible with planning",
        bgGradient: "from-emerald-950 to-slate-900",
        accentColor: "text-emerald-400",
        borderColor: "border-emerald-500/30",
        iconBg: "bg-emerald-600",
        pillBg: "bg-emerald-900/60 border-emerald-700/50 text-emerald-300",
    },
    {
        id: "credit",
        icon: CreditCard,
        number: "04",
        title: "Credit Health",
        badge: "Credit Score",
        headline: "Your financial reputation\nis as important as your portfolio.",
        description:
            "A strong credit score unlocks better loan rates and financial opportunities. We help you monitor, understand, and systematically improve your credit health alongside your investment journey — because both matter.",
        proof: "Better score, better rates, better life.",
        stat: "750+",
        statLabel: "target credit score we help you achieve",
        bgGradient: "from-purple-950 to-slate-900",
        accentColor: "text-purple-400",
        borderColor: "border-purple-500/30",
        iconBg: "bg-purple-600",
        pillBg: "bg-purple-900/60 border-purple-700/50 text-purple-300",
    },
    {
        id: "family",
        icon: Users,
        number: "05",
        title: "Family View",
        badge: "Centricity Board",
        headline: "One dashboard.\nYour entire family's wealth.",
        description:
            "Wealth is a family affair. Our Centricity Board gives you a consolidated view of your entire family's financial picture — spouse, children, parents — so you can plan together, protect together, and grow together.",
        proof: "Because wealth is a family story.",
        stat: "360°",
        statLabel: "view of your family's financial health",
        bgGradient: "from-amber-950 to-slate-900",
        accentColor: "text-amber-400",
        borderColor: "border-amber-500/30",
        iconBg: "bg-amber-600",
        pillBg: "bg-amber-900/60 border-amber-700/50 text-amber-300",
    },
];

export default function FamilyOfficeSection() {
    const [activeId, setActiveId] = useState("protection");
    const active = services.find((s) => s.id === activeId)!;

    return (
        <section id="family-office" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #14b8a6 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                        Beyond Investments
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4 leading-tight">
                        The{" "}
                        <span className="gradient-text">Family Office</span>{" "}
                        Experience
                    </h2>
                    <p className="text-slate-600 text-xl max-w-2xl leading-relaxed">
                        Five pillars of a complete financial life — each powerful alone, transformative together.
                    </p>
                </div>

                {/* Main panel */}
                <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

                        {/* Left nav */}
                        <div className="bg-white border-b lg:border-b-0 lg:border-r border-slate-200">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = service.id === activeId;
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveId(service.id)}
                                        className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-all duration-200 group relative ${isActive
                                            ? "bg-teal-50"
                                            : "hover:bg-slate-50"
                                            } ${index < services.length - 1 ? "border-b border-slate-100" : ""}`}
                                    >
                                        {/* Active indicator bar */}
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-teal-500 rounded-r" />
                                        )}

                                        <div
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isActive ? service.iconBg : "bg-slate-100 group-hover:bg-teal-50"
                                                }`}
                                        >
                                            <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-teal-600"}`} />
                                        </div>

                                        <div className="min-w-0">
                                            <p
                                                className={`font-semibold text-sm transition-colors duration-200 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                                                    }`}
                                            >
                                                {service.title}
                                            </p>
                                            <p className="text-slate-400 text-xs mt-0.5">{service.badge}</p>
                                        </div>

                                        <span
                                            className={`ml-auto text-xs font-bold transition-colors duration-200 ${isActive ? "text-teal-500" : "text-slate-300"
                                                }`}
                                        >
                                            {service.number}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right content panel */}
                        <div
                            key={activeId}
                            className={`bg-gradient-to-br ${active.bgGradient} p-8 md:p-12 relative overflow-hidden`}
                            style={{ animation: "panelFadeIn 0.35s ease both" }}
                        >
                            {/* Large background number */}
                            <span className="absolute top-6 right-8 font-black text-[8rem] leading-none text-white/[0.04] select-none pointer-events-none">
                                {active.number}
                            </span>

                            {/* Badge */}
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border mb-6 ${active.pillBg}`}
                            >
                                {active.badge}
                            </span>

                            {/* Headline */}
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight whitespace-pre-line">
                                {active.headline}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                                {active.description}
                            </p>

                            {/* Stat + proof row */}
                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                                <div className={`border-l-2 ${active.borderColor} pl-4`}>
                                    <p className={`text-4xl font-black ${active.accentColor}`}>{active.stat}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{active.statLabel}</p>
                                </div>
                                <div className="h-px sm:h-8 w-full sm:w-px bg-slate-700/50" />
                                <p className="text-slate-400 text-sm italic max-w-xs">
                                    &ldquo;{active.proof}&rdquo;
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href="#contact"
                                className={`inline-flex items-center gap-2 text-sm font-semibold ${active.accentColor} hover:opacity-80 transition-opacity duration-200`}
                            >
                                Learn more about this service
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-base mb-6">
                        Most advisors manage your investments.{" "}
                        <span className="text-slate-900 font-semibold">We manage your entire financial life.</span>
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-xl font-bold px-10 transition-all duration-300 hover:shadow-teal-500/30 hover:shadow-2xl"
                    >
                        <Link href="#contact" className="inline-flex items-center gap-2">
                            Explore the Full Experience
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            <style jsx>{`
        @keyframes panelFadeIn {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </section>
    );
}
