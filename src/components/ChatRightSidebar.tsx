import { CloudSun, Droplet, CloudRain, Wind, MapPin, Lightbulb, ArrowRight } from 'lucide-react';

export function ChatRightSidebar() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Current Weather */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-[15px] font-bold text-gray-900 mb-4">Current Weather</h3>
        <div className="flex items-center gap-1.5 text-gray-500 mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-bold">Mandya, Karnataka</span>
        </div>
        
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <CloudSun className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-gray-900">28°<span className="text-xl text-gray-400">C</span></span>
              <span className="text-[11px] font-bold text-gray-500">Partly Cloudy</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 border-l border-gray-100 pl-4">
            <MiniWeather icon={<Droplet className="w-3 h-3 text-blue-400" />} label="Humidity" value="68%" />
            <MiniWeather icon={<CloudRain className="w-3 h-3 text-blue-500" />} label="Rainfall" value="15 mm" />
            <MiniWeather icon={<Wind className="w-3 h-3 text-cyan-500" />} label="Wind Speed" value="14 km/h" />
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-xs pt-4 border-t border-gray-100">
          View Full Forecast <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Today's Tip */}
      <div className="bg-[#f4fbe9] rounded-3xl p-6 border border-[#e2f3d8] shadow-sm flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-brand" />
          <h3 className="text-[15px] font-bold text-gray-900">Today's Farming Tip</h3>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed font-medium mb-6 flex-1">
          Water your crops early in the morning or late in the evening to reduce evaporation and save water.
        </p>

        <button className="w-full flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-xs">
          More Farming Tips <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Recommended for You */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex-1 flex flex-col">
        <h3 className="text-[15px] font-bold text-gray-900 mb-6">Recommended for You</h3>
        
        <div className="flex flex-col gap-4 mb-6 flex-1">
          <CropRecommendation title="Paddy (Rice)" match="92% Match" matchColor="bg-brand text-white" desc="High Yield • Suitable" img="🌽" isEmoji />
          <CropRecommendation title="Maize" match="85% Match" matchColor="bg-brand text-white" desc="Good Profit • Moderate Water" img="🌽" isEmoji />
          <CropRecommendation title="Green Gram" match="78% Match" matchColor="bg-brand text-white" desc="Improves Soil • Low Cost" img="🫛" isEmoji />
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-xs pt-4 border-t border-gray-100 mt-auto">
          View More Recommendations <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}

function MiniWeather({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div className="flex flex-col">
        <span className="text-[9px] font-bold text-gray-500 uppercase">{label}</span>
        <span className="text-[11px] font-bold text-gray-900 leading-none">{value}</span>
      </div>
    </div>
  );
}

function CropRecommendation({ title, match, matchColor, desc, img, isEmoji }: { title: string, match: string, matchColor: string, desc: string, img: string, isEmoji?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-xl shadow-sm overflow-hidden flex-shrink-0">
          {isEmoji ? <span>{title === 'Paddy (Rice)' ? '🌾' : img}</span> : <img src={img} alt={title} className="w-full h-full object-cover" />}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-sm leading-tight mb-0.5">{title}</span>
          <span className="text-gray-500 text-[10px] font-medium leading-tight">{desc}</span>
        </div>
      </div>
      <div className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider ${matchColor}`}>
        {match}
      </div>
    </div>
  );
}
