import { Users, Target, Shield, TrendingUp, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Driven by People.</span> Powered by Purpose.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Strive Business Solution, we believe the right people are the heart of every successful business. As a trusted recruitment partner, we help companies build high-performing teams—and help individuals build meaningful careers.
          </p>
        </div>

        {/* Mission Statement with Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-gradient-to-r from-sky-300 to-sky-800 p-3 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To deliver recruitment solutions that are fast, reliable, and tailored to your business needs.
            </p>
            <img 
              src="https://placehold.co/600x400" 
              alt="Diverse team of professionals collaborating in a modern office space with glass walls and whiteboards" 
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="space-y-8">
              <ValueItem 
                icon={TrendingUp}
                title="Strive for Excellence"
                description="We push beyond average, delivering recruitment solutions that exceed expectations."
              />
              <ValueItem 
                icon={Shield}
                title="Integrity Always"
                description="We build trust through complete transparency in all our interactions."
              />
              <ValueItem 
                icon={Heart}
                title="Human-Centered"
                description="We treat people like people, not placements - with dignity and respect."
              />
              <ValueItem 
                icon={Target}
                title="Results-Focused"
                description="We're committed to delivering measurable outcomes, not just options."
              />
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Strive Business Solution began as a small team of recruitment specialists with a shared vision: to transform how companies find talent and how professionals find opportunities.
              </p>
              <img 
                src="https://placehold.co/600x400" 
                alt="Office interior showing the founding team celebrating their first year in business with balloons and smiles" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we've grown into a full-service recruitment partner serving 500+ companies across multiple industries. Our team of 50+ specialized recruiters combines cutting-edge technology with human insight to make meaningful connections.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center mt-8">
                <StatCard number="500+" label="Companies Served" />
                <StatCard number="90%" label="Placement Success Rate" />
                <StatCard number="15" label="Industry Specialists" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Nitesh Arora"
              role="Founder & CEO"
              bio="20+ years in talent acquisition with specialization in tech recruitment"
              imgSrc="https://placehold.co/400x400"
              imgAlt="Indian business professional in formal attire with arms crossed, smiling confidently"
            />
            <TeamMember 
              name="Shilpa"
              role="Co & Founder"
              bio="HR specialist with expertise in workforce planning and talent development"
              imgSrc="https://placehold.co/400x400"
              imgAlt="Indian woman in business suit holding a tablet, standing in modern office"
            />
            <TeamMember 
              name="Amit Khanna"
              role="Head of Recruitment"
              bio="Recruitment strategist with deep expertise in executive search"
              imgSrc="https://placehold.co/400x400"
              imgAlt="South Asian man in blazer gesturing while speaking in a professional setting"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for Value Items
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

// Component for Stats
const StatCard = ({ number, label }) => (
  <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl shadow-sm border border-sky-100">
    <div className="lg:text-4xl text-3xl font-bold text-sky-700 mb-2">{number}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

// Component for Team Members
const TeamMember = ({ name, role, bio, imgSrc, imgAlt }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img src={imgSrc} alt={imgAlt} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-sky-600 mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

export default AboutUs;
