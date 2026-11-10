import { ChevronDown, Info, Droplets, Wind, CloudRain, CheckCircle2, ArrowRight } from 'lucide-react';

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Market Price Trend (Line Chart pseudo-representation) */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-gray-900 flex items-center gap-1">Market Price Trend <Info className="w-3 h-3 text-gray-400" /></h3>
            <p className="text-gray-500 text-[11px]">Sugarcane (₹/Quintal)</p>
          </div>
          <button className="text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1">
            7 Days <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">₹ 3,350 <span className="text-[13px] font-normal text-gray-500">/ Quintal</span></h2>
          <p className="text-[#059669] text-xs font-medium flex items-center gap-1">↑ 5.6% from last week</p>
        </div>
        <div className="flex-1 relative w-full h-32 mt-auto">
          {/* Custom SVG Line Chart */}
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="0" x2="100" y2="0" stroke="#f3f4f6" strokeWidth="0.5" />
            <line x1="0" y1="10" x2="100" y2="10" stroke="#f3f4f6" strokeWidth="0.5" />
            <line x1="0" y1="20" x2="100" y2="20" stroke="#f3f4f6" strokeWidth="0.5" />
            <line x1="0" y1="30" x2="100" y2="30" stroke="#f3f4f6" strokeWidth="0.5" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#f3f4f6" strokeWidth="0.5" />
            
            {/* Chart Area Gradient */}
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#B8F24A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#B8F24A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 30 L16 20 L33 18 L50 22 L66 12 L83 10 L100 5 L100 40 L0 40 Z" fill="url(#chartGradient)" />
            
            {/* Line */}
            <path d="M0 30 L16 20 L33 18 L50 22 L66 12 L83 10 L100 5" fill="none" stroke="#8ecb45" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
            
            {/* Data Points */}
            <circle cx="16" cy="20" r="1.5" fill="white" stroke="#8ecb45" strokeWidth="0.5" />
            <circle cx="33" cy="18" r="1.5" fill="white" stroke="#8ecb45" strokeWidth="0.5" />
            <circle cx="50" cy="22" r="1.5" fill="white" stroke="#8ecb45" strokeWidth="0.5" />
            <circle cx="66" cy="12" r="1.5" fill="white" stroke="#8ecb45" strokeWidth="0.5" />
            <circle cx="83" cy="10" r="1.5" fill="white" stroke="#8ecb45" strokeWidth="0.5" />
            <circle cx="100" cy="5" r="1.5" fill="#0a1f12" stroke="#B8F24A" strokeWidth="1" />
          </svg>
          <div className="absolute -top-3 right-0 bg-[#0a1f12] text-[#B8F24A] text-[10px] font-bold px-2 py-0.5 rounded shadow-lg">
            ₹ 3,350
          </div>
          <div className="flex justify-between mt-2 text-[9px] text-gray-400">
            <span>May 12</span>
            <span>May 13</span>
            <span>May 14</span>
            <span>May 15</span>
            <span>May 16</span>
            <span>May 17</span>
            <span>May 18</span>
          </div>
        </div>
      </div>

      {/* Weather Forecast */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-bold text-gray-900">Weather Forecast</h3>
            <p className="text-gray-500 text-[11px]">Pune, Maharashtra</p>
          </div>
          <button className="text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1">
            7 Days <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-5xl">⛅</span>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-none mb-1">28°C</h2>
              <p className="text-sm text-gray-500 font-medium">Partly Cloudy</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-6 text-xs text-gray-600">
              <span className="flex items-center gap-1"><Droplets className="w-3 h-3 text-blue-400" /> Humidity</span>
              <span className="font-bold text-gray-900">65%</span>
            </div>
            <div className="flex justify-between gap-6 text-xs text-gray-600">
              <span className="flex items-center gap-1"><Wind className="w-3 h-3 text-gray-400" /> Wind</span>
              <span className="font-bold text-gray-900">12 km/h</span>
            </div>
            <div className="flex justify-between gap-6 text-xs text-gray-600">
              <span className="flex items-center gap-1"><CloudRain className="w-3 h-3 text-cyan-500" /> Rainfall</span>
              <span className="font-bold text-gray-900">0.0 mm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mt-auto">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-2">
              <p className="text-[10px] font-medium text-gray-500">{day}</p>
              <span className="text-lg">{i === 1 || i === 4 ? '🌧️' : i === 2 || i === 3 ? '☁️' : '⛅'}</span>
              <p className="text-[9px] font-bold text-gray-700">28°<span className="text-gray-400">/20°</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-gradient-to-br from-[#0a1f12] to-[#134E36] rounded-2xl p-6 border border-[#1a4a2e] relative overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8F24A]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        
        <h3 className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
          AI Recommendation <span>✨</span>
        </h3>
        
        <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
          <span className="text-[#B8F24A]">Sugarcane</span> is the best crop for your farm this season!
        </h2>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2 text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#B8F24A] mt-0.5 flex-shrink-0" />
            High suitability for your soil & climate
          </li>
          <li className="flex items-start gap-2 text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#B8F24A] mt-0.5 flex-shrink-0" />
            Good market demand
          </li>
          <li className="flex items-start gap-2 text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#B8F24A] mt-0.5 flex-shrink-0" />
            Higher profit expectation
          </li>
          <li className="flex items-start gap-2 text-sm text-white/90">
            <CheckCircle2 className="w-4 h-4 text-[#B8F24A] mt-0.5 flex-shrink-0" />
            Low disease risk
          </li>
        </ul>
        
        <button className="mt-auto w-full bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
          View Full Recommendation <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
