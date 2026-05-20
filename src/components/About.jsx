const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
                alt="Physiotherapy session" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" 
                alt="Yoga therapy" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-beige-50">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600">15+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Exp</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-10">
            <div className="mb-2 text-secondary-600 font-semibold tracking-wider uppercase text-sm">Discover Our Center</div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              About Nilanis Holistic Therapy
            </h2>
            <div className="w-20 h-1 bg-primary-500 rounded mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nilanis Holistic Therapy is a premier Chennai-based wellness and rehabilitation center offering personalized therapeutic care.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in blending modern science with traditional wisdom through physiotherapy, varma therapy, yoga therapy, and geriatric rehabilitation to promote long-term healing and overall wellness.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-beige-50 p-4 rounded-xl border border-beige-100">
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Modern Facility</h4>
                <p className="text-gray-600 text-sm">Equipped with advanced tools for effective recovery.</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Expert Care</h4>
                <p className="text-gray-600 text-sm">Certified therapists dedicated to your healing journey.</p>
              </div>
            </div>

            <a href="#about" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2 group">
              Learn more about our approach
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
