import { Download, Plus, TrendingUp, Info } from 'lucide-react';

export function DashboardMetrics() {
  return (
    <div className="flex flex-col gap-4">
      {/* Top Actions */}
      <div className="flex items-center justify-end gap-3 w-full">
        <button className="bg-[#0a1f12] hover:bg-[#123621] text-white font-semibold text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
          <Download className="w-4 h-4" /> Download Report
        </button>
        <button className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-semibold text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add New Farm
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Metric 1: Best Crop */}
        <div className="bg-[#f4fbe9] rounded-2xl p-5 border border-[#e2f3d8] flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-[13px] font-medium mb-1">Best Crop Suggestion</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sugarcane</h3>
          </div>
          <div>
            <div className="flex justify-between items-end mb-1">
              <div>
                <p className="text-[11px] text-gray-500">Suitability Score</p>
                <p className="text-2xl font-bold text-gray-900 leading-none">92%</p>
              </div>
              <span className="text-3xl">🌾</span>
            </div>
            <div className="w-full bg-[#e2f3d8] h-1.5 rounded-full mt-2">
              <div className="bg-[#8ecb45] h-1.5 rounded-full w-[92%]"></div>
            </div>
          </div>
        </div>

        {/* Metric 2: Expected Yield */}
        <div className="bg-[#f5f9ff] rounded-2xl p-5 border border-[#e5f0ff] flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-[13px] font-medium mb-1">Expected Yield</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">85.6</h3>
            <p className="text-gray-500 text-[11px]">Tonnes / Acre</p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <p className="text-[12px] font-medium text-[#059669] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 12% <span className="text-gray-400 font-normal">from last season</span>
            </p>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Metric 3: Estimated Profit */}
        <div className="bg-[#fff9f0] rounded-2xl p-5 border border-[#ffeed4] flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-[13px] font-medium mb-1">Estimated Profit</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">₹ 1,28,000</h3>
            <p className="text-gray-500 text-[11px]">Per Acre</p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <p className="text-[12px] font-medium text-[#059669] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 18% <span className="text-gray-400 font-normal">from last season</span>
            </p>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              <span className="text-sm font-bold">₹</span>
            </div>
          </div>
        </div>

        {/* Metric 4: Soil Health Score */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
          <p className="text-gray-500 text-[13px] font-medium mb-1">Soil Health Score</p>
          <div className="flex items-center justify-between flex-1 mt-2">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">78%</h3>
              <p className="text-gray-500 text-sm">Good</p>
            </div>
            {/* Custom Circular SVG */}
            <div className="relative w-14 h-14">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-green-500" strokeDasharray="78, 100" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-green-500">
                <span className="text-lg">🌱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 5: AI Confidence */}
        <div className="bg-[#fcfaff] rounded-2xl p-5 border border-[#f3ebff] flex flex-col justify-between">
          <p className="text-gray-500 text-[13px] font-medium mb-1 flex items-center gap-1">AI Confidence <Info className="w-3 h-3 text-gray-400" /></p>
          <div className="flex items-center justify-between flex-1 mt-2">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">96%</h3>
              <p className="text-gray-500 text-[11px]">High Confidence</p>
            </div>
            {/* Custom Circular SVG */}
            <div className="relative w-14 h-14">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-purple-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-purple-500" strokeDasharray="96, 100" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-purple-500">
                <span className="text-lg">🤖</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
