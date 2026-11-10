import { motion } from 'framer-motion';
import { Sprout, Droplet, CreditCard, Store, ArrowRight, Tractor } from 'lucide-react';

const tabs = ["All Schemes", "Central Schemes", "State Schemes", "Financial Support", "Insurance", "Technology"];

const schemes = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "PM-KISAN Samman Nidhi",
    desc: "Provides direct income support of ₹6,000 per year to eligible farmer families in three installments.",
    tags: ["Central Scheme", "Financial Assistance"],
    link: "https://pmkisan.gov.in/"
  },
  {
    icon: <Tractor className="w-6 h-6" />,
    title: "Pradhan Mantri Fasal Bima Yojana",
    desc: "Crop insurance scheme protecting farmers against crop loss due to natural calamities, pests, and diseases.",
    tags: ["Central Scheme", "Insurance"],
    link: "https://pmfby.gov.in/"
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    desc: "Supports efficient irrigation systems and promotes water conservation through micro-irrigation technologies.",
    tags: ["Central Scheme", "Irrigation"],
    link: "https://pmksy.gov.in/"
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Soil Health Card Scheme",
    desc: "Provides soil testing reports and fertilizer recommendations for improving crop productivity.",
    tags: ["Soil Health", "Central Scheme"],
    link: "https://soilhealth.dac.gov.in/"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Kisan Credit Card (KCC)",
    desc: "Offers affordable credit facilities to farmers for agriculture and allied activities.",
    tags: ["Credit Support", "Financial Scheme"],
    link: "https://www.myscheme.gov.in/schemes/kcc"
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "National Agriculture Market (e-NAM)",
    desc: "Digital marketplace connecting farmers with buyers for transparent pricing and better market access.",
    tags: ["Market Support", "Technology"],
    link: "https://enam.gov.in/"
  }
];

export function SchemesGrid() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Government Schemes</h3>
        
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {tabs.map((tab, i) => (
            <button 
              key={i} 
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${i === 0 ? 'bg-[#3b82f6] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
              style={i === 0 ? { backgroundColor: '#4ade80', color: '#0a1f12' } : {}} // Override first tab to brand green
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schemes.map((scheme, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#f4fbe9] text-brand flex items-center justify-center mb-6">
              {scheme.icon}
            </div>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">{scheme.title}</h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              {scheme.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {scheme.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href={scheme.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors self-start mt-auto"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <button className="mt-4 w-full py-5 rounded-2xl border border-gray-200 bg-white text-gray-900 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
        View All Schemes <ArrowRight className="w-5 h-5" />
      </button>

    </div>
  );
}
