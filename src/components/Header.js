import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = {
    main: [
      { href: "home", label: "Home" },
      { href: "about", label: "About" },
      { href: "/humanresourceconsulting/", label: "Services", external: true },
      { href: "testimonials", label: "Testimonials" },
      { href: "contact", label: "Contact" },
    ],
    contact: [
      { icon: Phone, text: "+91 80768-21601", link: "tel:+918076821601" },
      { icon: Mail, text: "hr@strivebusinesssolution.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=hr@strivebusinesssolution.com" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white sticky top-0 z-50 shadow-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-64}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Strive Business Solution HR Consultants HR Consultants Logo"
              className="h-[250px] md:w-[400px] w-auto -ml-12"
            />
            
          </ScrollLink>

          <nav className="hidden md:flex space-x-4">
            {navigation.main.map((item, i) =>
              item.external ? (
                <a
                  key={i}
                  href={item.href}
                  className="cursor-pointer px-3 py-2 text-xl font-semibold text-gray-700 hover:text-sky-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <ScrollLink
                  key={i}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  activeClass="text-sky-600 font-semibold"
                  spy={true}
                  className="cursor-pointer px-3 py-2 text-xl font-semibold text-gray-700 hover:text-sky-600 transition-colors"
                >
                  {item.label}
                </ScrollLink>
              )
            )}
          </nav>
          <div className="hidden md:flex items-center space-x-3">
            {navigation.contact.map((item, i) => (
              <div key={i} className="relative group">
                <a href={item.link} className="p-2 text-gray-500 hover:text-sky-600 transition-colors">
                  <item.icon className="h-4 w-4" />
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max bg-white shadow-lg p-2 text-xs text-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-sky-600 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white shadow-inner"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.main.map((item, i) =>
                item.external ? (
                  <a
                    key={i}
                    href={item.href}
                    onClick={toggleMenu}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 cursor-pointer rounded"
                  >
                    {item.label}
                  </a>
                ) : (
                  <ScrollLink
                    key={i}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    onClick={toggleMenu}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 cursor-pointer rounded"
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Contact us</h3>
              <div className="space-y-2">
                {navigation.contact.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center text-sm text-gray-700 hover:text-sky-600"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
