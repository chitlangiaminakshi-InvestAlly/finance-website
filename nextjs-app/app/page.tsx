import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act- it's a lifelong relationship.",
};

import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/hero-section";
import ContactSection from "@/components/sections/contact-section";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/scroll-reveal";

const AboutSection = dynamic(() => import("@/components/sections/about-section"));
const SolutionsSection = dynamic(() => import("@/components/sections/solutions-section"));
const UserJourneySection = dynamic(() => import("@/components/sections/user-journey-section"));
const TeamSection = dynamic(() => import("@/components/sections/team-section"));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"));
const FAQSection = dynamic(() => import("@/components/sections/faq-section"));
const Footer = dynamic(() => import("@/components/footer"));
const QuotePopup = dynamic(() => import("@/components/quote-popup"));

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
        <ScrollReveal initiallyVisible><AboutSection /></ScrollReveal>
        <ScrollReveal><SolutionsSection /></ScrollReveal>
        <ScrollReveal><UserJourneySection /></ScrollReveal>

        <ScrollReveal><TeamSection /></ScrollReveal>
        <ScrollReveal><TestimonialsSection /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>
      <ScrollReveal><Footer /></ScrollReveal>
      <QuotePopup />
    </>
  );
}
