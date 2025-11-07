"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Menu, X, ChevronDown, Briefcase, Shield, Home, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      icon: Briefcase,
      title: "Portfolio Management",
      description: "Professional PMS Services",
      href: "/#products",
      color: "text-teal-600"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Life & Health Coverage",
      href: "/#products",
      color: "text-green-600"
    },
    {
      icon: Home,
      title: "Home & Personal Loans",
      description: "Best Interest Rates",
      href: "/#products",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "SIP & Lumpsum Options",
      href: "/#products",
      color: "text-teal-600"
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Rewards & Cashback",
      href: "/#products",
      color: "text-purple-600"
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <TrendingUp className="text-teal-600 h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-slate-900">
                Invest<span className="text-teal-600">ally</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-slate-700 hover:text-teal-600 font-medium transition">
              Home
            </Link>
            <Link href="/#about" className="text-slate-700 hover:text-teal-600 font-medium transition">
              About
            </Link>
            <Link href="/#team" className="text-slate-700 hover:text-teal-600 font-medium transition">
              Team
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-slate-700 hover:text-teal-600 font-medium transition inline-flex items-center">
                Products
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {products.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link href={product.href} className="flex items-start p-3">
                      <product.icon className={`h-5 w-5 ${product.color} mr-3 mt-0.5`} />
                      <div>
                        <div className="font-semibold text-sm">{product.title}</div>
                        <div className="text-xs text-slate-500">{product.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/#calculators" className="text-slate-700 hover:text-teal-600 font-medium transition">
              Calculators
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-teal-600 font-medium transition">
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
            <Link href="/" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              Home
            </Link>
            <Link href="/#about" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              About
            </Link>
            <Link href="/#team" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              Team
            </Link>
            <Link href="/#products" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              Products
            </Link>
            <Link href="/#calculators" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              Calculators
            </Link>
            <Link href="/blog" className="block text-slate-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition">
              Blog
            </Link>
            <Link href="/#contact" className="block text-teal-600 font-semibold px-3 py-2 rounded-md transition">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
