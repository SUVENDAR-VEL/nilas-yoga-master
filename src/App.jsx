import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Specialists from './components/Specialists';
import PatientBenefits from './components/PatientBenefits';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Specialists />
        <PatientBenefits />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
