import { Navbar } from '../components/Navbar';
import { SchemesHero } from '../components/SchemesHero';
import { SchemesMainContent } from '../components/SchemesMainContent';
import { SchemesBenefits } from '../components/SchemesBenefits';
import { SchemesAICTA } from '../components/SchemesAICTA';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export default function SchemesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <SchemesHero />
      <SchemesMainContent />
      <SchemesBenefits />
      <SchemesAICTA />
      <Footer />
    </div>
  );
}
