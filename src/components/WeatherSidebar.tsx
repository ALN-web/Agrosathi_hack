import { Thermometer, Droplet, CloudRain, Wind, Gauge, Sunrise, Sunset, Bot, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WeatherSidebar() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Highlights Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.sidebar.highlightsTitle')}</h3>
        
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          <HighlightItem icon={<Thermometer className="w-5 h-5 text-red-400" />} label={t('weather.sidebar.temperature')} value="28°C" />
          <HighlightItem icon={<Gauge className="w-5 h-5 text-emerald-500" />} label={t('weather.sidebar.pressure')} value="1012 hPa" />
          <HighlightItem icon={<Droplet className="w-5 h-5 text-blue-400" />} label={t('weather.sidebar.humidity')} value="68%" />
          <HighlightItem icon={<Sunrise className="w-5 h-5 text-yellow-500" />} label={t('weather.sidebar.sunrise')} value="6:02 AM" />
          <HighlightItem icon={<CloudRain className="w-5 h-5 text-blue-500" />} label={t('weather.sidebar.rainfall')} value="15 mm" />
          <HighlightItem icon={<Sunset className="w-5 h-5 text-orange-500" />} label={t('weather.sidebar.sunset')} value="6:47 PM" />
          <HighlightItem icon={<Wind className="w-5 h-5 text-cyan-500" />} label={t('weather.sidebar.windSpeed')} value="14 km/h" />
        </div>
      </div>

      {/* AI Advice Block */}
      <div className="bg-[#f4fbe9] rounded-3xl p-6 lg:p-8 border border-[#e2f3d8] shadow-sm flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <Bot className="w-6 h-6 text-brand" />
          <h3 className="text-lg font-bold text-gray-900">{t('weather.sidebar.adviceTitle')}</h3>
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
          <AdviceItem text={t('weather.sidebar.advice1')} />
          <AdviceItem text={t('weather.sidebar.advice2')} />
          <AdviceItem text={t('weather.sidebar.advice3')} />
          <AdviceItem text={t('weather.sidebar.advice4')} />
          <AdviceItem text={t('weather.sidebar.advice5')} />
        </ul>

        <button className="flex items-center justify-center gap-2 text-brand font-bold hover:text-[#0a1f12] transition-colors text-sm pt-4 border-t border-[#c4ebaf]">
          {t('weather.sidebar.viewReport')} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

function HighlightItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-[11px] font-semibold mb-0.5">{label}</span>
        <span className="text-gray-900 font-bold text-sm leading-none">{value}</span>
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
