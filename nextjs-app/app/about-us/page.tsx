import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "About Us",
    description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
    openGraph: {
        title: "About Us | InvestAlly",
        description: "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
        url: "https://investally.co.in/about-us",
    },
};

export default function AboutUsPage() {
    return (
        <>
            <Navigation />

            {/* JSON-LD Structured Data for About Us Page */}
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About Us - InvestAlly",
                        "description": "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
                        "url": "https://investally.co.in/about-us",
                        "mainEntity": {
                            "@type": "FinancialService",
                            "name": "InvestAlly",
                            "description": "Personalized financial guidance that grows with you - built on trust, transparency, and continuous review. Because wealth creation isn't a one-time act - it's a lifelong relationship.",
                            "slogan": "We don't sell Investments - We build Investors",
                            "url": "https://investally.co.in",
                            "logo": "https://investally.co.in/investally_only_logo.png",
                            "image": "https://investally.co.in/investally_only_logo.png",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "addressCountry": "IN"
                            }
                        }
                    })
                }}
            />

            <main className="bg-slate-50">
                {/* About Us Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                                About Us
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-6">
                                Personalized financial guidance that grows with you - built on trust, transparency, and continuous review.
                                Because wealth creation isn't a one-time act- it's a lifelong relationship.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Personalized Solutions</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Every investor's journey is different — and so are our strategies. We design plans that reflect your goals, risk comfort, and life stage — not someone else's template.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">SEBI-Registered</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Our certified advisors and SEBI-registered professionals bring years of experience across finance and investments — combining global insights with a deep understanding of Indian markets.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Education First</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We don't just tell you where to invest — we help you understand why. Through simplified explanations and regular insights, we make sure you feel confident about every decision.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Transparent & Trustworthy</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    No jargon. No hidden fees. We maintain complete transparency and put your interests above everything else — always.
                                </p>
                            </div>

                            <div className="pt-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Services</h2>
                                <ul className="list-disc list-inside text-lg text-slate-600 space-y-2">
                                    <li>Mutual Fund Advisory and Portfolio Management</li>
                                    <li>Insurance Planning and Advisory</li>
                                    <li>Home Loans and Personal Loan Assistance</li>
                                    <li>Comprehensive Financial Planning</li>
                                </ul>
                            </div>

                            <div className="pt-8">
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    <strong>Regulatory Information:</strong> Mutual Fund Distribution (ARN 339359) & Insurance Solutions (as an authorised PoSP associated with IRDAI-licensed insurance broker.)
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
