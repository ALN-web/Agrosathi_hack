import { Bot, Award, Lock, TrendingUp, Leaf } from 'lucide-react';

export function PricingBottomSections() {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-6 pb-24">
      
      {/* Feature Strip */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6">
        <FeatureItem icon={<Bot className="w-6 h-6 text-brand" />} title="AI Powered Insights" desc="Smart recommendations" />
        <FeatureItem icon={<Award className="w-6 h-6 text-brand" />} title="Expert Knowledge" desc="Backed by scientists" />
        <FeatureItem icon={<Lock className="w-6 h-6 text-brand" />} title="Secure Payments" desc="Your data is safe" />
        <FeatureItem icon={<TrendingUp className="w-6 h-6 text-brand" />} title="Increase Productivity" desc="Better yield & profit" />
        <FeatureItem icon={<Leaf className="w-6 h-6 text-brand" />} title="Sustainable Farming" desc="Eco-friendly practices" />
      </div>

    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-[#f4fbe9] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-900 text-sm leading-tight mb-1">{title}</span>
        <span className="text-gray-500 text-xs leading-relaxed">{desc}</span>
      </div>
    </div>
  );
}
