import React from 'react';
import { Users, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Permanent Staffing',
    'Contract & Temporary Hires',
    'Executive & Leadership Search',
    'Workforce Planning & Talent Consulting',
    'Background Screening',
    'Rapid Hiring'
  ];

  const industries = [
    'Information Technology (IT)',
    'Finance & Accounting',
    'Engineering & Manufacturing',
    'Healthcare & Life Sciences',
    'Marketing & Creative',
    'HR, Admin & Support Services'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Case Studies',
    'Careers',
    'Blog',
    'Press'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Strive Business Solution</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                We're more than just a recruitment agency. We're your strategic partner in building 
                exceptional teams that drive business success. With over a decade of experience, 
                we've helped 500+ companies find their perfect matches.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <ContactItem icon={Phone} text="+91 80768-21601" />
                <ContactItem icon={Mail} text="Hr@strivebusinesssolution.com" />
                <ContactItem icon={MapPin} text="Sector 37 C, Gurugram" />
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} icon={social.icon} href={social.href} name={social.name} />
                ))}
              </div>
            </div>

            {/* Services */}
            <FooterColumn title="Services" items={services} />

            {/* Industries */}
            <FooterColumn title="Industries" items={industries} />

            {/* Company */}
            <FooterColumn title="Company" items={company} />
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </footer>
  );
};

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon className="h-5 w-5 text-sky-100" />
    <span className="text-gray-300">{text}</span>
  </div>
);

const SocialLink = ({ icon: Icon, href, name }) => (
  <a
    href={href}
    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-800 transition-all duration-300"
    aria-label={name}
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#"
            className="text-gray-300 hover:text-sky-300 transition-colors duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterSignup = () => (
  <div className="border-t border-gray-800 py-8">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div >
        <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
        <p className="text-gray-300">Get the latest recruitment insights and industry trends.</p>
      </div>
      <div className="flex w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
        />
        <button className="bg-gradient-to-r from-sky-300 to-sky-800 px-6 py-3 rounded-r-lg font-semibold hover:from-sky-400 hover:to-sky-900 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

const BottomBar = () => (
  <div className="border-t border-gray-800 py-6">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-gray-300 text-sm">
        © 2024 Strive Business Solution. All rights reserved.
      </div>
      <div className="flex space-x-6 text-sm">
        <FooterLink text="Privacy Policy" />
        <FooterLink text="Terms of Service" />
        <FooterLink text="Cookie Policy" />
      </div>
    </div>
  </div>
);

const FooterLink = ({ text }) => (
  <a href="#" className="text-gray-200 hover:text-sky-300 transition-colors duration-300">
    {text}
  </a>
);

export default Footer;
