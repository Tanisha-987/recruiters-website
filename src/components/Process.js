import { MessageSquare, Search, CheckCircle, UserCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineSteps = [
    { day: 'Day 1', label: 'Discovery & Consultation', color: 'blue', icon: MessageSquare },
    { day: 'Day 2', label: 'Candidate Sourcing', color: 'green', icon: Search },
    { day: 'Day 3', label: 'Screening & Interviews', color: 'yellow', icon: UserCheck },
    { day: 'Day 4', label: 'Placement & Onboarding', color: 'orange', icon: CheckCircle },
    { day: 'Day 5', label: 'Follow-up & Feedback', color: 'purple', icon: Award },
  ];

  return (
    <div className="mt-20 bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-white to-sky-50 opacity-70"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-14 flex items-center justify-center gap-2">
          🚀 5-Days Streamlined Hiring Timeline
        </h3>

        {/* Connecting Line */}
        <div className="hidden md:block absolute top-[92px] left-1/2 -translate-x-1/2 w-[85%] max-w-4xl h-[4px] 
        bg-gradient-to-r from-blue-300 via-green-300 via-yellow-300 via-orange-300 to-purple-300 rounded-full z-0"></div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 relative">
          {timelineSteps.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ day, label, color, icon: Icon }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-700 border-blue-300',
    green: 'bg-green-100 text-green-700 border-green-300',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    orange: 'bg-orange-100 text-orange-700 border-orange-300',
    purple: 'bg-purple-100 text-purple-700 border-purple-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="flex flex-col items-center text-center relative z-10 h-[160px] justify-between"
    >
      <div
        className={`w-24 h-24 flex flex-col items-center justify-center rounded-full border-4 shadow-lg ${colorMap[color]}`}
      >
        <Icon className="w-7 h-7 mb-1" />
        <span className="font-bold text-sm">{day}</span>
      </div>
      <p className="text-sm text-gray-700 font-medium w-40 leading-snug">
        {label}
      </p>
    </motion.div>
  );
};

export default Timeline;
