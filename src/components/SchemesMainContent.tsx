import { SchemesGrid } from './SchemesGrid';
import { SchemesSidebar } from './SchemesSidebar';

export function SchemesMainContent() {
  return (
    <section className="bg-white pt-16 pb-24 px-6 relative z-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column (2/3 width on desktop) */}
        <div className="lg:col-span-2">
          <SchemesGrid />
        </div>

        {/* Right Column (1/3 width on desktop) */}
        <div className="lg:col-span-1">
          <SchemesSidebar />
        </div>

      </div>
    </section>
  );
}
