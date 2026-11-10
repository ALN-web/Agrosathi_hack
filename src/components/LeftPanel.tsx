import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, CloudRain, FlaskConical, TrendingUp, Landmark, ClipboardList, Brain, Leaf, LineChart } from 'lucide-react';

const benefitCards = [
  { icon: TrendingUp, title: "98% Prediction Accuracy", delay: 0.2 },
  { icon: CloudRain, title: "Satellite Weather", delay: 0.3 },
  { icon: Landmark, title: "Profit Estimation", delay: 0.4 },
  { icon: FlaskConical, title: "Real-Time Analysis", delay: 0.5 },
];

const howItWorks = [
  { icon: ClipboardList, title: "Input Details", desc: "Provide soil, weather & environmental details.", num: "1" },
  { icon: Brain, title: "AI Analysis", desc: "Our AI model analyzes all factors deeply.", num: "2" },
  { icon: Leaf, title: "Best Crops", desc: "Get the best crop recommendations.", num: "3" },
  { icon: LineChart, title: "Higher Results", desc: "Achieve higher yield and better profits.", num: "4" },
];

const whyTrust = [
  { title: "AI Crop Prediction" },
  { title: "Weather Intelligence" },
  { title: "Satellite Monitoring" },
  { title: "Soil Health Analysis" },
  { title: "Profit Forecast" },
  { title: "Government Scheme Matching" }
];

export function LeftPanel() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* Hero Section */}
      <section className="mt-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent font-semibold text-sm rounded-full mb-8">
            ✨ AI Powered
          </span>
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
            India's AI Crop Prediction Platform
          </h1>
          <h2 className="text-3xl font-bold text-brand-accent mb-8">
            Predict Smarter. Harvest Better.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-[500px]">
            AgroSathi combines AI, machine learning, weather intelligence, soil analytics, and satellite insights to recommend the most profitable crop for every farmer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="w-full sm:w-auto bg-brand-accent hover:bg-[#a5db40] text-brand-dark font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(184,242,74,0.3)]">
              Predict My Crop
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-colors">
              <Play className="w-5 h-5 fill-current" />
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Floating Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefitCards.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: b.delay, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 flex items-center gap-4 hover:bg-white/20 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent flex-shrink-0">
                <b.icon className="w-6 h-6" />
              </div>
              <span className="font-semibold text-white text-[15px]">{b.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
        <span className="inline-block px-4 py-1.5 bg-[#f0f9eb] text-brand-dark font-semibold text-sm rounded-full mb-6">
          How It Works
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 leading-tight">
          Smart Analysis For <br />
          <span className="text-brand">Better Predictions</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-between gap-8 relative">
          <div className="hidden sm:block absolute top-8 left-10 right-10 h-[2px] bg-gray-100 z-0"></div>
          {howItWorks.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-5 relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {step.num}
                </div>
                <step.icon className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Trust AgroSathi */}
      <section className="bg-[#f3faeb] rounded-[2rem] p-8 md:p-10 border border-[#e2f3d8]">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-7 h-7 text-brand" />
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Why Trust AgroSathi Predictions?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          {whyTrust.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(184,242,74,0.8)]"></div>
              <span className="font-semibold text-gray-800 text-[15px]">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-dark rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero_drone.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-md">
          <h2 className="text-2xl font-bold text-white mb-3">Make Smarter Farming Decisions with AgroSathi</h2>
          <p className="text-white/70 text-sm">Start using AI-powered crop prediction and take your farming to the next level.</p>
        </div>
        <button className="relative z-10 w-full md:w-auto bg-brand-accent hover:bg-[#a5db40] text-brand-dark font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-transform hover:scale-105">
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}
