import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import AboutUs from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />

      <Services />

      <Process />

      <AboutUs />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
