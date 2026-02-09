import { useRef } from 'react';
import { Users, Briefcase, Award, Clock, Shield, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const services = [
    {
      icon: Users,
      title: 'Permanent Staffing',
      description: 'Find the right talent to build high-performing teams that drive your business forward.',
      features: ['Quality-first hiring', 'Cultural fit evaluation', 'Long-term talent partnerships']
    },
    {
      icon: Briefcase,
      title: 'Contract & Temporary Hires',
      description: 'Flexible staffing solutions for project-based and temporary needs.',
      features: ['Quick turnaround', 'Flexible terms', 'Quality guarantee']
    },
    {
      icon: Award,
      title: 'Executive & Leadership Search',
      description: 'Identify and secure visionary leaders who will shape your organization\'s future.',
      features: ['Leadership assessment', 'Cultural fit evaluation', 'Confidential process']
    },
    {
      icon: Clock,
      title: 'Workforce Planning & Talent Consulting',
      description: 'Strategic consulting to align your workforce with business goals.',
      features: ['Workforce analysis', 'Talent strategy development', 'Ongoing support']
    },
    {
      icon: Shield,
      title: 'Background Screening',
      description: 'Comprehensive verification services to ensure candidate reliability.',
      features: ['Identity verification', 'Reference checks', 'Compliance screening']
    },
    {
      icon: Zap,
      title: 'Rapid Hiring',
      description: 'Fast-track recruitment for urgent hiring needs without compromising quality.',
      features: ['48-hour response', 'Priority matching', 'Express interviews']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={isInView}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Strive Business Solution – Recruiting Talent. Empowering Growth.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help businesses grow by connecting them with the right people. Whether you're hiring or job-seeking, Strive delivers smart recruitment solutions with speed, precision, and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={`${isInView}-${index}`} 
              custom={index + 1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          key={`${isInView}-cta`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={services.length + 1}
        >
          <CallToAction />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-sky-300 group">
      <div className="mb-6">
        <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ServiceFeatures features={service.features} />
    </div>
  );
};

const ServiceFeatures = ({ features }) => (
  <ul className="space-y-2">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center space-x-2 text-sm">
        <div className="w-2 h-2 bg-gradient-to-r from-sky-300 to-sky-800 rounded-full"></div>
        <span className="text-gray-700">{feature}</span>
      </li>
    ))}
  </ul>
);

const CallToAction = () => (
  <div className="mt-16 text-center">
    <div className="bg-gradient-to-r from-sky-300 to-sky-800 rounded-2xl p-8 text-white shadow-xl">
      <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring Process?</h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        Let's discuss your specific needs and create a customized recruitment strategy
        that delivers exceptional results for your organization.
      </p>
      <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg">
        Get Started Today
      </button>
    </div>
  </div>
);

export default Services;
