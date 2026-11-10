import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function CommunityCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center shadow-2xl"
      >
        <img src="/images/community_tractor.png" alt="Community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 p-10 md:p-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white font-semibold text-sm rounded-full mb-6 border border-white/30">
            Join Our Community
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Grow Together, <br />
            Learn Together!
          </h2>
          <p className="text-lg text-white/90 mb-10 font-light max-w-md">
            Join thousands of farmers using AgroSathi to grow better every day. Share insights and succeed together.
          </p>
          <Button size="lg" className="group text-brand-darker font-bold">
            Join Community
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
