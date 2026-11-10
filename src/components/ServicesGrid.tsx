import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const servicesConfig = [
  { key: "crop", image: "/images/service_crop.png", icon: "🌱", path: "/prediction" },
  { key: "market", image: "/images/service_market.png", icon: "₹", path: "/market" },
  { key: "weather", image: "/images/service_weather.png", icon: "🌦", path: "/weather" },
  { key: "soil", image: "/images/service_soil.png", icon: "🧪", path: "/soil" },
  { key: "dashboard", image: "/images/service_dashboard.png", icon: "📊", path: "/dashboard" },
  { key: "gov", image: "/images/service_gov.png", icon: "🏛️", path: "/schemes" },
  { key: "drone", image: "/images/service_drone.png", icon: "🛰️" },
  { key: "chat", image: "/images/service_chat.png", icon: "🤖", path: "/assistant" },
  { key: "alerts", image: "/images/service_alerts.png", icon: "🔔" },
  { key: "irrigation", image: "/images/service_irrigation.png", icon: "💧" },
  { key: "disease", image: "/images/service_crop.png", icon: "🔍" },
  { key: "profit", image: "/images/service_dashboard.png", icon: "🧮" }
];

export function ServicesGrid() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesConfig.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="bg-white rounded-2xl flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          >
            {/* Image side - Top */}
            <div className="relative w-full h-[200px]">
              <img src={service.image} alt={t(`services.items.${service.key}.title`)} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
              {/* Floating Icon Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl text-white shadow-lg">
                {service.icon}
              </div>
            </div>
            
            {/* Content side - Bottom */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`services.items.${service.key}.title`)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {t(`services.items.${service.key}.desc`)}
              </p>
              <div>
                <Link to={service.path || "#"} className="bg-[#f0f9eb] hover:bg-[#e2f5d6] text-brand-dark font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2 text-xs transition-colors">
                  {t('services.learnMore')} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
