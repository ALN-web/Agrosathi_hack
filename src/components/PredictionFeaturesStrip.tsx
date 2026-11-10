import { Cpu, CloudRain, ShieldCheck, Target, TrendingUp, Sprout } from 'lucide-react';

export function PredictionFeaturesStrip() {
  const features = [
    {
      icon: <Cpu className="w-5 h-5 text-gray-500" />,
      title: "AI & ML Technology",
      desc: "Advanced machine learning models for accurate prediction"
    },
    {
      icon: <CloudRain className="w-5 h-5 text-brand" />,
      title: "Data-driven",
      desc: "Built on public agricultural datasets"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand" />,
      title: "Clear Insights",
      desc: "Simple explanations for every result"
    },
    {
      icon: <Target className="w-5 h-5 text-brand" />,
      title: "Measured Accuracy",
      desc: "Accuracy reported from real tests"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand" />,
      title: "Profit Optimization",
      desc: "Recommendations focused on maximum profitability"
    },
    {
      icon: <Sprout className="w-5 h-5 text-brand" />,
      title: "Sustainable Farming",
      desc: "Promoting eco-friendly and sustainable agriculture"
    }
  ];

  return (
    <div className="border-t border-gray-100 bg-white py-10 mt-8 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col gap-3 px-4 xl:border-r border-gray-100 last:border-0">
            <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
