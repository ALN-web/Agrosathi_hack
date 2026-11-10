import { motion } from 'framer-motion';
import { Sprout, Wrench, Landmark, Lightbulb, Handshake, MessageSquarePlus } from 'lucide-react';

const reasons = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Farmer Support",
    desc: "Receive expert assistance for crop prediction, soil analysis, weather insights, and farming recommendations."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Technical Assistance",
    desc: "Get help with AgroSathi features, AI dashboard, APIs, and platform usage."
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Government Collaboration",
    desc: "Partner with AgroSathi to implement smart agriculture and digital farming initiatives."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Research & Innovation",
    desc: "Collaborate on Artificial Intelligence, Machine Learning, Computer Vision, and Precision Agriculture research."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Business Partnerships",
    desc: "Integrate AgroSathi into your agricultural startup, enterprise, or agribusiness."
  },
  {
    icon: <MessageSquarePlus className="w-6 h-6" />,
    title: "Product Feedback",
    desc: "Share your ideas and suggestions to help us continuously improve AgroSathi."
  }
];

export function ContactWhyReachOut() {
  return (
    <section className="bg-[#f8f9fa] py-24 px-6 border-y border-gray-100">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 inline-block relative">
          Why Reach Out To AgroSathi?
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f0f9eb] text-brand flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
