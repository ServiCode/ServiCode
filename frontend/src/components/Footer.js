import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer role="contentinfo">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Servicode</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={() => scrollToElement('hero')}>Inicio</Link></li>
            <li><Link to="/" onClick={() => scrollToElement('servicios')}>Servicios</Link></li>
            <li><Link to="/" onClick={() => scrollToElement('proceso')}>Proceso</Link></li>
            <li><Link to="/" onClick={() => scrollToElement('tecnologias')}>Tecnologías</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          <ul className="footer-links">
            <li><Link to="/servicios#desarrollo-web">Diseño Web</Link></li>
            <li><Link to="/servicios#desarrollo-software">Software a Medida</Link></li>
            <li><Link to="/servicios#soporte">Soporte Técnico</Link></li>
            <li><Link to="/servicios#consultoria">Consultoría IT</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/contacto">Política de Privacidad</Link></li>
            <li><Link to="/contacto">Términos y Condiciones</Link></li>
            <li><Link to="/portfolio">Portafolio</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contáctanos</h3>
          <ul className="footer-links">
            <li><a href="mailto:info@servicode.net">info@servicode.net</a></li>
            <li>Teléfonos:</li>
            <li><a href="tel:+573200238080">+57 320 023 8080</a></li>
            <li><a href="tel:+573227143436">+57 322 714 3436</a></li>
            <li><a href="tel:+573244230348">+57 324 423 0348</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Servicode. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
