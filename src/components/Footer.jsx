import { Activity, MessageCircle, Share2, Camera, Video, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Setup */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 text-white p-2 rounded-lg">
                <Activity size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Nilanis <span className="text-primary-500 font-light">Therapy</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A premium wellness and rehabilitation center in Chennai, dedicated to restoring your health through holistic and scientific therapies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all">
                <Video size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> About Us</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> Our Services</a></li>
              <li><a href="#specialists" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> Specialists</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors flex items-center gap-2"><span className="text-primary-500">›</span> Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-heading font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Physiotherapy</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Varma Therapy</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Yoga Therapy</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Geriatric Rehabilitation</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Post-Surgery Rehab</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-heading font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">Nilanis Holistic Therapy (NHT), Palani Andavar Koil St, Vadapalani, Chennai, Tamil Nadu 600026</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 flex-shrink-0" size={20} />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 flex-shrink-0" size={20} />
                <span className="text-gray-400">info@nilanistherapy.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nilanis Holistic Therapy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
