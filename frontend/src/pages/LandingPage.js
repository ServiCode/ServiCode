import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import '../assets/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaCogs, FaCloudDownloadAlt, FaShieldAlt } from 'react-icons/fa';

// Importar imágenes locales
import pagina1 from '../assets/img/Pagina1.png';
import pagina2 from '../assets/img/Pagina2.png';
import pagina3 from '../assets/img/Pagina3.png';
import pagina4 from '../assets/img/Pagina4.png';
import mantenimiento from '../assets/img/mantenimiento5.jpeg';
import ceo from '../assets/img/ceo1.jpeg';  
import landing from '../assets/img/landing.jpg';
import logo from '../assets/img/logo.png';

const LandingPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { register, handleSubmit } = useForm();

  const portfolioItems = [
    { id: 1, image: pagina1 },
    { id: 2, image: pagina3 },
    { id: 3, image: mantenimiento },
    { id: 4, image: pagina2 }
  ];

  const testimonios = [
    { name: 'Juan Pérez', role: 'CEO - Logística Express', text: 'Excelente servicio y atención. El equipo de Servicode transformó nuestra visión en una solución digital impecable que ha incrementado nuestra eficiencia operativa en un 45%.', photo: ceo },
    { name: 'María Rodríguez', role: 'CTO - InnovateTech', text: 'Profesionales calificados con un enfoque innovador. Han superado todas nuestras expectativas al entregar el proyecto antes del plazo previsto y con características adicionales.', photo: ceo },
  ];

  const blogPosts = [
    { title: 'Guía SEO 2025', category: 'SEO', date: '15/03/2025', excerpt: 'Optimiza tu presencia online con estas estrategias avanzadas para el posicionamiento en buscadores.' },
    { title: 'Mejores prácticas UX', category: 'UX', date: '20/03/2025', excerpt: 'Descubre cómo mejorar la experiencia de usuario para aumentar conversiones y fidelizar clientes.' },
    { title: 'Seguridad web en 2025', category: 'Seguridad', date: '05/04/2025', excerpt: 'Protege tu sitio web contra las nuevas amenazas cibernéticas con estos protocolos efectivos.' },
  ];

  const tecnologias = [
    { nombre: 'Frontend', icon: <FaLaptopCode />, items: ['React', 'Angular', 'Vue.js', 'HTML5/CSS3', 'JavaScript/TypeScript'] },
    { nombre: 'Backend', icon: <FaServer />, items: ['Node.js', 'Python', 'Java', 'PHP', '.NET'] },
    { nombre: 'Mobile', icon: <FaMobileAlt />, items: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin'] },
    { nombre: 'Bases de Datos', icon: <FaDatabase />, items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server', 'Firebase'] },
  ];

  const procesos = [
    { id: 1, titulo: 'Descubrimiento', descripcion: 'Exploramos tus necesidades, objetivos y expectativas para comprender completamente tu visión.' },
    { id: 2, titulo: 'Análisis y Planificación', descripcion: 'Definimos el alcance, elaboramos la arquitectura de la solución y establecemos un cronograma claro.' },
    { id: 3, titulo: 'Diseño', descripcion: 'Creamos prototipos interactivos y establecemos la identidad visual que mejor represente tu marca.' },
    { id: 4, titulo: 'Desarrollo', descripcion: 'Implementamos la solución utilizando metodologías ágiles y mejores prácticas de la industria.' },
    { id: 5, titulo: 'Pruebas y QA', descripcion: 'Realizamos pruebas exhaustivas para garantizar un producto final sin errores y de alta calidad.' },
    { id: 6, titulo: 'Implementación', descripcion: 'Desplegamos tu solución en producción con configuración optimizada para rendimiento y seguridad.' },
    { id: 7, titulo: 'Soporte Continuo', descripcion: 'Ofrecemos mantenimiento, actualizaciones y mejoras para asegurar el éxito a largo plazo.' }
  ];

  const estadisticas = [
    { valor: '98%', etiqueta: 'Clientes Satisfechos' },
    { valor: '120+', etiqueta: 'Proyectos Completados' },
    { valor: '5', etiqueta: 'Años de Experiencia' },
    { valor: '24/7', etiqueta: 'Soporte Técnico' },
  ];

  const preguntas = [
    { 
      id: 1, 
      pregunta: '¿Cuánto tiempo toma desarrollar un sitio web o aplicación?', 
      respuesta: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede tomar entre 2-4 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones web pueden requerir 2-3 meses. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado basado en tus requerimientos específicos.' 
    },
    { 
      id: 2, 
      pregunta: '¿Cómo garantizan la calidad de sus servicios?', 
      respuesta: 'Implementamos un riguroso proceso de control de calidad que incluye pruebas automatizadas, revisiones de código, evaluaciones de usabilidad y pruebas de compatibilidad en múltiples dispositivos. Además, seguimos las mejores prácticas de la industria y mantenemos nuestras habilidades actualizadas con las últimas tecnologías y tendencias.' 
    },
    { 
      id: 3, 
      pregunta: '¿Ofrecen mantenimiento y soporte después de finalizar el proyecto?', 
      respuesta: 'Sí, ofrecemos diversos planes de mantenimiento y soporte post-lanzamiento para asegurar que tu solución siga funcionando óptimamente. Estos incluyen actualizaciones regulares, monitoreo de seguridad, copias de seguridad, y asistencia técnica para resolver cualquier problema que pueda surgir.' 
    },
    { 
      id: 4, 
      pregunta: '¿Cuál es su proceso de trabajo con los clientes?', 
      respuesta: 'Seguimos una metodología ágil que prioriza la comunicación constante y la entrega incremental. Comenzamos con una fase de descubrimiento para entender tus necesidades, seguida de planificación, diseño, desarrollo iterativo con revisiones frecuentes, pruebas exhaustivas, implementación y soporte continuo. Te mantendremos informado durante todo el proceso con reuniones regulares y acceso a nuestro sistema de gestión de proyectos.' 
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ],
    beforeChange: () => {
      document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.display = 'flex';
        item.style.justifyContent = 'center';
        item.style.alignItems = 'center';
      });
    },
    afterChange: () => {
      setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach(item => {
          item.style.display = 'flex';
          item.style.justifyContent = 'center';
          item.style.alignItems = 'center';
        });
      }, 100);
    }
  };

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppButton />

        {/* Hero Banner */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Transformamos Ideas en Soluciones Digitales</h1>
            <p>Desarrollo web, software a medida y soporte técnico para llevar tu negocio al siguiente nivel</p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">Solicitar Cotización</a>
              <a href="#servicios" className="btn-secondary">Conocer Servicios</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={landing} alt="Servicode - Soluciones Digitales" />
          </div>
        </section>

        {/* Sección Estadísticas */}
        <section className="stats-section">
          <div className="stats-container">
            {estadisticas.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.valor}</h3>
                <p>{stat.etiqueta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Servicios */}
        <section id="servicios" aria-labelledby="services-title" className="services-section">
          <h2 id="services-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones tecnológicas completas para todas tus necesidades digitales</p>
          
          <div className="services-grid">
            <div className="service-box">
              <div className="service-icon"><FaCode /></div>
              <h3>Desarrollo Web</h3>
              <p>Sitios web responsivos, e-commerce y aplicaciones web optimizadas para conversión.</p>
              <ul>
                <li>Sitios corporativos</li>
                <li>Tiendas online</li>
                <li>Landing pages</li>
                <li>Blogs y portales</li>
              </ul>
              <a href="/servicios" className="service-link">Más información →</a>
            </div>
            
            <div className="service-box">
              <div className="service-icon"><FaCogs /></div>
              <h3>Software a Medida</h3>
              <p>Desarrollamos soluciones personalizadas que automatizan y optimizan tus procesos de negocio.</p>
              <ul>
                <li>ERP y CRM</li>
                <li>Gestión de inventarios</li>
                <li>Aplicaciones móviles</li>
                <li>Integración de sistemas</li>
              </ul>
              <a href="/servicios" className="service-link">Más información →</a>
            </div>
            
            <div className="service-box">
              <div className="service-icon"><FaShieldAlt /></div>
              <h3>Soporte Técnico</h3>
              <p>Asistencia técnica remota y presencial para mantener tus sistemas funcionando sin interrupciones.</p>
              <ul>
                <li>Mantenimiento preventivo</li>
                <li>Actualizaciones de seguridad</li>
                <li>Optimización de rendimiento</li>
                <li>Respaldo de datos</li>
              </ul>
              <a href="/servicios" className="service-link">Más información →</a>
            </div>
            
            <div className="service-box">
              <div className="service-icon"><FaCloudDownloadAlt /></div>
              <h3>Consultoría IT</h3>
              <p>Asesoría especializada para implementar las mejores soluciones tecnológicas para tu negocio.</p>
              <ul>
                <li>Transformación digital</li>
                <li>Arquitectura de sistemas</li>
                <li>Seguridad informática</li>
                <li>Análisis de datos</li>
              </ul>
              <a href="/servicios" className="service-link">Más información →</a>
            </div>
          </div>
        </section>

        {/* Sección Portafolio con slider */}
        <section id="portfolio" aria-labelledby="portfolio-title" className="portfolio-section">
          <h2 id="portfolio-title">Nuestro Trabajo</h2>
          <p className="section-subtitle">Proyectos destacados que demuestran nuestro compromiso con la excelencia</p>
          
          <Slider {...sliderSettings}>
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="portfolio-item" 
                  onClick={() => { setSelectedImage(index); setLightboxOpen(true); }}>
                <img 
                  src={item.image} 
                  alt={`Proyecto ${item.id}`} 
                  loading="lazy" 
                  onLoad={(e) => e.target.classList.add('loaded')} 
                />
              </div>
            ))}
          </Slider>
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={portfolioItems.map(item => ({ src: item.image }))}
              index={selectedImage}
            />
          )}
          
          <div className="portfolio-cta">
            <a href="/portfolio" className="btn-primary">Ver Todos los Proyectos</a>
          </div>
        </section>

        {/* Sección Proceso de Trabajo */}
        <section className="process-section">
          <h2>Nuestro Proceso</h2>
          <p className="section-subtitle">Metodología clara y eficiente para el éxito de cada proyecto</p>
          
          <div className="process-timeline">
            {procesos.map((proceso, index) => (
              <div key={proceso.id} className="process-step">
                <div className="process-number">{proceso.id}</div>
                <div className="process-content">
                  <h3>{proceso.titulo}</h3>
                  <p>{proceso.descripcion}</p>
                </div>
                {index < procesos.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </section>

        {/* Sección Tecnologías */}
        <section className="tech-section">
          <h2>Tecnologías que Dominamos</h2>
          <p className="section-subtitle">Herramientas y frameworks de última generación para tu proyecto</p>
          
          <div className="tech-grid">
            {tecnologias.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.nombre}</h3>
                <ul className="tech-list">
                  {tech.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Testimonios */}
        <section className="testimonials" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title">Casos de Éxito</h2>
          <p className="section-subtitle">Lo que dicen nuestros clientes sobre nuestro trabajo</p>
          
          <div className="testimonial-carousel">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonio.photo} alt={testimonio.name} />
                <blockquote>
                  <p>{testimonio.text}</p>
                  <cite>- {testimonio.name}, {testimonio.role}</cite>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="clients-logos">
            <h3>Empresas que confían en nosotros</h3>
            <div className="logo-grid">
              <div className="client-logo"><img src={logo} alt="Cliente 1" /></div>
              <div className="client-logo"><img src={logo} alt="Cliente 2" /></div>
              <div className="client-logo"><img src={logo} alt="Cliente 3" /></div>
              <div className="client-logo"><img src={logo} alt="Cliente 4" /></div>
              <div className="client-logo"><img src={logo} alt="Cliente 5" /></div>
            </div>
          </div>
        </section>

        {/* Sección FAQ */}
        <section className="faq-section">
          <h2>Preguntas Frecuentes</h2>
          <p className="section-subtitle">Respuestas a las dudas más comunes sobre nuestros servicios</p>
          
          <div className="accordion">
            {preguntas.map((pregunta) => (
              <div key={pregunta.id} className={`accordion-item ${activeAccordion === pregunta.id ? 'active' : ''}`}>
                <div 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(pregunta.id)}
                >
                  <h3>{pregunta.pregunta}</h3>
                  <span className="accordion-icon">{activeAccordion === pregunta.id ? '−' : '+'}</span>
                </div>
                <div className={`accordion-content ${activeAccordion === pregunta.id ? 'active' : ''}`}>
                  <p>{pregunta.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Blog */}
        <section aria-labelledby="blog-title" className="blog-section">
          <h2 id="blog-title">Recursos y Artículos</h2>
          <p className="section-subtitle">Información valiosa sobre tecnología y tendencias digitales</p>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post">
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <time>{post.date}</time>
                </div>
                <a href="#" className="read-more">Leer más →</a>
              </article>
            ))}
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Suscríbete a nuestro blog</h3>
            <p>Recibe en tu correo las últimas tendencias y noticias del mundo digital</p>
            <div className="form-group">
              <input type="email" {...register('email')} placeholder="Tu correo electrónico" />
              <button type="submit">Suscribir</button>
            </div>
          </form>
        </section>

        {/* Banner CTA */}
        <section className="banner-cta">
          <div className="banner-content">
            <h2>¿Listo para transformar tu negocio?</h2>
            <p>Permítenos acompañarte en el camino hacia la innovación digital</p>
            <a href="#contacto" className="btn-cta">Comienza tu Proyecto</a>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Contáctanos</h2>
          <p>Estamos aquí para ayudarte a convertir tus ideas en realidad. Contáctanos para comenzar tu proyecto.</p>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-method">
                <h3>Información de Contacto</h3>
                <p><strong>Email:</strong> servicode.net@gmail.com</p>
                <p><strong>Teléfono:</strong> +57 320 023 8080</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM</p>
              </div>
              <div className="contact-office">
                <h3>Oficina Principal</h3>
                <p>Bogotá, Colombia</p>
                <p>También atendemos remotamente en todo el país</p>
              </div>
              <div className="social-links">
                <h3>Síguenos</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  required 
                  {...register('nombre', { required: true })} 
                />
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  required 
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
              <input 
                type="text" 
                placeholder="Asunto" 
                {...register('asunto')} 
              />
              <textarea 
                placeholder="Mensaje" 
                rows="5" 
                required 
                {...register('mensaje', { required: true })}
              ></textarea>
              <button type="submit" className="btn-submit">Enviar mensaje</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;