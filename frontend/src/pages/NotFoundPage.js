import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHome, FaToolbox, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const NotFoundPage = () => {
  useEffect(() => {
    // Establecer el código de estado HTTP 404
    document.title = '404 - Página no encontrada | Servicode';
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Servicode</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <div className="main-container">
        <section className="error-section">
          <div className="error-content">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">¡Oops! Página no encontrada</h2>
            <p className="error-description">
              Lo sentimos, la página que buscas no existe o ha sido movida.
              No te preocupes, aquí hay algunas opciones que pueden ayudarte:
            </p>
            
            <div className="error-navigation">
              <div className="nav-grid">
                <Link to="/" className="nav-item">
                  <FaHome className="nav-icon" />
                  <span>Página Principal</span>
                </Link>
                <Link to="/servicios" className="nav-item">
                  <FaToolbox className="nav-icon" />
                  <span>Nuestros Servicios</span>
                </Link>
                <Link to="/portfolio" className="nav-item">
                  <FaBriefcase className="nav-icon" />
                  <span>Ver Portafolio</span>
                </Link>
                <Link to="/contacto" className="nav-item">
                  <FaEnvelope className="nav-icon" />
                  <span>Contactarnos</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;