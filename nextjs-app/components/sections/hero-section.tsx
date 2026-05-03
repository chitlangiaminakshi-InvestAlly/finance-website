import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white pt-20 md:pt-0 min-h-[0] md:min-h-[calc(100vh-64px)] bg-[#0f766e]"
    >
      <div className="absolute inset-0">
        <Image
          src="/animations/hero-section.webp"
          alt="InvestAlly financial journey illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Contrast layer for legibility over the illustration */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,36,34,0.86)_0%,rgba(7,36,34,0.72)_38%,rgba(7,36,34,0.38)_62%,rgba(7,36,34,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.22)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[58%] bg-[linear-gradient(90deg,rgba(6,24,23,0.48)_0%,rgba(6,24,23,0.22)_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-start md:items-center">
        <div
          className="w-full grid grid-cols-1 gap-8 items-start pt-4 pb-8 md:items-center md:pt-[clamp(5.5rem,10vw,9rem)] md:pb-[clamp(2rem,5vw,4rem)]"
        >

          <div className="flex max-w-2xl flex-col gap-2 md:gap-5">

            {/* Eyebrow badge */}
            <div className="inline-flex self-start items-center gap-2 px-2 py-0.5 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)", backdropFilter: "blur(8px)" }}>
              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-300" />
              Trusted by Smart Investors Across India
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              We don&apos;t sell investments,
              <br />
              <span style={{ color: "#a7f3d0" }}>We build investors.</span>
            </h1>

            {/* Sub-copy */}
            <p
              className="leading-relaxed max-w-md"
              style={{ color: "rgba(255,255,255,0.86)", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
            >
              Structured financial planning and portfolio guidance designed to help you grow wealth with discipline.
            </p>

            {/* Proof points */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                  style={{ background: "rgba(167,243,208,0.15)", border: "1px solid rgba(167,243,208,0.3)" }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: "#a7f3d0" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.92)" }}>
                  Founded by Chartered Accountants
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                  style={{ background: "rgba(167,243,208,0.15)", border: "1px solid rgba(167,243,208,0.3)" }}>
                  <BarChart3 className="w-4 h-4" style={{ color: "#a7f3d0" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.92)" }}>
                  Evidence-driven investing approach
                </span>
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="#contact"
                className="inline-flex self-start items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
                style={{
                  background: "#fff",
                  color: "#0d9488",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                }}
              >
                Book a 30-Min Clarity Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs pl-1" style={{ color: "rgba(255,255,255,0.68)" }}>
                * Understand your portfolio, risks, and next steps.
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-px mt-2 rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {[
                { value: "₹5Cr+", label: "Assets Managed" },
                { value: "50+", label: "Happy Clients" },
                { value: "15 Yrs", label: "Experience" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-3 px-2"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <span className="text-xl font-black text-white">{stat.value}</span>
                  <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
