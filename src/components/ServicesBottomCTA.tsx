import { ArrowRight, ShieldCheck, Zap, Users, Lock, Smile } from 'lucide-react';

export function ServicesBottomCTA() {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section: Why Choose AgroSathi? */}
        <div className="lg:col-span-2 bg-[#f4fbe9] rounded-3xl p-8 lg:p-12 border border-[#e2f3d8]">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose <span className="text-brand">AgroSathi?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
            <FeatureItem 
              icon={<Zap className="w-6 h-6" />}
              title="Advanced AI Models"
              desc="Trained on vast datasets for high accuracy predictions."
            />
            <FeatureItem 
              icon={<Users className="w-6 h-6" />}
              title="Real-Time Data"
              desc="Live data from weather stations, markets, and satellites."
            />
            <FeatureItem 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Expert Validated"
              desc="Insights validated by agricultural experts and agronomists."
            />
            <FeatureItem 
              icon={<Lock className="w-6 h-6" />}
              title="Secure & Private"
              desc="Your data is protected with enterprise-grade security."
            />
            <FeatureItem 
              icon={<Smile className="w-6 h-6" />}
              title="Easy To Use"
              desc="Simple, intuitive, and built for every farmer."
            />
          </div>
        </div>

        {/* Right Section: Technology For Better Tomorrow */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl flex flex-col justify-end p-8 lg:p-10 min-h-[350px]">
          <img 
            src="/images/service_crop.png" 
            alt="Field" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E1D] via-[#0B2E1D]/80 to-[#0B2E1D]/20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Technology For <br/>
              <span className="text-[#B8F24A]">Better Tomorrow</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              AgroSathi is committed to empowering farmers with innovative technology.
            </p>
            <button className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0B2E1D] font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 text-sm transition-colors">
              Join Our Mission <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-brand mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-[15px] mb-1">{title}</h4>
        <p className="text-gray-600 text-[13px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
