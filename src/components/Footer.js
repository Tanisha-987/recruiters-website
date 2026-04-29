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
    { icon: Linkedin, href: 'https://www.linkedin.com/company/get-jobs-solution/posts/?feedView=all', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Strive Business Solution HR Consultants</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We're more than just a recruitment agency. We're your strategic partner in building
                exceptional teams that drive business success. With over a decade of experience,
                we've helped 500+ companies find their perfect matches.
              </p>

      
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-100 flex-shrink-0" />
                  <a href="tel:+918076821601" className="text-gray-300 hover:text-sky-300 transition-colors">+91 80768 21601</a>
                </div>
                <ContactItem icon={Mail} text="Hr@strivebusinesssolution.com" />
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-sky-100 flex-shrink-0 mt-1" />
                  <address className="text-gray-300 not-italic leading-relaxed">
                    Office no: 66, Ground floor, 1st Street,<br />
                    Garauli Kalan, Sector 37C,<br />
                    Gurugram, Haryana 122006
                  </address>
                </div>
              </div>

              {/* Google Maps - SEO Friendly & Visible */}
              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1044772707173!2d76.97709147549395!3d28.446266775767032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1712ba23c2b5%3A0xea2e7f70f6ec1661!2sStrive%20Business%20Solution!5e0!3m2!1sen!2sin!4v1772798484276!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Strive Business Solution HR Consultants Location - Sector 37C Gurugram"
                ></iframe>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} icon={social.icon} href={social.href} name={social.name} />
                ))}
              </div>
            </div>

            <FooterColumn title="Services" items={services} />

            <FooterColumn title="Industries" items={industries} />

            <FooterColumn title="Company" items={company} />
          </div>
        </div>

        <NewsletterSignup />

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
          <a href='/' className="text-gray-300 hover:text-sky-300 transition-colors duration-300" >
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
        © 2024 Strive Business Solution HR Consultants. All rights reserved.
      </div>
      <div className="flex space-x-6 text-sm">
        <FooterLink text="Privacy Policy" href="/privacy-policy" />
        <FooterLink text="Terms of Service" href="/terms" />
        <FooterLink text="Cookie Policy" href="/cookie-policy" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-right justify-between space-y-4 md:space-y-0">
         <div className="mt-6 text-center animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            <p className="text-gray-400 text-sm">
              Designed and Developed by{' '}
              <a
                href="https://www.linkedin.com/in/tanisha-garg-70116b313/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 font-semibold transition-all hover:underline decoration-2 underline-offset-4 inline-flex items-center space-x-1 group"
              >
                <span>Tanisha</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </p>
      </div>
    </div>
  </div>
);

const FooterLink = ({ text, href }) => (
  <a href={href} className="text-gray-200 hover:text-sky-300 transition-colors duration-300">
    {text}
  </a>
);


export default Footer;
