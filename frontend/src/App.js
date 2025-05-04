import './App.css';
import './assets/styles.css';
import './assets/styles-additional.css';
import './assets/contacto-styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import ServiciosPage from './pages/ServiciosPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactoPage from './pages/ContactoPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;