import { Navbar } from '../components/Navbar';
import { WeatherHero } from '../components/WeatherHero';
import { WeatherFormCard } from '../components/WeatherFormCard';
import { WeatherResultsCenter } from '../components/WeatherResultsCenter';
import { WeatherSidebar } from '../components/WeatherSidebar';
import { WeatherBottomSections } from '../components/WeatherBottomSections';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WeatherPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden">
      <Navbar />
      <WeatherHero />
      
      {/* Overlapping Main Container */}
      <section className="relative z-30 -mt-24 px-6 mb-12">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* Left side: Form (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <WeatherFormCard />
            </motion.div>
            
            {/* Center: Results & Chart (6/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6"
            >
              <WeatherResultsCenter />
            </motion.div>

            {/* Right: Sidebar (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <WeatherSidebar />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <WeatherBottomSections />
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
