import React, { useState } from 'react';
import { Menu, X, Users, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (menu) => setActiveSubmenu(activeSubmenu === menu ? null : menu);

  const navigation = {
    main: [
      { href: '#home', label: 'Home' },
      { 
        href: '#about', label: 'About'
      },
      { 
        href: '#services', label: 'Services',
      },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#contact', label: 'Contact' }
    ],
    contact: [
      { icon: Phone, text: '+91 80768-21601', link: 'tel:+918076821601' },
      { icon: Mail, text: 'contact@strive.com', link: 'mailto:contact@strive.com' }
    ]
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <div className="bg-sky-600 p-1.5 rounded-md">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">Strive Business Solutions</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigation.main.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <button 
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a 
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
                
                {item.submenu && activeSubmenu === index && (
                  <div className="absolute z-10 left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setActiveSubmenu(null); // Close submenu on click
                          setIsMenuOpen(false); // Close mobile menu if open
                        }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact links */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.contact.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.link}
                  className="p-2 text-gray-500 hover:text-sky-600 transition-colors"
                  aria-label={item.text}
                >
                  <item.icon className="h-4 w-4" />
                </a>
                <span className="absolute left-0 mt-8 w-48 bg-white text-gray-700 text-sm rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-sky-600 hover:bg-gray-100 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.main.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex w-full justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-5 w-5 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                      </button>
                      {item.submenu && activeSubmenu === index && (
                        <div className="pl-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-sky-600 hover:bg-gray-50"
                              onClick={() => {
                                setActiveSubmenu(null); // Close submenu on click
                                setIsMenuOpen(false); // Close mobile menu if open
                              }}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="px-3 py-4 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
                Contact us
              </h3>
              <div className="space-y-2">
                {navigation.contact.map((item, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={item.link}
                      className="flex items-start text-sm text-gray-700 hover:text-sky-600"
                    >
                      <item.icon className="flex-shrink-0 h-4 w-4 mt-0.5 mr-2" />
                      <span>{item.text}</span>
                    </a>
                    <span className="absolute left-0 mt-8 w-48 bg-white text-gray-700 text-sm rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
