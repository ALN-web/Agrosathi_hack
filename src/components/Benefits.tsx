import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Cpu, BarChart } from 'lucide-react';

const benefits = [
  { icon: Cpu, title: 'AI Powered Predictions', desc: 'Get accurate crop, price, weather & soil predictions using AI.' },
  { icon: Zap, title: 'Real-time Insights', desc: 'Live weather, market & soil updates in real-time.' },
  { icon: BarChart, title: 'Better Decisions', desc: 'Make smart farming decisions to improve yield and profit.' },
  { icon: ShieldCheck, title: 'Government Schemes', desc: 'Stay updated with the latest government schemes.' }
];

export function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <span className="inline-block px-3 py-1 bg-[#f0f9eb] text-brand-dark font-semibold text-sm rounded-full mb-4">
          Why Choose Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Benefits You Get With <br />
          <span className="text-brand-dark">AgroSathi</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#f0f9eb] text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <b.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
            <p className="text-gray-600 leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
