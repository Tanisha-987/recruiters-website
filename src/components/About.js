import { Target, Shield, TrendingUp, Heart } from 'lucide-react';
import mission from "../assets/mission.webp";
import story from "../assets/story.png";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Driven by People.</span> Powered by Purpose.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Strive Business Solution HR Consultants HR Consultants, we believe the right people are the heart of every successful business.
            As a trusted recruitment partner, we help companies build high-performing teams—and help individuals build meaningful careers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <MissionSection />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ValuesSection />
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <OurStorySection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

const MissionSection = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-3 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
      <Target className="h-8 w-8 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
    <p className="text-lg text-gray-600 mb-8">
      To deliver recruitment solutions that are fast, reliable, and tailored to your business needs.
    </p>
    <img
      src={mission}
      alt="Dedicated team working towards achieving a common goal"
      className="rounded-xl shadow-lg w-full h-auto"
    />
  </div>
);

const ValuesSection = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
    <div className="space-y-8">
      <ValueItem icon={TrendingUp} title="Strive for Excellence" description="We push beyond average, delivering recruitment solutions that exceed expectations." />
      <ValueItem icon={Shield} title="Integrity Always" description="We build trust through complete transparency in all our interactions." />
      <ValueItem icon={Heart} title="Human-Centered" description="We treat people like people, not placements - with dignity and respect." />
      <ValueItem icon={Target} title="Results-Focused" description="We're committed to delivering measurable outcomes, not just options." />
    </div>
  </div>
);

const OurStorySection = () => (
  <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img src={story} alt="Office interior showing the founding team" className="rounded-xl shadow-md w-full h-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Founded in 2024, Strive Business Solution HR Consultants HR Consultants began as a small team of recruitment specialists with a shared vision: to transform how companies find talent and how professionals find opportunities.
        </p>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Today, we've grown into a full-service recruitment partner serving 50+ companies across multiple industries.
          Our team of 20+ specialized recruiters combines cutting-edge technology with human insight to make meaningful connections.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowering Client Success</h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We work closely with clients to deeply understand their needs, trends, and desired qualifications, ensuring we contribute to long-term success and team culture.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Recruitment Strategies</h3>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We blend data-driven sourcing with human insight to connect companies with candidates who not only qualify but align culturally.
        </p>

        <div className="grid grid-cols-3 gap-4 text-center mt-8">
          <StatCard number="50+" label="Companies Served" />
          <StatCard number="90%" label="Placement Success Rate" />
          <StatCard number="20%" label="Industry Specialists" />
        </div>
      </div>
    </div>
  </div>
);

const ValueItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-6">
    <div className="bg-sky-100 p-4 rounded-lg flex-shrink-0">
      <Icon className="h-6 w-6 text-sky-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl shadow-sm border border-sky-100">
    <div className="lg:text-4xl text-2xl font-bold text-sky-700 mb-2">{number}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);


export default AboutUs;
