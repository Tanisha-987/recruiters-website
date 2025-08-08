import { MessageSquare, Search, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We start by understanding your company culture, role requirements, and ideal candidate profile.',
      details: ['Detailed requirement analysis', 'Culture assessment', 'Timeline planning'],
      progress: 25,
      backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')"
    },
    {
      number: '02',
      icon: Search,
      title: 'Candidate Sourcing',
      description: 'Our team leverages extensive networks and advanced tools to identify top-tier candidates.',
      details: ['Multi-channel sourcing', 'Passive candidate outreach', 'Skills-based matching'],
      progress: 50,
      backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80')"
    },
    {
      number: '03',
      icon: Users,
      title: 'Screening & Evaluation',
      description: 'Rigorous assessment process ensures only the most qualified candidates move forward.',
      details: ['Technical assessments', 'Cultural fit interviews', 'Reference verification'],
      progress: 75,
      backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')"
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Placement & Follow-up',
      description: 'We facilitate the hiring process and provide ongoing support to ensure successful integration.',
      details: ['Interview coordination', 'Offer negotiation', '90-day follow-up'],
      progress: 100,
      backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80')"
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-sky-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Header />
        </motion.div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={index}
          >
            <ProcessStep step={step} isEven={index % 2 !== 0} />
          </motion.div>
        ))}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}>
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
};

const Header = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Hiring Process</h2>
    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
      A systematic approach that ensures we find the perfect match for your organization. Our process is designed for efficiency, quality, and successful long-term placements.
    </p>
  </div>
);

const ProcessStep = ({ step, isEven }) => {
  const IconComponent = step.icon;

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1 space-y-6 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-xl" style={{ backgroundImage: step.backgroundImage }}></div>
        <div className="relative z-10 space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-sky-300 to-sky-800 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">{step.description}</p>
          <StepDetails details={step.details} />
        </div>
      </div>
      <StepVisual icon={IconComponent} progress={step.progress} backgroundImage={step.backgroundImage} />
    </div>
  );
};

const StepDetails = ({ details }) => (
  <ul className="space-y-3">
    {details.map((detail, index) => (
      <li key={index} className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-gradient-to-r from-sky-300 to-sky-800 rounded-full"></div>
        <span className="text-gray-700">{detail}</span>
      </li>
    ))}
  </ul>
);

const StepVisual = ({ icon: IconComponent, progress, backgroundImage }) => (
  <div className="flex-1">
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage }}></div>
      <div className="relative z-10 text-center">
        <div className="bg-gradient-to-br from-sky-50 to-sky-200 p-6 rounded-full inline-block mb-6">
          <IconComponent className="h-12 w-12 text-sky-500" />
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="space-y-4">
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="h-2 bg-gray-200 rounded-full mb-2">
        <div className="h-2 bg-gradient-to-r from-sky-300 to-sky-800 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="text-sm text-gray-600 text-left">Step Progress</div>
    </div>
  </div>
);

const Timeline = () => {
  const timelineSteps = [
    { days: '1–3', label: 'Days for Discovery', color: 'blue' },
    { days: '4–10', label: 'Days for Sourcing', color: 'purple' },
    { days: '11–13', label: 'Days for Screening', color: 'green' },
    { days: '14–15', label: 'Days for Placement', color: 'orange' },
  ];

  return (
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80')" }}></div>
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Typical Timeline: 15 Days Average</h3>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ days, label, color }) => {
  const bgColor = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
  }[color];

  return (
    <div className="text-center">
      <div className={`rounded-full w-16 h-16 flex items-center justify-center font-bold mb-2 mx-auto ${bgColor}`}>
        {days}
      </div>
      <p className="text-sm text-gray-700 font-semibold bg-white px-3 py-1 border border-gray-300 rounded-2xl">
        {label}
      </p>
    </div>
  );
};

export default Process;
