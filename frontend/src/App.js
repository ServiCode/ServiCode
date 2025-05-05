import './App.css';
import './assets/styles.css';
import './assets/styles-additional.css';
import './assets/contacto-styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';

// Lazy loading de componentes con manejo correcto de la importación
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.default })));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage').then(module => ({ default: module.default })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(module => ({ default: module.default })));
const ContactoPage = lazy(() => import('./pages/ContactoPage').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.default })));

// Componente de carga
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6'
  }}>
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/servicios/:section" element={<ServiciosPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:category" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;