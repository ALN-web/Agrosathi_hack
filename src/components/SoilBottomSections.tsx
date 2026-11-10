import { Download, Share2, Sprout, TrendingUp, CircleDollarSign, Leaf, History, Users, BarChart3, LineChart, PieChart } from 'lucide-react';

export function SoilBottomSections() {
  return (
    <div className="flex flex-col gap-8 w-full pb-16">
      
      {/* 4 Column Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Nutrient Status Bar Chart */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-bold text-gray-900">Nutrient Status Chart</h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-[10px] font-semibold text-gray-600">
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-sm"></div> Low</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded-sm"></div> Medium</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#65b23d] rounded-sm"></div> High</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm"></div> Optimal</div>
          </div>

          <div className="relative flex-1 min-h-[150px] w-full mt-2">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
              <line x1="0" y1="30" x2="400" y2="30" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="60" x2="400" y2="60" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="90" x2="400" y2="90" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#f3f4f6" strokeWidth="1" />
              
              <rect x="20" y="100" width="16" height="20" fill="#ef4444" rx="2" /> {/* P Low */}
              <rect x="60" y="40" width="16" height="80" fill="#10b981" rx="2" /> {/* K Optimal */}
              <rect x="100" y="70" width="16" height="50" fill="#f97316" rx="2" /> {/* S Medium */}
              <rect x="140" y="60" width="16" height="60" fill="#65b23d" rx="2" /> {/* Zn High */}
              <rect x="180" y="40" width="16" height="80" fill="#10b981" rx="2" /> {/* Fe Optimal */}
              <rect x="220" y="50" width="16" height="70" fill="#65b23d" rx="2" /> {/* Cu High */}
              <rect x="260" y="90" width="16" height="30" fill="#f97316" rx="2" /> {/* B Medium */}
              <rect x="300" y="30" width="16" height="90" fill="#10b981" rx="2" /> {/* Ca Optimal */}
              <rect x="340" y="45" width="16" height="75" fill="#10b981" rx="2" /> {/* Mg Optimal */}
              <rect x="380" y="65" width="16" height="55" fill="#f97316" rx="2" /> {/* OC Medium */}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-500 font-bold px-5">
              <span>P</span>
              <span>K</span>
              <span>S</span>
              <span>Zn</span>
              <span>Fe</span>
              <span>Cu</span>
              <span>B</span>
              <span>Ca</span>
              <span>Mg</span>
              <span>OC</span>
            </div>
          </div>
        </div>

        {/* Soil Parameter Trends Line Chart */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <LineChart className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-bold text-gray-900">Soil Parameter Trends</h3>
            </div>
            <span className="text-xs font-semibold text-gray-400">Last 12 Months</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-4 text-[10px] font-semibold text-gray-600">
            <div className="flex items-center gap-1"><div className="w-3 h-1 bg-[#65b23d] rounded-full"></div> pH</div>
            <div className="flex items-center gap-1"><div className="w-3 h-1 bg-blue-500 rounded-full"></div> Organic Carbon</div>
            <div className="flex items-center gap-1"><div className="w-3 h-1 bg-purple-500 rounded-full"></div> Nitrogen</div>
            <div className="flex items-center gap-1"><div className="w-3 h-1 bg-orange-500 rounded-full"></div> Phosphorus</div>
            <div className="flex items-center gap-1"><div className="w-3 h-1 bg-teal-500 rounded-full"></div> Potassium</div>
          </div>

          <div className="relative flex-1 min-h-[150px] w-full mt-2">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 150" preserveAspectRatio="none">
              <line x1="0" y1="30" x2="600" y2="30" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="75" x2="600" y2="75" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="0" y1="120" x2="600" y2="120" stroke="#f3f4f6" strokeWidth="1" />
              
              <path d="M 50 60 Q 150 40 250 60 T 450 50 T 550 60" fill="none" stroke="#65b23d" strokeWidth="2" strokeLinecap="round" />
              <path d="M 50 90 Q 150 110 250 80 T 450 90 T 550 70" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M 50 40 Q 150 20 250 30 T 450 40 T 550 20" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[11px] text-gray-500 font-semibold px-12">
              <span>Nov 2023</span>
              <span>Jan 2024</span>
              <span>Mar 2024</span>
              <span>May 2024</span>
            </div>
          </div>
        </div>

        {/* Soil Texture Analysis */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 w-full">
            <PieChart className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-bold text-gray-900">Soil Texture Analysis</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-2 flex-1">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 32 32" className="w-full h-full transform -rotate-90 rounded-full">
                <circle r="16" cx="16" cy="16" fill="#3b82f6" strokeDasharray="100 0" /> {/* Clay 40% base */}
                <circle r="16" cx="16" cy="16" fill="#65b23d" strokeDasharray="60 100" /> {/* Sand 32% (40+32=72) */}
                <circle r="16" cx="16" cy="16" fill="#f97316" strokeDasharray="28 100" strokeDashoffset="-60" /> {/* Silt 28% */}
              </svg>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <div className="w-3 h-3 bg-[#65b23d] rounded-sm"></div> Sand
                </div>
                <span className="text-sm font-bold text-gray-900">32%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <div className="w-3 h-3 bg-[#f97316] rounded-sm"></div> Silt
                </div>
                <span className="text-sm font-bold text-gray-900">28%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <div className="w-3 h-3 bg-[#3b82f6] rounded-sm"></div> Clay
                </div>
                <span className="text-sm font-bold text-gray-900">40%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm font-semibold text-gray-600">
            Texture Type: <span className="text-brand font-bold">Loamy</span>
          </div>
        </div>

      </div>

      {/* Report & Benefits Row */}
      <div className="flex flex-col xl:flex-row gap-6 mt-2">
        
        {/* Report Card */}
        <div className="w-full xl:w-[350px] bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Download & Share Report</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            Generate a complete AI Soil Health Report including nutrient analysis, fertilizer recommendations, and soil improvement strategies.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <button className="w-full bg-[#1a5f3a] hover:bg-[#134E36] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Report
            </button>
            <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl transition-all border border-gray-200 flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Share Report
            </button>
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="flex-1 bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          <BenefitItem icon={<Sprout className="w-6 h-6 text-brand" />} title="Improve Soil Health" desc="Receive personalized improvement recommendations." />
          <BenefitItem icon={<TrendingUp className="w-6 h-6 text-brand" />} title="Increase Crop Yield" desc="Balance nutrients for higher productivity." />
          <BenefitItem icon={<CircleDollarSign className="w-6 h-6 text-brand" />} title="Save Fertilizer Costs" desc="Apply only the required nutrients." />
          <BenefitItem icon={<Leaf className="w-6 h-6 text-brand" />} title="Sustainable Farming" desc="Improve long-term soil fertility." />
          <BenefitItem icon={<History className="w-6 h-6 text-brand" />} title="Historical Tracking" desc="Monitor soil health over time." />
          <BenefitItem icon={<Users className="w-6 h-6 text-brand" />} title="Expert Support" desc="Recommendations validated by experts." />
        </div>

      </div>

    </div>
  );
}

function BenefitItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-[#f4fbe9] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col mt-0.5">
        <span className="font-bold text-gray-900 text-sm leading-tight mb-1">{title}</span>
        <span className="text-gray-500 text-xs leading-relaxed">{desc}</span>
      </div>
    </div>
  );
}
