import { motion } from 'framer-motion';
import { Download, Share2, CheckCircle2, TrendingUp, Droplets, Sun, Bug, Activity, Shield } from 'lucide-react';

export function OutputDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#e2f3d8] mt-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-gray-100 pb-8">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0f9eb] text-brand font-semibold text-sm rounded-full mb-3">
            <CheckCircle2 className="w-4 h-4" /> Prediction Complete
          </span>
          <h2 className="text-3xl font-bold text-gray-900">AI Recommendation</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 bg-gray-50 text-gray-700 hover:text-brand hover:bg-gray-100 rounded-xl transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-brand text-brand-accent font-semibold rounded-xl hover:bg-brand-dark transition-colors">
            <Download className="w-5 h-5" />
            PDF Report
          </button>
        </div>
      </div>

      {/* Main Crop Result */}
      <div className="bg-gradient-to-br from-[#0B2E1D] to-[#134E36] rounded-[1.5rem] p-8 mb-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white/70 font-medium mb-1">Best Recommended Crop</p>
            <h3 className="text-5xl font-bold text-brand-accent mb-4">Premium Wheat</h3>
            <div className="flex items-center gap-4">
              <span className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">98.5% Confidence Score</span>
              <span className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold">₹1.2L Est. Profit / Acre</span>
            </div>
          </div>
          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center border-4 border-brand-accent/20">
            <span className="text-6xl">🌾</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <MetricCard icon={TrendingUp} label="Expected Yield" value="24-28 Quintals/Ac" color="text-blue-600" bg="bg-blue-50" />
        <MetricCard icon={Sun} label="Weather Forecast" value="Favorable (22°C)" color="text-orange-500" bg="bg-orange-50" />
        <MetricCard icon={Activity} label="Harvest Date" value="Mid-April 2027" color="text-purple-600" bg="bg-purple-50" />
        <MetricCard icon={Droplets} label="Water Req." value="450-650 mm" color="text-cyan-600" bg="bg-cyan-50" />
        <MetricCard icon={Bug} label="Disease Risk" value="Low Risk (12%)" color="text-green-600" bg="bg-green-50" />
        <MetricCard icon={Shield} label="Gov. Schemes" value="PM-Kisan Eligible" color="text-brand" bg="bg-[#f0f9eb]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🌱</span> Suitable Fertilizers
          </h4>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">Urea (Nitrogen)</span> <span className="font-semibold text-gray-900">50 kg/acre</span></li>
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">DAP (Phosphorus)</span> <span className="font-semibold text-gray-900">25 kg/acre</span></li>
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">MOP (Potassium)</span> <span className="font-semibold text-gray-900">15 kg/acre</span></li>
          </ul>
        </div>
        
        <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💧</span> Irrigation Schedule
          </h4>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">Crown Root Initiation</span> <span className="font-semibold text-gray-900">21 Days</span></li>
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">Tillering Stage</span> <span className="font-semibold text-gray-900">45 Days</span></li>
            <li className="flex justify-between items-center text-sm"><span className="text-gray-600">Flowering Stage</span> <span className="font-semibold text-gray-900">85 Days</span></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({ icon: Icon, label, value, color, bg }: { icon: any, label: string, value: string, color: string, bg: string }) {
  return (
    <div className={`rounded-2xl p-5 border border-gray-100 flex items-start gap-4 transition-transform hover:scale-105`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color} flex-shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
        <p className="font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
