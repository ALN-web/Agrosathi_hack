import { motion } from 'framer-motion';
import { Gem, ShieldCheck, Zap, Headphones, RefreshCcw } from 'lucide-react';

export function PricingHero() {
  return (
    <div className="relative min-h-[65vh] flex flex-col justify-center pt-32 pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/pricing_hero_bg.png" 
          alt="Choose Your Plan" 
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
            <Gem className="w-4 h-4" /> Choose Your Plan
          </span>
          <h1 className="text-[3.5rem] md:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-2">
            Simple Pricing,
          </h1>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            Powerful Farming.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Unlock the complete power of AgroSathi with AI-powered farming intelligence. Access premium crop prediction, weather forecasting, soil analysis, disease detection, market intelligence, AI chatbot, and smart farming recommendations—all in one subscription.
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
            <FeatureItem icon={<RefreshCcw className="w-5 h-5 text-[#B8F24A]" />} title="Cancel Anytime" desc="No hidden charges" />
            <FeatureItem icon={<ShieldCheck className="w-5 h-5 text-[#B8F24A]" />} title="Secure Payments" desc="100% safe & secure" />
            <FeatureItem icon={<Zap className="w-5 h-5 text-[#B8F24A]" />} title="Instant Access" desc="Get started in minutes" />
            <FeatureItem icon={<Headphones className="w-5 h-5 text-[#B8F24A]" />} title="24×7 Support" desc="We are always here" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-tight mb-0.5">{title}</span>
        <span className="text-white/60 text-xs leading-tight">{desc}</span>
      </div>
    </div>
  );
}
