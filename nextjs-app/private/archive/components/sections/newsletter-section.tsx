"use client";

import { useState } from "react";
import { Send, Check, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  isBlogPage?: boolean;
}

export default function NewsletterSection({
  title = "Master Your Money Matters",
  description = "Join smart investors. Get actionable financial strategies, market insights, and wealth-building tips delivered to your inbox every week.",
  isBlogPage = false,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className={`py-16 md:py-24 ${isBlogPage ? "bg-white" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 px-6 py-12 md:px-16 md:py-20 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-pulse">
              <Sparkles className="h-4 w-4 text-teal-400" />
              <span className="text-teal-50 text-sm font-medium tracking-wide uppercase">Weekly Financial Playbook</span>
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
              {isSubmitted ? "You're on the list!" : title}
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {isSubmitted 
                ? "Welcome to the inner circle. Keep an eye on your inbox for our next edition of market-beating insights."
                : description
              }
            </p>

            {/* Form Section */}
            {!isSubmitted ? (
              <form 
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col sm:flex-row gap-3 group"
              >
                <div className="relative flex-grow h-12">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Bell className="h-5 w-5 text-slate-500 group-focus-within:text-teal-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-full bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 rounded-xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 backdrop-blur-sm text-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-12 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold px-8 rounded-xl shadow-xl shadow-teal-900/20 flex items-center justify-center gap-2 group transition-all duration-300"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2 text-sm">
                       <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <>
                      <span className="text-sm">Subscribe Now</span>
                      <Send className="h-3.5 w-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center animate-bounce-subtle">
                <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mb-4 border border-teal-500/30">
                  <Check className="h-10 w-10 text-teal-400" />
                </div>
                <p className="text-teal-400 font-bold">Successfully Subscribed!</p>
              </div>
            )}

            {/* Trust Badges / Note */}
            {!isSubmitted && (
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  No Spam, Ever
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  Weekly Insights
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  Unsubscribe Anytime
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
