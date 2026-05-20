import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We're here to answer any questions you have about our therapies and how we can help you achieve optimal wellness.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-beige-50 p-8 rounded-2xl border border-beige-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary-600 mb-6 shadow-sm">
              <MapPin size={28} />
            </div>
            <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">Our Location</h4>
            <p className="text-gray-600 text-sm">
              Nilanis Holistic Therapy (NHT),<br />
              Palani Andavar Koil St, Vadapalani,<br />
              Chennai, Tamil Nadu 600026
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary-600 mb-6 shadow-sm">
              <Phone size={28} />
            </div>
            <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">Contact Details</h4>
            <p className="text-gray-600 mb-1">+91 98765 43210</p>
            <p className="text-gray-600">info@nilanistherapy.com</p>
          </div>

          <div className="bg-secondary-50 p-8 rounded-2xl border border-secondary-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary-600 mb-6 shadow-sm">
              <Clock size={28} />
            </div>
            <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">Working Hours</h4>
            <p className="text-gray-600 mb-1">Monday – Saturday</p>
            <p className="text-primary-700 font-bold">6:00 AM – 8:00 PM</p>
            <p className="text-gray-500 text-sm mt-2">Sunday: Closed</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-xl">
          <iframe 
            src="https://maps.google.com/maps?q=Palani%20Andavar%20Koil%20St,%20Vadapalani,%20Chennai,%20Tamil%20Nadu%20600026&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
