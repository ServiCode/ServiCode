import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// Importar imágenes
import paginaWeb from '../assets/img/Pagina1.png';
import software from '../assets/img/Pagina5.png';
import soporte from '../assets/img/mantenimiento4.png';
import consultoria from '../assets/img/pagina7.png';
import sistemasExistentes from '../assets/img/pagina8.png';
import marketingDigital from '../assets/img/pagina9.png';

const PortfolioPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('todos');

  const portfolioProjects = [
    { 
      id: 1, 
      title: 'E-commerce Premium', 
      category: 'web', 
      image: paginaWeb,
      description: 'Plataforma de comercio electrónico completa con integración de pagos, gestión de inventario y panel administrativo personalizado.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS']
    },
    { 
      id: 2, 
      title: 'Sistema ERP Empresarial', 
      category: 'software', 
      image: software,
      description: 'Software de gestión empresarial integral para manejo de recursos, contabilidad, inventario y recursos humanos.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'React']
    },
    { 
      id: 3, 
      title: 'Soporte IT Corporativo', 
      category: 'soporte', 
      image: soporte,
      description: 'Servicio de soporte técnico 24/7 para empresa multinacional, incluyendo mantenimiento preventivo y correctivo.',
      technologies: ['ServiceNow', 'Docker', 'Kubernetes', 'Terraform']
    },
    { 
      id: 4, 
      title: 'Consultoría Digital', 
      category: 'consultoria', 
      image: consultoria,
      description: 'Asesoramiento en transformación digital para cadena de retail, incluyendo estrategia tecnológica y optimización de procesos.',
      technologies: ['Business Intelligence', 'Power BI', 'Data Analytics', 'Cloud Architecture']
    },
    { 
      id: 5, 
      title: 'Modernización Legacy', 
      category: 'sistemas', 
      image: sistemasExistentes,
      description: 'Actualización y migración de sistema legacy bancario a arquitectura moderna y escalable.',
      technologies: ['Python', 'Microservices', 'Azure', 'CI/CD', 'Docker']
    },
    { 
      id: 6, 
      title: 'Marketing Digital 360°', 
      category: 'marketing', 
      image: marketingDigital,
      description: 'Estrategia integral de marketing digital para empresa de servicios, incluyendo SEO, SEM y redes sociales.',
      technologies: ['Google Analytics', 'SEO', 'Meta Ads', 'Email Marketing']
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
            <button 
              className={`filter-btn ${activeFilter === 'consultoria' ? 'active' : ''}`}
              onClick={() => setActiveFilter('consultoria')}
            >
              Consultoría
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'sistemas' ? 'active' : ''}`}
              onClick={() => setActiveFilter('sistemas')}
            >
              Sistemas
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`}
              onClick={() => setActiveFilter('marketing')}
            >
              Marketing
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
                  <span className="project-category">
                    {project.category === 'web' ? 'Desarrollo Web' : 
                     project.category === 'software' ? 'Software' : 
                     project.category === 'soporte' ? 'Soporte Técnico' :
                     project.category === 'consultoria' ? 'Consultoría IT' :
                     project.category === 'sistemas' ? 'Sistemas Existentes' :
                     'Marketing Digital'}
                  </span>
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