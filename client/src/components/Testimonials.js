import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import tech from "../assets/tech.png";
import treline from "../assets/treline.png";
import transcom from "../assets/transcom.png";
import tokyo from "../assets/tokyo.webp";
import samavesh from "../assets/samavesh.png";
import globiva from "../assets/globiva.png";
import envision from "../assets/envision.png";
import enser from "../assets/enser.jpeg";
import saumic from "../assets/saumic.png";
import teleperformance from "../assets/teleperformance.webp";
import harbor from "../assets/harbor.png"
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const companies = [
  {
    name: "Samavesh Marketing pvt ltd.",
    logo: samavesh,
    feedback:
      "Their dedication and timely communication made the process extremely smooth. We were impressed by their approach.",
  },
  {
    name: "Treline Advisory pvt ltd",
    logo: treline,
    feedback:
      "They quickly understood our requirements and delivered with precision. A reliable partner we trust.",
  },
  {
    name: "Enser Communication pvt ltd",
    logo: enser,
    feedback:
      "Their professionalism stands out. Every interaction was clear, concise, and value-driven.",
  },
  {
    name: "Tech Mahindra",
    logo: tech,
    feedback:
      "We’ve partnered on multiple projects and the consistency in quality has been excellent throughout.",
  },
  {
    name: "Globiva Services pvt ltd",
    logo: globiva,
    feedback:
      "Highly responsive team that aligns with your goals and gets things done efficiently.",
  },
  {
    name: "Transcom India",
    logo: transcom,
    feedback:
      "We saw great collaboration and proactive updates throughout the engagement. Highly recommend.",
  },
  {
    name: "Tokyo Consulting",
    logo: tokyo,
    feedback:
      "They deliver with clarity and a sharp focus on results. Appreciate the strategic thinking.",
  },
  {
    name: "Envision",
    logo: envision,
    feedback:
      "Very impressed with their process and execution. On-time and on-point delivery.",
  },
  {
    name: "Saumic Craft",
    logo: saumic,
    feedback:
      "What we liked most was their attention to detail and flexibility with changing needs.",
  },
  {
    name: "Teleperformance",
    logo: teleperformance,
    feedback:
      "Outstanding communication, commitment, and quality delivery across every stage.",
  },
  {
    name: "Harbor Connect Service LLP",
    logo: harbor,
    feedback:
      "Their dedication and timely communication made the process extremely smooth. We were impressed by their approach.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from our valued clients — a testament to our work
            quality, integrity, and trust.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Quote className="h-6 w-6 text-sky-600 mb-4 opacity-60" />

              <p className="text-gray-800 leading-relaxed mb-6 text-base">
                “{company.feedback}”
              </p>

              <div className="flex flex-col items-center mt-auto">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-16 w-16 object-contain rounded-full mb-2"
                />
                <p className="font-semibold text-gray-900">{company.name}</p>

                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">5.0 Rating</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
