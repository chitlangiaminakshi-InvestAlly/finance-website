"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      text: "Investally's PMS service completely transformed my investment approach. The personalized attention and expert guidance helped me achieve 18% returns consistently. Best decision I made for my wealth!",
      name: "Suresh Kumar",
      role: "Business Owner, Mumbai",
      initials: "SK"
    },
    {
      text: "Getting the right term insurance was confusing until I found Investally. Their team patiently explained every detail and helped me choose the perfect policy for my family's needs. Very professional!",
      name: "Priya Mehta",
      role: "Software Engineer, Bangalore",
      initials: "PM"
    },
    {
      text: "The home loan process was seamless with Investally. They secured the best interest rate, handled all paperwork, and I moved into my dream home within 6 weeks. Highly recommend their services!",
      name: "Rahul Verma",
      role: "Marketing Manager, Delhi",
      initials: "RV"
    },
    {
      text: "Their mutual fund recommendations helped me build a diversified portfolio. The SIP approach made investing systematic and stress-free. My portfolio has grown by 22% in 2 years!",
      name: "Anita Singh",
      role: "Teacher, Pune",
      initials: "AS"
    },
    {
      text: "As a first-time investor, I was nervous. Investally's team educated me patiently and helped me start with small steps. Now I have a growing investment portfolio and feel financially confident!",
      name: "Vikram Gupta",
      role: "IT Professional, Hyderabad",
      initials: "VG"
    },
    {
      text: "Their tax-saving strategies saved me over ₹1 lakh in taxes this year! The personalized financial planning has been invaluable for my family's future. Truly grateful for their expertise.",
      name: "Meera Desai",
      role: "Doctor, Ahmedabad",
      initials: "MD"
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
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 mb-6 italic leading-relaxed">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 mr-4">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-teal-600 text-slate-900 hover:text-white rounded-full p-3 shadow-lg transition z-10 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-teal-600 text-slate-900 hover:text-white rounded-full p-3 shadow-lg transition z-10 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index <= maxIndex ? index : maxIndex)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index ? 'bg-teal-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
