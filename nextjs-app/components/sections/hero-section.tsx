import Link from "next/link";
import Image from "next/image";
import { Award, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Trusted by Smart Investors Across India
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              We don't sell Investments-
              <br />
              <span className="text-teal-100">We build Investors</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 mb-8 leading-relaxed">
              Personalized financial guidance that grows with you - built on trust, transparency, and continuous review.
              <br />
              Because wealth creation isn't a one-time act- it's a lifelong relationship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-xl font-bold">
                <Link href="#contact" className="inline-flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold">
                <Link href="#calculators" className="inline-flex items-center">
                  Try Calculators
                  <Calculator className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold">₹5Cr+</p>
                <p className="text-teal-100 text-sm">Assets Under Management</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-teal-100 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15+ Years</p>
                <p className="text-teal-100 text-sm">Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-8 aspect-[6/5]">
                <div className="w-full h-full flex items-center justify-center text-teal-100 text-xl font-semibold">
                 <Image
                  src={"/hero-section-image.png"}
                  alt={"Financial Freedom"}
                  fill
                  className="object-cover"
                />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
