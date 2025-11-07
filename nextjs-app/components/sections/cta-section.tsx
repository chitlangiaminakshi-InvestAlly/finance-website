import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Start Your Financial Journey?</h2>
        <p className="text-xl md:text-2xl text-teal-50 mb-10 max-w-3xl mx-auto">
          Schedule a free consultation with our SEBI-registered experts. No obligations, just honest advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-xl font-bold text-lg">
            <Link href="#contact" className="inline-flex items-center">
              Book Free Consultation
              <Calendar className="ml-3 h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg">
            <a href="tel:+919166779632" className="inline-flex items-center">
              <Phone className="mr-3 h-6 w-6" />
              Call: +91 91667 79632
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
