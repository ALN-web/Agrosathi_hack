import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Footer } from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#B8F24A] selection:text-[#0B2E1D]">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}
