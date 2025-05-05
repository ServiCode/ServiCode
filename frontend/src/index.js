import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Configuración de performance
const root = ReactDOM.createRoot(document.getElementById('root'));

// Deshabilitar el modo estricto en producción para mejor rendimiento
const AppWrapper = process.env.NODE_ENV === 'production' 
  ? <App />
  : <React.StrictMode><App /></React.StrictMode>;

// Renderizar cuando el contenido principal esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    root.render(AppWrapper);
  });
} else {
  root.render(AppWrapper);
}

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Optimización de recursos
if (process.env.NODE_ENV === 'production') {
  // Precarga de recursos críticos
  const preloadLinks = [
    { rel: 'preload', href: '/static/js/main.chunk.js', as: 'script' },
    { rel: 'preload', href: '/static/css/main.chunk.css', as: 'style' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }
  ];

  preloadLinks.forEach(({ rel, href, as }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (as) link.as = as;
    document.head.appendChild(link);
  });
}

