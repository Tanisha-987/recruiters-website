import { ArrowRight, CheckCircle, Target, User, Briefcase, Mail, Phone, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className="relative bg-gradient-to-br from-sky-50 via-white to-sky-200 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ContentSection />
          <VisualElement />
        </div>
        <FormsSection />
      </div>
    </section>
  );
};

// Content Section Components
const ContentSection = () => (
  <div className="space-y-8">
    <Header />
    <KeyPoints />
    <CallToAction />
  </div>
);

const Header = () => (
  <div className="space-y-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
      Strive Business Solution – 
      <span className="bg-gradient-to-r from-sky-300 to-sky-800 bg-clip-text text-transparent block">
        Recruiting Talent. Empowering Growth.
      </span>
    </h1>
    <p className="text-xl text-gray-600 leading-relaxed">
      We help businesses grow by connecting them with the right people. Whether you're hiring or job-seeking, Strive delivers smart recruitment solutions with speed, precision, and care.
    </p>
  </div>
);

const KeyPoints = () => (
  <div className="space-y-3">
    {[
      "90% success rate in candidate placement",
      "Average 15-day hiring process",
      "500+ companies trust our expertise"
    ].map((point, index) => (
      <div key={index} className="flex items-center space-x-3">
        <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0" />
        <span className="text-gray-700">{point}</span>
      </div>
    ))}
  </div>
);

const CallToAction = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <button 
      className="bg-gradient-to-r from-sky-300 to-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-400 hover:to-sky-900 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      aria-label="Find Talent"
    >
      <span>Find Talent</span>
      <ArrowRight className="h-5 w-5" />
    </button>
    <button 
      className="bg-gradient-to-r from-sky-300 to-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-400 hover:to-sky-900 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      aria-label="Explore Jobs"
    >
      Explore Jobs
    </button>
  </div>
);

// Visual Element Components
const VisualElement = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-sky-50 to-sky-200 rounded-2xl p-8 shadow-2xl">
      <div className="grid grid-cols-2 gap-6">
        <FeatureCard 
          icon={Target} 
          title="Targeted Search" 
          description="Precision matching for your specific needs" 
        />
        <FeatureCard 
          icon={CheckCircle} 
          title="Quality Assured" 
          description="Rigorous vetting process ensures excellence" 
        />
        <SuccessRate />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <Icon className="h-8 w-8 text-sky-300 mb-3" />
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const SuccessRate = () => (
  <div className="bg-white rounded-xl p-6 shadow-lg col-span-2">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-gray-600">Success Rate</span>
      <span className="text-sm font-bold text-sky-300">90%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-gradient-to-r from-sky-300 to-sky-800 h-2 rounded-full w-[90%] transition-all duration-300"></div>
    </div>
  </div>
);

// Forms Section Components
const FormsSection = () => (
  <div className="mt-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Whether you're looking for your dream job or seeking top talent, we're here to help.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <CandidateForm />
      <CompanyForm />
    </div>
  </div>
);

const CandidateForm = () => (
  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
    <div className="flex items-center mb-6">
      <User  className="h-6 w-6 text-sky-500 mr-3" />
      <h3 className="text-2xl font-bold text-gray-900">For Candidates</h3>
    </div>
    
    <form className="space-y-5">
      <FormInput 
        icon={User }
        label="Full Name"
        type="text"
        placeholder="Enter your name"
        required
      />
      
      <FormInput 
        icon={Mail}
        label="Email"
        type="email"
        placeholder="Enter email here"
        required
      />
      
      <FormInput 
        icon={Phone}
        label="Phone"
        type="tel" // Changed to 'tel' for better mobile experience
        placeholder="+91 7015152167"
        required
      />
      
      <FormInput 
        icon={FileText}
        label="Resume/CV Link or Upload"
        type="text"
        placeholder="Paste link or upload file"
        required
      />
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-md flex items-center justify-center">
        <span>Find My Dream Job</span>
        <ArrowRight className="h-5 w-5 ml-2" />
      </button>
    </form>
  </div>
);

const CompanyForm = () => (
  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
    <div className="flex items-center mb-6">
      <Briefcase className="h-6 w-6 text-sky-500 mr-3" />
      <h3 className="text-2xl font-bold text-gray-900">For Employers</h3>
    </div>
    
    <form className="space-y-5">
      <FormInput 
        icon={Briefcase}
        label="Company Name"
        type="text"
        placeholder="Strive Business Solution"
        required
      />
      
      <FormInput 
        icon={Mail}
        label="Contact Email"
        type="email"
        placeholder="Hr@strivebusinesssolution.com"
        required
      />
      
      <FormInput 
        icon={Phone}
        label="Phone"
        type="tel" // Changed to 'tel' for better mobile experience
        placeholder="+91 7015152167"
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Needs</label>
        <textarea 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
          rows="3"
          placeholder="Describe the positions you're hiring for..."
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-md flex items-center justify-center">
        <span>Find Top Talent</span>
        <ArrowRight className="h-5 w-5 ml-2" />
      </button>
    </form>
  </div>
);

// Reusable Form Input Component
const FormInput = ({ icon: Icon, label, type, placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input 
        type={type}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
        placeholder={placeholder}
        required={required}
      />
    </div>
  </div>
);

export default Hero;
