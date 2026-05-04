"use client";

import { useState, useEffect } from "react";
import { X, TrendingUp } from "lucide-react";

const quotes = [
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    context: "Start investing today"
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    context: "Financial education matters"
  },
  {
    text: "Do not save what is left after spending; instead spend what is left after saving.",
    author: "Warren Buffett",
    context: "Save first, spend later"
  },
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett",
    context: "Patience in investing"
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
    context: "Knowledge reduces risk"
  }
];

export default function QuotePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("quotePopupShown");

    if (!hasShownPopup) {
      // Select a random quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setSelectedQuote(quotes[randomIndex]);

      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      // Mark popup as shown for this session
      sessionStorage.setItem("quotePopupShown", "true");
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto relative max-w-md w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-teal-100/50 transform transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-all duration-200 hover:rotate-90"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Icon */}
          <div className="flex justify-center pt-8 pb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Quote */}
          <div className="px-8 pb-8">
            <div className="text-center mb-6">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                {selectedQuote.context}
              </p>
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed mb-4 italic">
                "{selectedQuote.text}"
              </p>
              <p className="text-sm font-medium text-slate-500">
                — {selectedQuote.author}
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-green-500 mx-auto rounded-full mb-6" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Journey
            </button>
          </div>

          {/* Decorative gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-green-400/20 to-teal-400/20 -z-10 blur-xl" />
        </div>
      </div>
    </>
  );
}
