import { motion } from 'framer-motion';
import { MessageSquare, Bot, Clock, Award, User } from 'lucide-react';

export function ChatHero() {
  return (
    <div className="relative min-h-[65vh] flex flex-col justify-center pt-32 pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/chat_hero_bg.png" 
          alt="AI Chatbot Assistant" 
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
            <MessageSquare className="w-4 h-4" /> AI Chatbot Assistant
          </span>
          <h1 className="text-[3.5rem] md:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-2">
            Your Smart Farming Partner
          </h1>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            Always Here To Help You
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            AgroSathi AI Assistant is an intelligent agricultural chatbot powered by Artificial Intelligence, Machine Learning, and Large Language Models. It provides instant answers, crop recommendations, disease diagnosis, weather insights, fertilizer guidance, government scheme information, and personalized farming advice 24×7.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <FeaturePill icon={<Bot className="w-5 h-5 text-[#B8F24A]" />} title="AI Powered" subtitle="Smart Assistant" />
            <FeaturePill icon={<Clock className="w-5 h-5" />} title="24/7" subtitle="Available" />
            <FeaturePill icon={<Award className="w-5 h-5 text-[#B8F24A]" />} title="Expert" subtitle="Agriculture Knowledge" />
            <FeaturePill icon={<User className="w-5 h-5 text-[#B8F24A]" />} title="Personalized" subtitle="Farm Solutions" />
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
