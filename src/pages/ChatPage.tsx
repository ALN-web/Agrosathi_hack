import { Navbar } from '../components/Navbar';
import { ChatHero } from '../components/ChatHero';
import { ChatLeftSidebar } from '../components/ChatLeftSidebar';
import { ChatWindow } from '../components/ChatWindow';
import { ChatRightSidebar } from '../components/ChatRightSidebar';
import { ChatBottomSections } from '../components/ChatBottomSections';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ChatPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden">
      <Navbar />
      <ChatHero />
      
      {/* Overlapping Main Container */}
      <section className="relative z-30 -mt-24 px-6 mb-12">
        <div className="max-w-[1600px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 h-auto lg:h-[800px]">
            
            {/* Left side: Features & Actions (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 h-full"
            >
              <ChatLeftSidebar />
            </motion.div>
            
            {/* Center: Chat Window (6/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 h-full"
            >
              <ChatWindow />
            </motion.div>

            {/* Right: Weather & Recs (3/12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 h-full"
            >
              <ChatRightSidebar />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ChatBottomSections />
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
