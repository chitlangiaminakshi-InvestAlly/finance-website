"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Youtube,
  Check,
  Sparkles,
  Send,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useIsMobile } from "@/hooks/useIsMobile";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function ContactSection() {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.Tally?.loadEmbeds();
  }, []);

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.Tally?.loadEmbeds();
        }}
      />
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 mb-4">
            <Sparkles className="h-4 w-4 text-teal-500" />
            <span className="text-slate-600 text-sm font-medium">Free 30-minute session</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Book a discovery call with our experts — or reach out directly. We&apos;re always available.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Tally Form — takes 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-teal-50/50 to-white">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-200">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send Us a Message
                  </h3>
                  <p className="text-slate-500 text-sm">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Tally inline embed */}
            <div className="px-1 py-1 flex-1">
              <iframe
                data-tally-src="https://tally.so/embed/Bza5BN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="480"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
              ></iframe>
            </div>
          </div>

          {/* Right sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">

            {/* Portfolio Health Check - Enhanced */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-7 shadow-lg shadow-teal-200 text-white relative overflow-hidden flex-1 flex flex-col justify-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-teal-100 text-xs font-semibold uppercase tracking-wider">Portfolio Review</span>
                </div>
                
                <h3 className="text-xl font-bold mb-1 leading-tight">Ready for a portfolio check?</h3>
                <p className="text-teal-100 font-semibold mb-3 text-sm">Get a Free Portfolio Health Check</p>
                
                <div className="space-y-2">
                  {[
                    "Identify hidden risks in your current portfolio",
                    "Evaluate fund overlaps and diversification",
                    "Check whether your investments align with your financial goals",
                    "Review your insurance coverage to ensure your family is adequately protected"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <Check className="text-white h-3 w-3" />
                      </div>
                      <p className="text-teal-50 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-teal-200 text-[10px] text-center italic">
                  Skip the form — talk to us directly!
                </p>
                {isMobile ? (
                  <a
                    href="tel:+919166779632"
                    className="mt-3 w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us to Discuss
                  </a>
                ) : (
                  <a
                    href="https://wa.me/919166779632?text=Hi%2C%20I%27m%20interested%20in%20the%20Free%20Portfolio%20Health%20Check"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Message Us on WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* Contact Info Cards — split width for better visibility */}
            <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-4">
              {/* Email */}
              <a
                href="mailto:Support@investally.co.in"
                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all duration-200 group flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Mail className="h-5 w-5 text-teal-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Email Us</p>
                  <p className="text-[13px] font-semibold text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                    Support@investally.co.in
                  </p>
                </div>
              </a>

              {/* Socials */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center">
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-2">Follow Us</p>
                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/company/investallyindia/", label: "LinkedIn" },
                    { icon: Youtube, href: "https://www.youtube.com/@InvestAllyIndia", label: "YouTube" },
                    { icon: Facebook, href: "https://www.facebook.com/share/17i7Z9Zoei/?mibextid=wwXIfr", label: "Facebook" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-teal-50 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-all duration-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp - Compact */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Call or WhatsApp</p>
                    <a
                      href="tel:+919166779632"
                      className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      +91 91667 79632
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+919166779632"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-teal-100 flex items-center justify-center text-slate-600 hover:text-teal-600 transition-colors"
                    aria-label="Call"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/919166779632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-green-100 hover:bg-green-200 flex items-center justify-center text-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
