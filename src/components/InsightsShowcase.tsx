import { motion } from 'framer-motion';
import { ArrowRight, CloudRain, Droplets, Wind, Sun } from 'lucide-react';

export function InsightsShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Weather Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden h-[450px] flex items-center justify-center p-6 group shadow-lg"
        >
          <img src="/images/weather_station.png" alt="Weather" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20"></div>
          
          <div className="relative z-10 glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-white/50">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-sm font-semibold text-brand-dark mb-1 tracking-wide uppercase">Live Weather</div>
                <div className="text-5xl font-bold text-gray-900 tracking-tight">28°C</div>
                <div className="text-sm font-medium text-gray-700 mt-1">Partly Cloudy</div>
              </div>
              <CloudRain className="w-12 h-12 text-brand drop-shadow-sm" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 border-t border-gray-200/60 pt-6 mb-6">
              <div className="text-center">
                <Droplets className="w-5 h-5 mx-auto text-brand mb-2" />
                <div className="text-xs text-gray-500 font-medium">Humidity</div>
                <div className="font-bold text-gray-900">68%</div>
              </div>
              <div className="text-center">
                <Wind className="w-5 h-5 mx-auto text-brand mb-2" />
                <div className="text-xs text-gray-500 font-medium">Wind</div>
                <div className="font-bold text-gray-900">12 km/h</div>
              </div>
              <div className="text-center">
                <Sun className="w-5 h-5 mx-auto text-brand mb-2" />
                <div className="text-xs text-gray-500 font-medium">Rainfall</div>
                <div className="font-bold text-gray-900">0.8 mm</div>
              </div>
            </div>
            
            <button className="w-full text-center text-sm font-bold text-brand hover:text-brand-dark transition-colors">
              View Full Forecast →
            </button>
          </div>
        </motion.div>

        {/* Market Price Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-darker rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between h-[450px] relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8e986] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-8">Market Price Trend</h3>
            <div className="flex justify-between items-center mb-8">
               <div className="text-white/90 font-medium bg-white/10 px-3 py-1 rounded-full text-sm">Wheat [1k Quintal]</div>
               <select className="bg-black/20 border border-white/10 text-white rounded-full px-4 py-1.5 text-sm outline-none focus:ring-2 focus:ring-[#b8e986]">
                 <option>7 Days</option>
                 <option>1 Month</option>
               </select>
            </div>
            
            {/* Chart Area */}
            <div className="relative flex-1 mb-8">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  d="M 0 100 Q 50 80 100 85 T 200 50 T 300 60 T 400 20" 
                  fill="none" 
                  stroke="#b8e986" 
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="100" r="5" fill="#b8e986" className="drop-shadow-md" />
                <circle cx="100" cy="85" r="5" fill="#b8e986" className="drop-shadow-md" />
                <circle cx="200" cy="50" r="5" fill="#b8e986" className="drop-shadow-md" />
                <circle cx="300" cy="60" r="5" fill="#b8e986" className="drop-shadow-md" />
                <circle cx="400" cy="20" r="6" fill="#fff" stroke="#b8e986" strokeWidth="3" className="drop-shadow-lg" />
              </svg>
            </div>

            <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-auto">
              <div>
                <div className="text-sm text-white/60 mb-1 font-medium">Current Price</div>
                <div className="text-4xl font-bold text-white">₹2,450</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60 mb-1 font-medium">Price Change</div>
                <div className="text-xl font-bold text-[#b8e986] flex items-center justify-end gap-1">
                  +2.45% <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
