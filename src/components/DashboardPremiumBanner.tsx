import { Crown, Zap, BellRing, Users, BarChart3 } from 'lucide-react';

export function DashboardPremiumBanner() {
  return (
    <div className="bg-[#0a1f12] rounded-2xl p-6 flex flex-col xl:flex-row items-center justify-between gap-6 relative overflow-hidden mt-2">
      <div className="absolute inset-0 bg-[url('/images/hero_drone.png')] opacity-10 mix-blend-luminosity object-cover"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#B8F24A]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="relative z-10 flex-shrink-0">
        <h2 className="text-xl font-bold text-white">Get More With AgroSathi Premium</h2>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 flex-1">
        <Feature icon={<Zap className="w-4 h-4" />} text="Advanced AI Models" />
        <Feature icon={<BellRing className="w-4 h-4" />} text="Real-time Market Alerts" />
        <Feature icon={<Users className="w-4 h-4" />} text="Expert Farmer Support" />
        <Feature icon={<BarChart3 className="w-4 h-4" />} text="Detailed Farm Analytics" />
      </div>

      <div className="relative z-10 flex-shrink-0">
        <button className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
          Upgrade Now <Crown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="text-gray-400">
        {icon}
      </div>
      <span className="text-[10px] text-white/80 font-medium whitespace-nowrap">{text}</span>
    </div>
  );
}
