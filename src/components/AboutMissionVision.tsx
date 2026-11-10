import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye } from 'lucide-react';

export function AboutMissionVision() {
  return (
    <section className="bg-white py-24 px-6 relative z-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col"
        >
          {/* Top Image Area */}
          <div className="relative h-[250px] w-full">
            <img src="/images/service_crop.png" alt="Farmer in field" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Floating Icons Overlay (simulated) */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 pb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg animate-pulse"><Target className="w-6 h-6" /></div>
              <div className="w-16 h-16 rounded-full bg-[#B8F24A]/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#0a1f12] shadow-xl -mt-10"><Eye className="w-8 h-8" /></div>
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg animate-pulse"><CheckCircle2 className="w-6 h-6" /></div>
            </div>
          </div>
          
          <div className="p-10 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We aim to revolutionize agriculture by combining Artificial Intelligence, Machine Learning, satellite imagery, weather forecasting, and agricultural science into one intelligent ecosystem. AgroSathi helps farmers make informed decisions based on real-time agricultural intelligence rather than assumptions.
            </p>
            
            <ul className="space-y-4 mt-auto">
              <BulletPoint text="Improve crop productivity" />
              <BulletPoint text="Reduce farming risks" />
              <BulletPoint text="Optimize resources" />
              <BulletPoint text="Increase farmer profitability" />
              <BulletPoint text="Promote sustainable agriculture" />
            </ul>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#f4fbe9] text-brand flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We envision a future where every farmer has access to advanced AI technologies that simplify farming, improve crop quality, reduce losses, and contribute toward global food security.
          </p>
          
          <ul className="space-y-4 mt-auto">
            <BulletPoint text="AI-driven farming" />
            <BulletPoint text="Smart agriculture" />
            <BulletPoint text="Digital rural transformation" />
            <BulletPoint text="Sustainable ecosystem" />
            <BulletPoint text="Data-powered decision making" />
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
      <span className="text-gray-800 font-medium">{text}</span>
    </li>
  );
}
