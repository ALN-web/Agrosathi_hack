import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a1f12] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="AgroSathi" className="h-10 w-auto object-contain" />
              <span className="text-2xl font-bold text-white tracking-tight">AgroSathi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#B8F24A] hover:text-[#0a1f12] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/anjankumar-ln/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#B8F24A] hover:text-[#0a1f12] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Links: Platform */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">{t('footer.platform')}</h4>
            <ul className="space-y-4">
              <li><Link to="/dashboard" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('nav.dashboard')}</Link></li>
              <li><Link to="/prediction" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.cropPrediction')}</Link></li>
              <li><Link to="/schemes" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.govSchemes')}</Link></li>
              <li><Link to="/market" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.marketPrice')}</Link></li>
              <li><Link to="/weather" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.weatherAnalysis')}</Link></li>
              <li><Link to="/soil" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.soilAnalysis')}</Link></li>
              <li><Link to="/assistant" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.aiChatbot')}</Link></li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">{t('footer.resources')}</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.blog')}</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.helpCenter')}</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors flex items-center gap-1">{t('footer.links.apiDocs')} <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.farmerGuide')}</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.downloadApp')}</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.privacyPolicy')}</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-[#B8F24A] text-sm transition-colors">{t('footer.links.terms')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">{t('footer.stayUpdated')}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t('footer.subscribeDesc')}
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className="bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#B8F24A] transition-colors"
              />
              <button 
                type="button" 
                className="bg-[#B8F24A] hover:bg-[#a5db40] text-[#0a1f12] font-bold text-sm px-4 py-3 rounded-xl transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{t('footer.rights')}</p>
          <p className="text-gray-500 text-sm">
            {t('footer.designedBy')} <span className="text-white font-semibold">Anjankumar LN</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
