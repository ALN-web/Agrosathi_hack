import { FileText } from 'lucide-react';

export function PredictionAlternatives() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      
      {/* Left: Alternative Crops */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Alternative Crop Suggestions</h3>
            <p className="text-gray-500 text-sm">Other crops that can also grow well in your field</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            Based on Suitability Score 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <AltCropCard name="Maize" score={82} yieldVal="48.7 Quintal/Ha" profit="₹ 62,300/Ha" img="/images/service_crop.png" />
          <AltCropCard name="Groundnut" score={78} yieldVal="32.5 Quintal/Ha" profit="₹ 55,200/Ha" img="/images/service_soil.png" />
          <AltCropCard name="Soybean" score={75} yieldVal="28.9 Quintal/Ha" profit="₹ 48,900/Ha" img="/images/crop_prediction.png" />
          <AltCropCard name="Cotton" score={72} yieldVal="18.4 Quintal/Ha" profit="₹ 45,100/Ha" img="/images/service_drone.png" />
        </div>
      </div>

      {/* Right: Report Card */}
      <div className="w-full lg:w-[320px] bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center justify-center">
        <div className="w-14 h-14 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center mb-4">
          <FileText className="w-7 h-7" />
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">View Detailed Analysis</h4>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          Get comprehensive analysis report with charts and recommendations
        </p>
        <button className="w-full bg-[#65b23d] hover:bg-[#589c35] text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md">
          Generate Report
        </button>
      </div>

    </div>
  );
}

function AltCropCard({ name, score, yieldVal, profit, img }: { name: string, score: number, yieldVal: string, profit: string, img: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-gray-100 flex gap-4 items-center">
      <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-gray-900 text-sm truncate">{name}</h4>
          <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
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
                strokeDasharray={`${score}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <span className="absolute text-[9px] font-bold text-gray-900">{score}%</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Suitability Score</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Expected Yield</span>
            <span className="font-bold text-gray-900 truncate pl-2">{yieldVal}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Profit</span>
            <span className="font-bold text-gray-900 truncate pl-2">{profit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
