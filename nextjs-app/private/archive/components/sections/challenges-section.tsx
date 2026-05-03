"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
    "Too many mutual funds, no clear strategy",
    "Don't know where to start investing",
    "Paying too much tax on investments",
    "Insurance policies I don't understand",
    "No one reviews my portfolio regularly",
    "Confused between FD and Mutual Funds",
    "Scared of market volatility",
    "Planning for my child's education",
    "Retirement feels far away but I'm worried",
    "Sudden windfall — what do I do?",
    "My portfolio hasn't grown in years",
    "I invest but never track where my money goes",
];

export default function ChallengesSection() {
    const [visibleCount, setVisibleCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    // Stagger bubble appearance
                    challenges.forEach((_, i) => {
                        setTimeout(() => {
                            setVisibleCount(i + 1);
                        }, i * 120);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="challenges"
            className="py-20 md:py-28 bg-slate-50 relative overflow-hidden"
        >
            {/* Ambient glow blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-300 rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Headline + CTA */}
                    <div>
                        {/* Advisor avatar */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-16 h-16 flex-shrink-0">
                                <Image
                                    src="/team/adarsh katta-small.JPG"
                                    alt="Adarsh Katta — InvestAlly Advisor"
                                    fill
                                    className="rounded-full object-cover object-top border-2 border-teal-500"
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <div>
                                <p className="text-teal-600 text-sm font-semibold">Adarsh Katta</p>
                                <p className="text-slate-500 text-xs">SEBI-Registered Advisor</p>
                            </div>
                        </div>

                        <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                            Real Challenges
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight">
                            Challenges our clients{" "}
                            <span className="gradient-text">faced before</span>{" "}
                            joining us
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Sound familiar? You&apos;re not alone. These are the real concerns we hear every day — and we&apos;ve helped 50+ clients move past every single one of them.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-xl font-bold transition-all duration-300 hover:shadow-teal-500/30 hover:shadow-2xl"
                        >
                            <Link href="#contact" className="inline-flex items-center">
                                Talk to Us
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    {/* Right: Scrollable chat bubbles */}
                    <div className="relative">
                        {/* Scroll container */}
                        <div
                            className="relative max-h-[440px] overflow-y-auto pr-2 space-y-3 scrollbar-thin"
                            style={{ scrollbarWidth: "thin", scrollbarColor: "#14b8a6 transparent" }}
                        >
                            {challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="transition-all duration-500"
                                    style={{
                                        opacity: visibleCount > index ? 1 : 0,
                                        transform: visibleCount > index ? "translateY(0)" : "translateY(20px)",
                                    }}
                                >
                                    <div
                                        className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-default ${index % 3 === 0
                                            ? "bg-teal-600 text-white"
                                            : index % 3 === 1
                                                ? "bg-teal-100 text-teal-800 border border-teal-200"
                                                : "bg-white text-slate-700 border border-slate-200"
                                            }`}
                                    >
                                        &ldquo;{challenge}&rdquo;
                                    </div>
                                </div>
                            ))}
                            {/* Extra padding at bottom */}
                            <div className="h-4" />
                        </div>

                        {/* Gradient fade hint at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none rounded-b-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
