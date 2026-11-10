import { Sparkles } from 'lucide-react';

export function MarketFormCard() {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm h-full flex flex-col border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
          1
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Select Crop & Market Details</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        <SelectGroup label="Select Crop" placeholder="Paddy (Rice)" />
        <SelectGroup label="Select Market" placeholder="Bengaluru (Yeshwanthpur APMC)" />
        <SelectGroup label="Select Variety (Optional)" placeholder="Common" />
        <SelectGroup label="Select Grade (Optional)" placeholder="FAQ (Fair Average Quality)" />
        <SelectGroup label="Prediction Period" placeholder="Next 30 Days" />
      </div>

      <div className="mt-8">
        <button className="w-full bg-[#1a5f3a] hover:bg-[#134E36] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5" /> Predict Price
        </button>
        <p className="text-center text-gray-500 text-xs leading-relaxed max-w-[250px] mx-auto">
          Our AI analyzes multiple market factors to predict future prices.
        </p>
      </div>
    </div>
  );
}

function SelectGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors cursor-pointer">
          <option value="">{placeholder}</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
