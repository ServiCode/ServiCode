import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  useEffect(() => {
    // Establecer el código de estado HTTP 404
    document.title = '404 - Página no encontrada | Servicode';
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <section className="error-section">
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
          
          <div className="error-navigation">
            <h2>Te sugerimos:</h2>
            <ul>
              <li><Link to="/">Ir a la página principal</Link></li>
              <li><Link to="/servicios">Ver nuestros servicios</Link></li>
              <li><Link to="/portfolio">Explorar nuestro portafolio</Link></li>
              <li><Link to="/contacto">Contactar con nosotros</Link></li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;