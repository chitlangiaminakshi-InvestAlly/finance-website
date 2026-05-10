import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Building2,
  Wallet,
  ShieldCheck,
  Stethoscope,
  Users,
  Home,
  BriefcaseBusiness,
  Compass,
  Receipt,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SolutionsGridAligner from "@/components/solutions-grid-aligner";
import { getGridCardClasses } from "@/lib/grid-utils";
import ScrollReveal from "@/components/scroll-reveal";

type SolutionCardData = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  approach: string;
  meta?: string;
  footer?: string;
};

type SectionConfig = {
  id: "wealth" | "insurance" | "loans" | "advisory";
  title: string;
  description: string;
  background: string;
  accent: string;
  cards: SolutionCardData[];
  dark?: boolean;
};

const wealthSolutions: SolutionCardData[] = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description:
      "Curated selection of domestic and international mutual funds aligned with your risk profile and life goals — spanning equity, debt, hybrid, and global fund categories.",
    icon: TrendingUp,
    meta: "Indian markets from Rs500/month  International from Rs10,000",
    features: [
      "Indian equity, debt & hybrid mutual funds",
      "International direct & global feeder funds and ETFs",
      "Goal-based fund selection & SIP planning",
      "AMC & fund manager due diligence",
      "Quarterly portfolio review & rebalancing",
    ],
    approach:
      "We start by listening — understanding your life goals and conducting a thorough risk profiling. From there, we identify the right fund categories for your profile, then go deeper with rigorous AMC and fund manager due diligence. The result is a personalized investment plan with zero distributor bias. We then review and realign your portfolio every quarter as your life evolves.",
  },
  {
    id: "mlds-real-estate",
    title: "MLDs & Fractional Real Estate",
    description:
      "Two distinct ways to diversify beyond traditional mutual funds — market-linked debentures for debt alternatives, and fractional real estate ownership to access property investment at an accessible entry point.",
    icon: Building2,
    meta: "Min. investment: Rs5L",
    features: [
      "Market-linked debentures (MLDs)",
      "Debt alternative with select downside protection",
      "Fractional ownership of real estate - property appreciation",
    ],
    approach:
      "MLDs work like a debt product — but select plans can shield you from market downside, making them a considered alternative to traditional fixed-income instruments. For fractional real estate, we evaluate platforms and properties on regulatory standing and asset quality — so you can own a share of real property with confidence.",
  },
  {
    id: "pms-aifs",
    title: "PMS & AIFs",
    description:
      "Bespoke portfolio management and exclusive access to alternative investment funds — for HNI investors seeking superior, risk-adjusted returns beyond public markets.",
    icon: Wallet,
    meta: "Min. investment: Rs50L (PMS)  Rs1Cr (AIF)",
    features: [
      "Discretionary & non-discretionary PMS",
      "Category I, II & III AIFs",
      "Private equity & venture capital access",
      "Hedge funds & structured products",
    ],
    approach:
      "We match you with SEBI-registered PMS and AIF managers whose philosophy aligns with your goals — with full transparency on fees, strategy, and performance.",
  },
];

const insuranceSolutions: SolutionCardData[] = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    description:
      "Pure term insurance — and nothing else. We believe life cover should protect your family at the lowest possible cost, freeing the rest of your money to genuinely build wealth.",
    icon: ShieldCheck,
    features: [
      "Pure term insurance — maximum cover, minimal premium",
      "Strategic coverage planning aligned to your wealth goals",
      "Coverage duration planning — know exactly when you need it till",
      "Periodic review as your income, expenses & liabilities evolve",
      "Dedicated claim support when your family needs it most",
    ],
    approach:
      "We don't recommend ULIPs or endowment plans — products that blend insurance with investment rarely do justice to either. Instead, we recommend pure term insurance sized precisely to your needs, structured to complement your wealth building plan. We plan the right coverage amount, the right duration, and stay with you through coverage reviews and claims — so insurance becomes a financial decision, not just an annual expense.",
  },
  {
    id: "non-life-insurance",
    title: "Non-Life Insurance",
    description:
      "Comprehensive coverage for your health, vehicle, property, and travel — with policy comparison across insurers and dedicated claims support when you need it most.",
    icon: Stethoscope,
    features: [
      "Health insurance — individual & family floater",
      "Vehicle insurance — two & four wheelers",
      "Property & home insurance",
      "Travel insurance — domestic & international",
      "Critical illness & super top-up covers",
    ],
    approach:
      "We run a coverage need analysis first — then compare policies across insurers on claim settlement ratio, not just premium. We stay with you through claims, not just at purchase.",
  },
  {
    id: "group-insurance",
    title: "Group Insurance Plans",
    description:
      "Employer-sponsored insurance solutions that help businesses attract and retain talent — with group health and life cover for your entire workforce and their families.",
    icon: Users,
    features: [
      "Group mediclaim — employees & dependents",
      "Group term life insurance",
      "Corporate personal accident cover",
      "Cashless hospitalisation network access",
      "Annual renewal & claims management",
    ],
    approach:
      "We design group plans that balance employee wellbeing with cost efficiency — and handle renewals, additions, and claims so your HR team doesn't have to.",
  },
];

const loansSolutions: SolutionCardData[] = [
  {
    id: "home-loans",
    title: "Home Loans",
    description:
      "Finance your dream home with competitive interest rates and flexible tenures — for purchase, construction, or renovation. We compare across 20+ lenders to get you the best deal.",
    icon: Home,
    features: [
      "Home purchase & construction loans",
      "Home renovation & extension loans",
      "Balance transfer & top-up loans",
      "NRI home loan assistance",
      "End-to-end documentation support",
    ],
    approach:
      "We compare rates across banks and NBFCs and negotiate on your behalf. Our team handles documentation and lender coordination — reducing approval time significantly.",
  },
  {
    id: "business-msme-loans",
    title: "Business & MSME Loans",
    description:
      "Fuel your business growth with working capital finance, term loans, and expansion funding — tailored for MSMEs, startups, and established businesses across sectors.",
    icon: BriefcaseBusiness,
    features: [
      "MSME & SME working capital loans",
      "Business term & expansion loans",
    ],
    approach:
      "We match your business profile to the right lender — bank or NBFC — and present your case to maximise approval chances while minimising interest cost.",
  },
  {
    id: "secured-loans",
    title: "Secured Loans & Credit Facilities",
    description:
      "Access liquidity by leveraging your existing assets — investments, mutual funds, or property — without liquidating what you've built. Smart borrowing that keeps your wealth intact.",
    icon: Compass,
    features: [
      "Loan against securities (LAS)",
      "Loan against mutual funds",
      "Loan against property (secured loans)",
    ],
    approach:
      "Why sell your investments when you can borrow against them? We help you unlock liquidity from your existing assets — securities, mutual funds, or property — at competitive rates, so your wealth continues to compound uninterrupted while you meet your financial needs.",
  },
];

const advisorySolutions: SolutionCardData[] = [
  {
    id: "tax-planning",
    title: "Tax Planning & Optimisation",
    description:
      "As chartered accountants, we craft tax-efficient strategies that keep more money in your pocket — legally. From ITR filing to complex income structuring for HNIs and business owners.",
    icon: Receipt,
    features: [
      "Income tax planning & ITR filing",
      "Capital gains tax optimisation",
      "Tax-loss harvesting on investments",
      "HUF & business structure planning",
    ],
    approach:
      "We integrate tax planning with your investment strategy — so your portfolio is structured to minimise tax drag across asset classes year-on-year, not just at filing time.",
  },
  {
    id: "financial-education",
    title: "Financial Education Workshops",
    description:
      "Interactive workshops that demystify personal finance — empowering individuals, families, and corporate teams to make informed financial decisions with confidence.",
    icon: Brain,
    features: [
      "Personal finance fundamentals",
      "Investment basics — MF, stocks, gold",
      "Insurance & risk awareness sessions",
      "Corporate employee wellness programmes",
      "Women & money — focused workshops",
    ],
    approach:
      "We believe financial knowledge is the foundation of wealth. Our workshops are jargon-free, interactive, and tailored to the audience — because when you understand money, you control your future.",
  },
];

const sectionConfigs: SectionConfig[] = [
  {
    id: "wealth",
    title: "Wealth Building",
    description:
      "Precision investment strategies across Indian and global markets — built for disciplined, long-term wealth creation with SEBI-registered expert guidance.",
    background: "bg-white",
    accent: "from-[#006a63] to-teal-400",
    cards: wealthSolutions,
  },
  {
    id: "insurance",
    title: "Insurance & Protection",
    description:
      "Unbiased insurance advisory that puts your coverage first. We decode complex policies, compare across insurers, and ensure you're protected for real risks — not oversold.",
    background: "bg-[#f2f4f4]",
    accent: "from-[#006a63] to-teal-400",
    cards: insuranceSolutions,
  },
  {
    id: "loans",
    title: "Loans & Financing",
    description:
      "Smart lending solutions for individuals and businesses — with access to competitive rates across banks and NBFCs, plus end-to-end documentation and approval support.",
    background: "bg-white",
    accent: "from-[#006a63] to-teal-400",
    cards: loansSolutions,
  },
  {
    id: "advisory",
    title: "Expert Advisory",
    description:
      "Certified financial advisors and chartered accountants helping you make smarter money decisions — from tax optimisation and wealth strategy to financial literacy for individuals and corporates.",
    background: "bg-slate-900",
    accent: "from-teal-400 to-[#006a63]",
    cards: advisorySolutions,
    dark: true,
  },
];

const cardGridClasses = Object.fromEntries(
  sectionConfigs.map((section) => [
    section.id,
    section.cards.map((_, index) => getGridCardClasses(section.cards.length, index)),
  ]),
) as Record<SectionConfig["id"], string[]>;

export default function SolutionsPage() {
  const SolutionCard = ({
    solution,
    gridSpan,
    dark = false,
  }: {
    solution: SolutionCardData;
    gridSpan: string;
    dark?: boolean;
  }) => {
    const cardClasses = dark
      ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
      : "bg-[#f8fafa] border border-slate-200/50 hover:shadow-xl";

    const iconClasses = dark
      ? "bg-teal-500/10 text-teal-300"
      : "bg-teal-50 text-[#006a63]";

    const titleClasses = dark ? "text-white" : "text-slate-900";
    const descriptionClasses = dark ? "text-teal-50/80" : "text-slate-600";
    const metaClasses = dark ? "text-teal-200 border-teal-500/20 bg-teal-500/10" : "text-[#006a63] border-teal-100 bg-teal-50";
    const featureTextClasses = dark ? "text-teal-50/90" : "text-slate-700";
    const approachLabelClasses = dark ? "text-teal-300" : "text-[#006a63]";
    const approachTextClasses = dark ? "text-teal-50/80" : "text-slate-600";

    return (
      <div
        data-solution-card
        className={`${gridSpan} flex-shrink-0 w-[88vw] sm:w-[520px] md:w-auto h-full rounded-2xl p-6 lg:p-8 transition-all overflow-hidden flex flex-col ${cardClasses}`}
      >
        <div className="flex items-center gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconClasses}`}>
            <solution.icon className="h-6 w-6" />
          </div>
          <h3 className={`font-bold text-xl lg:text-2xl ${titleClasses}`}>{solution.title}</h3>
        </div>

        <p
          data-card-description
          className={`text-sm leading-relaxed mb-5 ${descriptionClasses}`}
        >
          {solution.description}
        </p>

        <div
          data-card-meta
          className="mb-5 min-h-[2rem]"
        >
          {solution.meta && (
            <div className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${metaClasses}`}>
              {solution.meta}
            </div>
          )}
        </div>

        <ul
          data-card-features
          className={`space-y-3 text-sm mb-6 ${featureTextClasses}`}
        >
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[#006a63] shrink-0">
                <Check className="h-3 w-3" strokeWidth={4} />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div
          data-card-approach
          className="mt-auto pt-6 border-t border-black/5 dark:border-white/10"
        >
          <p className={`text-xs font-bold uppercase tracking-[0.18em] mb-3 ${approachLabelClasses}`}>The InvestAlly approach</p>
          <p className={`text-sm leading-relaxed ${approachTextClasses}`}>{solution.approach}</p>
          {solution.footer && <p className={`text-sm leading-relaxed mt-4 ${approachTextClasses}`}>{solution.footer}</p>}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <main className="bg-[#f8fafa]">
        <section className="relative overflow-hidden min-h-screen pt-20 md:pt-0">
          <div className="absolute inset-0">
            <Image
              src="/animations/solutions-hero-section-v2.png"
              alt="InvestAlly Financial Solutions"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,250,0.94)_0%,rgba(248,250,250,0.84)_34%,rgba(248,250,250,0.5)_62%,rgba(248,250,250,0.12)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[58%] bg-[linear-gradient(90deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.16)_70%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-start md:items-center">
            <div className="w-full grid grid-cols-1 gap-8 items-start pt-4 pb-8 md:items-center md:pt-[clamp(5.5rem,10vw,9rem)] md:pb-[clamp(3rem,6vw,5rem)]">
              <div className="max-w-2xl space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 text-[#006a63] font-semibold text-xs uppercase tracking-widest border border-teal-100 backdrop-blur-sm">
                  Expert Solutions
                </div>
                <h1 className="font-black text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight">
                  Comprehensive <br />
                  <span className="text-[#006a63]">Financial Solutions</span>
                </h1>
                <p className="text-slate-700 text-lg max-w-xl leading-relaxed">
                  Wealth creation, protection, lending, and advisory under one roof — with disciplined execution and guidance aligned to your real financial goals.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-[#006a63] hover:bg-teal-700 text-white px-8 py-6 rounded-lg font-bold text-base flex items-center gap-2 group shadow-lg transition-transform hover:scale-[1.02]">
                    <Link href="/#contact">
                      Begin Your Journey
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {sectionConfigs.map((section) => (
          <ScrollReveal key={section.id}>
            <section id={section.id} className={`${section.background} py-16 scroll-mt-24 ${section.dark ? "relative overflow-hidden" : ""}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-10 max-w-4xl">
                  <h2 className={`font-black text-4xl mb-4 ${section.dark ? "text-white" : "text-slate-900"}`}>{section.title}</h2>
                  <div className={`w-20 h-1.5 bg-gradient-to-r ${section.accent} rounded-full mb-5`} />
                  <p className={`text-base md:text-lg leading-relaxed ${section.dark ? "text-teal-50/75" : "text-slate-600"}`}>
                    {section.description}
                  </p>
                  {section.id === "insurance" && (
                    <p className="text-sm mt-4 text-teal-700 font-medium">
                      Insurance advisory services available. Execution through IRDAI-licensed partner brokers.
                    </p>
                  )}
                </div>

                <SolutionsGridAligner
                  className="flex snap-x snap-mandatory overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-6 md:auto-rows-fr md:items-stretch md:overflow-visible md:pb-0 custom-scrollbar"
                >
                  {section.cards.map((solution, i) => (
                    <SolutionCard
                      key={solution.id}
                      solution={solution}
                      gridSpan={`${cardGridClasses[section.id][i]} snap-start`}
                      dark={section.dark}
                    />
                  ))}
                </SolutionsGridAligner>
              </div>
            </section>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <section className="bg-white py-16 text-center">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Ready to Build with Clarity?</h2>
              <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                Talk to InvestAlly for a structured plan across investments, protection, credit, and advisory — built around your life, not pushed products.
              </p>
              <Button asChild size="lg" className="bg-[#006a63] hover:bg-teal-700 text-white px-10 py-8 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
                <Link href="/#contact" className="flex items-center gap-2">
                  Book Consultation
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
