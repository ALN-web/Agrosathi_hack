import { Navbar } from '../components/Navbar';
import { AboutHero } from '../components/AboutHero';
import { AboutMissionVision } from '../components/AboutMissionVision';
import { AboutFeatures } from '../components/AboutFeatures';
import { AboutTech } from '../components/AboutTech';
import { AboutImpact } from '../components/AboutImpact';
import { AboutBottomCards } from '../components/AboutBottomCards';
import { AboutDeveloper } from '../components/AboutDeveloper';
import { Footer } from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutMissionVision />
      <AboutFeatures />
      <AboutTech />
      <AboutImpact />
      <AboutBottomCards />
      <AboutDeveloper />
      <Footer />
    </div>
  );
}
