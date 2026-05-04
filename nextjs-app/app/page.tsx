import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act- it's a lifelong relationship.",
};

import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero-section";
import MarketTickers from "@/components/sections/market-tickers";
import AboutSection from "@/components/sections/about-section";
import ProductsSection from "@/components/sections/products-section";
import CalculatorsSection from "@/components/sections/calculators-section";
import TeamSection from "@/components/sections/team-section";
import BlogSection from "@/components/sections/blog-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CTASection from "@/components/sections/cta-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";
import QuotePopup from "@/components/quote-popup";

export default function Home() {
  // Check if blog-only mode is enabled
  const blogOnlyMode = process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true';

  // Redirect to blog if blog-only mode is enabled
  if (blogOnlyMode) {
    redirect('/blog');
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MarketTickers />
        <AboutSection />
        <ProductsSection />
        <CalculatorsSection />
        <TeamSection />
        <BlogSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <QuotePopup />
    </>
  );
}
