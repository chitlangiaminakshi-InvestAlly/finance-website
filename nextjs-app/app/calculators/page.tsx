"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft, BarChart2, Target, Clock, ArrowRight, TrendingUp, Shield, Home, Calculator, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CalculatorsPage() {
  const [sipInputs, setSipInputs] = useState({ monthly: "", return: "", years: "", stepUp: "" });
  const [goalInputs, setGoalInputs] = useState({ target: "", years: "", return: "" });
  const [delayInputs, setDelayInputs] = useState({ monthly: "", delay: "", return: "", years: "" });

  const [sipResult, setSipResult] = useState({ standard: "", stepUp: "", invested: "", stepUpInvested: "" });
  const [goalResult, setGoalResult] = useState("");
  const [delayResult, setDelayResult] = useState({ costOfDelay: "", startNow: "", delayed: "", investedNow: "", investedDelayed: "" });

  const calculateSIP = () => {
    const P = parseFloat(sipInputs.monthly);
    const annualReturn = parseFloat(sipInputs.return);
    const years = parseFloat(sipInputs.years);
    const stepUpRate = parseFloat(sipInputs.stepUp) || 0;
    const r = annualReturn / 100 / 12;
    const n = years * 12;

    if (P && annualReturn && years) {
      const standardValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      const totalInvested = P * n;

      let stepUpValue = 0;
      let stepUpInvested = 0;
      let currentMonthlyInvestment = P;

      for (let year = 1; year <= years; year++) {
        const monthsInYear = 12;
        const nYear = monthsInYear;
        const yearFV = currentMonthlyInvestment * (((Math.pow(1 + r, nYear) - 1) / r) * (1 + r));
        const remainingYears = years - year;
        const remainingMonths = remainingYears * 12;
        const compoundedValue = yearFV * Math.pow(1 + r, remainingMonths);

        stepUpValue += compoundedValue;
        stepUpInvested += currentMonthlyInvestment * monthsInYear;
        currentMonthlyInvestment = currentMonthlyInvestment * (1 + stepUpRate / 100);
      }

      setSipResult({
        standard: `₹${Math.round(standardValue).toLocaleString('en-IN')}`,
        stepUp: stepUpRate > 0 ? `₹${Math.round(stepUpValue).toLocaleString('en-IN')}` : "",
        invested: `₹${Math.round(totalInvested).toLocaleString('en-IN')}`,
        stepUpInvested: stepUpRate > 0 ? `₹${Math.round(stepUpInvested).toLocaleString('en-IN')}` : ""
      });
    }
  };

  const calculateGoal = () => {
    const target = parseFloat(goalInputs.target);
    const years = parseFloat(goalInputs.years);
    const r = parseFloat(goalInputs.return) / 100 / 12;
    const n = years * 12;

    if (target && years && r && n) {
      // Calculate monthly SIP required to reach target
      const monthlySIP = target / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      setGoalResult(`₹${Math.round(monthlySIP).toLocaleString('en-IN')}`);
    }
  };

  const calculateDelay = () => {
    const monthly = parseFloat(delayInputs.monthly);
    const delay = parseFloat(delayInputs.delay);
    const r = parseFloat(delayInputs.return) / 100 / 12;
    const totalYears = parseFloat(delayInputs.years);

    if (monthly && delay && r && totalYears) {
      const nNow = totalYears * 12;
      const valueNow = monthly * (((Math.pow(1 + r, nNow) - 1) / r) * (1 + r));
      const investedNow = monthly * nNow;

      const nDelayed = (totalYears - delay) * 12;
      const valueDelayed = monthly * (((Math.pow(1 + r, nDelayed) - 1) / r) * (1 + r));
      const investedDelayed = monthly * nDelayed;

      const cost = valueNow - valueDelayed;

      setDelayResult({
        costOfDelay: `₹${Math.round(cost).toLocaleString('en-IN')}`,
        startNow: `₹${Math.round(valueNow).toLocaleString('en-IN')}`,
        delayed: `₹${Math.round(valueDelayed).toLocaleString('en-IN')}`,
        investedNow: `₹${Math.round(investedNow).toLocaleString('en-IN')}`,
        investedDelayed: `₹${Math.round(investedDelayed).toLocaleString('en-IN')}`
      });
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
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Annual Step Up (% Optional)</label>
                      <input
                        type="number"
                        placeholder="10"
                        value={sipInputs.stepUp}
                        onChange={(e) => setSipInputs({ ...sipInputs, stepUp: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <Button onClick={calculateSIP} className="w-full bg-teal-600 hover:bg-teal-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <p className="text-sm text-slate-600">Standard SIP Value</p>
                      <p className="text-2xl font-bold text-teal-600">{sipResult.standard || "₹--"}</p>
                      <p className="text-xs text-slate-500 mt-1">Invested: {sipResult.invested || "₹--"}</p>
                    </div>
                    {sipResult.stepUp && (
                      <div className="p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg text-white">
                        <p className="text-sm text-teal-50">With {sipInputs.stepUp}% Step Up</p>
                        <p className="text-2xl font-bold">{sipResult.stepUp}</p>
                        <p className="text-xs text-teal-100 mt-1">Invested: {sipResult.stepUpInvested}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Goal-Based Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Goal-Based Calculator</h3>
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Target className="text-blue-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Target Amount (₹)</label>
                      <input
                        type="number"
                        placeholder="10,00,000"
                        value={goalInputs.target}
                        onChange={(e) => setGoalInputs({ ...goalInputs, target: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Time Period (Years)</label>
                      <input
                        type="number"
                        placeholder="5"
                        value={goalInputs.years}
                        onChange={(e) => setGoalInputs({ ...goalInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={goalInputs.return}
                        onChange={(e) => setGoalInputs({ ...goalInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <Button onClick={calculateGoal} className="w-full bg-blue-600 hover:bg-blue-700">
                      Calculate
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">Monthly SIP Required</p>
                    <p className="text-3xl font-bold text-blue-600">{goalResult || "₹--"}</p>
                  </div>
                </div>

                {/* Cost of Delay Calculator */}
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover md:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Cost of Delay Calculator</h3>
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Clock className="text-orange-600 h-6 w-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment (₹)</label>
                      <input
                        type="number"
                        placeholder="5,000"
                        value={delayInputs.monthly}
                        onChange={(e) => setDelayInputs({ ...delayInputs, monthly: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Delay Period (Years)</label>
                      <input
                        type="number"
                        placeholder="2"
                        value={delayInputs.delay}
                        onChange={(e) => setDelayInputs({ ...delayInputs, delay: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return (% p.a.)</label>
                      <input
                        type="number"
                        placeholder="12"
                        value={delayInputs.return}
                        onChange={(e) => setDelayInputs({ ...delayInputs, return: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Total Investment Period (Years)</label>
                      <input
                        type="number"
                        placeholder="20"
                        value={delayInputs.years}
                        onChange={(e) => setDelayInputs({ ...delayInputs, years: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <Button onClick={calculateDelay} className="w-full bg-orange-600 hover:bg-orange-700 mt-4">
                    Calculate
                  </Button>

                  <div className="mt-6 space-y-3">
                    <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                      <p className="text-sm font-semibold text-orange-900">Cost of Delay</p>
                      <p className="text-3xl font-bold text-orange-600">{delayResult.costOfDelay || "₹--"}</p>
                    </div>
                    {delayResult.startNow && (
                      <>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-slate-600">Start Today</p>
                            <p className="text-lg font-bold text-green-600">{delayResult.startNow}</p>
                            <p className="text-xs text-slate-500">Invested: {delayResult.investedNow}</p>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <p className="text-xs text-slate-600">After Delay</p>
                            <p className="text-lg font-bold text-red-600">{delayResult.delayed}</p>
                            <p className="text-xs text-slate-500">Invested: {delayResult.investedDelayed}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (Right - 1 column) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Our Services 2x2 */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                    Our Services
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/services#wealth-building" className="group bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-teal-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <TrendingUp className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Wealth Building</p>
                      <p className="text-xs text-slate-600">MF & PMS Advisory</p>
                    </Link>

                    <Link href="/services#insurance-protection" className="group bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Shield className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Insurance</p>
                      <p className="text-xs text-slate-600">Protection</p>
                    </Link>

                    <Link href="/services#loans-financing" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <Home className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Loans</p>
                      <p className="text-xs text-slate-600">Financing</p>
                    </Link>

                    <Link href="/services#additional-services" className="group bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg hover:shadow-md transition">
                      <div className="bg-orange-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                        <FileText className="text-white h-5 w-5" />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mb-1">Investment Tax Advisory</p>
                      <p className="text-xs text-slate-600">Consultancy</p>
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
