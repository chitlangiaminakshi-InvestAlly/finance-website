"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does a financial advisor actually do for me — and how is InvestAlly different?",
    answer: "A financial advisor helps you make structured, goal-based decisions across investments, insurance, and taxes. At InvestAlly, the focus is not on selling products but on building a clear financial roadmap. We prioritize asset allocation, risk management, and long-term discipline—while keeping insurance and investments strictly separate to avoid conflicts of interest."
  },
  {
    question: "Which mutual funds should I invest in — and how do you decide?",
    answer: "There is no best mutual fund for everyone. At InvestAlly, fund selection follows your goals, time horizon, and risk profile. We evaluate funds based on consistency, risk-adjusted returns, portfolio quality, and fund manager strategy—not short-term performance or trends."
  },
  {
    question: "How is investing through an advisor different from doing it myself on Zerodha or Groww?",
    answer: "Platforms like Zerodha or Groww provide execution; they dont provide strategy. An advisor adds value through asset allocation, portfolio construction, behavioral guidance, and ongoing monitoring. InvestAlly ensures you stay aligned to your goals—especially during market volatility, where most DIY investors make costly mistakes."
  },
  {
    question: "How do you build a financial plan for a family — where do you even start?",
    answer: "We start with clarity: understanding income, expenses, existing investments, liabilities, and life goals. From there, we define priorities, assess risk, and build a structured plan covering investments, insurance, and liquidity. The focus is on creating a system—not just picking products."
  },
  {
    question: "I already have investments scattered across funds and policies. Can you help sort them out?",
    answer: "Yes. InvestAlly specializes in portfolio consolidation and review. We analyze your existing investments, identify overlaps, underperformers, and unnecessary products, and restructure your portfolio to make it goal-aligned, tax-efficient, and easier to manage."
  },
  {
    question: "I have LIC policies and some ULIPs — but how do I know if my family is actually protected enough?",
    answer: "Most traditional policies and ULIPs provide inadequate life cover relative to real needs. We assess your required coverage based on income, liabilities, and future goals, and typically recommend pure term insurance for effective protection—ensuring your family is financially secure."
  },
  {
    question: "Should I keep insurance and investments separate, or are combined plans like ULIPs better?",
    answer: "They should be separate. Combined products like ULIPs often result in high costs, low flexibility, and suboptimal returns. InvestAlly follows a clear principle: use term insurance for protection and mutual funds or other instruments for wealth creation."
  },
  {
    question: "Do you charge hidden fees or commissions?",
    answer: "No. Transparency is core to our approach. Any commissions (where applicable) are disclosed upfront, and our advice is not driven by product incentives. The focus remains on what is best for your financial goals."
  },
  {
    question: "How do you approach risk — what happens to my portfolio when markets fall?",
    answer: "Risk is managed through proper asset allocation, diversification, and disciplined investing. Market falls are expected and planned for—not reacted to. We help you stay invested, rebalance when needed, and avoid panic decisions that can harm long-term returns."
  },
  {
    question: "Do you also help with home loans, insurance, and tax planning — or only investments?",
    answer: "Yes. InvestAlly provides holistic financial guidance, including insurance advisory, tax-efficient investing, and strategic inputs on liabilities like home loans—ensuring all financial decisions work together cohesively."
  },
  {
    question: "Is there a minimum amount needed to start investing with InvestAlly?",
    answer: "No strict minimum. What matters more is consistency and discipline. Whether youre starting small or investing larger amounts, we help structure your investments in a way that aligns with your long-term goals."
  },
  {
    question: "Can I stop, pause, or withdraw my investments at any time?",
    answer: "Yes. Most mutual fund investments offer flexibility to pause, stop SIPs, or withdraw (subject to exit loads or tax implications). We guide you on the right timing and impact to ensure decisions dont disrupt your financial plan."
  },
  {
    question: "Do you suggest only India-based funds or also global investments?",
    answer: "InvestAlly recommends both India-based and global investments. A well-diversified portfolio often benefits from international exposure across developed and emerging markets. We help you invest in Indian mutual funds as well as global opportunities, based on your goals, risk profile, and asset allocation strategy."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState<boolean[]>(new Array(faqs.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => setHeaderVisible(true), 100);
          
          faqs.forEach((_, i) => {
            setTimeout(() => {
              setItemsVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 200 + i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-12 md:py-16 bg-white relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-teal-50 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-amber-50/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 rounded-full px-4 py-2 border border-teal-100 mb-6">
            <HelpCircle className="h-4 w-4 text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            Everything you need to know about working with InvestAlly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isVisible = itemsVisible[index];

            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className={`bg-slate-50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-teal-200 shadow-lg shadow-teal-100/50 bg-white" 
                      : "border-slate-100 hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                      isOpen ? "text-teal-700" : "text-slate-900 group-hover:text-teal-700"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "bg-teal-600 rotate-180" 
                        : "bg-white border border-slate-200 group-hover:border-teal-200"
                    }`}>
                      <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-slate-400 group-hover:text-teal-600"
                      }`} />
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`transition-all duration-400 ease-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gradient-to-r from-teal-100 to-transparent mb-4" />
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
