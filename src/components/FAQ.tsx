import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'How does AI Crop Prediction work?', a: 'Our AI model analyzes historical data, current weather conditions, soil health metrics, and crop types to provide highly accurate predictions for optimal yield.' },
  { q: 'Is the market price prediction accurate?', a: 'Yes, our model uses real-time market data combined with historical trends to offer over 90% accuracy on near-term price movements.' },
  { q: 'How can I check my soil health?', a: 'You can use our integrated IoT soil sensors or manually input your latest soil test reports into the dashboard.' },
  { q: 'Where can I find government schemes?', a: 'The Government Schemes section in the dashboard is regularly updated with central and state agricultural benefits.' },
  { q: 'How does the AI Chatbot help farmers?', a: 'The chatbot provides 24/7 instant answers to your farming queries, pest control advice, and best practices in your local language.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 mb-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">Find answers to common questions about AgroSathi.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-gray-300 transition-colors shadow-sm">
            <button 
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 flex-shrink-0"
              >
                {openIndex === i ? <Minus className="w-5 h-5 text-brand" /> : <Plus className="w-5 h-5" />}
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
