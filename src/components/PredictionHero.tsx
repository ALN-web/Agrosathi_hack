import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Clock, Activity, Sprout } from 'lucide-react';

export function PredictionHero() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/hero_drone.png" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E1D] via-[#0B2E1D]/90 to-[#0B2E1D]/60"></div>
        {/* The bottom gradient will blend into the white rounded container */}
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-6 w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[750px] w-full"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#134E36]/80 backdrop-blur-md border border-[#B8F24A]/30 text-[#B8F24A] font-semibold text-sm rounded-full mb-6 shadow-lg">
            <Sprout className="w-4 h-4" /> AI Crop Prediction
          </span>
          <h1 className="text-[3.5rem] md:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-2">
            Predict the Best Crop
          </h1>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            For Maximum Yield & Profit
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-0 max-w-2xl drop-shadow-md">
            Our AI model analyzes your soil, weather, and environmental data to recommend the most suitable crop for your field.
          </p>
        </motion.div>

        {/* Right Side: Feature Pills */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 xl:justify-end xl:w-[600px]"
        >
          <FeaturePill icon={<Cpu className="w-5 h-5" />} title="AI Powered" subtitle="ML Model" />
          <FeaturePill icon={<Activity className="w-5 h-5 text-[#B8F24A]" />} title="Explainable" subtitle="Recommendations" />
          <FeaturePill icon={<Clock className="w-5 h-5" />} title="Data-driven" subtitle="Analysis" />
          <FeaturePill icon={<TrendingUp className="w-5 h-5" />} title="Profit" subtitle="Maximization" />
        </motion.div>
      </div>
    </div>
  );
}

function FeaturePill({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg">
      <div className="text-[#B8F24A]">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-tight">{title}</span>
        <span className="text-white/60 text-xs leading-tight">{subtitle}</span>
      </div>
    </div>
  );
}
