import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Sprout, 
  TrendingUp, 
  CloudSun, 
  TestTube, 
  Bug, 
  Droplets, 
  BarChart3, 
  Landmark, 
  MessageSquare, 
  BellRing, 
  FileText,
  Menu,
  MapPin,
  ChevronDown,
  Bell,
  Crown
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/dashboard' },
  { name: 'Crop Prediction', icon: Sprout, path: '#' },
  { name: 'Market Prices', icon: TrendingUp, path: '#' },
  { name: 'Weather Analysis', icon: CloudSun, path: '#' },
  { name: 'Soil Analysis', icon: TestTube, path: '#' },
  { name: 'Disease Detection', icon: Bug, path: '#' },
  { name: 'Irrigation Planner', icon: Droplets, path: '#' },
  { name: 'Analytics', icon: BarChart3, path: '#' },
  { name: 'Government Schemes', icon: Landmark, path: '#' },
  { name: 'AI Chatbot', icon: MessageSquare, path: '#' },
  { name: 'Smart Alerts', icon: BellRing, path: '#' },
  { name: 'Farm Reports', icon: FileText, path: '#' },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] bg-[#0a1f12] text-white flex-shrink-0 flex flex-col hidden lg:flex h-full overflow-y-auto custom-scrollbar">
        {/* Logo */}
        <div className="p-6 sticky top-0 bg-[#0a1f12] z-10 flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-[#0a1f12]">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight">AgroSathi</span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-2 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-[#183a26] text-[#B8F24A] font-semibold border-l-4 border-[#B8F24A]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#B8F24A]' : ''}`} />
                <span className="text-[15px]">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Premium Upgrade Card in Sidebar */}
        <div className="p-4 mt-auto sticky bottom-0 bg-gradient-to-t from-[#0a1f12] via-[#0a1f12] to-transparent pt-10">
          <div className="bg-gradient-to-br from-[#123621] to-[#0a1f12] border border-[#1a4a2e] rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8F24A]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Upgrade To</p>
            <h4 className="text-[#B8F24A] font-bold text-lg mb-2">Premium Plan</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Unlock advanced AI features and expert insights.
            </p>
            <button className="w-full bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
              Upgrade Now <Crown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-[80px] bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-8 flex-shrink-0 z-10">
          
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-500 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Dashboard</h1>
              <p className="text-sm text-gray-500 hidden sm:block">Welcome back, Farmer! Here's what's happening on your farm today.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Location */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 cursor-pointer">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">Pune, Maharashtra</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Weather Snapshot */}
            <div className="hidden lg:flex items-center gap-3 border-l border-r border-gray-100 px-6">
              <CloudSun className="w-6 h-6 text-orange-400" />
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none mb-1">28°C</p>
                <p className="text-[11px] text-gray-500 leading-none">Partly Cloudy</p>
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 cursor-pointer pl-2">
              <img src="https://i.pravatar.cc/150?img=11" alt="Ramesh Patil" className="w-10 h-10 rounded-full border border-gray-200" />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-gray-900 leading-none mb-1">Ramesh Patil</p>
                <p className="text-[11px] text-gray-500 leading-none">Premium Farmer</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
