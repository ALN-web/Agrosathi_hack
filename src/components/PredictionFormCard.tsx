import { MapPin, Calendar, Layers, FlaskConical, Leaf, Activity, Thermometer, CloudRain, CloudDrizzle, Map, Droplet, Sparkles } from 'lucide-react';

export function PredictionFormCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm">
          1
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Farm & Soil Details</h2>
          <p className="text-gray-500 text-sm">Fill in the details below to get accurate prediction</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-8 flex-1">
        <InputField icon={<MapPin className="w-5 h-5" />} label="Location" placeholder="Select location" isSelect />
        <InputField icon={<Calendar className="w-5 h-5" />} label="Season" placeholder="Select season" isSelect />
        <InputField icon={<Layers className="w-5 h-5" />} label="Soil Type" placeholder="Select soil type" isSelect />
        
        <InputField icon={<FlaskConical className="w-5 h-5 text-brand" />} label="pH Level" placeholder="Enter pH value" />
        <InputField icon={<Leaf className="w-5 h-5 text-brand" />} label="Nitrogen (N)" placeholder="kg/ha" />
        <InputField icon={<FlaskConical className="w-5 h-5 text-brand" />} label="Phosphorus (P)" placeholder="kg/ha" />
        
        <InputField icon={<Activity className="w-5 h-5 text-brand" />} label="Potassium (K)" placeholder="kg/ha" />
        <InputField icon={<Thermometer className="w-5 h-5 text-orange-500" />} label="Temperature" placeholder="°C" />
        <InputField icon={<CloudRain className="w-5 h-5 text-blue-400" />} label="Humidity" placeholder="%" />
        
        <InputField icon={<CloudDrizzle className="w-5 h-5 text-blue-500" />} label="Rainfall" placeholder="mm" />
        <InputField icon={<Map className="w-5 h-5 text-brand" />} label="Farm Size" placeholder="Select size" isSelect />
        <InputField icon={<Droplet className="w-5 h-5 text-blue-500" />} label="Irrigation Type" placeholder="Select type" isSelect />
      </div>

      <button className="w-full bg-gradient-to-r from-[#1a5f3a] to-[#24814f] hover:from-[#134E36] hover:to-[#1a5f3a] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
        <Sparkles className="w-5 h-5" /> Predict Best Crop
      </button>
      
      <p className="text-center text-gray-500 text-sm font-medium">
        Our AI will analyze 15+ parameters to predict the best crop
      </p>
    </div>
  );
}

function InputField({ icon, label, placeholder, isSelect = false }: { icon: React.ReactNode, label: string, placeholder: string, isSelect?: boolean }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-gray-50 hover:border-gray-300 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col w-full">
        <span className="text-xs font-bold text-gray-900 mb-0.5">{label}</span>
        {isSelect ? (
          <select className="bg-transparent text-sm text-gray-500 focus:outline-none w-full cursor-pointer appearance-none">
            <option value="">{placeholder}</option>
          </select>
        ) : (
          <input 
            type="text" 
            placeholder={placeholder}
            className="bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none w-full"
          />
        )}
      </div>
      {isSelect && (
        <div className="text-gray-400 pr-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      )}
    </div>
  );
}
