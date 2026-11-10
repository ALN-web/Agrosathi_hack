import { ArrowRight, IndianRupee, TrendingUp, TrendingDown, PauseCircle } from 'lucide-react';

export function MarketSidebar() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Trends Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Market Price Trends</h3>
        
        <div className="flex flex-col gap-5">
          <TrendRow 
            icon={<IndianRupee className="w-4 h-4" />} 
            label="Current Market Price" 
            value="₹ 2,170" 
          />
          <TrendRow 
            icon={<TrendingUp className="w-4 h-4" />} 
            label="Highest (Last 30 Days)" 
            value="₹ 2,420" 
          />
          <TrendRow 
            icon={<TrendingDown className="w-4 h-4" />} 
            label="Lowest (Last 30 Days)" 
            value="₹ 1,980" 
          />
          <TrendRow 
            icon={<PauseCircle className="w-4 h-4" />} 
            label="Average Price (Last 30 Days)" 
            value="₹ 2,150" 
            isLast
          />
        </div>
      </div>

      {/* Comparison Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Top Markets Comparison</h3>
        
        <div className="flex flex-col gap-3 flex-1">
          <MarketRow name="Bengaluru (Yeshwanthpur)" price="₹ 2,350" highlight />
          <MarketRow name="Mysuru APMC" price="₹ 2,320" />
          <MarketRow name="Mandya APMC" price="₹ 2,280" />
          <MarketRow name="Hubballi APMC" price="₹ 2,250" />
          <MarketRow name="Davanagere APMC" price="₹ 2,210" />
        </div>

        <button className="flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-sm mt-8 pt-6 border-t border-gray-100">
          View All Markets <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

function TrendRow({ icon, label, value, isLast = false }: { icon: React.ReactNode, label: string, value: string, isLast?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${isLast ? '' : 'border-b border-gray-50 pb-5'}`}>
      <div className="w-10 h-10 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-xs font-medium mb-0.5">{label}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-gray-900 font-bold text-sm">{value}</span>
          <span className="text-gray-400 text-[10px]">/ Quintal</span>
        </div>
      </div>
    </div>
  );
}

function MarketRow({ name, price, highlight = false }: { name: string, price: string, highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl transition-colors ${highlight ? 'bg-[#f4fbe9] border border-[#e2f3d8]' : 'hover:bg-gray-50 border border-transparent'}`}>
      <span className={`text-sm ${highlight ? 'font-bold text-brand' : 'font-medium text-gray-700'}`}>{name}</span>
      <div className="flex items-baseline gap-1">
        <span className={`text-sm font-bold ${highlight ? 'text-brand' : 'text-gray-900'}`}>{price}</span>
        <span className="text-gray-400 text-[10px]">/ Quintal</span>
      </div>
    </div>
  );
}
