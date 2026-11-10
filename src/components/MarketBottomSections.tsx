import { TrendingUp, Truck, CloudSun, CalendarDays, Landmark, Trophy, Bell, Cpu, Clock, Activity, Target, CircleDollarSign, ShieldCheck, LineChart, Zap, Search } from 'lucide-react';

export function MarketBottomSections() {
  return (
    <div className="flex flex-col gap-8 w-full pb-16">
      
      {/* Factors and Recommendation Row */}
      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Factors Grid */}
        <div className="flex-1 bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Key Factors Affecting Price</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            <FactorCard icon={<TrendingUp className="w-5 h-5" />} title="Demand" status="High" desc="High demand in domestic market increasing prices" />
            <FactorCard icon={<Truck className="w-5 h-5" />} title="Supply" status="Moderate" desc="Moderate supply level in the market" />
            <FactorCard icon={<CloudSun className="w-5 h-5" />} title="Weather" status="Favorable" desc="Good weather conditions for crop production" />
            <FactorCard icon={<CalendarDays className="w-5 h-5" />} title="Seasonality" status="Rising" desc="Prices usually rise during this season" />
            <FactorCard icon={<Landmark className="w-5 h-5" />} title="Government Policy" status="Neutral" desc="No major policy changes expected" />
          </div>
        </div>

        {/* Best Selling Recommendation */}
        <div className="w-full xl:w-[400px] bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4fbe9] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <Trophy className="w-6 h-6 text-brand" />
            <h3 className="text-lg font-bold text-gray-900">Best Selling Recommendation</h3>
          </div>
          
          <p className="text-gray-500 text-xs mb-4 relative z-10">
            Based on our prediction, the best time to sell your crop is
          </p>
          
          <div className="text-center py-4 mb-4 relative z-10">
            <span className="text-2xl font-bold text-brand">Between Jun 10 – Jun 16</span>
          </div>
          
          <p className="text-center text-gray-500 text-xs mb-6 relative z-10">
            You can get maximum profit during this period.
          </p>
          
          <button className="w-full bg-brand hover:bg-[#134E36] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-auto relative z-10">
            <Bell className="w-4 h-4" /> Set Price Alert
          </button>
        </div>

      </div>

      {/* AI Insights Banner */}
      <div className="bg-[#fcfdfa] rounded-3xl p-6 lg:p-8 border border-[#f0f4ea] flex flex-col xl:flex-row items-center gap-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 w-full xl:w-48 leading-tight">Want More Accurate Predictions?</h3>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InsightCard icon={<Cpu className="w-5 h-5" />} title="Official Data" desc="Daily prices from Agmarknet (data.gov.in)" />
          <InsightCard icon={<Clock className="w-5 h-5" />} title="Daily Updates" desc="Prices refreshed every day" />
          <InsightCard icon={<Activity className="w-5 h-5" />} title="Multiple Factors" desc="Weather, demand, supply, policy & more" />
          <InsightCard icon={<Target className="w-5 h-5" />} title="Measured Honestly" desc="Accuracy reported from backtests" />
        </div>

        <button className="flex items-center justify-center gap-2 text-brand font-bold bg-white border border-gray-200 hover:border-brand px-6 py-3 rounded-xl transition-colors text-sm shadow-sm flex-shrink-0 w-full xl:w-auto">
          Learn More <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Feature Strip */}
      <div className="bg-[#0B2E1D] rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <FeatureItem icon={<CircleDollarSign className="w-5 h-5" />} title="Maximize Profit" desc="Sell at the right time" />
        <FeatureItem icon={<ShieldCheck className="w-5 h-5" />} title="Reduce Risk" desc="Plan your sales better" />
        <FeatureItem icon={<LineChart className="w-5 h-5" />} title="Market Insights" desc="Stay ahead of market trends" />
        <FeatureItem icon={<Zap className="w-5 h-5" />} title="Smart Decisions" desc="AI-powered recommendations" />
        <FeatureItem icon={<Search className="w-5 h-5" />} title="Easy to Use" desc="Simple & user-friendly" />
      </div>

    </div>
  );
}

function FactorCard({ icon, title, status, desc }: { icon: React.ReactNode, title: string, status: string, desc: string }) {
  return (
    <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0 pb-4 sm:pb-0 pr-0 sm:pr-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <span className="font-bold text-gray-900 text-sm leading-tight">{title}</span>
      </div>
      <span className="font-bold text-gray-900 text-sm mb-1">{status}</span>
      <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
    </div>
  );
}

function InsightCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
        <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-3 relative z-10">
      <div className="text-[#B8F24A]">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-tight mb-0.5">{title}</span>
        <span className="text-white/60 text-[11px] leading-tight">{desc}</span>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
