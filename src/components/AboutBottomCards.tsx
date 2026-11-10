import { CheckCircle2, ArrowRight } from 'lucide-react';

export function AboutBottomCards() {
  return (
    <section className="bg-white py-24 px-6 pb-32">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Meet Our Team */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Passionate technologists, data scientists, agronomists, and engineers working together to build the future of agriculture.
            </p>
            <div className="flex -space-x-4 mb-8">
              <img className="w-14 h-14 border-4 border-white rounded-full bg-gray-200" src="https://i.pravatar.cc/150?img=11" alt="Team member" />
              <img className="w-14 h-14 border-4 border-white rounded-full bg-gray-200" src="https://i.pravatar.cc/150?img=12" alt="Team member" />
              <img className="w-14 h-14 border-4 border-white rounded-full bg-gray-200" src="https://i.pravatar.cc/150?img=13" alt="Team member" />
              <img className="w-14 h-14 border-4 border-white rounded-full bg-gray-200" src="https://i.pravatar.cc/150?img=14" alt="Team member" />
            </div>
          </div>
          <button className="border border-gray-200 hover:border-brand text-gray-900 hover:text-brand font-semibold px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-colors self-start">
            Join Our Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Our Platform */}
        <div className="bg-[#0a1f12] rounded-3xl p-10 shadow-xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8F24A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Platform</h3>
          <p className="text-white/80 text-[15px] leading-relaxed mb-8 relative z-10">
            AgroSathi combines multiple technologies and data sources into one intelligent platform that understands agriculture like never before.
          </p>
          <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
            <Tag text="AI Models" />
            <Tag text="Weather APIs" />
            <Tag text="Market Data" />
            <Tag text="Soil Analysis" />
            <Tag text="Satellite Data" />
            <Tag text="Expert Knowledge" />
          </div>
        </div>

        {/* Our Promise */}
        <div className="bg-[#f4fbe9] rounded-3xl p-10 border border-[#e2f3d8] relative overflow-hidden flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
            We are committed to continuous innovation, farmer success, and building solutions that create long-term value for agriculture.
          </p>
          <ul className="space-y-3 relative z-10">
            <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><CheckCircle2 className="w-4 h-4 text-brand" /> Continuous Innovation</li>
            <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><CheckCircle2 className="w-4 h-4 text-brand" /> Farmer First Approach</li>
            <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><CheckCircle2 className="w-4 h-4 text-brand" /> Sustainable Agriculture</li>
            <li className="flex items-center gap-2 text-sm font-medium text-gray-800"><CheckCircle2 className="w-4 h-4 text-brand" /> Building A Better Tomorrow</li>
          </ul>
          {/* Hands holding plant simulated with image */}
          <img src="/images/service_crop.png" alt="Hands holding plant" className="absolute -bottom-10 -right-10 w-48 h-48 object-cover rounded-full opacity-50 mix-blend-multiply" />
        </div>

      </div>
    </section>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="bg-[#123621] border border-[#1a4a2e] text-[#B8F24A] px-4 py-2 rounded-lg text-xs font-semibold">
      {text}
    </span>
  );
}
