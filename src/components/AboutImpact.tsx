import { Target, Users, ShieldCheck, MapPin, Sprout, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Target className="w-8 h-8" />, value: "10M+", label: "Predictions Made" },
  { icon: <Users className="w-8 h-8" />, value: "500K+", label: "Farmers Empowered" },
  { icon: <ShieldCheck className="w-8 h-8" />, value: "98%", label: "Prediction Accuracy" },
  { icon: <MapPin className="w-8 h-8" />, value: "300+", label: "Districts Covered" },
  { icon: <Sprout className="w-8 h-8" />, value: "100+", label: "Crops Supported" },
  { icon: <TrendingUp className="w-8 h-8" />, value: "25%", label: "Average Yield Increase" }
];

export function AboutImpact() {
  return (
    <section className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B2E1D]">
        <img 
          src="/images/service_crop.png" 
          alt="Terraced farming" 
          className="w-full h-full object-cover mix-blend-luminosity opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E1D] via-transparent to-[#0B2E1D]"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-16">Our Impact So Far</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-12 gap-x-6 divide-x-0 xl:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              <div className="text-[#B8F24A] mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/80 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
