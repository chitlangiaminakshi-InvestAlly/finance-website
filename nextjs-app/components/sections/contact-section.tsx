"use client";

import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactSection() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Let's Talk About<br />
            <span className="gradient-text">Your Financial Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <iframe
              data-tally-src="https://tally.so/embed/Bza5BN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="552"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Send us a message"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Visit Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-full p-3 mr-4">
                    <MapPin className="text-teal-600 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Head Office</p>
                    <p className="text-slate-600">Powai<br />Mumbai, Maharashtra<br />India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-full p-3 mr-4">
                    <Phone className="text-teal-600 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a href="tel:+919166779632" className="text-teal-600 hover:text-teal-700 font-medium">
                      +91 91667 79632
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-full p-3 mr-4">
                    <Mail className="text-teal-600 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:Support@investally.co.in" className="text-teal-600 hover:text-teal-700 font-medium">
                      Support@investally.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-full p-3 mr-4">
                    <Clock className="text-teal-600 h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Business Hours</p>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition-colors duration-300" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a> */}
                <a href="https://www.facebook.com/share/17i7Z9Zoei/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition-colors duration-300" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/investally.in" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition-colors duration-300" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                {/* <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition-colors duration-300" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
