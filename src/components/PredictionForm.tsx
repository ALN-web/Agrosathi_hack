import { motion } from 'framer-motion';
import { MapPin, Calendar, Beaker, CloudRain, Droplets, Tractor, CircleDollarSign, UploadCloud, ChevronDown } from 'lucide-react';

function FormSection({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-brand" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {children}
      </div>
    </div>
  );
}

function SelectInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-medium cursor-pointer">
          <option value="">{placeholder}</option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

function TextInput({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-medium placeholder:text-gray-400 placeholder:font-normal"
      />
    </div>
  );
}

export function PredictionForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
    >
      <div className="flex items-start gap-4 mb-10 border-b border-gray-100 pb-8">
        <div className="w-12 h-12 rounded-2xl bg-[#f0f9eb] flex items-center justify-center text-brand flex-shrink-0">
          <span className="text-2xl">📋</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Provide Details For Accurate Prediction</h2>
          <p className="text-gray-500 text-sm md:text-base">Fill every parameter to receive the most accurate AI crop recommendation.</p>
        </div>
      </div>

      <form className="space-y-4">
        <FormSection title="Location Information" icon={MapPin}>
          <SelectInput label="State" placeholder="Choose your state" />
          <SelectInput label="District" placeholder="Choose your district" />
          <SelectInput label="Taluk" placeholder="Select taluk" />
          <SelectInput label="Village" placeholder="Select village" />
          <TextInput label="Latitude" placeholder="e.g. 28.6139" />
          <TextInput label="Longitude" placeholder="e.g. 77.2090" />
          <TextInput label="Elevation" placeholder="Elevation in meters" />
        </FormSection>

        <FormSection title="Season Information" icon={Calendar}>
          <SelectInput label="Current Season" placeholder="Kharif / Rabi / Zaid" />
          <SelectInput label="Month" placeholder="Select current month" />
          <TextInput label="Previous Crop" placeholder="e.g. Wheat" />
          <SelectInput label="Expected Sowing Month" placeholder="Select month" />
        </FormSection>

        <FormSection title="Soil Analysis" icon={Beaker}>
          <SelectInput label="Soil Type" placeholder="Select soil type" />
          <SelectInput label="Soil Texture" placeholder="Select texture" />
          <TextInput label="pH Value" placeholder="e.g. 6.5" type="number" />
          <TextInput label="Organic Carbon %" placeholder="Percentage" type="number" />
          <TextInput label="Nitrogen (N)" placeholder="kg/ha" type="number" />
          <TextInput label="Phosphorus (P)" placeholder="kg/ha" type="number" />
          <TextInput label="Potassium (K)" placeholder="kg/ha" type="number" />
          <TextInput label="Electrical Conductivity" placeholder="dS/m" type="number" />
        </FormSection>

        <FormSection title="Weather Conditions" icon={CloudRain}>
          <TextInput label="Current Temperature" placeholder="°C" type="number" />
          <TextInput label="Humidity" placeholder="%" type="number" />
          <TextInput label="Rainfall" placeholder="mm" type="number" />
          <TextInput label="Forecast Rain Probability" placeholder="%" type="number" />
        </FormSection>

        <FormSection title="Water Availability" icon={Droplets}>
          <SelectInput label="Water Source" placeholder="Select source" />
          <SelectInput label="Irrigation Type" placeholder="Select type" />
          <TextInput label="Groundwater Level" placeholder="meters" type="number" />
        </FormSection>

        <FormSection title="Farm Information" icon={Tractor}>
          <TextInput label="Farm Size" placeholder="Acres" type="number" />
          <SelectInput label="Land Ownership" placeholder="Owned / Leased" />
          <TextInput label="Previous Yield" placeholder="Quintals" type="number" />
          <SelectInput label="Organic Farming" placeholder="Yes / No" />
        </FormSection>

        <FormSection title="Economic Inputs" icon={CircleDollarSign}>
          <TextInput label="Budget" placeholder="₹ Amount" type="number" />
          <SelectInput label="Seed Availability" placeholder="Available / Procuring" />
          <SelectInput label="Government Subsidy Eligible" placeholder="Yes / No" />
        </FormSection>

        <FormSection title="Optional AI Inputs" icon={UploadCloud}>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <button type="button" className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 text-brand">
              <UploadCloud className="w-6 h-6" />
              <span className="text-sm font-semibold">Upload Soil Report</span>
            </button>
            <button type="button" className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 text-brand">
              <UploadCloud className="w-6 h-6" />
              <span className="text-sm font-semibold">Upload Drone Image</span>
            </button>
          </div>
        </FormSection>

        <div className="pt-8 border-t border-gray-100">
          <button type="button" className="w-full bg-[#134E36] text-brand-accent font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
            <span className="text-2xl">🌱</span> Predict Best Crop
          </button>
          <p className="text-center text-sm text-gray-500 mt-5 flex items-center justify-center gap-2">
            <span className="text-gray-400">🔒</span> Your data is secure and used strictly for prediction.
          </p>
        </div>
      </form>
    </motion.div>
  );
}
