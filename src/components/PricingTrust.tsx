import { ShieldCheck, Lock, Users, Map, Star, Clock } from 'lucide-react';

export function PricingTrust() {
  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Trust Stats Block */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center flex-1">
        
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-brand" />
          <h3 className="text-xl font-bold text-gray-900">Trusted by Thousands of Farmers</h3>
        </div>
        <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
          Join thousands of farmers who are already growing smarter with AgroSathi.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl mx-auto">
          <StatItem icon={<Users className="w-6 h-6 text-brand" />} value="50K+" label="Happy Farmers" />
          <StatItem icon={<Map className="w-6 h-6 text-brand" />} value="1M+" label="Acres Covered" />
          <StatItem icon={<Star className="w-6 h-6 text-brand" />} value="98%" label="Satisfaction Rate" />
          <StatItem icon={<Clock className="w-6 h-6 text-brand" />} value="24/7" label="Support" />
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-100 w-full flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            <PaymentBadge text="VISA" color="text-blue-700 font-black italic text-xl" />
            <PaymentBadge text="Mastercard" color="text-red-500 font-bold" />
            <PaymentBadge text="RuPay" color="text-orange-500 font-bold italic" />
            <PaymentBadge text="UPI" color="text-gray-800 font-black" />
            <PaymentBadge text="Paytm" color="text-sky-500 font-bold" />
            <PaymentBadge text="GPay" color="text-gray-600 font-bold" />
            <PaymentBadge text="PhonePe" color="text-purple-600 font-bold" />
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
            <Lock className="w-3.5 h-3.5 text-yellow-500" />
            <span>Your payment information is encrypted and secure.</span>
          </div>
        </div>

      </div>

    </div>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[#f4fbe9] flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-2xl font-black text-gray-900 leading-none mb-1">{value}</span>
      <span className="text-[11px] font-bold text-gray-500 uppercase">{label}</span>
    </div>
  );
}

function PaymentBadge({ text, color }: { text: string, color: string }) {
  return (
    <div className={`select-none ${color}`}>
      {text}
    </div>
  );
}
