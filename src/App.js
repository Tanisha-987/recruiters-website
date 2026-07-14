import Contact from "./components/Contact";
import { AreaPage, AreasWeServe } from "./components/AreasWeServe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import AboutUs from './components/About';
import { Route, Routes } from "react-router-dom";

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Process />
    <AboutUs />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/areas-we-serve/" element={<AreasWeServe />} />
        <Route path="/areas-we-serve/:slug/" element={<AreaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

