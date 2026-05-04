import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/investally_logo.png"
                alt="Investally"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 mb-4">
              Your trusted partner in achieving financial success. Expert guidance in Portfolio Management, Insurance, and Loans.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:Support@investally.co.in" className="hover:text-teal-500 transition-colors duration-300">
                  Support@investally.co.in
                </a>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919166779632" className="hover:text-teal-500 transition-colors duration-300">
                  +91 91667 79632
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
                <Link href="/" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
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
                <Link href="/#services" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Insurance Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-400 hover:text-teal-500 transition-colors duration-300">
                  Mutual Funds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="space-y-4">
            {/* Regulatory Disclaimer */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Regulatory Information:</span> Mutual Fund Distribution (ARN 339359) & Insurance Solutions (as an authorised PoSP associated with IRDAI-licensed insurance broker.)
              </p>
            </div>

            {/* Investment Disclaimer */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-300">Investment Disclaimer:</span> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. The NAVs of the schemes may go up or down depending upon the factors and forces affecting the securities market including the fluctuations in the interest rates. The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. The Mutual Fund is not guaranteeing or assuring any dividend under any of the schemes and the same is subject to the availability and adequacy of distributable surplus. Investors are requested to review the prospectus carefully and obtain expert professional advice with regard to specific legal, tax and financial implications of the investment/participation in the scheme.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 mt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Investally. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
