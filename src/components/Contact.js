import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', role: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 80768-21601'],
      description: 'Mon-Fri 8:00 AM - 6:00 PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Hr@strivebusinesssolution.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Sector 37 C, Gurugram'],
      description: 'Visit us for in-person consultations'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      description: 'Emergency support available 24/7'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your hiring needs and create a customized recruitment strategy that delivers exceptional results for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Hiring Needs</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">We've received your message and will get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'company'].map((field, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.charAt(0).toUpperCase() + field.slice(1)} *
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                        placeholder={field === 'name' ? 'Enter your name' : field === 'email' ? 'abc@gmail.com' : 'Your Company name'}
                      />
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Hiring For</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a category</option>
                      <option value="executive">Executive Level</option>
                      <option value="technical">Technical Roles</option>
                      <option value="sales">Sales & Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="finance">Finance & Accounting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                    placeholder="Describe the role, required skills, company culture, timeline, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-300 to-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-400 hover:to-sky-900 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700">{detail}</p>
                      ))}
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-8 w-8 text-sky-600" />
                <h4 className="text-xl font-semibold text-gray-900">Quick Response Guarantee</h4>
              </div>
              <p className="text-gray-700 mb-4">We understand that time is critical in recruitment. That's why we guarantee:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-700">Response within 2 hours during business hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-700">Initial consultation within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-700">Dedicated account manager assigned</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
