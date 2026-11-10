import { Navbar } from '../components/Navbar';
import { MarketHero } from '../components/MarketHero';
import { MarketFormCard } from '../components/MarketFormCard';
import { MarketResultsCenter } from '../components/MarketResultsCenter';
import { MarketSidebar } from '../components/MarketSidebar';
import { MarketBottomSections } from '../components/MarketBottomSections';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MarketPricePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden">
      <Navbar />
      <MarketHero />
      
      {/* Overlapping Main Container */}
      <section className="relative z-30 -mt-24 px-6 mb-12">
        <div className="max-w-[1600px] mx-auto">

          {/* Honest status note until live prices and forecasts are connected */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
            <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
            Preview with sample figures. Live Agmarknet prices and forecasts are being connected.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Left side: Form (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <MarketFormCard />
            </motion.div>
            
            {/* Center: Results & Chart (6/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6"
            >
              <MarketResultsCenter />
            </motion.div>

            {/* Right: Sidebar (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <MarketSidebar />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MarketBottomSections />
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
