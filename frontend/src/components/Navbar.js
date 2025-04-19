import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Cerrar menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    // Bloquear scroll cuando el menú está abierto
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuActive]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo Servicode" className="logo-img" />
          <span className="logo-text">Servicode</span>
        </Link>
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Menú"
        >
          ☰
        </button>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          {menuActive && (
            <button 
              className="nav-close" 
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          )}
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portafolio</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
