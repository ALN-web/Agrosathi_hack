import { FlaskConical, FileText, XCircle } from 'lucide-react';

export function SoilFormCard() {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm h-full flex flex-col border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
          1
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Select & Submit Soil Sample</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        
        <SelectGroup label="Select Farm" placeholder="Green Valley Farm" />
        <InputGroup label="Field/Plot Name" placeholder="North Field - Plot 3" />
        <SelectGroup label="Crop Planned" placeholder="Paddy (Rice)" />
        
        <div className="grid grid-cols-2 gap-4">
          <SelectGroup label="Sampling Depth" placeholder="0 - 15 cm" />
          <InputGroup label="Sample Collection Date" placeholder="16 May 2024" />
        </div>

        <SelectGroup label="Soil Texture (Optional)" placeholder="Loamy" />

        {/* Upload Area */}
        <div className="flex flex-col gap-1.5 mt-2">
          <label className="text-sm font-semibold text-gray-700">Upload Soil Test Report</label>
          <div className="relative flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">soil_report.pdf</span>
                <span className="text-[10px] font-medium text-gray-400">PDF • 1.2 MB</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      <div className="mt-8">
        <button className="w-full bg-[#1a5f3a] hover:bg-[#134E36] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
          <FlaskConical className="w-5 h-5" /> Analyze Soil
        </button>
        <p className="text-center text-gray-500 text-xs leading-relaxed max-w-[280px] mx-auto">
          Our AI model will analyze 13+ soil parameters and provide complete insights.
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
        <select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 font-medium text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors cursor-pointer">
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

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input 
        type="text" 
        value={placeholder}
        readOnly
        className="w-full bg-white border border-gray-200 text-gray-900 font-medium text-sm rounded-xl px-4 py-3 focus:outline-none"
      />
    </div>
  );
}
