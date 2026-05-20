import { CalendarDays, Clock } from 'lucide-react';

const Appointment = () => {
  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-50 rounded-3xl overflow-hidden shadow-sm border border-primary-100 flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary-600 p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
              <CalendarDays size={200} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-4">Book Your Consultation</h3>
              <p className="text-primary-100 mb-10 leading-relaxed">
                Take the first step towards a pain-free, balanced life. Schedule an appointment with our specialists today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-500/50 p-3 rounded-full">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fast Processing</h4>
                    <p className="text-primary-100 text-sm">We confirm all appointments within 2 hours.</p>
                  </div>
                </div>
                
                <div className="mt-12 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Need immediate help?</h4>
                  <p className="text-primary-100 text-sm mb-4">Call our emergency support line.</p>
                  <p className="text-2xl font-bold font-heading">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white outline-none"
                    placeholder="+91 90000 00000"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="therapy" className="block text-sm font-medium text-gray-700 mb-2">Select Therapy *</label>
                  <select 
                    id="therapy" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white outline-none text-gray-700"
                    required
                  >
                    <option value="" disabled selected>Choose a service</option>
                    <option value="physio">Physiotherapy</option>
                    <option value="varma">Varma Therapy</option>
                    <option value="yoga">Yoga Therapy</option>
                    <option value="geriatric">Geriatric Rehabilitation</option>
                    <option value="post-surgery">Post-Surgery Rehab</option>
                    <option value="pain-mgmt">Pain Management</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white outline-none text-gray-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white outline-none resize-none"
                  placeholder="Tell us briefly about your condition..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30"
              >
                Book Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
