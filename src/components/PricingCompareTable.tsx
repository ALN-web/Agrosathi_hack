import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingCompareTable() {
  const features = [
    { name: "Crop Recommendation", free: true, pro: true, enterprise: true },
    { name: "Weather Forecast", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
    { name: "Soil Analysis", free: false, pro: true, enterprise: true },
    { name: "Market Prediction", free: false, pro: true, enterprise: true },
    { name: "Disease Detection", free: false, pro: true, enterprise: true },
    { name: "AI Chatbot", free: "Limited", pro: "Premium", enterprise: "Custom" },
    { name: "Government Schemes", free: true, pro: true, enterprise: true },
    { name: "Yield Prediction", free: false, pro: true, enterprise: true },
    { name: "Fertilizer Recommendation", free: false, pro: true, enterprise: true },
    { name: "Weather Alerts", free: false, pro: true, enterprise: true },
    { name: "PDF Reports", free: false, pro: true, enterprise: "Bulk Gen" },
    { name: "Farm Management", free: "1 Farm", pro: "Unlimited", enterprise: "Multi-Org" },
    { name: "Multi User / Team", free: false, pro: false, enterprise: true },
    { name: "API Access", free: false, pro: false, enterprise: true },
    { name: "Enterprise Dashboard", free: false, pro: false, enterprise: true }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Compare All Features</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-gray-200 bg-white font-bold text-gray-900 min-w-[200px]">Features</th>
                <th className="p-6 border-b border-gray-200 bg-white font-bold text-center min-w-[150px]">
                  <div className="text-gray-900 mb-1">Free Plan</div>
                  <div className="text-xs text-gray-500 font-medium">₹0 / month</div>
                </th>
                <th className="p-6 border-b border-brand border-b-2 bg-[#f4fbe9] font-bold text-center min-w-[150px]">
                  <div className="text-brand mb-1">Pro Farmer</div>
                  <div className="text-xs text-brand/70 font-medium">₹249 / month</div>
                </th>
                <th className="p-6 border-b border-gray-200 bg-white font-bold text-center min-w-[150px]">
                  <div className="text-gray-900 mb-1">Enterprise</div>
                  <div className="text-xs text-purple-600 font-medium">Custom</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border-b border-gray-100 text-sm font-semibold text-gray-700">
                    {feature.name}
                  </td>
                  <td className="p-6 border-b border-gray-100 text-center align-middle">
                    <FeatureValue value={feature.free} />
                  </td>
                  <td className="p-6 border-b border-gray-100 text-center align-middle bg-[#f4fbe9]/30">
                    <FeatureValue value={feature.pro} isPro />
                  </td>
                  <td className="p-6 border-b border-gray-100 text-center align-middle">
                    <FeatureValue value={feature.enterprise} isEnterprise />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureValue({ value, isPro, isEnterprise }: { value: boolean | string, isPro?: boolean, isEnterprise?: boolean }) {
  if (typeof value === 'boolean') {
    if (value) {
      return (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f4fbe9] border border-[#e2f3d8]">
          <Check className={`w-3.5 h-3.5 ${isPro ? 'text-brand' : 'text-emerald-500'}`} />
        </div>
      );
    } else {
      return (
        <X className="w-4 h-4 text-gray-300 mx-auto" />
      );
    }
  }

  return (
    <span className={`text-xs font-bold px-3 py-1 rounded-full ${isPro ? 'bg-brand/10 text-brand' : isEnterprise ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
      {value}
    </span>
  );
}
