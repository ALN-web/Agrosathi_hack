import { Thermometer, Droplet, CloudRain, Wind, Sun, Eye, Leaf, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WeatherResultsCenter() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Top Prediction Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">{t('weather.results.summaryTitle')}</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-2">
          
          {/* Main Temp */}
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8 w-full md:w-auto justify-center md:justify-start flex-shrink-0">
            <div className="relative">
              <Sun className="w-16 h-16 text-yellow-400 fill-yellow-400" />
              <CloudRain className="w-8 h-8 text-blue-400 fill-white absolute -bottom-1 -right-2" />
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-gray-900 tracking-tighter">28°<span className="text-3xl text-gray-400 font-bold">C</span></span>
              <span className="text-sm font-bold text-gray-600 mt-1">{t('weather.results.partlyCloudy')}</span>
            </div>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 w-full">
            <WeatherStat icon={<Thermometer className="w-5 h-5 text-orange-500" />} label={t('weather.results.feelsLike')} value="31°C" />
            <WeatherStat icon={<Droplet className="w-5 h-5 text-blue-400" />} label={t('weather.results.humidity')} value="68%" />
            <WeatherStat icon={<CloudRain className="w-5 h-5 text-blue-500" />} label={t('weather.results.rainProb')} value="82%" />
            <WeatherStat icon={<Wind className="w-5 h-5 text-cyan-500" />} label={t('weather.results.windSpeed')} value="14 km/h" />
            <WeatherStat icon={<Sun className="w-5 h-5 text-yellow-500" />} label={t('weather.results.uvIndex')} value="6" />
            <WeatherStat icon={<Eye className="w-5 h-5 text-blue-400" />} label={t('weather.results.visibility')} value="8 km" />
            <WeatherStat icon={<Leaf className="w-5 h-5 text-green-500" />} label={t('weather.results.airQuality')} value={t('weather.results.good')} />
          </div>

        </div>
      </div>

      {/* 7 Day Forecast */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6">{t('weather.results.weeklyTitle')}</h3>
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 scrollbar-hide">
          <DayCard day="Mon" temp="29°C / 22°C" icon={<Sun className="w-8 h-8 text-yellow-400 fill-yellow-400" />} condition={t('weather.results.sunny')} />
          <DayCard day="Tue" temp="30°C / 23°C" icon={<CloudRain className="w-8 h-8 text-gray-400" />} condition={t('weather.results.partlyCloudy')} />
          <DayCard day="Wed" temp="27°C / 21°C" icon={<CloudRain className="w-8 h-8 text-blue-400" />} condition={t('weather.results.lightRain')} />
          <DayCard day="Thu" temp="26°C / 20°C" icon={<CloudRain className="w-8 h-8 text-blue-500 fill-blue-500" />} condition={t('weather.results.rain')} />
          <DayCard day="Fri" temp="28°C / 22°C" icon={<CloudRain className="w-8 h-8 text-gray-500 fill-gray-300" />} condition={t('weather.results.cloudy')} />
          <DayCard day="Sat" temp="31°C / 23°C" icon={<Sun className="w-8 h-8 text-yellow-400 fill-yellow-400" />} condition={t('weather.results.sunny')} />
          <DayCard day="Sun" temp="30°C / 22°C" icon={<Sun className="w-8 h-8 text-yellow-500" />} condition={t('weather.results.clear')} />
        </div>
      </div>

      {/* Chart Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-bold text-gray-900">{t('weather.results.chartTitle')}</h3>
          <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
            <FilterBtn label={t('weather.results.hours24')} />
            <FilterBtn label={t('weather.results.days7')} active />
            <FilterBtn label={t('weather.results.days15')} />
            <FilterBtn label={t('weather.results.days30')} />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-4 text-xs font-semibold text-gray-600">
          <div className="flex items-center gap-2"><div className="w-3 h-1 bg-brand rounded-full"></div> {t('weather.results.tempLabel')}</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400 rounded-sm"></div> {t('weather.results.rainLabel')}</div>
          <div className="flex items-center gap-2"><div className="w-3 h-1 bg-purple-400 rounded-full"></div> {t('weather.results.humidityLabel')}</div>
          <div className="flex items-center gap-2"><div className="w-3 h-1 bg-orange-400 rounded-full"></div> {t('weather.results.windLabel')}</div>
        </div>

        <div className="relative flex-1 min-h-[200px] w-full mt-2">
          {/* Custom SVG Combo Chart */}
          <svg className="absolute inset-0 w-full h-[calc(100%-24px)]" viewBox="0 0 500 150" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="30" x2="500" y2="30" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="90" x2="500" y2="90" stroke="#f3f4f6" strokeWidth="1" />
            <line x1="0" y1="120" x2="500" y2="120" stroke="#f3f4f6" strokeWidth="1" />
            
            {/* Rainfall Bars */}
            <rect x="35" y="100" width="20" height="50" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="105" y="110" width="20" height="40" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="175" y="80" width="20" height="70" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="245" y="40" width="20" height="110" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="315" y="120" width="20" height="30" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="385" y="130" width="20" height="20" fill="#60a5fa" rx="2" opacity="0.8" />
            <rect x="455" y="140" width="20" height="10" fill="#60a5fa" rx="2" opacity="0.8" />

            {/* Temperature Line */}
            <path d="M 45 40 L 115 30 L 185 60 L 255 70 L 325 50 L 395 20 L 465 30" fill="none" stroke="#65b23d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="45" cy="40" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="115" cy="30" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="185" cy="60" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="255" cy="70" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="325" cy="50" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="395" cy="20" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />
            <circle cx="465" cy="30" r="4" fill="#fff" stroke="#65b23d" strokeWidth="2" />

            {/* Humidity Line */}
            <path d="M 45 70 L 115 80 L 185 50 L 255 40 L 325 70 L 395 80 L 465 90" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Wind Line */}
            <path d="M 45 100 L 115 110 L 185 90 L 255 120 L 325 100 L 395 110 L 465 120" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[11px] text-gray-500 font-semibold px-4 md:px-8 lg:px-10">
            <span>May 17</span>
            <span>May 18</span>
            <span>May 19</span>
            <span>May 20</span>
            <span>May 21</span>
            <span>May 22</span>
            <span>May 23</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-gray-500 bg-gray-50 py-2 px-4 rounded-lg">
          <Info className="w-3.5 h-3.5 text-brand" />
          <span>{t('weather.results.footerInfo')}</span>
        </div>
      </div>

    </div>
  );
}

function WeatherStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-[11px] font-semibold mb-0.5">{label}</span>
        <span className="text-gray-900 font-bold text-sm leading-none">{value}</span>
      </div>
    </div>
  );
}

function DayCard({ day, temp, icon, condition }: { day: string, temp: string, icon: React.ReactNode, condition: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-2xl min-w-[100px] hover:border-brand/30 hover:shadow-md transition-all cursor-pointer">
      <span className="font-bold text-gray-900 text-sm mb-1">{day}</span>
      <span className="text-[11px] font-semibold text-gray-500 mb-3">{temp}</span>
      <div className="mb-3">
        {icon}
      </div>
      <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{condition}</span>
    </div>
  );
}

function FilterBtn({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${active ? 'bg-brand text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'}`}>
      {label}
    </button>
  );
}
