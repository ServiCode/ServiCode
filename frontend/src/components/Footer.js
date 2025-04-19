import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Servicode</h3>
          <p>Soluciones digitales profesionales para tu negocio.</p>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          <ul className="footer-links">
            <li><Link to="/servicios">Diseño Web</Link></li>
            <li><Link to="/servicios">Desarrollo de Software</Link></li>
            <li><Link to="/servicios">Soporte Técnico</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/portfolio">Portafolio</Link></li>
            <li><Link to="/#contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contáctanos</h3>
          <ul className="footer-links">
            <li>Email: servicode.net@gmail.com</li>
            <li>Teléfonos:</li>
            <li>+57 320 023 808 <br></br> +57 322 7143436 <br></br> +57 324 4230348</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Servicode. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
