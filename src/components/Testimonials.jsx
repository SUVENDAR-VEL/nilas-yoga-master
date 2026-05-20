import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ramesh Krishnan",
      role: "Post-Surgery Patient",
      content: "The physiotherapy sessions at Nilanis helped me recover from my knee surgery faster than expected. The therapists are extremely knowledgeable and patient.",
      rating: 5
    },
    {
      name: "Lakshmi S.",
      role: "Yoga Therapy Client",
      content: "I suffered from chronic back pain for years. The personalized yoga and varma therapy approach completely transformed my life. Highly recommend their holistic care.",
      rating: 5
    },
    {
      name: "Sundaram V.",
      role: "Geriatric Care",
      content: "Excellent facility for elderly care. They treat seniors with so much respect and gentleness. My father's mobility has improved significantly since we started.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-primary-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 text-primary-100 opacity-50">
        <Quote size={200} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Patient Stories</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear what our patients have to say about their healing experiences at Nilanis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
              <div className="text-secondary-200 absolute top-6 right-6">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
