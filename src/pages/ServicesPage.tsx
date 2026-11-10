import { Navbar } from '../components/Navbar';
import { ServicesHero } from '../components/ServicesHero';
import { ServicesGrid } from '../components/ServicesGrid';
import { ServicesBottomCTA } from '../components/ServicesBottomCTA';
import { Footer } from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServicesBottomCTA />
      <Footer />
    </div>
  );
}
