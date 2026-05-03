"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Search, RefreshCw, Shield } from "lucide-react";

const pillars = [
    {
        number: "01",
        icon: Target,
        title: "Goal-Based Personalization",
        quote: "One size fits nobody.",
        description:
            "We build portfolios around your specific life goals — Retirement, Home, Education — not generic market trends. Because your financial needs are as unique as your fingerprint.",
    },
    {
        number: "02",
        icon: Search,
        title: "Fund Manager Due Diligence",
        quote: "We bet on the jockey, not just the horse.",
        description:
            "We look beyond returns to analyze fund manager styles, consistency, and conviction. The right manager in the right market cycle makes all the difference.",
    },
    {
        number: "03",
        icon: RefreshCw,
        title: "Active Lifecycle Management",
        quote: "We don't set it and forget it.",
        description:
            "Through Quarterly Reviews and Proactive IPO/Market Alerts, we ensure your portfolio adapts to market shifts and your changing life — always one step ahead.",
    },
    {
        number: "04",
        icon: Shield,
        title: "Holistic Wealth Building",
        quote: "We don't just grow your wealth — we protect it.",
        description:
            "Our strategy integrates Tax Efficiency, Insurance, and Smart Financing to ensure your net worth is bulletproof. Wealth built on all four pillars stands the test of time.",
    },
];

export default function InvestmentPhilosophySection() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        new Array(pillars.length).fill(false)
    );
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        itemRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setTimeout(() => {
                            setVisibleItems((prev) => {
                                const next = [...prev];
                                next[index] = true;
                                return next;
                            });
                        }, index * 120);
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(ref);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section id="philosophy" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full opacity-60 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full opacity-40 blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header — left-aligned for editorial feel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
                    <div>
                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                            How We Think
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 leading-tight">
                            Our Investment
                            <br />
                            <span className="gradient-text">Philosophy</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Four principles that guide every decision we make for your portfolio. Not rules — convictions. Built over years of managing real wealth for real families.
                        </p>
                    </div>
                </div>

                {/* Pillars — alternating layout */}
                <div className="space-y-0">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        const isEven = index % 2 === 0;
                        const isVisible = visibleItems[index];

                        return (
                            <div
                                key={index}
                                ref={(el) => { itemRefs.current[index] = el; }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                            >
                                {/* Number + divider block */}
                                <div
                                    className={`relative flex items-stretch ${isEven ? "lg:order-1" : "lg:order-2"
                                        }`}
                                >
                                    {/* Large number background */}
                                    <div
                                        className={`w-full flex items-center justify-center py-16 md:py-20 relative overflow-hidden ${isEven ? "bg-slate-50" : "bg-teal-600"
                                            }`}
                                    >
                                        {/* Giant watermark number */}
                                        <span
                                            className={`absolute font-black text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none ${isEven ? "text-slate-100" : "text-teal-500/30"
                                                }`}
                                        >
                                            {pillar.number}
                                        </span>

                                        {/* Icon circle */}
                                        <div
                                            className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl ${isEven
                                                    ? "bg-teal-600 shadow-teal-200"
                                                    : "bg-white/10 border border-white/20"
                                                }`}
                                        >
                                            <Icon
                                                className={`h-9 w-9 ${isEven ? "text-white" : "text-white"}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content block */}
                                <div
                                    className={`flex items-center py-12 md:py-16 px-8 md:px-12 lg:px-16 ${isEven ? "lg:order-2 bg-white" : "lg:order-1 bg-white"
                                        } border-b border-slate-100`}
                                >
                                    <div className="max-w-md">
                                        {/* Pillar number label */}
                                        <span className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-3 block">
                                            Pillar {pillar.number}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                                            {pillar.title}
                                        </h3>

                                        {/* Quote */}
                                        <p className="text-teal-600 font-semibold text-lg italic mb-4 leading-snug">
                                            &ldquo;{pillar.quote}&rdquo;
                                        </p>

                                        {/* Description */}
                                        <p className="text-slate-500 leading-relaxed">
                                            {pillar.description}
                                        </p>

                                        {/* Subtle bottom line accent */}
                                        <div
                                            className="mt-8 h-0.5 w-12 bg-teal-600 transition-all duration-700"
                                            style={{ width: isVisible ? "3rem" : "0" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
