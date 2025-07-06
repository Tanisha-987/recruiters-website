import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechVision Inc.',
      company: 'TechVision Inc.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      text: 'TalentPro transformed our hiring process completely. They found us a CTO who has been instrumental in scaling our technology infrastructure. The quality of candidates and speed of delivery exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      position: 'HR Director, GreenEnergy Solutions',
      company: 'GreenEnergy Solutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      text: 'Working with TalentPro has been a game-changer for our recruitment strategy. Their deep understanding of our industry and culture helped us build an exceptional team that drives our mission forward.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, CreativeSpace',
      company: 'CreativeSpace',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      text: 'The team at TalentPro doesn\'t just find candidates; they find the right fit. Every person they\'ve placed with us has become a key contributor to our success. Their process is thorough and results-driven.'
    },
    {
      name: 'David Park',
      position: 'VP Operations, LogiFlow',
      company: 'LogiFlow',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      text: 'TalentPro\'s expertise in operations and supply chain recruitment is unmatched. They helped us find specialized talent that was critical for our expansion into new markets. Highly recommended!'
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Served' },
    { number: '2,500+', label: 'Successful Placements' },
    { number: '90%', label: 'Success Rate' },
    { number: '15', label: 'Average Days to Hire' }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Stats stats={stats} />
        <TestimonialsGrid testimonials={testimonials} />
        <CallToAction />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Don't just take our word for it. Here's what industry leaders say about 
      their experience working with TalentPro.
    </p>
  </div>
);

const Stats = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
    {stats.map((stat, index) => (
      <div key={index} className="text-center">
        <div className="bg-gradient-to-br from-sky-50 to-sky-200 rounded-2xl p-6 mb-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-sky-800 bg-clip-text text-transparent">
            {stat.number}
          </div>
        </div>
        <p className="text-gray-600 font-medium">{stat.label}</p>
      </div>
    ))}
  </div>
);

const TestimonialsGrid = ({ testimonials }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="mb-6">
      <Quote className="h-8 w-8 text-sky-600 opacity-50" />
    </div>
    <div className="flex space-x-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 leading-relaxed mb-6 italic">
      "{testimonial.text}"
    </p>
    <AuthorInfo testimonial={testimonial} />
  </div>
);

const AuthorInfo = ({ testimonial }) => (
  <div className="flex items-center space-x-4">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-12 h-12 rounded-full object-cover"
    />
    <div>
      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
      <p className="text-sm text-gray-600">{testimonial.position}</p>
      <p className="text-sm text-sky-300 font-medium">{testimonial.company}</p>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="mt-16 text-center">
    <div className="bg-gradient-to-r from-sky-300 to-sky-800 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Join 500+ Companies Who Trust TalentPro</h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        Ready to experience the difference our recruitment expertise can make for your organization? 
        Let's start building your dream team today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-sky-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
          Schedule a Consultation
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-300 transition-colors duration-300">
          View Case Studies
        </button>
      </div>
    </div>
  </div>
);

export default Testimonials;
