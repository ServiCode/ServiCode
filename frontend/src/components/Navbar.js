import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = memo(() => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuActive(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuActive) closeMenu();
    };

    if (menuActive) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuActive, closeMenu]);

  const MenuLink = memo(({ to, children }) => (
    <li><Link to={to} onClick={closeMenu}>{children}</Link></li>
  ));

  // Verificar que el logo se cargó correctamente
  const handleLogoError = (e) => {
    console.error('Error al cargar el logo');
    e.target.style.display = 'none';
  };

  // Verificar que el logo se cargó exitosamente
  const handleLogoLoad = (e) => {
    e.target.style.display = 'block';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img 
            src={logo} 
            alt="Logo Servicode" 
            className="logo-img"
            loading="eager" // Cambio a eager para carga prioritaria
            width="56"
            height="56"
            onError={handleLogoError}
            onLoad={handleLogoLoad}
          />
          <span className="logo-text">Servicode</span>
        </Link>
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Menú"
          aria-expanded={menuActive}
        >
          ☰
        </button>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`} role="navigation">
          {menuActive && (
            <button 
              className="nav-close" 
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          )}
          <MenuLink to="/">Inicio</MenuLink>
          <MenuLink to="/servicios">Servicios</MenuLink>
          <MenuLink to="/portfolio">Portafolio</MenuLink>
          <MenuLink to="/contacto">Contacto</MenuLink>
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
