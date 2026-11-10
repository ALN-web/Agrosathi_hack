import { Coins, ShieldCheck, Cpu, TrendingUp, Sprout } from 'lucide-react';

const benefits = [
  {
    icon: <Coins className="w-5 h-5" />,
    title: "Financial Assistance",
    desc: "Direct financial support for farmers"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Risk Protection",
    desc: "Protection against crop loss and natural disasters"
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Technology Access",
    desc: "Access to modern technology and innovations"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Market Support",
    desc: "Better market access and price realization"
  },
  {
    icon: <Sprout className="w-5 h-5" />,
    title: "Sustainable Growth",
    desc: "Promoting sustainable and profitable farming"
  }
];

export function SchemesBenefits() {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-[1500px] mx-auto bg-[#f8f9fa] rounded-3xl border border-gray-100 p-8 flex flex-col xl:flex-row items-center gap-8 shadow-sm">
        
        <div className="xl:w-1/4 flex-shrink-0 text-center xl:text-left border-b xl:border-b-0 xl:border-r border-gray-200 pb-6 xl:pb-0 xl:pr-8">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Benefits Of <br className="hidden xl:block" /> Government Schemes
          </h2>
        </div>

        <div className="xl:w-3/4 flex overflow-x-auto xl:grid xl:grid-cols-5 gap-6 pb-4 xl:pb-0 scrollbar-hide w-full">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 min-w-[250px] xl:min-w-0">
              <div className="w-12 h-12 rounded-full bg-[#e2f3d8] text-brand flex items-center justify-center flex-shrink-0 shadow-inner">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</h4>
                <p className="text-gray-500 text-[13px] leading-snug">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
