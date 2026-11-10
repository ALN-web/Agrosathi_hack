import { CloudSun, Crosshair } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WeatherFormCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm h-full flex flex-col border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
          1
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">{t('weather.form.title')}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        
        <div className="grid grid-cols-2 gap-4">
          <SelectGroup label={t('weather.form.state')} placeholder="Karnataka" />
          <SelectGroup label={t('weather.form.district')} placeholder="Mandya" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectGroup label={t('weather.form.taluk')} placeholder="Maddur" />
          <SelectGroup label={t('weather.form.village')} placeholder="Hulikere" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">{t('weather.form.gps')}</label>
          <div className="relative">
            <input 
              type="text" 
              value="13.1220° N, 76.8970° E"
              readOnly
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 font-medium text-sm rounded-xl px-4 py-3 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brand hover:text-[#134E36] transition-colors p-1">
              <Crosshair className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectGroup label={t('weather.form.crop')} placeholder="Paddy (Rice)" />
          <SelectGroup label={t('weather.form.season')} placeholder="Kharif" />
        </div>

        <SelectGroup label={t('weather.form.duration')} placeholder="7 Days" />

      </div>

      <div className="mt-8">
        <button className="w-full bg-[#1a5f3a] hover:bg-[#134E36] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
          <CloudSun className="w-5 h-5" /> {t('weather.form.analyzeBtn')}
        </button>
        <p className="text-center text-gray-500 text-xs leading-relaxed max-w-[280px] mx-auto">
          {t('weather.form.disclaimer')}
        </p>
      </div>
    </div>
  );
}

function SelectGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors cursor-pointer">
          <option value="">{placeholder}</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
