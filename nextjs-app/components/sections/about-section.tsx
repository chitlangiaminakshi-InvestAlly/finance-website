import { Target, Shield, BookOpen, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Personalized Solutions",
      description: "Every financial journey is unique. We create customized strategies that align with your goals, risk appetite, and life stage.",
    },
    {
      icon: Shield,
      title: "SEBI Registered Experts",
      description: "Our team of certified financial planners and SEBI-registered advisors brings decades of experience in Indian markets.",
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "We believe in empowering you with knowledge. Our blog and resources help you make informed financial decisions.",
    },
    {
      icon: Award,
      title: "Transparent & Trustworthy",
      description: "No hidden fees, no jargon. We maintain complete transparency in all our dealings and always put your interests first.",
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
            Investally is India's leading financial advisory platform, dedicated to helping families and individuals achieve their financial goals through expert guidance and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 aspect-[3/2] flex items-center justify-center text-white text-2xl font-bold">
              Our Mission
            </div>
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
                    <feature.icon className="text-teal-600 h-6 w-6" />
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
