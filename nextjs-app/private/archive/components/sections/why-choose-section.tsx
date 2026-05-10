"use client";

import { useState } from "react";
import {
    UserCheck,
    Eye,
    CalendarCheck,
    BookOpen,
    Rocket,
    Phone,
    CheckCircle2,
    XCircle,
    ChevronRight,
} from "lucide-react";

const categories = [
    {
        id: "personalization",
        icon: UserCheck,
        label: "Personalization",
        investally: {
            title: "Goal-based, life-stage plans",
            points: [
                "Tailored to your specific life goals",
                "Adapts as your life changes",
                "Risk profile assessed personally",
            ],
        },
        others: {
            title: "One-size-fits-all templates",
            points: [
                "Generic model portfolios",
                "No adjustment for life events",
                "Standard risk categories only",
            ],
        },
    },
    {
        id: "transparency",
        icon: Eye,
        label: "Transparency",
        investally: {
            title: "Zero hidden fees, full disclosure",
            points: [
                "All fees explained upfront",
                "No commission-driven bias",
                "Complete portfolio visibility",
            ],
        },
        others: {
            title: "Complex, opaque fee structures",
            points: [
                "Hidden trail commissions",
                "Products pushed for higher fees",
                "Limited portfolio reporting",
            ],
        },
    },
    {
        id: "reviews",
        icon: CalendarCheck,
        label: "Portfolio Reviews",
        investally: {
            title: "Quarterly reviews, always",
            points: [
                "Scheduled every 3 months",
                "Proactive rebalancing",
                "Market updates & insights shared",
            ],
        },
        others: {
            title: "Annual or on-demand only",
            points: [
                "You have to ask for a review",
                "Reactive, not proactive",
                "No regular communication",
            ],
        },
    },
    {
        id: "education",
        icon: BookOpen,
        label: "Education",
        investally: {
            title: "We explain every decision",
            points: [
                "Why each fund is chosen",
                "Simplified market insights",
                "Build your financial confidence",
            ],
        },
        others: {
            title: "Execute without explanation",
            points: [
                "Just told what to buy",
                "No financial literacy building",
                "Dependent on advisor forever",
            ],
        },
    },
    {
        id: "onboarding",
        icon: Rocket,
        label: "Onboarding",
        investally: {
            title: "Paperless, seamless, guided",
            points: [
                "100% digital onboarding",
                "Step-by-step hand-holding",
                "Live in days, not weeks",
            ],
        },
        others: {
            title: "Lengthy paperwork process",
            points: [
                "Physical documents required",
                "Multiple branch visits",
                "Weeks of back-and-forth",
            ],
        },
    },
    {
        id: "accessibility",
        icon: Phone,
        label: "Accessibility",
        investally: {
            title: "Always reachable — WhatsApp & call",
            points: [
                "WhatsApp for quick queries",
                "Responsive within hours",
                "No appointment needed",
            ],
        },
        others: {
            title: "Appointment-only access",
            points: [
                "Formal meetings only",
                "Long response times",
                "Relationship manager changes often",
            ],
        },
    },
];

export default function WhyChooseSection() {
    const [activeId, setActiveId] = useState("personalization");

    const active = categories.find((c) => c.id === activeId)!;

    return (
        <section id="why-choose" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                        Why InvestAlly
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
                        How is InvestAlly{" "}
                        <span className="gradient-text">different</span> from other
                        <br />
                        PMS Advisories?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Not all advisors are equal. Here&apos;s what sets us apart — across every dimension that matters to you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Left: Accordion list */}
                    <div className="lg:col-span-2 space-y-2">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = cat.id === activeId;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveId(cat.id)}
                                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-300 group ${isActive
                                            ? "bg-teal-600 text-white shadow-lg shadow-teal-200"
                                            : "bg-slate-50 text-slate-700 hover:bg-teal-50 hover:text-teal-700 border border-slate-100"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-teal-100" : "text-teal-600"
                                                }`}
                                        />
                                        <span className="font-semibold">{cat.label}</span>
                                    </div>
                                    <ChevronRight
                                        className={`h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-90 text-teal-100" : "text-slate-400 group-hover:text-teal-500"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Comparison panel */}
                    <div className="lg:col-span-3">
                        <div
                            key={activeId}
                            className="grid grid-cols-1 gap-4"
                            style={{ animation: "fadeInUp 0.35s ease both" }}
                        >
                            {/* InvestAlly card */}
                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-teal-700 font-black text-lg">InvestAlly</span>
                                    <span className="px-2 py-0.5 bg-teal-600 text-white text-xs font-bold rounded-full">
                                        Our Approach
                                    </span>
                                </div>
                                <p className="text-slate-800 font-semibold mb-4">{active.investally.title}</p>
                                <ul className="space-y-2">
                                    {active.investally.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* VS divider */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-px bg-slate-200" />
                                <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                                    <span className="text-slate-500 font-bold text-xs">VS</span>
                                </div>
                                <div className="flex-1 h-px bg-slate-200" />
                            </div>

                            {/* Others card */}
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-slate-500 font-bold text-lg">Traditional PMS</span>
                                </div>
                                <p className="text-slate-500 font-semibold mb-4">{active.others.title}</p>
                                <ul className="space-y-2">
                                    {active.others.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                            <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
