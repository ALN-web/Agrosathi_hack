import { motion } from 'framer-motion';
import { Cpu, Microchip, Satellite, Wifi, Cloud, Database } from 'lucide-react';

const technologies = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Artificial Intelligence",
    desc: "Advanced AI models analyze environmental conditions and crop history to recommend the most suitable crops."
  },
  {
    icon: <Microchip className="w-6 h-6" />,
    title: "Machine Learning",
    desc: "Continuously improving algorithms learn from millions of agricultural datasets."
  },
  {
    icon: <Satellite className="w-6 h-6" />,
    title: "Satellite & Drone Monitoring",
    desc: "High-resolution satellite imagery and drone surveillance monitor crop health and vegetation."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "IoT Sensors",
    desc: "Collect real-time soil moisture, temperature, humidity, and nutrient information."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Computing",
    desc: "Scalable cloud infrastructure provides secure, reliable, and fast agricultural intelligence."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Big Data Analytics",
    desc: "Processes massive agricultural datasets to discover hidden insights and improve predictions."
  }
];

export function AboutTech() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 inline-block relative">
          Our Technology & Platform
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center transition-all hover:bg-gray-50"
            >
              <div className="text-blue-500 mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{tech.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
