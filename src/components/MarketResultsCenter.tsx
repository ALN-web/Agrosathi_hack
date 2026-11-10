import { TrendingUp, Info, ArrowUpRight } from 'lucide-react';

export function MarketResultsCenter() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Top Prediction Block */}
      <div className="bg-[#f4fbe9] rounded-3xl p-6 lg:p-8 border border-[#e2f3d8] flex flex-col relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">AI Predicted Market Price</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-4 relative z-10">
          
          <div>
            <span className="text-gray-500 text-sm font-medium mb-1 block">Predicted Price (Next 30 Days)</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand">₹ 2,350</span>
              <span className="text-brand font-medium text-sm">/ Quintal</span>
            </div>
          </div>

          <div>
            <span className="text-gray-500 text-sm font-medium mb-1 block">Price Trend</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e2f3d8] text-brand border border-[#c4ebaf] rounded-lg text-sm font-bold shadow-sm">
              Increasing <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div>
            <span className="text-gray-500 text-sm font-medium mb-1 block">Expected Change</span>
            <div className="flex items-center gap-2">
              <span className="text-brand font-bold text-lg">+ ₹ 180 (8.3%)</span>
              <TrendingUp className="w-5 h-5 text-brand" />
            </div>
          </div>

          <div>
            <span className="text-gray-500 text-sm font-medium mb-1 block">Prediction Confidence</span>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-brand"
                  strokeDasharray="95, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <span className="absolute text-[11px] font-bold text-brand">Demo</span>
            </div>
          </div>

        </div>
      </div>

      {/* Chart Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="text-lg font-bold text-gray-900">Price Trend Forecast <span className="text-gray-500 font-normal">(Next 30 Days)</span></h3>
          <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
            <FilterBtn label="7D" />
            <FilterBtn label="15D" />
            <FilterBtn label="30D" active />
            <FilterBtn label="60D" />
          </div>
        </div>

        <div className="relative flex-1 min-h-[250px] w-full mt-4">
          <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 font-medium">
            <div className="flex items-center border-b border-gray-100 pb-1">2,600</div>
            <div className="flex items-center border-b border-gray-100 pb-1">2,400</div>
            <div className="flex items-center border-b border-gray-100 pb-1">2,200</div>
            <div className="flex items-center border-b border-gray-100 pb-1">2,000</div>
            <div className="flex items-center border-b border-gray-100 pb-1">1,800</div>
          </div>
          
          {/* Custom SVG Line Chart */}
          <svg className="absolute inset-0 w-full h-[calc(100%-24px)] mt-2" viewBox="0 0 500 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#65b23d" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#65b23d" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 150 L 50 130 L 100 140 L 150 110 L 200 130 L 250 100 L 300 90 L 350 110 L 400 100 L 450 70 L 500 50 L 500 200 L 0 200 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M 0 150 L 50 130 L 100 140 L 150 110 L 200 130 L 250 100 L 300 90 L 350 110 L 400 100 L 450 70 L 500 50"
              fill="none"
              stroke="#65b23d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="130" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="150" cy="110" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="250" cy="100" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="350" cy="110" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="450" cy="70" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="500" cy="50" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
          </svg>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 font-medium px-4">
            <span>May 17</span>
            <span>May 22</span>
            <span>May 27</span>
            <span>Jun 01</span>
            <span>Jun 06</span>
            <span>Jun 11</span>
            <span>Jun 16</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-2 px-4 rounded-xl">
          <Info className="w-3.5 h-3.5 text-brand" />
          <span>Prices are predicted based on historical data, current market trends, demand-supply & other factors.</span>
        </div>
      </div>

    </div>
  );
}

function FilterBtn({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${active ? 'bg-[#b8f24a] text-[#0a1f12] shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'}`}>
      {label}
    </button>
  );
}
