import { CheckCircle2, Search, FileText, Activity, Headset } from 'lucide-react';

export function SchemesSidebar() {
  return (
    <div className="flex flex-col gap-8 lg:sticky lg:top-24">
      
      {/* Check Eligibility Card */}
      <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8F24A]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <CheckCircle2 className="w-6 h-6 text-brand" />
          <h3 className="text-xl font-bold text-gray-900">Check Your Eligibility</h3>
        </div>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-8 relative z-10">
          Answer a few questions about your farm to discover government schemes that match your profile instantly.
        </p>
        <button className="w-full bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold py-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 relative z-10">
          Check Eligibility Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* How It Works Card */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h3 className="text-xl font-bold text-gray-900 mb-8">How It Works</h3>
        
        <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-gray-100 before:-z-10">
          <Step 
            number="1" 
            icon={<Search className="w-4 h-4" />} 
            title="Search Schemes" 
            desc="Browse schemes relevant to your farming needs." 
          />
          <Step 
            number="2" 
            icon={<CheckCircle2 className="w-4 h-4" />} 
            title="Check Eligibility" 
            desc="AI analyzes your profile and verifies eligibility." 
          />
          <Step 
            number="3" 
            icon={<FileText className="w-4 h-4" />} 
            title="Apply Online" 
            desc="Access official application links and required documents." 
          />
          <Step 
            number="4" 
            icon={<Activity className="w-4 h-4" />} 
            title="Track Status" 
            desc="Monitor your application progress in one dashboard." 
          />
        </div>
      </div>

      {/* Need Help Card */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Need Help?</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10 max-w-[200px]">
          Our support team is ready to assist you with government scheme guidance and application support.
        </p>
        <button className="bg-[#0a1f12] hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 relative z-10 text-sm shadow-lg">
          Contact Support <Headset className="w-4 h-4" />
        </button>
        {/* Decorative illustration placement */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f4fbe9] rounded-full flex items-center justify-center opacity-50">
          <Headset className="w-16 h-16 text-brand" />
        </div>
      </div>

    </div>
  );
}

function Step({ number, icon, title, desc }: { number: string, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-white border-2 border-brand text-brand flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0 z-10 relative">
        {icon}
      </div>
      <div className="pt-1">
        <h4 className="font-bold text-gray-900 text-[15px] mb-1">{number}. {title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react'; // Needed at bottom for first component
