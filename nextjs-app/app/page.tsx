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

export default function Home() {
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
    </>
  );
}
