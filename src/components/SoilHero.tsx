import { motion } from 'framer-motion';
import { FlaskConical, Bot, Target, Sprout } from 'lucide-react';

export function SoilHero() {
  return (
    <div className="relative min-h-[65vh] flex flex-col justify-center pt-32 pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/soil_hero_bg.png" 
          alt="Soil Analysis" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f12] via-[#0a1f12]/90 to-transparent"></div>
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-6 w-full flex flex-col xl:flex-row items-start xl:items-end justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[750px] w-full"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#134E36]/80 backdrop-blur-md border border-[#B8F24A]/30 text-[#B8F24A] font-semibold text-sm rounded-full mb-6 shadow-lg">
            <FlaskConical className="w-4 h-4" /> AI Soil Analysis
          </span>
          <h1 className="text-[3.5rem] md:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-2">
            Know Your Soil, Grow Better
          </h1>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            For Higher Yield & Profit
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            AgroSathi combines Artificial Intelligence, Soil Science, Machine Learning, satellite imagery, and laboratory soil reports to analyze your soil health, identify nutrient deficiencies, calculate fertility scores, and recommend personalized fertilizers and crop management practices for maximum productivity.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <FeaturePill icon={<Bot className="w-5 h-5" />} title="AI Powered" subtitle="Soil Analysis" />
            <FeaturePill icon={<FlaskConical className="w-5 h-5 text-[#B8F24A]" />} title="13+ Nutrient" subtitle="Detection" />
            <FeaturePill icon={<Target className="w-5 h-5 text-[#B8F24A]" />} title="Soil Health" subtitle="Scoring" />
            <FeaturePill icon={<Sprout className="w-5 h-5 text-[#B8F24A]" />} title="Fertilizer" subtitle="Recommendation" />
          </div>
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
        <span className="text-white/60 text-[11px] leading-tight mt-0.5 uppercase tracking-wide">{subtitle}</span>
      </div>
    </div>
  );
}
