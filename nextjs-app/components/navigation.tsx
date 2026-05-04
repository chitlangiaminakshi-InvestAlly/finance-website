"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/investally_only_logo.png"
                alt="Investally Icon"
                width={48}
                height={48}
                className="h-10 w-auto"
                priority
              />
              <Image
                src="/investally_logo_name.png"
                alt="Investally"
                width={200}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="/#team" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              Team
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              Services
            </Link>
            <Link href="/#calculators" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              Calculators
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-300">
              Blog
            </Link>
            <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700">
              <Link href="/#contact" className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-500 hover:text-slate-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              Home
            </Link>
            <Link href="/#about" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              About
            </Link>
            <Link href="/#team" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              Team
            </Link>
            <Link href="/services" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              Services
            </Link>
            <Link href="/#calculators" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              Calculators
            </Link>
            <Link href="/blog" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors duration-300">
              Blog
            </Link>
            <Link href="/#contact" className="block text-teal-600 font-semibold px-3 py-2 rounded-md transition-colors duration-300">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
