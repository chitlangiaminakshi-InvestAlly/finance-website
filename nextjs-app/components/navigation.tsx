"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for floating effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Journey", href: "/#journey" },
    { name: "Team", href: "/#team" },
    { name: "Calculators", href: "/calculators" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-0 md:py-3" : "py-0 md:py-5"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled 
            ? "max-w-5xl px-0 md:pr-4 lg:pr-5" 
            : "max-w-7xl px-0 md:pr-4 lg:pr-5"
        }`}
      >
        <div 
          className={`flex justify-between items-center transition-all duration-500 ease-in-out ${
            scrolled 
              ? "bg-white/90 md:bg-white/80 backdrop-blur-xl shadow-md md:shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b md:border border-slate-200/50 md:border-white/40 rounded-none md:rounded-full h-11 md:h-auto px-3 md:pl-0 md:pr-5 lg:pl-0 lg:pr-6" 
              : "bg-white/60 md:bg-white/50 backdrop-blur-md border-b md:border border-transparent h-12 md:h-auto px-3 md:pl-0 md:pr-4 lg:pl-0 lg:pr-4 rounded-none md:rounded-2xl"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group">
              <div className="flex items-center gap-1.5 bg-white py-0.5 px-2 md:gap-2 md:py-1.5 md:px-3 rounded-lg md:rounded-xl border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-teal-100 group-hover:scale-[1.02]">
                <div className="relative h-5.5 w-5.5 md:h-8 md:w-8 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Image
                    src="/investally_only_logo.png"
                    alt="Investally Icon"
                    fill
                    sizes="32px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative h-[18px] w-24 sm:h-5 sm:w-28 hidden sm:block">
                  <Image
                    src="/investally_logo_name.png"
                    alt="Investally Name"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors duration-300 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-teal-500 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            ))}
            
            <div className="pl-4 ml-2 border-l border-slate-200">
              <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-teal-200/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                <Link href="/#contact" className="inline-flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-bold">Talk to Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-0.5 rounded-lg transition-colors duration-300 ${
                mobileMenuOpen ? "bg-slate-100 text-slate-900" : "text-slate-600"
              }`}
            >
              {mobileMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="absolute top-full left-4 right-4 mt-4 md:hidden animate-[navMenuIn_220ms_cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-6 overflow-hidden">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <div
                    key={link.name}
                    className="animate-[navItemIn_260ms_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-2xl text-lg font-bold text-slate-800 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                <div
                  className="pt-4 animate-[navItemIn_260ms_cubic-bezier(0.16,1,0.3,1)_both]"
                  style={{ animationDelay: "300ms" }}
                >
                  <Button asChild className="w-full h-14 rounded-2xl bg-teal-600 hover:bg-teal-700 text-lg font-bold shadow-lg shadow-teal-600/20">
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                      Talk to Expert
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <style jsx>{`
        @keyframes navMenuIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes navItemIn {
          from {
            opacity: 0;
            transform: translateX(-18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
