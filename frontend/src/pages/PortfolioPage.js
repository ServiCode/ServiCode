import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// Importar imágenes
import pagina1 from '../assets/img/Pagina1.png';
import pagina2 from '../assets/img/Pagina2.png';
import pagina3 from '../assets/img/Pagina3.png';
import pagina4 from '../assets/img/Pagina4.png';
import mantenimiento from '../assets/img/mantenimiento.jpeg';

const PortfolioPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('todos');

  const portfolioProjects = [
    { 
      id: 1, 
      title: 'E-commerce MiTienda', 
      category: 'web', 
      image: pagina1,
      description: 'Desarrollo de tienda online con pasarela de pagos integrada y gestión de inventario.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    { 
      id: 2, 
      title: 'Software de Gestión Empresarial', 
      category: 'software', 
      image: pagina3,
      description: 'Sistema de gestión a medida para empresa del sector logístico.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker']
    },
    { 
      id: 3, 
      title: 'Migración de Servidores', 
      category: 'soporte', 
      image: mantenimiento,
      description: 'Migración y optimización de infraestructura en la nube para startup tecnológica.',
      technologies: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    { 
      id: 4, 
      title: 'Portal Educativo', 
      category: 'web', 
      image: pagina2,
      description: 'Plataforma de cursos online con sistema de membresías y contenido multimedia.',
      technologies: ['Next.js', 'Firebase', 'Stripe', 'AWS S3']
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppButton />
        <header className="page-header">
          <h1>Nuestro Portafolio</h1>
          <p>Proyectos destacados que reflejan nuestra experiencia y capacidad</p>
        </header>
        <section className="portfolio-gallery-section">
          <div className="portfolio-filter">
            <button 
              className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
              onClick={() => setActiveFilter('todos')}
            >
              Todos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              Web
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'software' ? 'active' : ''}`}
              onClick={() => setActiveFilter('software')}
            >
              Software
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'soporte' ? 'active' : ''}`}
              onClick={() => setActiveFilter('soporte')}
            >
              Soporte
            </button>
          </div>
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="portfolio-project">
                <div 
                  className="project-image" 
                  onClick={() => { setSelectedImage(portfolioProjects.indexOf(project)); setLightboxOpen(true); }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span>Ver Detalles</span>
                  </div>
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category === 'web' ? 'Desarrollo Web' : 
                    project.category === 'software' ? 'Software' : 'Soporte Técnico'}</span>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={portfolioProjects.map(item => ({ src: item.image }))}
              index={selectedImage}
            />
          )}
        </section>
        
        {/* Sección de Estadísticas */}
        <section className="stats-section">
          <h2>Nuestros Números</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-text">Proyectos completados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-text">Clientes satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-text">Años de experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-text">Compromiso</div>
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="cta-section">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Estamos listos para convertir tus ideas en realidad</p>
          <a href="/#contacto" className="cta-button">Contáctanos</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage; 