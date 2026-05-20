import { Activity, Bone, HeartPulse, PersonStanding, Move, Scissors, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Activity size={32} className="text-primary-500" />,
      title: "Physiotherapy",
      description: "Pain relief and movement restoration using evidence-based techniques.",
      delay: "0"
    },
    {
      icon: <Stethoscope size={32} className="text-secondary-500" />,
      title: "Varma Therapy",
      description: "Traditional healing therapy focusing on vital energy points for deep recovery.",
      delay: "100"
    },
    {
      icon: <HeartPulse size={32} className="text-primary-500" />,
      title: "Yoga Therapy",
      description: "Therapeutic yoga tailored to restore body balance, flexibility, and mind calmness.",
      delay: "200"
    },
    {
      icon: <PersonStanding size={32} className="text-secondary-500" />,
      title: "Geriatric Rehabilitation",
      description: "Specialized elderly care focusing on fall prevention, mobility, and independence.",
      delay: "300"
    },
    {
      icon: <Scissors size={32} className="text-primary-500" />,
      title: "Post-Surgery Rehab",
      description: "Structured recovery programs to regain strength and function after operations.",
      delay: "400"
    },
    {
      icon: <Bone size={32} className="text-secondary-500" />,
      title: "Pain Management",
      description: "Comprehensive treatments for chronic pain, arthritis, and joint issues.",
      delay: "500"
    },
    {
      icon: <Move size={32} className="text-primary-500" />,
      title: "Mobility Improvement",
      description: "Programs designed to enhance range of motion and functional movement.",
      delay: "600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-secondary-600 font-semibold tracking-wider uppercase text-sm">What We Offer</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Premium Services</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive therapeutic solutions designed to address root causes, relieve pain, and restore your natural vitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-1"
            >
              <div className="bg-beige-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
