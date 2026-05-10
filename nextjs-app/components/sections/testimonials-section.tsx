"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useViewportBelow } from "@/hooks/useViewportBelow";

const roles = ["Lawyers", "CXOs", "Professionals", "Business Owners", "Doctors", "Engineers"];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoAdvanceResumeRef = useRef<number | null>(null);
  const autoAdvancePausedRef = useRef(false);
  const isMobile = useViewportBelow(768);
  const slidesToShow = isMobile ? 1 : 3;

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  const testimonials = [
    {
      text: "With 20+ years in finance, I ask tough questions before trusting anyone with my money, and InvestAlly passed with ease. Adarsh is knowledgeable, honest, and focused on what truly suits you. His advice is clear, research-driven, and pressure-free. He understands risk well and always puts the client's interest first. I recommend InvestAlly without hesitation.",
      name: "Anil Venherkar",
      role: "Former Executive Director - Finance, MSCI Inc., Mumbai",
      initials: "AV",
      image: "/animations/testimonial-faces/Anil Venherkar.webp",
      products: ["PMS"]
    },
    {
      text: "I've had a great experience with InvestAlly and with the way Adarsh has built the firm. His investing approach is practical, well-researched, and focused on long-term wealth creation rather than short-term noise. What stands out is the clarity, transparency, and trust in every interaction. InvestAlly feels like a genuine partner in your financial journey. Highly recommended.",
      name: "Nikhil Agarwal",
      role: "Businessman, Age 35, Jaipur",
      initials: "NA",
      image: "/animations/testimonial-faces/Nikhil Agarwal.webp",
      products: ["Mutual Fund"]
    },
    {
      text: "InvestAlly has had a meaningful impact on my investing journey. During times of uncertainty and setbacks, their guidance brought much-needed clarity and confidence. What stood out was not just the recommendations, but the explanation of fundamentals and macro trends behind them. Their balanced insights and timely support have truly shaped my approach to investing.",
      name: "Pratik Kesherwani",
      role: "Private Equity Manager, Brookfield, Mumbai",
      initials: "PK",
      image: "/animations/testimonial-faces/Pratik Kesherwani.webp",
      products: ["Mutual Fund"]
    },
    {
      text: "My experience with InvestAlly under Adarsh Katta's guidance has been excellent. Their clear insights on US markets made global investing far more accessible. Along with good returns, I've gained a deeper understanding of international investing. I'd highly recommend InvestAlly to anyone looking to diversify beyond Indian equities.",
      name: "Agam Shah",
      role: "Private Equity Senior Analyst - Brookfield, Age 34, Mumbai",
      initials: "AS",
      image: "/animations/testimonial-faces/Agam Shah.webp",
      products: ["Global Investing"]
    },
    {
      text: "It's rare to find someone who is both a close friend and a true professional. Adarsh manages my investments at InvestAlly with the same care and precision as his own. If you're looking for someone with deep market knowledge, integrity, and genuine commitment, Adarsh is the right person.",
      name: "Vivek Nagaria",
      role: "Private Equity Senior Analyst - Brookfield, Age 31, Mumbai",
      initials: "VN",
      image: "/animations/testimonial-faces/Vivek Nagaria.webp",
      products: ["Mutual Fund", "Global Investing"]
    },
    {
      text: "Investally has been managing my portfolio for the last 6 months, and I'm genuinely happy with their recommendations. They explain things clearly, keep me updated, and suggest what truly fits my goals. Adarsh's market insight and instinct give me full confidence that my money is in safe hands and the returns speak for themselves.",
      name: "CA Vishal Mittal, CFA",
      role: "Salaried, Private Sector Employee, Age 25, Mumbai",
      initials: "VM",
      image: "/animations/testimonial-faces/face-1.png",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly brought clarity and confidence to my entire investment journey. Everything finally feels simple, structured and aligned with my goals.",
      name: "Shailesh Tiwari",
      role: "Businessman, Age 60, Jaipur",
      initials: "ST",
      image: "/animations/testimonial-faces/face-2.png",
      products: ["Mutual Funds"]
    },
    {
      text: "Every discussion with Adarsh Katta gives you a deeper insight on the finance world. InvestAlly helped me build an understanding of the various Mutual funds available in the market and were patient enough to answer all my why's. Their quarterly updates give me more confidence in the funds I am invested in.",
      name: "Abhinav Chitlangia",
      role: "Businessman, Age 35, Raxaul, Bihar",
      initials: "AC",
      image: "/animations/testimonial-faces/face-3.png",
      products: ["Mutual Funds"]
    },
    {
      text: "Invest smarter with InvestAlly. Avoid Duplication in the name of Diversification.",
      name: "Ram Gopal Chitlangia",
      role: "Commodity Broker, Age 66, Sikar, Rajasthan",
      initials: "RC",
      image: "/animations/testimonial-faces/face-4.png",
      products: ["Mutual Funds"]
    },
    {
      text: "Investally helped me structure my portfolio in the most efficient way- i reduced my holding from some 20+ mutual funds to a lean and clean 5 mutual funds. I now clearly understand the difference between Duplication and Diversification.",
      name: "Nishant Lakhotiya",
      role: "Businessman, Age 37, Panipat",
      initials: "NL",
      image: "/animations/testimonial-faces/face-5.png",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly maintains my family portfolio- keeping in mind the risks that we can take as a couple and our financial goals. It has been a great experience working with them. Very professional and always available. Thank You!",
      name: "Sarika Lakhotiya",
      role: "Businesswomen, Age 36, Panipat",
      initials: "SL",
      image: "/animations/testimonial-faces/face-6.png",
      products: ["Mutual Funds"]
    },
    {
      text: "Talking to Adarsh and Minakshi has simplified the finance world at large for me. Their insights help me invest confidently. InvestAlly filters the news from the noise in the market, educates and builds your confidence in your financial journey.",
      name: "Anurag Rajput",
      role: "IT Consultant, Age 28, Mumbai",
      initials: "AR",
      image: "/animations/testimonial-faces/face-7.png",
      products: ["Mutual Funds"]
    },
    {
      text: "I always felt overwhelmed with mutual funds and insurance. InvestAlly made everything simple. They understood my goals, created a plan, and walked me through every step. What I love most is the transparency. I know they're genuinely looking out for my best interest. I finally feel in control of my money.",
      name: "Saumya",
      role: "Business, Age 30, Mumbai",
      initials: "S",
      image: "/animations/testimonial-faces/face-8.png",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly made investing feel simple and stress-free. Minakshi and Adarsh took the time to understand my goals, explained every fund choice clearly, and created a plan that actually feels achievable. I've never felt more confident about my investments. Highly recommend their personalized approach!",
      name: "Akanksha",
      role: "Salaried, Age 37, Dubai",
      initials: "A",
      image: "/animations/testimonial-faces/face-9.png",
      products: ["Mutual Funds"]
    },
    {
      text: "Working with InvestAlly has been a great experience. The team is approachable, always available for discussions, and takes the time to understand financial goals in detail. Their tailored investment options make decisions easier and more informed. They also stay consistently updated with changing market scenarios, which gives a lot of confidence while planning investments.",
      name: "Siddharth Hansaria",
      role: "Businessman, Age 36, Jaipur",
      initials: "SH",
      image: "/animations/testimonial-faces/face-1.png",
      products: ["PMS", "Mutual Fund", "AIF"]
    },
  ];

  const maxIndex = testimonials.length - slidesToShow;

  const goToSlide = (nextIndex: number, behavior: ScrollBehavior = "smooth") => {
    const boundedIndex = Math.max(0, Math.min(nextIndex, maxIndex));

    if (isMobile && sliderRef.current) {
      sliderRef.current.scrollTo({
        left: boundedIndex * sliderRef.current.clientWidth,
        behavior,
      });
    }

    setCurrentIndex(boundedIndex);
  };

  const pauseAutoAdvance = () => {
    autoAdvancePausedRef.current = true;

    if (autoAdvanceResumeRef.current) {
      window.clearTimeout(autoAdvanceResumeRef.current);
    }

    autoAdvanceResumeRef.current = window.setTimeout(() => {
      autoAdvancePausedRef.current = false;
      autoAdvanceResumeRef.current = null;
    }, 3500);
  };

  const nextSlide = () => {
    pauseAutoAdvance();
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    pauseAutoAdvance();
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoAdvancePausedRef.current) return;
      setCurrentIndex((prev) => {
        const nextIndex = prev >= maxIndex ? 0 : prev + 1;

        if (isMobile && sliderRef.current) {
          sliderRef.current.scrollTo({
            left: nextIndex * sliderRef.current.clientWidth,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile, maxIndex]);

  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;

    const slider = sliderRef.current;

    const handleScroll = () => {
      pauseAutoAdvance();
      const cardWidth = slider.clientWidth;
      if (cardWidth === 0) return;

      const nextIndex = Math.round(slider.scrollLeft / cardWidth);
      setCurrentIndex((prev) => (prev === nextIndex ? prev : Math.min(nextIndex, maxIndex)));
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, maxIndex]);

  useEffect(() => {
    return () => {
      if (autoAdvanceResumeRef.current) {
        window.clearTimeout(autoAdvanceResumeRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-3 flex flex-col items-center justify-center">
            <span className="mb-1">Trusted by</span>
            <span className="relative inline-block w-full h-[1.2em]">
              <span
                key={roleIndex}
                className="gradient-text absolute inset-0 text-center animate-[testimonialRoleIn_800ms_cubic-bezier(0.33,1,0.68,1)]"
              >
                {roles[roleIndex]}
              </span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            See what our clients say about their financial journey with Investally.
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          {/* Slider Wrapper */}
          <div
            ref={sliderRef}
            className={
              isMobile
                ? "overflow-x-auto overflow-y-visible snap-x snap-mandatory touch-pan-x custom-scrollbar py-3"
                : "overflow-x-hidden overflow-y-visible py-3"
            }
          >
            <div
              className={`flex ${isMobile ? "" : "transition-transform duration-500 ease-in-out"}`}
              style={isMobile ? undefined : { transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full ${slidesToShow === 3 ? "md:w-1/3" : ""} flex-shrink-0 px-4 ${isMobile ? "snap-center" : ""}`}
                >
                  <div className="bg-white rounded-xl shadow-xl p-8 h-full flex flex-col">
                    {/* Stars at top */}
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Feedback text centered vertically with flex-grow */}
                    <div className="flex-grow flex items-center">
                      <p className="text-slate-700 italic leading-relaxed">{testimonial.text}</p>
                    </div>

                    {/* Client info at bottom */}
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <div className="flex items-center mb-3">
                        <div className="w-14 h-14 aspect-square shrink-0 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-4">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            testimonial.initials
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{testimonial.name}</p>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                      {/* Product badges */}
                      {testimonial.products && testimonial.products.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {testimonial.products.map((product, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-teal-600 text-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-teal-600 text-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  pauseAutoAdvance();
                  goToSlide(index <= maxIndex ? index : maxIndex);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-teal-600' : 'bg-slate-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes testimonialRoleIn {
          from {
            opacity: 0;
            transform: translateY(15px);
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
