"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Wrench,
    Map,
    ArrowRight,
    ChevronDown,
    RefreshCw,
    Shield,
    Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        icon: Target,
        title: "Understand",
        tagline: "Income, goals, risk tolerance.",
        description:
            "We start by understanding your complete picture. Your life goals, income, and how much risk you can comfortably digest.",
        detail:
            "In our discovery sessions, we map out your complete financial picture: income sources, liabilities, and most importantly — what you want your money to achieve.",
        highlight: "Free 30-min discovery call",
        image: "/animations/step-1.webp",
        visual: {
            label: "Discovery Phase",
            stat: "30 min",
            statLabel: "Discovery Call",
            bullets: ["Income analysis", "Life goals mapped", "Risk profile assessed"],
        },
    },
    {
        number: "02",
        icon: Map,
        title: "Plan",
        tagline: "Financial roadmap and asset allocation.",
        description:
            "Moving from clear understanding to a clear roadmap. We build an asset allocation strategy designed to consistently meet your life goals.",
        detail:
            "We create a comprehensive financial roadmap covering every aspect of your future. It defines exactly where each rupee should go and sets an optimal asset allocation mix.",
        highlight: "Detailed financial roadmap",
        image: "/animations/step-2.webp",
        visual: {
            label: "Your Strategy",
            stat: "3-in-1",
            statLabel: "Goals + Cashflow + Allocation",
            bullets: ["Custom roadmap built", "Asset allocation defined", "Cashflow strategy"],
        },
    },
    {
        number: "03",
        icon: Wrench,
        title: "Build",
        tagline: "Portfolio construction strategy.",
        description:
            "Time to execute the plan. We carefully construct your portfolio using Mutual Funds, PMS, AIF, and Structured Products.",
        detail:
            "No generic templates. Your unique portfolio is built with precision instruments tailored to you — ranging from diversified Mutual Funds to Private Equity opportunities depending on your net worth and goals.",
        highlight: "Bespoke portfolio construction",
        image: "/animations/step-3.webp",
        visual: {
            label: "Execution Phase",
            stat: "100%",
            statLabel: "Tailored to You",
            bullets: ["Mutual Funds / PMS / AIFs", "Structured Products", "Ongoing Deployment"],
        },
    },
    {
        number: "04",
        icon: RefreshCw,
        title: "Monitor",
        tagline: "Periodic reviews and course correction.",
        description:
            "Your life changes, markets change. We hold periodic reviews to re-assess the landscape and make strict course corrections.",
        detail:
            "Through comprehensive quarterly evaluations, we ensure that your portfolio stays tightly aligned to the roadmap. We rebalance, remove underperformers, and adapt to new life goals.",
        highlight: "Scheduled portfolio reviews",
        image: "/animations/step-4.webp",
        visual: {
            label: "Active Oversight",
            stat: "4×",
            statLabel: "Reviews per year",
            bullets: ["Course corrections applied", "Portfolio rebalanced", "Goal tracking updated"],
        },
    },
    {
        number: "05",
        icon: Shield,
        title: "Protect",
        tagline: "Risk and insurance planning.",
        description:
            "Wealth building means nothing without wealth protection. We build a moat around your family's future.",
        detail:
            "A financial plan isn't complete without protecting the downside. We meticulously plan your term insurance, critical illness cover, and health frameworks to ensure sudden events don't derail your goals.",
        highlight: "Complete insurance audit",
        image: "/animations/step-5.webp",
        visual: {
            label: "Safety Net",
            stat: "100%",
            statLabel: "Risk Covered",
            bullets: ["Term insurance planned", "Health coverage mapping", "Emergency funds sized"],
        },
    },
];

export default function UserJourneySection() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const active = steps[activeStep];

    return (
        <section id="journey" className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-60 blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-50 rounded-full opacity-80 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                        Your Journey With Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-3">
                        From First Call to{" "}
                        <span className="gradient-text">Financial Freedom</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
                        A clear, guided path — explore each step of how we work together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left: Accordion steps */}
                    <div className="space-y-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isOpen = activeStep === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "border-teal-500/50 bg-teal-50 shadow-xl shadow-teal-100"
                                        : "border-slate-200 bg-white hover:border-teal-300 hover:shadow-md"
                                        }`}
                                >
                                    <button
                                        className="w-full flex items-center gap-4 px-5 py-4 text-left group"
                                        onClick={() => setActiveStep(index)}
                                    >
                                        {/* Big step number */}
                                        <span
                                            className={`font-black text-4xl leading-none transition-all duration-300 select-none w-12 flex-shrink-0 ${isOpen ? "text-teal-500" : "text-slate-200 group-hover:text-slate-300"
                                                }`}
                                        >
                                            {step.number}
                                        </span>

                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                                                    ? "bg-teal-600 shadow-lg shadow-teal-200"
                                                    : "bg-slate-100 group-hover:bg-teal-100"
                                                    }`}
                                            >
                                                <Icon className={`h-5 w-5 ${isOpen ? "text-white" : "text-teal-600"}`} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3
                                                        className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </h3>
                                                    <span
                                                        className={`text-xs font-medium italic transition-colors duration-300 ${isOpen ? "text-teal-600" : "text-slate-400"
                                                            }`}
                                                    >
                                                        {step.tagline}
                                                    </span>
                                                </div>
                                                {!isOpen && (
                                                    <p className="text-slate-400 text-sm mt-0.5 truncate hidden md:block">
                                                        {step.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <ChevronDown
                                            className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-teal-600" : "text-slate-300 group-hover:text-slate-500"
                                                }`}
                                        />
                                    </button>

                                    {/* Expanded content */}
                                    <div
                                        className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-5 pb-5 md:pl-[4rem]">
                                            <div className="border-t border-teal-200 pt-3">
                                                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                                    {step.description}
                                                </p>
                                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                                    {step.detail}
                                                </p>
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-4">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                                    <span className="text-teal-700 text-sm font-semibold">
                                                        {step.highlight}
                                                    </span>
                                                </div>

                                                {/* Mobile Visual Content - Inline Reveal */}
                                                <div className="lg:hidden mt-2 rounded-2xl border border-teal-100 bg-white shadow-lg overflow-hidden">
                                                    {/* Step image */}
                                                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-teal-50">
                                                        <Image
                                                            src={step.image}
                                                            alt={`Step ${step.number}: ${step.title}`}
                                                            fill
                                                            sizes="(max-width: 1023px) 100vw, 50vw"
                                                            className="object-cover object-center"
                                                        />
                                                        {/* Step number badge */}
                                                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center shadow-lg">
                                                            <span className="text-white font-black text-sm">{step.number}</span>
                                                        </div>
                                                    </div>

                                                    {/* Content below image */}
                                                    <div className="p-4">
                                                        {/* Label */}
                                                        <p className="text-teal-600 text-[10px] font-bold uppercase tracking-widest mb-1">
                                                            {step.visual.label}
                                                        </p>

                                                        {/* Stat row */}
                                                        <div className="flex items-end gap-2 mb-2">
                                                            <p className="text-2xl font-black text-slate-900 leading-none">
                                                                {step.visual.stat}
                                                            </p>
                                                            <p className="text-slate-500 text-[10px] mb-0.5">{step.visual.statLabel}</p>
                                                        </div>

                                                        {/* Divider */}
                                                        <div className="h-px bg-gradient-to-r from-teal-200 to-transparent mb-3" />

                                                        {/* Bullet points */}
                                                        <ul className="space-y-1.5">
                                                            {step.visual.bullets.map((bullet, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="flex items-center gap-2 text-slate-600"
                                                                >
                                                                    <div className="w-4 h-4 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center flex-shrink-0">
                                                                        <div className="w-1 h-1 rounded-full bg-teal-600" />
                                                                    </div>
                                                                    <span className="text-xs font-medium">{bullet}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Visual panel — sticky within this section (Desktop only) */}
                    <div className="hidden lg:block self-start lg:sticky lg:top-8">
                        <div
                            key={activeStep}
                            className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden relative"
                            style={{ animation: "stepFadeIn 0.4s ease both" }}
                        >
                            {/* Step image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-teal-50">
                                <Image
                                    src={active.image}
                                    alt={`Step ${active.number}: ${active.title}`}
                                    fill
                                    sizes="(max-width: 1023px) 100vw, 50vw"
                                    className="object-cover object-center"
                                    style={{ animation: "stepFadeIn 0.4s ease both" }}
                                />
                                {/* Step number badge */}
                                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-lg">{active.number}</span>
                                </div>
                            </div>

                            {/* Content below image */}
                            <div className="p-6">
                                {/* Label */}
                                <p className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-1">
                                    {active.visual.label}
                                </p>

                                {/* Stat row */}
                                <div className="flex items-end gap-2 mb-3">
                                    <p className="text-3xl font-black text-slate-900 leading-none">
                                        {active.visual.stat}
                                    </p>
                                    <p className="text-slate-500 text-xs mb-0.5">{active.visual.statLabel}</p>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-teal-200 to-transparent mb-4" />

                                {/* Bullet points */}
                                <ul className="space-y-2 mb-5">
                                    {active.visual.bullets.map((bullet, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-slate-600"
                                            style={{ animation: `stepFadeIn 0.4s ease ${i * 0.1 + 0.15}s both` }}
                                        >
                                            <div className="w-5 h-5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                            </div>
                                            <span className="text-sm font-medium">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Step progress dots */}
                                <div className="flex gap-2">
                                    {steps.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveStep(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep
                                                ? "bg-teal-500 w-8"
                                                : i < activeStep
                                                    ? "bg-teal-300 w-4"
                                                    : "bg-slate-200 w-4 hover:bg-slate-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-xl font-bold px-10 transition-all duration-300 hover:shadow-teal-500/30 hover:shadow-2xl"
                    >
                        <Link href="#contact" className="inline-flex items-center gap-2">
                            Start Your Journey
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                    <p className="text-slate-500 text-sm mt-3">
                        Free 30-minute discovery call — no commitment required.
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes stepFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
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
