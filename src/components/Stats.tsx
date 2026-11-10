import { motion } from 'framer-motion';

const stats = [
  { value: '7+', label: 'AI Models', sub: 'Powering Predictions' },
  { value: '1000+', label: 'Farmers', sub: 'Using AgroSathi' },
  { value: '98%', label: 'Prediction', sub: 'Accuracy' },
  { value: '24/7', label: 'AI Support', sub: 'Always Available' },
];

export function Stats() {
  return (
    <section className="relative z-20 max-w-[1200px] mx-auto px-6 -mt-16 pb-20">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 relative z-20">
        <div className="max-w-xl">
          <span className="inline-block px-4 py-1.5 bg-[#f3faeb] text-[#3d8c40] font-semibold text-sm rounded-full mb-6 border border-[#e2f3d8]">
            Our Platform
          </span>
          <h2 className="text-4xl md:text-[3rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Smart Solutions For <br />
            Modern Farmers
          </h2>
        </div>
        <div className="max-w-md md:pb-2">
          <p className="text-gray-900 font-medium text-[1.05rem] leading-relaxed">
            AgroSathi provides AI-driven insights and real-time analytics to improve farming productivity, profitability, and sustainability.
          </p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[1.5rem] p-8 md:p-12 shadow-[0_4px_40px_rgb(0,0,0,0.06)] border border-gray-100 w-full relative z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col ${i === 0 ? '' : 'pl-8'}`}
            >
              <div className="text-[2.5rem] md:text-[3rem] font-bold text-gray-900 mb-2 leading-none tracking-tight">{stat.value}</div>
              <div className="text-gray-800 font-medium text-[1.05rem] mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
