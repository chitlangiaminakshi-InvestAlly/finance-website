import Link from "next/link";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-teal-500 h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">
                Invest<span className="text-teal-500">ally</span>
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Your trusted partner in achieving financial success. Expert guidance in Portfolio Management, Insurance, and Loans.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@investally.com" className="hover:text-teal-500">
                  info@investally.com
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+911234567890" className="hover:text-teal-500">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start text-slate-400">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-slate-400 hover:text-teal-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-teal-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-teal-500">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#calculators" className="text-slate-400 hover:text-teal-500">
                  Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-slate-400 hover:text-teal-500">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-teal-500">
                  Insurance Solutions
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-teal-500">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-teal-500">
                  Mutual Funds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Investally. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
