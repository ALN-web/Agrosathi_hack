import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PricingFAQ() {
  const faqs = [
    {
      q: "Can I upgrade or downgrade my plan anytime?",
      a: "Yes, you can change your plan at any time. The changes will reflect in the next billing cycle."
    },
    {
      q: "Is there a free trial for the Pro plan?",
      a: "Yes. Pro includes a 7-day free trial so you can experience all premium features before committing."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI, Credit Cards, Debit Cards, Net Banking, and major mobile wallets."
    },
    {
      q: "Is my data secure with AgroSathi?",
      a: "Absolutely. We use enterprise-grade encryption to ensure your farm data is 100% secure and private."
    },
    {
      q: "Can I cancel my subscription?",
      a: "Yes. You can cancel your subscription at any time with a single click. No hidden fees."
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} isOpenDefault={index === 0} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpenDefault = false }: { question: string, answer: string, isOpenDefault?: boolean }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 text-sm">{question}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 text-sm text-gray-600 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
