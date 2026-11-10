import { CheckCircle2, ArrowRight, Sprout, TrendingUp, Clock, Droplet } from 'lucide-react';

export function PredictionResultsCard() {
  return (
    <div className="bg-[#f4fbe9] rounded-3xl p-8 border border-[#e2f3d8] h-full flex flex-col relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">AI Prediction Results</h2>
            <p className="text-gray-500 text-sm">Based on your input data analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
          <span className="text-gray-500 text-sm font-medium">Prediction Confidence</span>
          <div className="w-8 h-8 rounded-full bg-white border-2 border-brand text-brand font-bold text-xs flex items-center justify-center">
            98%
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 relative z-10 flex flex-col xl:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <span className="text-gray-500 text-sm font-medium mb-1 block">Recommended Crop</span>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-3xl font-bold text-brand">Paddy (Rice)</h3>
            <span className="px-3 py-1 bg-[#f4fbe9] text-brand border border-[#e2f3d8] rounded-lg text-xs font-bold">
              Kharif Season
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            This crop is highly suitable for your soil and environmental conditions.
          </p>
        </div>
        <div className="w-full xl:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
          <img src="/images/crop_prediction.png" alt="Paddy Field" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative z-10">
        <StatCard icon={<Sprout className="w-5 h-5" />} title="Expected Yield" value="52.3" unit="Quintal/Ha" />
        <StatCard icon={<TrendingUp className="w-5 h-5" />} title="Estimated Profit" value="₹ 74,850" unit="Per Ha" />
        <StatCard icon={<Clock className="w-5 h-5" />} title="Growth Duration" value="120 - 135" unit="Days" />
        <StatCard icon={<Droplet className="w-5 h-5" />} title="Water Requirement" value="1200 - 1500" unit="mm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Why This Crop?</h4>
          <ul className="space-y-3">
            <ListItem text="Soil pH is ideal for Paddy cultivation" />
            <ListItem text="NPK levels are well balanced for this crop" />
            <ListItem text="Rainfall and temperature are optimal" />
            <ListItem text="High market demand and good profitability" />
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Recommended Practices</h4>
          <ul className="space-y-3">
            <ListItem text="Use organic fertilizers for better yield" />
            <ListItem text="Maintain 2-3 cm water level in field" />
            <ListItem text="Sow certified seeds for best results" />
            <ListItem text="Regular weed and pest management" />
          </ul>
        </div>
      </div>

      <div className="mt-auto relative z-10 flex justify-center border-t border-gray-200/60 pt-6">
        <button className="flex items-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-sm">
          Want more crop options? <span className="underline">View Alternative Crops</span> <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

function StatCard({ icon, title, value, unit }: { icon: React.ReactNode, title: string, value: string, unit: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col">
      <div className="w-8 h-8 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-gray-500 text-xs font-semibold mb-1">{title}</span>
      <span className="text-gray-900 font-bold text-lg leading-tight">{value}</span>
      <span className="text-gray-400 text-[11px] font-medium">{unit}</span>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
      <span className="text-gray-600 text-sm">{text}</span>
    </li>
  );
}
