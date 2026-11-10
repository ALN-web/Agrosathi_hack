import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Clock, BrainCircuit, Zap, Users } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/hero_drone.png" 
          alt="Agriculture Drone" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E1D] via-[#0B2E1D]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[750px]"
        >
          <span className="inline-block px-5 py-2 bg-[#134E36]/80 backdrop-blur-md border border-[#134E36] text-[#B8F24A] font-semibold text-sm rounded-full mb-6 shadow-lg">
            Contact Us
          </span>
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
            Let's Build The Future Of
          </h1>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            Smart Agriculture Together
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Whether you are a farmer, researcher, student, startup, agribusiness, NGO, or government organization, AgroSathi is here to help. Reach out to us for AI-powered farming solutions, technical assistance, collaborations, partnerships, product demonstrations, or general inquiries. Our team is committed to empowering agriculture through innovation and intelligent technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-[#B8F24A] hover:bg-[#a5db40] text-[#0B2E1D] font-bold text-lg px-8 py-4 rounded-[1rem] flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-black/20 hover:bg-black/40 backdrop-blur-md text-white border border-white/30 font-bold text-lg px-8 py-4 rounded-[1rem] flex items-center justify-center gap-3 transition-colors">
              Book Demo
              <PlayCircle className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Glass Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[480px] bg-[#134E36]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col gap-8">
            <InfoRow 
              icon={<Clock className="w-6 h-6" />} 
              title="24/7 Support" 
              desc="Our dedicated support team is available to assist farmers and organizations anytime." 
            />
            <InfoRow 
              icon={<BrainCircuit className="w-6 h-6" />} 
              title="AI Agriculture Experts" 
              desc="Connect with AI engineers and agriculture specialists for personalized guidance." 
            />
            <InfoRow 
              icon={<Zap className="w-6 h-6" />} 
              title="Quick Response" 
              desc="We respond to all inquiries within 24 hours." 
            />
            <InfoRow 
              icon={<Users className="w-6 h-6" />} 
              title="Trusted by Farmers" 
              desc="Serving thousands of farmers across India with intelligent agricultural solutions." 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InfoRow({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 rounded-xl bg-[#B8F24A]/20 flex items-center justify-center text-[#B8F24A] border border-[#B8F24A]/30 flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
