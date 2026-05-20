import { ArrowRight, Calendar, Star, Award, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-beige-50 via-white to-primary-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-primary-200/50 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-secondary-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Side */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-700 font-medium text-sm mb-6 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Premium Holistic Care in Chennai
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Healing Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Holistic Care</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Expert Physiotherapy, Varma Therapy, Yoga Therapy & Geriatric Rehabilitation in Chennai. Start your journey to long-term wellness today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#appointment"
                className="inline-flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30 text-lg"
              >
                <Calendar size={20} />
                Book Consultation
              </a>
              <a 
                href="#services"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-beige-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all shadow-md border border-gray-100 text-lg group"
              >
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                  500+
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:ml-10 mt-12 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop" 
                alt="Therapist helping patient with yoga and stretching" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-10 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 leading-none">15+</p>
                <p className="text-sm text-gray-500 font-medium">Years Exp.</p>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-pulse hover:scale-105 transition-transform" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">Holistic</p>
                <p className="text-sm text-gray-500 font-medium">Approach</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
