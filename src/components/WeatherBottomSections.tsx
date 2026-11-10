import { CloudLightning, Wind, ThermometerSun, Droplet, Leaf, AlertTriangle, Bug, ArrowUpRight, CheckCircle2, CloudRain, Sprout, Cloud, Cpu, MapPin, RadioReceiver } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WeatherBottomSections() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 w-full pb-16">
      
      {/* 4 Column Grid Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Weather Alerts */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.bottom.alertsTitle')}</h3>
          <div className="flex flex-col gap-3 flex-1">
            <AlertCard icon={<CloudLightning className="w-5 h-5 text-yellow-600" />} title={t('weather.bottom.heavyRain')} desc={t('weather.bottom.next24Hours')} color="bg-yellow-50 border-yellow-100" />
            <AlertCard icon={<Wind className="w-5 h-5 text-orange-600" />} title={t('weather.bottom.strongWind')} desc={t('weather.bottom.tomorrowEvening')} color="bg-orange-50 border-orange-100" />
            <AlertCard icon={<ThermometerSun className="w-5 h-5 text-red-600" />} title={t('weather.bottom.highTemp')} desc={t('weather.bottom.weekendForecast')} color="bg-red-50 border-red-100" />
          </div>
        </div>

        {/* Crop Weather Suitability */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.bottom.suitabilityTitle')}</h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <SuitabilityBadge icon={<Droplet className="w-4 h-4 text-blue-500" />} label={t('weather.bottom.soilMoisture')} value="88%" />
            <SuitabilityBadge icon={<Leaf className="w-4 h-4 text-brand" />} label={t('weather.bottom.cropStress')} value={t('weather.bottom.low')} valueColor="text-brand" />
            <SuitabilityBadge icon={<AlertTriangle className="w-4 h-4 text-orange-500" />} label={t('weather.bottom.diseaseRisk')} value={t('weather.bottom.medium')} valueColor="text-orange-500" />
            <SuitabilityBadge icon={<Bug className="w-4 h-4 text-brand" />} label={t('weather.bottom.pestActivity')} value={t('weather.bottom.low')} valueColor="text-brand" />
            <SuitabilityBadge icon={<ArrowUpRight className="w-4 h-4 text-blue-400" />} label={t('weather.bottom.evapotranspiration')} value={t('weather.bottom.moderate')} valueColor="text-blue-500" />
            <SuitabilityBadge icon={<Leaf className="w-4 h-4 text-brand" />} label={t('weather.bottom.growingConditions')} value={t('weather.bottom.excellent')} valueColor="text-brand" />
          </div>
        </div>

        {/* How Weather Affects Your Farm */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.bottom.affectsTitle')}</h3>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <SuitabilityBadge icon={<ThermometerSun className="w-4 h-4 text-red-400" />} label={t('weather.bottom.temperature')} value={t('weather.bottom.excellent')} valueColor="text-brand" />
            <SuitabilityBadge icon={<CloudRain className="w-4 h-4 text-blue-500" />} label={t('weather.bottom.rainfall')} value={t('weather.bottom.favorable')} valueColor="text-brand" />
            <SuitabilityBadge icon={<Wind className="w-4 h-4 text-cyan-500" />} label={t('weather.bottom.wind')} value={t('weather.bottom.safe')} valueColor="text-brand" />
            <SuitabilityBadge icon={<Droplet className="w-4 h-4 text-blue-400" />} label={t('weather.bottom.soilMoisture')} value={t('weather.bottom.optimal')} valueColor="text-brand" />
            <SuitabilityBadge icon={<Sprout className="w-4 h-4 text-brand" />} label={t('weather.bottom.cropGrowth')} value={t('weather.bottom.healthy')} valueColor="text-brand" />
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.bottom.actionsTitle')}</h3>
          <ul className="space-y-4 flex-1">
            <ActionItem text={t('weather.bottom.action1')} />
            <ActionItem text={t('weather.bottom.action2')} />
            <ActionItem text={t('weather.bottom.action3')} />
            <ActionItem text={t('weather.bottom.action4')} />
            <ActionItem text={t('weather.bottom.action5')} />
          </ul>
        </div>

      </div>

      {/* Bottom Feature Strip */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
        <FeatureItem icon={<Cloud className="w-6 h-6 text-blue-500" />} title={t('weather.bottom.apiTitle')} desc={t('weather.bottom.apiDesc')} />
        <FeatureItem icon={<RadioReceiver className="w-6 h-6 text-brand" />} title={t('weather.bottom.satelliteTitle')} desc={t('weather.bottom.satelliteDesc')} />
        <FeatureItem icon={<Cpu className="w-6 h-6 text-brand" />} title={t('weather.bottom.aiTitle')} desc={t('weather.bottom.aiDesc')} />
        <FeatureItem icon={<MapPin className="w-6 h-6 text-brand" />} title={t('weather.bottom.gpsTitle')} desc={t('weather.bottom.gpsDesc')} />
        <FeatureItem icon={<Sprout className="w-6 h-6 text-brand" />} title={t('weather.bottom.smartTitle')} desc={t('weather.bottom.smartDesc')} />
      </div>

    </div>
  );
}

function AlertCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className={`flex flex-col p-3 rounded-xl border ${color}`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="font-bold text-gray-900 text-sm">{title}</span>
      </div>
      <span className="text-gray-600 text-[11px] font-medium ml-7">{desc}</span>
    </div>
  );
}

function SuitabilityBadge({ icon, label, value, valueColor = "text-gray-900" }: { icon: React.ReactNode, label: string, value: string, valueColor?: string }) {
  return (
    <div className="flex flex-col gap-1 border border-gray-50 rounded-xl p-3 bg-gray-50/50">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-gray-500 text-[10px] font-bold">{label}</span>
      </div>
      <span className={`font-bold text-sm ${valueColor}`}>{value}</span>
    </div>
  );
}

function ActionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
      <span className="text-gray-700 text-sm font-medium leading-snug">{text}</span>
    </li>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-900 text-sm leading-tight mb-0.5">{title}</span>
        <span className="text-gray-500 text-[11px] font-medium leading-tight">{desc}</span>
      </div>
    </div>
  );
}
