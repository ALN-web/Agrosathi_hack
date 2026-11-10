import { motion } from 'framer-motion';
import { ArrowRight, Beaker, BarChart3, FileText, MessageSquare } from 'lucide-react';

const mainFeatures = [
  {
    title: 'Crop Prediction',
    desc: 'AI predicts the best crop for higher yield & profit.',
    img: '/images/crop_prediction.png',
    icon: '🌱'
  },
  {
    title: 'Market Price Prediction',
    desc: 'Get future market price predictions & trends.',
    img: '/images/market_price.png',
    icon: '💰'
  },
  {
    title: 'Weather Analysis',
    desc: 'Real-time weather updates & future forecasts.',
    img: '/images/weather_station.png',
    icon: '🌦️'
  }
];

const subFeatures = [
  { icon: Beaker, title: 'Soil Analysis', desc: 'Check soil health & nutrient levels.' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Visualize all insights & reports.' },
  { icon: FileText, title: 'Government Schemes', desc: 'Find latest schemes & benefits.' },
  { icon: MessageSquare, title: 'AI Chatbot', desc: 'Get instant help & farming advice.' },
];

export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 bg-[#f0f9eb] text-brand-dark font-semibold text-sm rounded-full mb-4">
          Our Features
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Everything You Need For <br />
          <span className="text-brand-dark">Smart Farming</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {mainFeatures.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 50 }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-[400px]"
          >
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{feat.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{feat.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </div>
            <div className="h-52 relative overflow-hidden mt-auto rounded-b-3xl mx-2 mb-2">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-b-3xl"></div>
               <img src={feat.img} alt={feat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-b-3xl" />
               <button className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark hover:bg-brand hover:text-white transition-colors shadow-lg">
                 <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subFeatures.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 hover:bg-gray-50 hover:shadow-md transition-all border border-gray-100 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#f0f9eb] text-brand flex items-center justify-center mb-4">
              <feat.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{feat.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
