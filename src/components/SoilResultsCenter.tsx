import { FlaskConical, Leaf, Activity, Beaker, Hexagon, Component, Layers, Waves, CloudRain } from 'lucide-react';

export function SoilResultsCenter() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Top Block Overview */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col xl:flex-row gap-8 relative overflow-hidden h-full">
        
        {/* Left Side: Overview & Score */}
        <div className="flex flex-col w-full xl:w-[220px] flex-shrink-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">Soil Health Overview</h2>
            </div>
          </div>
          
          <h3 className="text-sm font-bold text-gray-900 mb-6">Soil Health Score</h3>
          
          {/* Circular Score */}
          <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-brand"
                strokeDasharray="92, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-gray-900 leading-none">92</span>
              <span className="text-sm font-bold text-brand mt-1">Excellent</span>
            </div>
          </div>

          <p className="text-gray-500 text-xs leading-relaxed text-center xl:text-left">
            Your soil has high fertility with balanced nutrient availability. Minor phosphorus deficiency detected.
          </p>
        </div>

        {/* Right Side: Nutrient Status Grid */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-bold text-gray-900 mb-6 hidden xl:block">Nutrient Status</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-4 flex-1 content-start">
            <NutrientItem icon={<Activity className="w-4 h-4 text-emerald-500" />} label="pH Level" value="6.8" unit="" status="Optimal" statusColor="text-emerald-500" />
            <NutrientItem icon={<Leaf className="w-4 h-4 text-brand" />} label="Organic Carbon" value="0.82" unit="%" status="Good" statusColor="text-brand" />
            <NutrientItem icon={<FlaskConical className="w-4 h-4 text-blue-500" />} label="Nitrogen (N)" value="285" unit="kg/ha" status="High" statusColor="text-blue-500" />
            <NutrientItem icon={<FlaskConical className="w-4 h-4 text-red-500" />} label="Phosphorus (P)" value="18" unit="kg/ha" status="Low" statusColor="text-red-500" />
            
            <NutrientItem icon={<FlaskConical className="w-4 h-4 text-emerald-500" />} label="Potassium (K)" value="335" unit="kg/ha" status="Excellent" statusColor="text-emerald-500" />
            <NutrientItem icon={<Beaker className="w-4 h-4 text-yellow-600" />} label="Sulphur (S)" value="22" unit="mg/kg" status="Normal" statusColor="text-yellow-600" />
            <NutrientItem icon={<Hexagon className="w-4 h-4 text-brand" />} label="Zinc (Zn)" value="1.4" unit="mg/kg" status="Good" statusColor="text-brand" />
            <NutrientItem icon={<Component className="w-4 h-4 text-emerald-500" />} label="Iron (Fe)" value="5.8" unit="mg/kg" status="Optimal" statusColor="text-emerald-500" />
            
            <NutrientItem icon={<Component className="w-4 h-4 text-orange-500" />} label="Boron (B)" value="0.62" unit="mg/kg" status="Medium" statusColor="text-orange-500" />
            <NutrientItem icon={<Hexagon className="w-4 h-4 text-brand" />} label="Copper (Cu)" value="1.3" unit="mg/kg" status="Good" statusColor="text-brand" />
            <NutrientItem icon={<Hexagon className="w-4 h-4 text-emerald-500" />} label="Manganese (Mn)" value="13" unit="mg/kg" status="Optimal" statusColor="text-emerald-500" />
            <NutrientItem icon={<Beaker className="w-4 h-4 text-emerald-500" />} label="Calcium (Ca)" value="3400" unit="mg/kg" status="Excellent" statusColor="text-emerald-500" />
            
            <NutrientItem icon={<Beaker className="w-4 h-4 text-brand" />} label="Magnesium (Mg)" value="295" unit="mg/kg" status="Good" statusColor="text-brand" />
            <NutrientItem icon={<Waves className="w-4 h-4 text-yellow-600" />} label="Electrical Conductivity" value="0.42" unit="dS/m" status="Normal" statusColor="text-yellow-600" />
            <NutrientItem icon={<CloudRain className="w-4 h-4 text-emerald-500" />} label="Soil Moisture" value="24" unit="%" status="Optimal" statusColor="text-emerald-500" />
            <NutrientItem icon={<Layers className="w-4 h-4 text-emerald-500" />} label="Soil Texture" value="Loamy" unit="" status="Excellent" statusColor="text-emerald-500" />
          </div>
        </div>

      </div>
    </div>
  );
}

function NutrientItem({ icon, label, value, unit, status, statusColor }: { icon: React.ReactNode, label: string, value: string, unit: string, status: string, statusColor: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="text-gray-400">
          {icon}
        </div>
        <span className="text-gray-600 text-[10px] font-bold leading-tight">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-gray-900 font-bold text-sm leading-none">{value}</span>
        {unit && <span className="text-gray-900 font-bold text-[10px] leading-none">{unit}</span>}
      </div>
      <span className={`text-[10px] font-bold ${statusColor}`}>{status}</span>
    </div>
  );
}
