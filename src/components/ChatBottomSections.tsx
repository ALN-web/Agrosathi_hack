import { ShieldCheck, Bot, Award, Lock } from 'lucide-react';

export function ChatBottomSections() {
  return (
    <div className="flex flex-col gap-8 w-full pb-16">
      
      {/* Trust Strip */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        <TrustItem icon={<ShieldCheck className="w-6 h-6 text-brand" />} title="Trusted by Farmers" desc="50,000+ farmers trust AgroSathi" />
        <TrustItem icon={<Bot className="w-6 h-6 text-brand" />} title="AI Powered Solutions" desc="Advanced AI for better farming" />
        <TrustItem icon={<Award className="w-6 h-6 text-brand" />} title="Expert Agriculture Knowledge" desc="Verified by agricultural experts" />
        <TrustItem icon={<Lock className="w-6 h-6 text-brand" />} title="Secure & Reliable" desc="Your data is safe with us" />
      </div>

    </div>
  );
}

function TrustItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
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
