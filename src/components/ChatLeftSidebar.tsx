import { Sprout, Bug, FlaskConical, CloudSun, LineChart, Landmark, Droplet, Layers, Upload } from 'lucide-react';

export function ChatLeftSidebar() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Features Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Chatbot Features</h3>
        
        <div className="flex flex-col gap-4">
          <FeatureItem icon={<Sprout className="w-5 h-5 text-emerald-500" />} title="Crop Advice" desc="Get best crop recommendations" />
          <FeatureItem icon={<Bug className="w-5 h-5 text-emerald-500" />} title="Disease Diagnosis" desc="Identify plant diseases & solutions" />
          <FeatureItem icon={<FlaskConical className="w-5 h-5 text-emerald-500" />} title="Fertilizer Guide" desc="Get fertilizer recommendations" />
          <FeatureItem icon={<CloudSun className="w-5 h-5 text-emerald-500" />} title="Weather Updates" desc="Live weather & forecasts" />
          <FeatureItem icon={<LineChart className="w-5 h-5 text-emerald-500" />} title="Market Prices" desc="Check market rates & trends" />
          <FeatureItem icon={<Landmark className="w-5 h-5 text-emerald-500" />} title="Government Schemes" desc="Find relevant schemes" />
          <FeatureItem icon={<Droplet className="w-5 h-5 text-emerald-500" />} title="Irrigation Advice" desc="Smart irrigation recommendations" />
          <FeatureItem icon={<Layers className="w-5 h-5 text-emerald-500" />} title="Soil Health" desc="Soil analysis & improvement tips" />
        </div>
      </div>

      {/* Quick Actions Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <ActionBtn label="Crop Recommendation" />
          <ActionBtn label="Disease Check" />
          <ActionBtn label="Fertilizer Guide" />
          <ActionBtn label="Weather Update" />
        </div>

        <button className="w-full bg-[#1a5f3a] hover:bg-[#134E36] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-auto">
          <Upload className="w-4 h-4" /> Upload Image for Diagnosis
        </button>
      </div>

    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col mt-0.5">
        <span className="font-bold text-gray-900 text-[13px] leading-tight mb-0.5">{title}</span>
        <span className="text-gray-500 text-[11px] font-medium leading-tight">{desc}</span>
      </div>
    </div>
  );
}

function ActionBtn({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center text-center p-3 rounded-xl border border-gray-200 bg-gray-50 hover:border-brand/30 hover:bg-[#f4fbe9] hover:text-brand transition-colors">
      <span className="text-[11px] font-bold text-gray-600 hover:text-brand">{label}</span>
    </button>
  );
}
