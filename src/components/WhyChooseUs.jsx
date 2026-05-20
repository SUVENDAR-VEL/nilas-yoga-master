import { Award, ShieldCheck, HeartHandshake, User, Leaf, MapPin } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Expert Therapist",
    description: "15+ years of hands-on experience in physiotherapy, varma, and yoga therapy.",
    stat: "15+",
    statLabel: "Years",
    color: "from-primary-500 to-primary-700",
    light: "bg-primary-50 text-primary-600"
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Every session is tailored 1-on-1 to your unique body, pain, and recovery goals.",
    stat: "100%",
    statLabel: "Personalized",
    color: "from-secondary-500 to-secondary-700",
    light: "bg-secondary-50 text-secondary-600"
  },
  {
    icon: Leaf,
    title: "Holistic Healing",
    description: "Ancient wisdom meets modern science for treatment that heals mind and body.",
    stat: "4",
    statLabel: "Therapies",
    color: "from-emerald-500 to-emerald-700",
    light: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: User,
    title: "Elderly Specialists",
    description: "Gentle, specialized programs for seniors to regain independence and mobility.",
    stat: "500+",
    statLabel: "Seniors Helped",
    color: "from-teal-500 to-teal-700",
    light: "bg-teal-50 text-teal-600"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description: "A private, fully-sanitized clinic ensuring maximum comfort and patient safety.",
    stat: "5★",
    statLabel: "Rated",
    color: "from-primary-600 to-secondary-600",
    light: "bg-primary-50 text-primary-600"
  },
  {
    icon: MapPin,
    title: "Vadapalani, Chennai",
    description: "Conveniently located and trusted by the Chennai community for holistic wellness.",
    stat: "#1",
    statLabel: "Local Choice",
    color: "from-secondary-600 to-teal-600",
    light: "bg-secondary-50 text-secondary-600"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-primary-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Nilanis?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every element of our practice is designed to give you the safest, most effective, and most deeply personal healing experience in Chennai.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Stat Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 ${feature.light} rounded-2xl flex items-center justify-center`}>
                    <Icon size={26} />
                  </div>
                  <div className="text-right">
                    <p className={`text-3xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-br ${feature.color}`}>
                      {feature.stat}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{feature.statLabel}</p>
                  </div>
                </div>

                <h4 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
