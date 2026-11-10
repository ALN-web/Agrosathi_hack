import { Navbar } from '../components/Navbar';
import { PredictionHero } from '../components/PredictionHero';
import { PredictionFormCard } from '../components/PredictionFormCard';
import { PredictionResultsCard } from '../components/PredictionResultsCard';
import { PredictionAlternatives } from '../components/PredictionAlternatives';
import { PredictionFeaturesStrip } from '../components/PredictionFeaturesStrip';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PredictionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden">
      <Navbar />
      <PredictionHero />
      
      {/* Overlapping Main Container */}
      <section className="relative z-30 -mt-24 px-6 mb-12">
        <div className="max-w-[1500px] mx-auto bg-white rounded-[2rem] shadow-2xl p-6 lg:p-8 border border-gray-100">
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">
            {/* Left side: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-5"
            >
              <PredictionFormCard />
            </motion.div>
            
            {/* Right side: Results */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="xl:col-span-7"
            >
              <PredictionResultsCard />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PredictionAlternatives />
          </motion.div>

          <PredictionFeaturesStrip />

        </div>
      </section>

      <Footer />
    </div>
  );
}
