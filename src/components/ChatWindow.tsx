import { Leaf, RefreshCcw, Paperclip, Mic, Send } from 'lucide-react';

export function ChatWindow() {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f4fbe9] flex items-center justify-center border border-[#e2f3d8]">
            <Leaf className="w-5 h-5 text-brand" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[15px] font-bold text-gray-900 leading-tight">AgroSathi AI Assistant</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wide">Online</span>
            </div>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-xs font-bold">
          <RefreshCcw className="w-3.5 h-3.5" /> Clear Chat
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-gray-50/50">
        
        {/* AI Message */}
        <div className="flex items-start gap-4 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-[#f4fbe9] flex items-center justify-center flex-shrink-0 mt-1">
            <Leaf className="w-4 h-4 text-brand" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgb(0,0,0,0.02)] text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Hello! 👋 I'm AgroSathi AI Assistant.</span>
              <br /><br />
              I can help you with crop advice, disease diagnosis, fertilizer recommendations, weather updates, market prices, and more.
              <br /><br />
              How can I assist you today?
            </div>
            <span className="text-[10px] text-gray-400 font-semibold ml-1">10:30 AM</span>
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-start gap-4 max-w-[85%] self-end flex-row-reverse">
          <div className="flex flex-col gap-1 items-end">
            <div className="bg-[#1a5f3a] p-4 rounded-2xl rounded-tr-sm shadow-md text-sm text-white leading-relaxed font-medium">
              Which crop is best for my land in this season?
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-400 font-semibold mr-1">10:31 AM</span>
              <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          </div>
        </div>

        {/* AI Message */}
        <div className="flex items-start gap-4 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-[#f4fbe9] flex items-center justify-center flex-shrink-0 mt-1">
            <Leaf className="w-4 h-4 text-brand" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgb(0,0,0,0.02)] text-sm text-gray-700 leading-relaxed">
              Based on your location, soil type, and current season (Kharif), the best crops for your land are:
              <br /><br />
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌾</span>
                  <p><span className="font-bold text-brand">Paddy (Rice)</span> — High yield & suitable for your soil</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🌽</span>
                  <p><span className="font-bold text-brand">Maame</span> — Good profit & moderate water requirement</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">🫛</span>
                  <p><span className="font-bold text-brand">Green Gram</span> — Improves soil fertility</p>
                </div>
              </div>
              Would you like detailed guidance on any of these crops?
            </div>
            <span className="text-[10px] text-gray-400 font-semibold ml-1">10:31 AM</span>
          </div>
        </div>

        {/* Suggested Replies */}
        <div className="flex flex-wrap gap-2 mt-2">
          <SuggestionChip label="Tell me about Paddy" />
          <SuggestionChip label="Soil health tips" />
          <SuggestionChip label="Fertilizer for Maize" />
          <SuggestionChip label="Weather today" />
        </div>

      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
        <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-2 px-4 shadow-inner">
          <input 
            type="text" 
            placeholder="Type your message here..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 placeholder-gray-400 h-10"
          />
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#1a5f3a] hover:bg-[#134E36] flex items-center justify-center text-white transition-colors ml-1 shadow-md">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-400 font-medium">
          AgroSathi AI provides information for reference only. Please consult local agricultural experts for final decisions.
        </p>
      </div>

    </div>
  );
}

function SuggestionChip({ label }: { label: string }) {
  return (
    <button className="px-4 py-2 rounded-full border border-brand/30 bg-white hover:bg-[#f4fbe9] text-brand text-xs font-bold transition-colors shadow-sm">
      {label}
    </button>
  );
}
