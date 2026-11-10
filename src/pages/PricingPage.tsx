import { Navbar } from '../components/Navbar';
import { PricingHero } from '../components/PricingHero';
import { PricingCards } from '../components/PricingCards';
import { PricingCompareTable } from '../components/PricingCompareTable';
import { PricingFAQ } from '../components/PricingFAQ';
import { PricingTrust } from '../components/PricingTrust';
import { PricingBottomSections } from '../components/PricingBottomSections';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      <PricingHero />
      
      {/* Overlapping Main Container */}
      <section className="relative z-30 -mt-24 px-6 w-full flex-1">
        <PricingCards />
        
        <PricingCompareTable />

        <div className="w-full max-w-[1200px] mx-auto mt-24 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <PricingFAQ />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <PricingTrust />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <PricingBottomSections />
        </motion.div>

      </section>

      <Footer />
    </div>
  );
}
