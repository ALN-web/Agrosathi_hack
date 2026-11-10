import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PredictionPage from './pages/PredictionPage';
import ServicesPage from './pages/ServicesPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SchemesPage from './pages/SchemesPage';
import MarketPricePage from './pages/MarketPricePage';
import WeatherPage from './pages/WeatherPage';
import SoilPage from './pages/SoilPage';
import ChatPage from './pages/ChatPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/market" element={<MarketPricePage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/soil" element={<SoilPage />} />
        <Route path="/assistant" element={<ChatPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
