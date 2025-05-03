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
import { Link } from 'react-router-dom';

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
    { 
      id: 1,
      title: 'Guía SEO 2025: Estrategias de posicionamiento para el nuevo algoritmo de Google', 
      category: 'SEO', 
      date: '15/03/2025',
      image: pagina1, 
      excerpt: 'Los últimos cambios en el algoritmo de Google han revolucionado el SEO. Descubre las estrategias que realmente funcionan para posicionar tu sitio web en 2025.',
      content: 'La optimización para motores de búsqueda ha evolucionado significativamente con la introducción de IA avanzada en los algoritmos de Google. Las métricas tradicionales como el tiempo de permanencia y las palabras clave están dando paso a indicadores más sofisticados como la experiencia del usuario y la relevancia contextual. Implementa estas cinco estrategias clave para mejorar tu posicionamiento: estructura de datos semánticos, optimización para búsqueda por voz, contenido de valor adaptado a la intención del usuario, velocidad de carga optimizada, y experiencia móvil impecable.'
    },
    { 
      id: 2,
      title: 'Mejores prácticas UX: Diseño centrado en el usuario para aumentar conversiones', 
      category: 'UX/UI', 
      date: '20/03/2025',
      image: pagina2, 
      excerpt: 'Descubre cómo mejorar la experiencia de usuario para aumentar conversiones y fidelizar clientes. Técnicas probadas que generan resultados inmediatos.',
      content: 'El diseño centrado en el usuario se ha convertido en un factor determinante para el éxito de cualquier plataforma digital. Nuestro análisis de más de 200 sitios web revela que las mejoras en UX pueden incrementar las tasas de conversión hasta en un 37%. Algunos principios fundamentales incluyen: jerarquía visual clara, formularios simplificados, mensajes de confirmación efectivos, pruebas A/B constantes, y mapas de calor para analizar el comportamiento del usuario. La clave está en eliminar la fricción en cada etapa del embudo de conversión.'
    },
    { 
      id: 3,
      title: 'Seguridad web en 2025: Protocolos avanzados contra nuevas amenazas', 
      category: 'Seguridad', 
      date: '05/04/2025',
      image: pagina3, 
      excerpt: 'Protege tu sitio web contra las nuevas amenazas cibernéticas con estos protocolos efectivos y herramientas de última generación.',
      content: 'El panorama de la seguridad web se ha vuelto extremadamente complejo con la proliferación de ataques sofisticados basados en inteligencia artificial. Los ataques de día cero y las amenazas persistentes avanzadas (APT) representan los mayores desafíos actuales. Es fundamental implementar: autenticación multifactor biométrica, evaluaciones de seguridad continuas, cifrado de extremo a extremo, protección contra ataques DDoS basada en ML, y planes de respuesta a incidentes automatizados. La seguridad ya no es opcional, es un componente esencial de cualquier proyecto digital.'
    },
    { 
      id: 4,
      title: 'Desarrollo web Jamstack: Rendimiento, escalabilidad y seguridad', 
      category: 'Desarrollo', 
      date: '12/04/2025',
      image: pagina4, 
      excerpt: 'Explora las ventajas de la arquitectura Jamstack y cómo puede transformar la forma en que construyes aplicaciones web modernas.',
      content: 'La arquitectura Jamstack ha reconfigurado el desarrollo web moderno ofreciendo beneficios significativos en rendimiento, seguridad y experiencia de desarrollo. Al separar el frontend del backend y aprovechar APIs para la funcionalidad dinámica, los sitios Jamstack logran tiempos de carga hasta un 60% más rápidos que las soluciones tradicionales. Nuestros proyectos recientes utilizando Next.js, Vercel y APIs headless han demostrado una reducción del 40% en los costos de infraestructura y un aumento del 25% en las conversiones gracias a la mejora en velocidad de carga.'
    },
    { 
      id: 5,
      title: 'Inteligencia Artificial en el desarrollo de software: De la teoría a la práctica', 
      category: 'IA', 
      date: '18/04/2025',
      image: mantenimiento, 
      excerpt: 'Descubre cómo integrar herramientas de IA en tu flujo de desarrollo para aumentar productividad y calidad de código.',
      content: 'La integración de IA en el ciclo de desarrollo de software está transformando radicalmente la industria. Desde copilots que generan código hasta sistemas de testing automatizados basados en aprendizaje profundo, las herramientas de IA están redefiniendo la productividad. Nuestros equipos han experimentado un aumento del 35% en velocidad de desarrollo y una reducción del 28% en bugs mediante la adopción de Github Copilot, sistemas de code review con IA y testing automatizado inteligente. La clave está en combinar estas herramientas con procesos de revisión humana para maximizar sus beneficios.'
    },
    { 
      id: 6,
      title: 'Aplicaciones móviles híbridas vs nativas: Guía de selección 2025', 
      category: 'Móvil', 
      date: '25/04/2025',
      image: pagina4, 
      excerpt: 'Análisis comparativo y casos de uso para ayudarte a elegir la mejor estrategia de desarrollo móvil para tu proyecto.',
      content: 'La decisión entre desarrollo nativo o híbrido sigue siendo crucial en 2025, pero con frameworks como React Native y Flutter alcanzando niveles de rendimiento cercanos a lo nativo, la balanza está cambiando. Nuestro análisis de más de 50 aplicaciones desarrolladas en los últimos dos años muestra que las soluciones híbridas modernas ofrecen un 30% de ahorro en tiempo y costos de desarrollo con solo un 5-10% de diferencia en rendimiento respecto a las aplicaciones nativas. Para aplicaciones con requerimientos estándar de UI y funcionalidad, los frameworks híbridos actuales representan la opción más estratégica.'
    }
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
              <Link to="/contacto" className="btn-primary">Solicitar Cotización</Link>
              <Link to="/servicios" className="btn-secondary">Conocer Servicios</Link>
            </div>
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
        {/* Se eliminó la sección de Nuestro Trabajo (portafolio/slider) */}

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
        {/* Se eliminó la sección de Casos de Éxito (testimonios) */}

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
        {/* Se eliminó la sección de Recursos y Artículos (blog) */}

        {/* Banner CTA */}
        <section className="banner-cta">
          <div className="banner-content">
            <h2>¿Listo para transformar tu negocio?</h2>
            <p>Permítenos acompañarte en el camino hacia la innovación digital</p>
            <a href="/contacto" className="btn-cta">
              <span>Comienza tu Proyecto</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* Sección Contacto */}
        {/* Se eliminó la sección de Contáctanos */}

      </div>
      <Footer />
    </>
  );
};

export default LandingPage;