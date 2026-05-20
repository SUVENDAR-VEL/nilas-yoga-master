import { CheckCircle2 } from 'lucide-react';

const PatientBenefits = () => {
  const benefits = [
    "Pain Relief & Management",
    "Better Mobility & Movement",
    "Improved Flexibility & Posture",
    "Stress Reduction & Relaxation",
    "Faster Recovery from Injuries",
    "Healthy Aging Support",
    "Enhanced Blood Circulation",
    "Restored Body Balance"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="mb-2 text-secondary-600 font-semibold tracking-wider uppercase text-sm">Why It Matters</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Patient Benefits & Outcomes
            </h2>
            <div className="w-20 h-1 bg-primary-500 rounded mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our holistic therapies go beyond temporary relief. We aim to identify and treat the root cause of your discomfort, ensuring long-lasting benefits that improve your overall quality of life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a 
                href="#appointment"
                className="inline-block bg-primary-50 text-primary-700 font-semibold px-8 py-3 rounded-full hover:bg-primary-100 transition-colors"
              >
                Start Your Healing Journey
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
              alt="Patient experiencing relief" 
              className="relative rounded-2xl shadow-2xl w-full object-cover border-8 border-white z-10"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce">
              <div className="flex items-center gap-4">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <HeartPulse className="text-secondary-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl">98%</p>
                  <p className="text-sm text-gray-500">Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { HeartPulse } from 'lucide-react';
export default PatientBenefits;
