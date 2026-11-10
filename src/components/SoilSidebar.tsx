import { Bot, CheckCircle2, ArrowRight } from 'lucide-react';

export function SoilSidebar() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Radar Chart Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-900 mb-6 w-full">Soil Health Factors</h3>
        
        <div className="relative w-full aspect-square max-w-[250px] flex items-center justify-center mt-4">
          <svg className="w-full h-full overflow-visible" viewBox="-120 -120 240 240">
            {/* Grid lines (Hexagon) */}
            <g stroke="#f3f4f6" strokeWidth="1" fill="none">
              <polygon points="0,-100 86.6,-50 86.6,50 0,100 -86.6,50 -86.6,-50" />
              <polygon points="0,-80 69.3,-40 69.3,40 0,80 -69.3,40 -69.3,-40" />
              <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" />
              <polygon points="0,-40 34.6,-20 34.6,20 0,40 -34.6,20 -34.6,-20" />
              <polygon points="0,-20 17.3,-10 17.3,10 0,20 -17.3,10 -17.3,-10" />
            </g>
            {/* Axes */}
            <g stroke="#f3f4f6" strokeWidth="1">
              <line x1="0" y1="0" x2="0" y2="-100" />
              <line x1="0" y1="0" x2="86.6" y2="-50" />
              <line x1="0" y1="0" x2="86.6" y2="50" />
              <line x1="0" y1="0" x2="0" y2="100" />
              <line x1="0" y1="0" x2="-86.6" y2="50" />
              <line x1="0" y1="0" x2="-86.6" y2="-50" />
            </g>
            {/* Data Polygon */}
            <polygon 
              points="0,-78 62.3,-36 64.9,37.5 0,75 -60.6,35 -52,-30" 
              fill="#65b23d" 
              fillOpacity="0.2" 
              stroke="#65b23d" 
              strokeWidth="2" 
            />
            {/* Data Points */}
            <circle cx="0" cy="-78" r="4" fill="#65b23d" />
            <circle cx="62.3" cy="-36" r="4" fill="#65b23d" />
            <circle cx="64.9" cy="37.5" r="4" fill="#65b23d" />
            <circle cx="0" cy="75" r="4" fill="#65b23d" />
            <circle cx="-60.6" cy="35" r="4" fill="#65b23d" />
            <circle cx="-52" cy="-30" r="4" fill="#65b23d" />

            {/* Labels */}
            <text x="0" y="-115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Nutrients</text>
            <text x="0" y="-103" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">78%</text>

            <text x="100" y="-55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Organic</text>
            <text x="100" y="-45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Matter</text>
            <text x="100" y="-33" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">72%</text>

            <text x="100" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">pH Balance</text>
            <text x="100" y="67" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">80%</text>

            <text x="0" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Moisture</text>
            <text x="0" y="127" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">75%</text>

            <text x="-100" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Structure</text>
            <text x="-100" y="67" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">70%</text>

            <text x="-100" y="-55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Microbial</text>
            <text x="-100" y="-45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">Activity</text>
            <text x="-100" y="-33" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#65b23d">60%</text>
          </svg>
        </div>
      </div>

      {/* AI Recommendation Block */}
      <div className="bg-[#f4fbe9] rounded-3xl p-6 lg:p-8 border border-[#e2f3d8] shadow-sm flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-6 h-6 text-brand" />
          <h3 className="text-lg font-bold text-gray-900">AI Recommendation</h3>
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
          <AdviceItem text="Apply DAP @ 45 kg/acre" />
          <AdviceItem text="Apply Zinc Sulphate @ 20 kg/hectare" />
          <AdviceItem text="Add Organic Compost" />
          <AdviceItem text="Maintain drip irrigation" />
          <AdviceItem text="Improve phosphorus level" />
          <AdviceItem text="Recheck soil after 60 days" />
        </ul>

        <button className="flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-sm pt-4 border-t border-[#c4ebaf]">
          View Detailed Recommendation <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

function AdviceItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
      <span className="text-gray-700 text-sm font-medium leading-snug">{text}</span>
    </li>
  );
}
