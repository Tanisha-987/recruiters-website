import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight, CheckCircle, Target, User, Briefcase, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import jobsImage from "../assets/jobImage.jpg";

const fadeInUp = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0 } 
};
const FormInput = ({ name, label, type, placeholder, value, required, onChange, accept }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {type === 'file' ? (
      <input
        name={name}
        type={type}
        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300"
        required={required}
        onChange={onChange}
        accept={accept}
      />
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
        required={required}
        onChange={onChange}
      />
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }} 
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }} 
    whileHover={{ scale: 1.03 }}
    viewport={{ once: false, amount: 0.2 }} 
    className="bg-white rounded-xl p-6 shadow-lg transition-all"
  >
    <Icon className="h-8 w-8 text-sky-300 mb-3" />
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
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

const Header = () => (
  <div className="space-y-4">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
      HR Consultants in Gurgaon
      <span className="bg-gradient-to-r from-sky-300 to-sky-800 bg-clip-text text-transparent block">
        Recruiting Talent. Empowering Growth.
      </span>
    </h1>
    <p className="text-xl text-gray-600 leading-relaxed">
      We connect exceptional talent with top companies, creating opportunities that drive growth for both sides.
    </p>
  </div>
);

const KeyPoints = () => (
  <div className="space-y-3">
    {[
      "90% success rate in candidate placement",
      "Average 15-day hiring process",
      "Trusted by 500+ companies worldwide"
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
    {["Find Talent", "Explore Jobs"].map((label, i) => (
      <motion.button 
        key={i} 
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-sky-300 to-sky-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-400 hover:to-sky-900 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      >
        <span>{label}</span>
        {label === "Find Talent" && <ArrowRight className="h-5 w-5" />}
      </motion.button>
    ))}
  </div>
);

const ContentSection = () => (
  <motion.div 
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 0.6 }} 
    className="space-y-8"
  >
    <Header />
    <KeyPoints />
    <CallToAction />
  </motion.div>
);

const VisualElement = () => (
  <motion.div 
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 0.6 }} 
    className="relative"
  >
    <div className="bg-gradient-to-br from-sky-50 to-sky-200 rounded-2xl p-8 shadow-2xl">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 mb-6">
          <img src={jobsImage} alt="Recruitment illustration" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <FeatureCard icon={Target} title="Targeted Search" description="Precision-matched candidates for your needs" />
        <FeatureCard icon={CheckCircle} title="Quality Assured" description="Thorough vetting to ensure excellence" />
        <SuccessRate />
      </div>
    </div>
  </motion.div>
);

const OTPVerification = ({ email, otp, setOtp, onBack }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsVerifying(true);
    
    try {
      const response = await axios.post('https://strivebusiness.onrender.com/user/verify-otp', {
        email,
        otp: otp.toString()
      });

      setVerificationStatus({ 
        success: true, 
        message: response.data.message || 'Account verified successfully! Redirecting...' 
      });
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
    } catch (error) {
      setVerificationStatus({ 
        success: false, 
        message: error.response?.data?.message || 'Verification failed. Please check the OTP and try again.' 
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post('https://strivebusiness.onrender.com/user/resend-otp', { email });
      alert('A new OTP has been sent to your email');
      setOtp('');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to resend OTP. Please try again.');
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-md mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center text-sky-600 hover:text-sky-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back to Signup
      </button>

      <div className="flex items-center mb-6">
        <Lock className="h-6 w-6 text-sky-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Verify Your Email</h3>
      </div>

      <p className="text-gray-600 mb-6">
        We've sent a 6-digit verification code to <span className="font-semibold">{email}</span>.
      </p>

      {verificationStatus && (
        <div className={`mb-4 p-3 rounded-lg ${
          verificationStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {verificationStatus.message}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleVerifyOTP}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">6-digit OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
            required
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
          />
        </div>

        <button
          type="submit"
          disabled={isVerifying || otp.length !== 6}
          className={`w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-md flex items-center justify-center ${
            isVerifying || otp.length !== 6 ? 'opacity-70' : ''
          }`}
        >
          {isVerifying ? 'Verifying...' : 'Verify Account'}
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-500">
        Didn't receive the code?{' '}
        <button 
          className="text-sky-600 hover:text-sky-800 font-medium"
          onClick={handleResendOTP}
        >
          Resend OTP
        </button>
      </div>
    </motion.div>
  );
};

const CandidateForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ 
    fullname: '', 
    email: '', 
    phone: '', 
    role: 'seeker',
    cv: null 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('fullname', form.fullname);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('role', form.role);
      if (form.cv) formData.append('cv', form.cv);

      const res = await axios.post('https://strivebusiness.onrender.com/user/signup', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(res.data.message || 'OTP sent to your email. Please verify.');
      onSuccess(form.email);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
      <div className="flex items-center mb-6">
        <User className="h-6 w-6 text-sky-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Job Seekers</h3>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <FormInput 
          name="fullname" 
          label="Full Name" 
          type="text" 
          placeholder="John Doe" 
          value={form.fullname} 
          required 
          onChange={handleChange} 
        />
        <FormInput 
          name="email" 
          label="Email Address" 
          type="email" 
          placeholder="john@example.com" 
          value={form.email} 
          required 
          onChange={handleChange} 
        />
        <FormInput 
          name="phone" 
          label="Phone Number" 
          type="tel" 
          placeholder="+91 7015152167" 
          value={form.phone} 
          required 
          onChange={handleChange} 
        />
        <FormInput 
          name="cv" 
          label="Resume/CV" 
          type="file" 
          required 
          onChange={handleChange} 
          accept=".pdf,.doc,.docx"
        />
        <input type="hidden" name="role" value="seeker" />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-70' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : (
            <>
              <span>Submit Application</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const CompanyForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ 
    companyname: '', 
    email: '', 
    phone: '', 
    role: 'provider',
    hiring: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('companyname', form.companyname);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('role', form.role);
      formData.append('hiring', form.hiring);

      const res = await axios.post('https://strivebusiness.onrender.com/user/signup', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(res.data.message || 'OTP sent to your email. Please verify.');
      onSuccess(form.email);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
      <div className="flex items-center mb-6">
        <Briefcase className="h-6 w-6 text-sky-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Job Providers</h3>
      </div>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <FormInput 
          name="companyname" 
          label="Company Name" 
          type="text" 
          placeholder="Kodu - Powered By Dhurina" 
          value={form.companyname} 
          required 
          onChange={handleChange} 
        />
        <FormInput 
          name="email" 
          label="Contact Email" 
          type="email" 
          placeholder="coding.oficial41@gmail.com" 
          value={form.email} 
          required 
          onChange={handleChange} 
        />
        <FormInput 
          name="phone" 
          label="Phone Number" 
          type="tel" 
          placeholder="+91930648015" 
          value={form.phone} 
          required 
          onChange={handleChange} 
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Requirements</label>
          <textarea 
            name="hiring" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
            rows="3" 
            placeholder="full stack website developer" 
            value={form.hiring}
            required 
            onChange={handleChange} 
          />
        </div>
        <input type="hidden" name="role" value="provider" />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-70' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : (
            <>
              <span>Post Job Requirement</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const FormsSection = ({ onSuccess }) => (
  <motion.div 
    variants={fadeInUp} 
    initial="hidden" 
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 0.6 }} 
    className="mt-20"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">We are a Human resource consulting agency providing Recruitment Services, Job Consultancy, Staffing Solutions and Career Counseling</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Whether you're looking for the right job or the right candidate, we'll help you achieve your goal.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <CandidateForm onSuccess={onSuccess} />
      <CompanyForm onSuccess={onSuccess} />
    </div>
  </motion.div>
);

const Hero = () => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [emailForVerification, setEmailForVerification] = useState('');
  const [otp, setOtp] = useState('');

  const handleOTPVerification = (email) => {
    setEmailForVerification(email);
    setShowOTPForm(true);
    setOtp('');
  };

  const handleBackToSignup = () => {
    setShowOTPForm(false);
    setEmailForVerification('');
    setOtp('');
  };

  return (
    <section id='home' className="relative bg-gradient-to-br from-sky-50 via-white to-sky-200 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showOTPForm ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ContentSection />
              <VisualElement />
            </div>
            <FormsSection onSuccess={handleOTPVerification} />
          </>
        ) : (
          <OTPVerification 
            email={emailForVerification} 
            otp={otp} 
            setOtp={setOtp}
            onBack={handleBackToSignup}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
