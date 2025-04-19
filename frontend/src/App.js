import './App.css';
import './assets/styles.css';
import './assets/styles-additional.css';
import './assets/contacto-styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServiciosPage from './pages/ServiciosPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirección automática desde la raíz "/" a "/landing" */}
        <Route path="/" element={<Navigate to="/landing" replace />} />

        {/* Rutas principales */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacto" element={<ContactoPage />} />

        {/* Ruta opcional para manejar páginas no encontradas */}
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </Router>
  );
}

export default App;