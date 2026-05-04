import { Target, Shield, BookOpen, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: "🌟",
      title: "Personalized Solutions",
      description: "Every investor's journey is different — and so are our strategies. We design plans that reflect your goals, risk comfort, and life stage — not someone else's template.",
    },
    {
      icon: "🧠",
      title: "SEBI-Registered",
      description: "Our certified advisors and SEBI-registered professionals bring years of experience across finance and investments — combining global insights with a deep understanding of Indian markets.",
    },
    {
      icon: "📚",
      title: "Education First",
      description: "We don't just tell you where to invest — we help you understand why. Through simplified explanations and regular insights, we make sure you feel confident about every decision.",
    },
    {
      icon: "🤝",
      title: "Transparent & Trustworthy",
      description: "No jargon. No hidden fees. We maintain complete transparency and put your interests above everything else — always.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-4">
            Your Trusted Partner in
            <br />
            <span className="gradient-text">Financial Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Investally is India's leading financial planning platform, dedicated to helping families and individuals achieve their financial goals through expert guidance and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-xl w-full h-auto"
            >
              <source src="/mission video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-teal-100 text-sm">Client Satisfaction</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Investally?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 rounded-full p-3 mr-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
