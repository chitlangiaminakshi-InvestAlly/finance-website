"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, RefreshCw, BarChart2, Search, Target, Zap } from "lucide-react";
import { useViewportBelow } from "@/hooks/useViewportBelow";

const challenges = [
  "Don't know where to start investing",
  "Too many mutual funds, no clear strategy",
  "My savings are losing value every year",
  "Paying too much tax on my investments",
  "I don't know if my family is truly protected",
  "I have a ULIP or LIC policy — is it even right for me?",
  "My portfolio hasn't grown in years",
  "I've never had a real financial plan — just products pushed at me",
  "Planning for my child's education feels overwhelming",
  "Retirement feels far away — but I know I should start",
  "Scared to invest when markets are falling",
  "Too many fintech apps, AI tools, and YouTube advisors — still no clarity",
];

const whyFeatures = [
  {
    icon: Shield,
    emoji: "🛡️",
    part: "part 1 — Regulated & Accountable",
    title: "Licensed. Transparent. Accountable.",
    description:
      "AMFI-registered and IRDAI-authorised — ensuring every recommendation meets regulatory standards. But more importantly, we stay accountable to your outcomes, not just our advice.",
  },
  {
    icon: RefreshCw,
    emoji: "🔁",
    part: "part 2 — Full Spectrum",
    title: "One Relationship. Complete Financial Coverage.",
    description:
      "Investments and insurance aren't separate decisions — they're deeply connected. From SIPs, PMS, and AIFs to term insurance and health cover, we manage your entire financial ecosystem in one place.",
  },
  {
    icon: BarChart2,
    emoji: "📊",
    part: "part 3 — Evidence-Based",
    title: "No Guesswork. No Trend-Chasing.",
    description:
      "We don't run behind last year's top-performing funds. Every recommendation is backed by data, research, and long-term performance evidence — not market noise or WhatsApp tips.",
  },
  {
    icon: Search,
    emoji: "🔍",
    part: "part 4 — Proactive Reviews",
    title: "Your Portfolio, Actively Managed.",
    description:
      "No more \"set and forget.\" We conduct structured, periodic portfolio reviews to ensure your investments stay aligned with your goals and market realities.",
  },
  {
    icon: Target,
    emoji: "🎯",
    part: "part 5 — Goal-First Approach",
    title: "Your Goals Decide the Strategy. Not Products.",
    description:
      "Buying random policies and funds isn't planning. We start with your goals — retirement, wealth creation, child's education — and build a clear, personalised financial roadmap.",
  },
  {
    icon: Zap,
    emoji: "⚡",
    part: "part 6 — Real Human Support",
    title: "Fast. Reliable. Human.",
    description:
      "When you have a question, you don't get a chatbot or a ticket ID. You get a real advisor who responds within few hours — because financial decisions can't wait.",
  },
];

export default function AboutSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const isMobile = useViewportBelow(1024);
  const [hasManualRightScroll, setHasManualRightScroll] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const leftScrollPos = useRef(0);
  const rightScrollPos = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          challenges.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCount(i + 1);
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Sync manual scroll back to our internal tracking
  const handleManualScroll = (type: "left" | "right") => {
    if (type === "left" && leftScrollRef.current) {
      leftScrollPos.current = leftScrollRef.current.scrollTop;
    } else if (type === "right" && rightScrollRef.current) {
      if (!isMobile) {
        rightScrollPos.current = rightScrollRef.current.scrollTop;
      } else {
        rightScrollPos.current = rightScrollRef.current.scrollLeft;
      }
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 0.5;

    const scrollLoop = () => {
      // Challenges (Left): Auto-scroll ONLY on Desktop
      if (isSectionVisible && !isMobile && leftScrollRef.current && !isLeftHovered) {
        leftScrollPos.current += scrollSpeed;
        const maxLeftScroll = Math.max(0, leftScrollRef.current.scrollHeight - leftScrollRef.current.clientHeight);
        if (leftScrollPos.current >= maxLeftScroll) {
          leftScrollPos.current = 0;
        }
        leftScrollRef.current.scrollTop = leftScrollPos.current;
      }
      
      // Why Features (Right): Vertical on Desktop, Horizontal on Mobile
      if (isSectionVisible && rightScrollRef.current && !isRightHovered) {
        if (!isMobile) {
          // Desktop Vertical
          rightScrollPos.current += scrollSpeed;
          const maxRightScroll = Math.max(0, rightScrollRef.current.scrollHeight - rightScrollRef.current.clientHeight);
          if (rightScrollPos.current >= maxRightScroll) {
            rightScrollPos.current = 0;
          }
          rightScrollRef.current.scrollTop = rightScrollPos.current;
        } else if (!hasManualRightScroll) {
          // Mobile Horizontal
          rightScrollPos.current += scrollSpeed;
          if (rightScrollPos.current >= rightScrollRef.current.scrollWidth / 2) {
            rightScrollPos.current = 0;
          }
          rightScrollRef.current.scrollLeft = rightScrollPos.current;
        }
      }
      
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile, isLeftHovered, isRightHovered, hasManualRightScroll, isSectionVisible]);

  useEffect(() => {
    if (!isMobile || !hasManualRightScroll || !rightScrollRef.current) return;

    const clampScrollPosition = () => {
      if (!rightScrollRef.current) return;
      const maxScrollLeft = Math.max(0, rightScrollRef.current.scrollWidth - rightScrollRef.current.clientWidth);
      const nextScrollLeft = Math.min(rightScrollPos.current, maxScrollLeft);
      rightScrollPos.current = nextScrollLeft;
      rightScrollRef.current.scrollLeft = nextScrollLeft;
    };

    const frameId = requestAnimationFrame(clampScrollPosition);
    return () => cancelAnimationFrame(frameId);
  }, [isMobile, hasManualRightScroll]);

  const enableFiniteRightManualScroll = () => {
    if (!isMobile || hasManualRightScroll) return;
    setHasManualRightScroll(true);
  };

  const mobileWhyFeatures = isMobile && !hasManualRightScroll ? [...whyFeatures, ...whyFeatures] : whyFeatures;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 md:py-16 bg-[#f8fafa] relative overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-300 rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-200 rounded-full opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-10">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-2 block">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tight">
            Your Trusted Partner in{" "}
            <span className="gradient-text">Financial Success</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Most investors have 15+ mutual funds and no clear plan. We fix that — with written
            strategies, scheduled reviews, and advisors you can actually reach.
          </p>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ──── LEFT: Challenges (Vertical Only) ──── */}
          <div className="flex flex-col">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-1 block">
              Real Challenges
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
              Challenges our clients{" "}
              <span className="gradient-text">faced before</span> joining us
            </h3>
            <p className="text-slate-600 text-sm md:text-base mb-5 leading-relaxed">
              We&apos;ve helped 50+ clients move past these exact concerns.
            </p>

            <div className="relative flex-1">
              <div
                ref={leftScrollRef}
                onMouseEnter={() => setIsLeftHovered(true)}
                onMouseLeave={() => setIsLeftHovered(false)}
                onScroll={() => handleManualScroll("left")}
                className="relative max-h-[320px] overflow-y-auto pr-2 space-y-2.5 custom-scrollbar"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#14b8a6 transparent" }}
              >
                {challenges.map((challenge, index) => {
                  const actualIndex = index % challenges.length;
                  return (
                    <div
                      key={index}
                      className="transition-all duration-500"
                      style={{
                        opacity: visibleCount > actualIndex ? 1 : 0,
                        transform: visibleCount > actualIndex ? "translateY(0)" : "translateY(16px)",
                      }}
                    >
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-default ${
                          actualIndex % 3 === 0
                            ? "bg-teal-600 text-white"
                            : actualIndex % 3 === 1
                            ? "bg-teal-100 text-teal-800 border border-teal-200"
                            : "bg-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        &ldquo;{challenge}&rdquo;
                      </div>
                    </div>
                  );
                })}
                <div className="h-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#f8fafa] to-transparent pointer-events-none rounded-b-xl" />
            </div>
          </div>

          {/* ──── RIGHT: Why Features (Adaptive Scroll) ──── */}
          <div className="flex flex-col">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-1 block">
              Why InvestAlly
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">
              Not Just Advice.{" "}
              <span className="gradient-text">A Financial Partner.</span>
            </h3>

            <div className="relative flex-1">
              <div
                ref={rightScrollRef}
                onMouseEnter={() => setIsRightHovered(true)}
                onMouseLeave={() => setIsRightHovered(false)}
                onTouchStart={() => {
                  enableFiniteRightManualScroll();
                  setIsRightHovered(true);
                }}
                onTouchEnd={() => setIsRightHovered(false)}
                onScroll={() => handleManualScroll("right")}
                className={`relative max-h-[350px] custom-scrollbar overflow-y-auto pr-2 ${
                    isMobile 
                        ? "flex flex-row overflow-x-auto overflow-y-hidden gap-4 pb-6" 
                        : "flex flex-col space-y-3"
                }`}
                style={{ scrollbarWidth: "thin", scrollbarColor: "#14b8a6 transparent" }}
              >
                {(isMobile ? mobileWhyFeatures : whyFeatures).map((feature, index) => (
                  <div
                    key={index}
                    className={`group shrink-0 flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300 ${
                        isMobile ? "w-[280px] flex-col" : "w-full flex-row"
                    }`}
                  >
                    <div className="flex-shrink-0 bg-teal-50 rounded-lg w-10 h-10 flex items-center justify-center border border-teal-100/60 transition-colors duration-300">
                      <span className="text-lg">{feature.emoji}</span>
                    </div>
                    <div>
                      <p className="text-teal-500 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                        {feature.part}
                      </p>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 mb-1 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
                {!isMobile && <div className="h-4" />}
              </div>
              {!isMobile && <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#f8fafa] to-transparent pointer-events-none rounded-b-xl" />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
