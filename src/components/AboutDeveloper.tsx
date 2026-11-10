import { Heart } from 'lucide-react';

export function AboutDeveloper() {
  return (
    <div className="bg-[#f8f9fa] border-y border-gray-100 py-6 px-6">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
          Proudly Developed With <Heart className="w-4 h-4 text-red-500 fill-red-500" /> For Farmers
        </div>
        <div className="text-gray-600 text-sm">
          Developed by <span className="font-bold text-gray-900">Anjankumar LN</span>
        </div>
      </div>
    </div>
  );
}
