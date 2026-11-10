import { motion } from 'framer-motion';
import { BrainCircuit, Activity, Smile, ShieldCheck, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Powered Insights",
    desc: "Advanced machine learning models analyze thousands of agricultural parameters to provide accurate crop recommendations."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Data",
    desc: "Live weather, soil, satellite, and market information continuously improve decision accuracy."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Easy To Use",
    desc: "Designed for every farmer with an intuitive interface, multilingual support, and simple workflows."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Expert Validated",
    desc: "Recommendations are built using agricultural research, government datasets, and expert knowledge."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure & Reliable",
    desc: "Enterprise-grade cloud security ensures complete protection of farmer information."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Built For Farmers",
    desc: "Every feature has been carefully designed after understanding real farming challenges across India."
  }
];

export function AboutFeatures() {
  return (
    <section className="bg-[#f8f9fa] py-24 px-6 border-y border-gray-100">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 inline-block relative">
          Why AgroSathi?
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f0f9eb] text-brand flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
