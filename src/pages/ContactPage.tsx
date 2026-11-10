import { Navbar } from '../components/Navbar';
import { ContactHero } from '../components/ContactHero';
import { ContactFormSection } from '../components/ContactFormSection';
import { ContactWhyReachOut } from '../components/ContactWhyReachOut';
import { ContactMapFAQ } from '../components/ContactMapFAQ';
import { ContactBottom } from '../components/ContactBottom';
import { Footer } from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <ContactWhyReachOut />
      <ContactMapFAQ />
      <ContactBottom />
      <Footer />
    </div>
  );
}
