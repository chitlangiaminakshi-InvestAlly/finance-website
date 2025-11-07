"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Portfolio Management (PMS)",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">I'm interested in</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option>Portfolio Management (PMS)</option>
                  <option>Insurance Solutions</option>
                  <option>Home Loans</option>
                  <option>Personal Loans</option>
                  <option>Mutual Funds</option>
                  <option>General Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Tell us about your financial goals..."
                />
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 text-lg shadow-lg">
                Submit Inquiry
              </Button>
            </form>
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
                    <p className="text-slate-600">123 Financial District<br />Mumbai, Maharashtra 400001<br />India</p>
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
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-teal-100 p-4 rounded-xl text-teal-600 hover:bg-teal-200 transition">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
