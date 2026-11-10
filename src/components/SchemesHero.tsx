import { motion } from 'framer-motion';
import { Search, Landmark, Coins, Users, Map } from 'lucide-react';

export function SchemesHero() {
  return (
    <div className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0B2E1D]">
        <img 
          src="/images/farmer.avif" 
          alt="Government Schemes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E1D] via-[#0B2E1D]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[750px] w-full"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#134E36]/80 backdrop-blur-md border border-[#134E36] text-[#B8F24A] font-semibold text-sm rounded-full mb-6 shadow-lg">
            <Landmark className="w-4 h-4" /> Government Schemes
          </span>
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
            Explore Government Schemes
          </h1>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#B8F24A] leading-[1.1] tracking-tight mb-6">
            For Farmers
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow-md">
            Discover Central and State Government agricultural schemes tailored to your farm profile. AgroSathi helps farmers identify eligible subsidies, insurance programs, financial assistance, irrigation support, and technology initiatives—all in one place.
          </p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-3xl flex items-center bg-white rounded-2xl p-2 shadow-2xl">
            <Search className="absolute left-6 w-6 h-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search schemes by name, category, ministry, or keyword..."
              className="w-full pl-16 pr-4 py-4 rounded-xl text-gray-900 bg-transparent focus:outline-none focus:ring-0 text-lg placeholder-gray-400"
            />
            <button className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-sm ml-2 whitespace-nowrap">
              Search
            </button>
          </div>
        </motion.div>

        {/* Right Side: Glass Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[450px] bg-[#134E36]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col gap-8">
            <StatRow icon={<Landmark className="w-6 h-6" />} value="120+" label="Active Government Schemes" />
            <StatRow icon={<Coins className="w-6 h-6" />} value="₹2.45 Lakh Cr+" label="Total Financial Assistance" />
            <StatRow icon={<Users className="w-6 h-6" />} value="1.8 Crore+" label="Farmers Benefited" />
            <StatRow icon={<Map className="w-6 h-6" />} value="28" label="States & UTs Covered" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatRow({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-[#B8F24A]/20 flex items-center justify-center text-[#B8F24A] border border-[#B8F24A]/30 flex-shrink-0 shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="text-2xl font-bold text-white mb-1">{value}</h4>
        <p className="text-white/70 font-medium text-sm leading-snug">{label}</p>
      </div>
    </div>
  );
}
