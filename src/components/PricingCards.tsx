import { useState } from 'react';
import { Check, Crown, Building2, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center">
      
      {/* Billing Toggle */}
      <div className="flex items-center gap-2 p-1.5 bg-gray-50 border border-gray-200 rounded-full mb-12 shadow-inner">
        <button 
          onClick={() => setIsYearly(false)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-[#1a5f3a] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setIsYearly(true)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isYearly ? 'bg-[#1a5f3a] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
        >
          Yearly (Save 20%)
        </button>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mx-auto">
        
        {/* Free Plan */}
        <PricingCard 
          title="Free Plan"
          desc="Perfect for getting started"
          price="0"
          isYearly={isYearly}
          btnText="Get Started Free"
          btnPrimary={false}
          icon={<Leaf className="w-6 h-6 text-[#1a5f3a]" />}
          features={[
            "1 Farm",
            "5 Predictions Per Day",
            "Basic Weather Forecast",
            "Basic Crop Recommendation",
            "AI Chatbot (Limited)",
            "Government Schemes",
            "Community Support"
          ]}
          illustration="🌱"
        />

        {/* Pro Plan */}
        <PricingCard 
          title="Pro Farmer"
          desc="For serious farmers"
          price={isYearly ? "199" : "249"}
          isYearly={isYearly}
          btnText="Start 7-Day Free Trial"
          btnPrimary={true}
          isPopular={true}
          icon={<Crown className="w-6 h-6 text-[#1a5f3a]" />}
          prefix="Everything in Free, plus:"
          features={[
            "Unlimited Crop Predictions",
            "Advanced Weather Analysis",
            "Soil Health Analysis",
            "Market Price Prediction",
            "Fertilizer Recommendation",
            "Disease Detection (Image AI)",
            "AI Chatbot Premium",
            "AI Farming Reports",
            "Smart Alerts",
            "Priority Support",
            "Download PDF Reports",
            "Crop Yield Prediction"
          ]}
          illustration="🌿"
        />

        {/* Enterprise Plan */}
        <PricingCard 
          title="Enterprise"
          desc="For FPOs, Cooperatives & Govt."
          price="Custom"
          isYearly={isYearly}
          btnText="Contact Sales"
          btnPrimary={false}
          icon={<Building2 className="w-6 h-6 text-[#1a5f3a]" />}
          prefix="Everything in Pro, plus:"
          features={[
            "Unlimited Farms",
            "Team Management",
            "Admin Dashboard",
            "API Access",
            "Bulk Report Generation",
            "AI Analytics Dashboard",
            "Data Export",
            "Dedicated Account Manager",
            "Training & Onboarding",
            "Premium Support"
          ]}
          illustration="🏡🌿"
        />

      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  desc: string;
  price: string;
  isYearly: boolean;
  btnText: string;
  btnPrimary: boolean;
  isPopular?: boolean;
  icon: React.ReactNode;
  prefix?: string;
  features: string[];
  illustration: string;
}

function PricingCard({ title, desc, price, btnText, btnPrimary, isPopular, icon, prefix, features, illustration }: PricingCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all ${isPopular ? 'border-2 border-[#1a5f3a] shadow-xl shadow-brand/10' : 'border border-gray-200 shadow-sm hover:shadow-md'}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B8F24A] text-[#0a1f12] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-[#1a5f3a]/10">
          🔥 Most Popular
        </div>
      )}

      <div className="flex items-center gap-3 mb-2 mt-2">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm font-medium text-gray-500 mb-6">{desc}</p>
      
      <div className="flex items-end gap-1 mb-8">
        {price === "Custom" ? (
          <span className="text-4xl font-black text-gray-900">{price}</span>
        ) : (
          <>
            <span className="text-4xl font-black text-gray-900">₹{price}</span>
            <span className="text-sm font-bold text-gray-500 mb-1">/month</span>
          </>
        )}
      </div>

      <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all mb-8 shadow-sm ${btnPrimary ? 'bg-[#1a5f3a] hover:bg-[#134E36] text-white' : 'bg-[#f4fbe9] hover:bg-[#e2f3d8] text-brand border border-[#c4ebaf]'}`}>
        {btnText}
      </button>

      <div className="flex flex-col flex-1 relative z-10 pb-20">
        {prefix && <p className="text-xs font-bold text-gray-900 mb-4">{prefix}</p>}
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#f4fbe9] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#e2f3d8]">
                <Check className="w-3 h-3 text-brand" />
              </div>
              <span className="text-sm font-semibold text-gray-700 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-6 right-6 text-6xl opacity-90 select-none z-0">
        {illustration}
      </div>

    </motion.div>
  );
}
