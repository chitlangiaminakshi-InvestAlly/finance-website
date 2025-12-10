"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      text: "Investally has been managing my portfolio for the last 6 months, and I'm genuinely happy with their recommendations. They explain things clearly, keep me updated, and suggest what truly fits my goals. Adarsh's market insight and instinct give me full confidence that my money is in safe hands and the returns speak for themselves.",
      name: "CA Vishal Mittal, CFA",
      role: "Salaried, Private Sector Employee, Age 25, Mumbai",
      initials: "VM",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly brought clarity and confidence to my entire investment journey. Everything finally feels simple, structured and aligned with my goals.",
      name: "Shailesh Tiwari",
      role: "Businessman, Age 60, Jaipur",
      initials: "ST",
      products: ["Mutual Funds"]
    },
    {
      text: "Every discussion with Adarsh Katta gives you a deeper insight on the finance world. InvestAlly helped me build an understanding of the various Mutual funds available in the market and were patient enough to answer all my why's. Their quarterly updates give me more confidence in the funds I am invested in.",
      name: "Abhinav Chitlangia",
      role: "Businessman, Age 35, Raxaul, Bihar",
      initials: "AC",
      products: ["Mutual Funds"]
    },
    {
      text: "Invest smarter with InvestAlly. Avoid Duplication in the name of Diversification.",
      name: "Ram Gopal Chitlangia",
      role: "Commodity Broker, Age 66, Sikar, Rajasthan",
      initials: "RC",
      products: ["Mutual Funds"]
    },
    {
      text: "Investally helped me structure my portfolio in the most efficient way- i reduced my holding from some 20+ mutual funds to a lean and clean 5 mutual funds. I now clearly understand the difference between Duplication and Diversification.",
      name: "Nishant Lakhotiya",
      role: "Businessman, Age 37, Panipat",
      initials: "NL",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly maintains my family portfolio- keeping in mind the risks that we can take as a couple and our financial goals. It has been a great experience working with them. Very professional and always available. Thank You!",
      name: "Sarika Lakhotiya",
      role: "Businesswomen, Age 36, Panipat",
      initials: "SL",
      products: ["Mutual Funds"]
    },
    {
      text: "Talking to Adarsh and Minakshi has simplified the finance world at large for me. Their insights help me invest confidently. InvestAlly filters the news from the noise in the market, educates and builds your confidence in your financial journey.",
      name: "Anurag Rajput",
      role: "IT Consultant, Age 28, Mumbai",
      initials: "AR",
      products: ["Mutual Funds"]
    },
    {
      text: "I always felt overwhelmed with mutual funds and insurance. InvestAlly made everything simple. They understood my goals, created a plan, and walked me through every step. What I love most is the transparency. I know they're genuinely looking out for my best interest. I finally feel in control of my money.",
      name: "Saumya",
      role: "Business, Age 30, Mumbai",
      initials: "S",
      products: ["Mutual Funds"]
    },
    {
      text: "InvestAlly made investing feel simple and stress-free. Minakshi and Adarsh took the time to understand my goals, explained every fund choice clearly, and created a plan that actually feels achievable. I've never felt more confident about my investments. Highly recommend their personalized approach!",
      name: "Akanksha",
      role: "Salaried, Age 37, Dubai",
      initials: "A",
      products: ["Mutual Funds"]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [currentIndex]);

  const maxIndex = testimonials.length - slidesToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what our clients say about their financial journey with Investally.
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          {/* Slider Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`w-full ${slidesToShow === 3 ? 'md:w-1/3' : ''} flex-shrink-0 px-4`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
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
                        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-4">
                          {testimonial.initials}
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
                onClick={() => setCurrentIndex(index <= maxIndex ? index : maxIndex)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-teal-600' : 'bg-slate-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
