import { Link, Mail } from 'lucide-react';

const Specialists = () => {
  const specialists = [
    {
      name: "Dr. Nila Devi",
      role: "Senior Holistic Therapist",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      specialization: "Physiotherapy & Yoga Therapy"
    },
    {
      name: "Dr. Arun Kumar",
      role: "Varma Therapy Expert",
      experience: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      specialization: "Traditional Healing & Pain Mgmt"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Geriatric Rehabilitation Specialist",
      experience: "10+ Years Experience",
      image: "https://images.unsplash.com/photo-1594824436951-7f12bc41c88a?q=80&w=800&auto=format&fit=crop",
      specialization: "Elderly Care & Post-Surgery"
    }
  ];

  return (
    <section id="specialists" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-secondary-600 font-semibold tracking-wider uppercase text-sm">Our Experts</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Therapy Specialists</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Meet our team of dedicated and highly experienced therapists who are passionate about your recovery and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={specialist.image} 
                  alt={specialist.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition-colors">
                    <Link size={20} />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">{specialist.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{specialist.role}</p>
                <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="bg-beige-100 px-3 py-1 rounded-full">{specialist.specialization}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <span className="text-gray-600 font-medium">{specialist.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
