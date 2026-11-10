import { Info, ArrowRight, Sprout, TestTube, CloudRain, TrendingUp, Calendar } from 'lucide-react';

export function DashboardBottom() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Soil Nutrient Status */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <h3 className="font-bold text-gray-900 flex items-center gap-1 mb-6">Soil Nutrient Status <Info className="w-3 h-3 text-gray-400" /></h3>
        
        <div className="grid grid-cols-4 gap-2 mb-8">
          <NutrientCircle label="Nitrogen" value={78} status="Good" color="text-green-500" />
          <NutrientCircle label="Phosphorus" value={62} status="Medium" color="text-orange-400" />
          <NutrientCircle label="Potassium" value={80} status="Good" color="text-green-500" />
          <NutrientCircle label="Organic Carbon" value={56} status="Medium" color="text-orange-400" />
        </div>

        <div className="mt-auto bg-[#f4fbe9] rounded-xl p-4 flex items-start gap-4 border border-[#e2f3d8]">
          <div className="w-8 h-8 rounded-lg bg-[#e2f5d6] flex items-center justify-center flex-shrink-0 text-[#0a1f12]">
            <TestTube className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Recommendation</p>
            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Apply organic manure and maintain NPK balance for better yield.
            </p>
          </div>
          <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:text-brand flex-shrink-0">
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <h3 className="font-bold text-gray-900 flex items-center gap-1 mb-6">Recent Activity <Info className="w-3 h-3 text-gray-400" /></h3>
        
        <div className="flex flex-col gap-6 flex-1">
          <ActivityItem 
            icon={<Sprout className="w-4 h-4 text-green-600" />} 
            bg="bg-green-100"
            title="Crop prediction completed" 
            desc="Sugarcane • 92% Suitable" 
            time="2 hours ago" 
          />
          <ActivityItem 
            icon={<TestTube className="w-4 h-4 text-emerald-600" />} 
            bg="bg-emerald-100"
            title="Soil analysis completed" 
            desc="Soil health score: 78%" 
            time="5 hours ago" 
          />
          <ActivityItem 
            icon={<CloudRain className="w-4 h-4 text-blue-500" />} 
            bg="bg-blue-100"
            title="Weather alert" 
            desc="Heavy rainfall expected tomorrow" 
            time="1 day ago" 
          />
          <ActivityItem 
            icon={<TrendingUp className="w-4 h-4 text-orange-500" />} 
            bg="bg-orange-100"
            title="Market update" 
            desc="Sugarcane price increased by 5.6%" 
            time="1 day ago" 
          />
        </div>

        <button className="mt-6 w-full py-3 text-xs font-bold text-gray-600 hover:text-brand border-t border-gray-100 flex items-center justify-center gap-2 transition-colors">
          View All Activity <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Farm Overview */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900 flex items-center gap-1">Farm Overview <Info className="w-3 h-3 text-gray-400" /></h3>
          <button className="text-[10px] font-bold text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg">View All Farms</button>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div className="w-[120px] h-[120px] rounded-xl overflow-hidden flex-shrink-0">
            <img src="/images/hero_drone.png" alt="Farm Overview" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between py-1 flex-1">
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-gray-500">Total Farms</span>
              <span className="text-xs font-bold text-gray-900">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-gray-500">Total Area</span>
              <span className="text-xs font-bold text-gray-900">12.5 Acres</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-gray-500">Active Crops</span>
              <span className="text-xs font-bold text-gray-900">Sugarcane, Wheat</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-gray-500">Member Since</span>
              <span className="text-xs font-bold text-gray-900">Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="mt-auto bg-[#f4fbe9] rounded-xl p-4 flex items-center justify-between border border-[#e2f3d8]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-green-600">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-900">Upcoming Task</p>
              <p className="text-[10px] text-gray-500">Irrigation scheduled for tomorrow</p>
            </div>
          </div>
          <button className="text-[10px] font-bold text-[#0a1f12] bg-white border border-[#e2f3d8] px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
            View Schedule
          </button>
        </div>
      </div>

    </div>
  );
}

function NutrientCircle({ label, value, status, color }: { label: string, value: number, status: string, color: string }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[10px] font-medium text-gray-600 mb-2 h-3">{label}</p>
      <div className="relative w-14 h-14 mb-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path className="text-gray-100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className={`stroke-current ${color}`} strokeDasharray={`${value}, 100`} strokeWidth="4" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[13px] font-bold text-gray-900">{value}%</span>
        </div>
      </div>
      <p className={`text-[10px] font-bold ${color}`}>{status}</p>
    </div>
  );
}

function ActivityItem({ icon, bg, title, desc, time }: { icon: React.ReactNode, bg: string, title: string, desc: string, time: string }) {
  return (
    <div className="flex gap-3">
      <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-1">{title}</h4>
        <p className="text-[11px] text-gray-500">{desc}</p>
      </div>
      <span className="text-[10px] text-gray-400 whitespace-nowrap">{time}</span>
    </div>
  );
}
