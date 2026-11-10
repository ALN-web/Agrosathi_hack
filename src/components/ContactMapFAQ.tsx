import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Map, Car, Clock, ArrowRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer: "Our support team usually replies within 24 hours."
  },
  {
    question: "Can I request a live demonstration?",
    answer: "Yes. Simply submit the contact form or schedule a demo, and our team will arrange an online presentation."
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes. We offer technical assistance for all AgroSathi services including crop prediction, dashboard usage, AI recommendations, and analytics."
  },
  {
    question: "Can organizations collaborate with AgroSathi?",
    answer: "Absolutely. We actively collaborate with universities, startups, NGOs, research organizations, and government agencies."
  },
  {
    question: "Is AgroSathi available throughout India?",
    answer: "Yes. AgroSathi is designed to support farmers across different climatic regions and states of India."
  }
];

export function ContactMapFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-24 px-6 relative z-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Visit Our Office */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            Our headquarters is located in Bangalore, Karnataka, where our team develops AI-powered solutions for modern agriculture.
          </p>

          <div className="bg-[#f8f9fa] rounded-3xl p-4 border border-gray-100 shadow-sm mb-8 relative overflow-hidden">
            <div className="h-[250px] w-full rounded-2xl overflow-hidden relative">
              <img src="/images/service_crop.png" alt="Map Placeholder" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
              <div className="absolute inset-0 bg-[#B8F24A]/10"></div>
              
              {/* Map Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-gray-900 mb-2 whitespace-nowrap flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand" />
                  AgroSathi Innovation Lab
                </div>
                <div className="w-4 h-4 bg-brand rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-brand flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Modern Workspace</span>
            </div>
            <div className="flex items-center gap-3">
              <Map className="w-6 h-6 text-brand flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Easy Accessibility</span>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-brand flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Parking Available</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-brand flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700">Working Hours</span>
                <span className="text-[10px] text-gray-500">Monday – Saturday 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          <button className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center">
            Get Directions <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border ${isOpen ? 'border-[#e2f3d8] bg-[#f4fbe9]' : 'border-gray-100 bg-white'} rounded-2xl overflow-hidden transition-colors duration-300`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
