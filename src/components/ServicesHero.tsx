import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, X } from 'lucide-react';

export function ServicesHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
        {/* Background Image - Reverted to hero_drone to match screenshot */}
        <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
          <img 
            src="/images/hero_drone.png" 
            alt="Agriculture Drone" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E1D] via-[#0B2E1D]/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-[1500px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[750px]"
          >
            <span className="inline-block px-5 py-2 bg-[#134E36]/80 backdrop-blur-md border border-[#134E36] text-[#B8F24A] font-semibold text-sm rounded-full mb-6 shadow-lg">
              Our Features
            </span>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Powerful AI Features <br/>
              <span className="text-[#B8F24A]">For Smarter Farming</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-lg drop-shadow-md">
              AgroSathi brings together advanced AI, real-time data, and smart analytics to help farmers make better decisions, increase productivity, and maximize profits.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-[#B8F24A] hover:bg-[#a5db40] text-[#0B2E1D] font-bold text-lg px-8 py-4 rounded-[1rem] flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl">
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto bg-black/20 hover:bg-black/40 backdrop-blur-md text-white border border-white/30 font-bold text-lg px-8 py-4 rounded-[1rem] flex items-center justify-center gap-3 transition-colors"
              >
                Watch Demo
                <PlayCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Stats Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[450px] bg-[#134E36]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col gap-8">
              <StatRow icon="🌱" value="AI Driven" label="Advanced machine learning models" />
              <StatRow icon="☁️" value="Real-Time" label="Live data updates & monitoring" />
              <StatRow icon="🛡️" value="Accurate" label="High precision & reliable insights" />
              <StatRow icon="👥" value="Farmer First" label="Built for farmers, by experts" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setIsVideoOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <video 
                src="/images/mp4.mp4" 
                autoPlay 
                controls 
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StatRow({ icon, value, label }: { icon: string, value: string, label: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-1">{value}</h4>
        <p className="text-white/70 font-medium text-sm leading-snug">{label}</p>
      </div>
    </div>
  );
}
