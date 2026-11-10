import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export function SchemesAICTA() {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-8">
        
        {/* Optional AI Feature Block */}
        <div className="bg-gradient-to-r from-[#f4fbe9] to-white rounded-3xl p-8 lg:p-12 border border-[#e2f3d8] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex-1 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-brand" />
              <h3 className="text-2xl font-bold text-gray-900">AI Scheme Recommender</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              AgroSathi intelligently recommends the most suitable government schemes based on your location, land size, crops, income, irrigation method, and eligibility.
            </p>
          </div>
          <button className="w-full lg:w-auto bg-white border-2 border-brand text-[#0a1f12] hover:bg-[#f4fbe9] font-bold text-lg px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 flex-shrink-0 shadow-sm">
            Find My Schemes <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Main Dark CTA Banner */}
        <div className="bg-[#0a1f12] rounded-[2.5rem] overflow-hidden relative shadow-2xl p-10 lg:p-20 text-center flex flex-col items-center">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8F24A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#134E36]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10 max-w-3xl leading-tight">
            Unlock Every Government Benefit You Deserve
          </h2>
          <p className="text-white/80 text-lg mb-12 relative z-10 max-w-2xl leading-relaxed">
            Let AgroSathi simplify your journey by helping you discover, understand, and apply for the right agricultural schemes with AI-powered recommendations.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <button className="w-full sm:w-auto bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold text-lg px-10 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg">
              Explore Schemes <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              Check Eligibility <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
