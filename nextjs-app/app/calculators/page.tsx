"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, BarChart2, Home, Shield, ArrowRight, Briefcase, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalculatorsPage() {
  const [sipInputs, setSipInputs] = useState({ monthly: "", return: "", years: "" });
  const [emiInputs, setEmiInputs] = useState({ amount: "", rate: "", years: "" });
  const [insuranceInputs, setInsuranceInputs] = useState({ age: "", income: "", dependents: "" });

  const [sipResult, setSipResult] = useState("");
  const [emiResult, setEmiResult] = useState("");
  const [insuranceResult, setInsuranceResult] = useState("");

  const calculateSIP = () => {
    const P = parseFloat(sipInputs.monthly);
    const r = parseFloat(sipInputs.return) / 100 / 12;
    const n = parseFloat(sipInputs.years) * 12;

    if (P && r && n) {
      const maturityValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      setSipResult(`₹${Math.round(maturityValue).toLocaleString('en-IN')}`);
    }
  };

  const calculateEMI = () => {
    const P = parseFloat(emiInputs.amount);
    const r = parseFloat(emiInputs.rate) / 100 / 12;
    const n = parseFloat(emiInputs.years) * 12;

    if (P && r && n) {
      const emi = P * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmiResult(`₹${Math.round(emi).toLocaleString('en-IN')}`);
    }
  };

  const calculateInsurance = () => {
    const income = parseFloat(insuranceInputs.income);
    const dependents = parseInt(insuranceInputs.dependents);

    if (income && dependents) {
      const coverage = income * 10 + (dependents * 500000);
      setInsuranceResult(`₹${Math.round(coverage).toLocaleString('en-IN')}`);
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Plan Your Future</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
              Financial <span className="gradient-text">Calculators</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Make informed decisions with our easy-to-use calculators. See exactly how your money can grow.
            </p>
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculators Grid (Left - 2 columns) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* SIP Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">SIP Calculator</h3>
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <BarChart2 className="text-teal-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment (₹)</label>
                      <input
                        type="number"
                        placeholder="5,000"
                        value={sipInputs.monthly}
                        onChange={(e) => setSipInputs({ ...sipInputs, monthly: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={sipInputs.return}
                        onChange={(e) => setSipInputs({ ...sipInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Time Period (Years)</label>
                      <input
                        type="number"
                        placeholder="10"
                        value={sipInputs.years}
                        onChange={(e) => setSipInputs({ ...sipInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <Button onClick={calculateSIP} className="w-full bg-teal-600 hover:bg-teal-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                    <p className="text-sm text-slate-600">Estimated Maturity Value</p>
                    <p className="text-3xl font-bold text-teal-600">{sipResult || "₹--"}</p>
                  </div>
                </div>

                {/* EMI Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">EMI Calculator</h3>
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Home className="text-blue-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Loan Amount (₹)</label>
                      <input
                        type="number"
                        placeholder="50,00,000"
                        value={emiInputs.amount}
                        onChange={(e) => setEmiInputs({ ...emiInputs, amount: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Interest Rate (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="8.5"
                        value={emiInputs.rate}
                        onChange={(e) => setEmiInputs({ ...emiInputs, rate: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Loan Tenure (Years)</label>
                      <input
                        type="number"
                        placeholder="20"
                        value={emiInputs.years}
                        onChange={(e) => setEmiInputs({ ...emiInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <Button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">Monthly EMI</p>
                    <p className="text-3xl font-bold text-blue-600">{emiResult || "₹--"}</p>
                  </div>
                </div>

                {/* Insurance Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover md:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Insurance Needs Calculator</h3>
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Shield className="text-green-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Age</label>
                      <input
                        type="number"
                        placeholder="30"
                        value={insuranceInputs.age}
                        onChange={(e) => setInsuranceInputs({ ...insuranceInputs, age: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Annual Income (₹)</label>
                      <input
                        type="number"
                        placeholder="10,00,000"
                        value={insuranceInputs.income}
                        onChange={(e) => setInsuranceInputs({ ...insuranceInputs, income: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Dependents</label>
                      <input
                        type="number"
                        placeholder="3"
                        value={insuranceInputs.dependents}
                        onChange={(e) => setInsuranceInputs({ ...insuranceInputs, dependents: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <Button onClick={calculateInsurance} className="w-full bg-green-600 hover:bg-green-700 mt-4">
                    Calculate
                  </Button>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-slate-600">Recommended Coverage</p>
                    <p className="text-3xl font-bold text-green-600">{insuranceResult || "₹--"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (Right - 1 column) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Product Metrics 2x2 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                    Our Products
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/#products" className="group bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-teal-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Briefcase className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">PMS</p>
                      <p className="text-xs text-slate-600">₹50L+ min</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Shield className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Insurance</p>
                      <p className="text-xs text-slate-600">₹500/mo</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Home className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Loans</p>
                      <p className="text-xs text-slate-600">8.5% p.a.</p>
                    </Link>

                    <Link href="/#products" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Mutual Funds</p>
                      <p className="text-xs text-slate-600">SIP ₹500+</p>
                    </Link>
                  </div>
                </div>

                {/* Quick Calculators - Show other calculators */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Calculator className="h-5 w-5 text-teal-600 mr-2" />
                    Financial Tools
                  </h3>
                  <div className="space-y-3">
                    <Link href="/#blog" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">Knowledge Center</p>
                          <p className="text-xs text-slate-600">Read our blog</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>

                    <Link href="/#about" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition group">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-1">About Us</p>
                          <p className="text-xs text-slate-600">Learn more about Investally</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Need Expert Advice?</h3>
                  <p className="text-teal-50 text-sm mb-4">Get personalized financial guidance from our SEBI-registered experts.</p>
                  <Link href="/#contact" className="block w-full px-4 py-3 bg-white text-teal-600 font-bold text-center rounded-lg hover:bg-teal-50 transition">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
