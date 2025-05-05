import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaCogs, FaCloudDownloadAlt, FaShieldAlt, FaTools, FaMegaport } from 'react-icons/fa';

// Importar imágenes
import paginaWeb from '../assets/img/Pagina1.png';
import software from '../assets/img/Pagina5.png';
import soporte from '../assets/img/mantenimiento4.png';
import consultoria from '../assets/img/pagina7.png';
import sistemasExistentes from '../assets/img/pagina8.png';
import marketingDigital from '../assets/img/pagina9.png';

const ServiciosPage = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppButton />
        
        {/* Header */}
        <header className="page-header">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones personalizadas para impulsar tu negocio en el mundo digital</p>
        </header>
        
        {/* Sección Servicios Principal */}
        <section className="services-detailed">
          <div id="desarrollo-web" className="service-card">
            <img src={paginaWeb} alt="Diseño y Desarrollo Web" />
            <div className="service-content">
              <h3>Diseño y Desarrollo Web</h3>
              <p>Creamos sitios web atractivos, modernos y funcionales que representan perfectamente la identidad de tu marca. Nuestras soluciones web están diseñadas para ofrecer una experiencia de usuario excepcional y optimizada para todos los dispositivos.</p>
              <h4>Tecnologías:</h4>
              <ul>
                <li>Diseño responsive</li>
                <li>HTML5, CSS3, JavaScript</li>
                <li>PHP, Python</li>
                <li>React, Java, Node.js</li>
              </ul>
            </div>
          </div>
          
          <div id="desarrollo-software" className="service-card reverse">
            <img src={software} alt="Desarrollo de Software" />
            <div className="service-content">
              <h3>Desarrollo de Software</h3>
              <p>Desarrollamos soluciones de software a medida que automatizan procesos, mejoran la eficiencia operativa y potencian el crecimiento de tu negocio. Nuestro equipo de desarrollo crea aplicaciones robustas, escalables y seguras adaptadas a tus necesidades específicas.</p>
              <h4>Tecnologías:</h4>
              <ul>
                <li>Aplicaciones de escritorio</li>
                <li>Aplicaciones web</li>
                <li>APIs y microservicios</li>
                <li>Bases de datos SQL y NoSQL</li>
                <li>Integración de sistemas</li>
              </ul>
            </div>
          </div>
          
          <div id="soporte" className="service-card">
            <img src={soporte} alt="Soporte Técnico" />
            <div className="service-content">
              <h3>Soporte Técnico y Mantenimiento</h3>
              <p>Ofrecemos servicios de soporte técnico y mantenimiento continuo para garantizar que tus sistemas funcionen sin interrupciones. Nuestro equipo está disponible para resolver problemas, implementar actualizaciones y optimizar el rendimiento de tus aplicaciones.</p>
              <h4>Servicios:</h4>
              <ul>
                <li>Mantenimiento preventivo y correctivo</li>
                <li>Respaldo y recuperación de datos</li>
                <li>Optimización de rendimiento</li>
                <li>Actualizaciones de seguridad</li>
                <li>Soporte remoto y presencial</li>
              </ul>
            </div>
          </div>

          <div id="consultoria" className="service-card reverse">
            <img src={consultoria} alt="Consultoría IT" />
            <div className="service-content">
              <h3>Consultoría IT</h3>
              <p>Brindamos asesoría especializada para implementar las mejores soluciones tecnológicas para tu negocio. Nuestro equipo de expertos te ayudará a tomar decisiones informadas y estratégicas en tu transformación digital.</p>
              <h4>Servicios:</h4>
              <ul>
                <li>Transformación digital</li>
                <li>Arquitectura de sistemas</li>
                <li>Seguridad informática</li>
                <li>Análisis de datos</li>
                <li>Optimización de procesos</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <img src={sistemasExistentes} alt="Soporte de Sistemas Existentes" />
            <div className="service-content">
              <h3>Soporte de Sistemas Existentes</h3>
              <p>Nos especializamos en el mantenimiento y mejora de sistemas y aplicaciones ya desarrolladas, independientemente de su origen. Optimizamos y actualizamos tus soluciones existentes para mantenerlas funcionando de manera eficiente.</p>
              <h4>Servicios:</h4>
              <ul>
                <li>Mantenimiento de sitios web</li>
                <li>Actualización de sistemas legacy</li>
                <li>Migración de plataformas</li>
                <li>Optimización de código</li>
                <li>Integración con nuevas tecnologías</li>
              </ul>
            </div>
          </div>

          <div className="service-card reverse">
            <img src={marketingDigital} alt="Marketing Digital" />
            <div className="service-content">
              <h3>Marketing Digital</h3>
              <p>Potenciamos tu presencia online con estrategias de marketing digital efectivas. Ayudamos a tu negocio a alcanzar nuevos clientes y aumentar su visibilidad en el mundo digital.</p>
              <h4>Servicios:</h4>
              <ul>
                <li>SEO y SEM</li>
                <li>Marketing en redes sociales</li>
                <li>Email marketing</li>
                <li>Analítica web</li>
                <li>Estrategias de contenido</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Sección de Metodología */}
        <section className="methodology">
          <h2>Nuestra Metodología</h2>
          <div className="methodology-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Descubrimiento y Consultoría</h3>
              <p>Analizamos a fondo tus necesidades, objetivos de negocio y requisitos técnicos para diseñar la solución perfecta</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planificación Estratégica</h3>
              <p>Desarrollamos un plan detallado, definimos tecnologías, recursos y establecemos hitos claros del proyecto</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Diseño UX/UI</h3>
              <p>Creamos prototipos interactivos y diseños centrados en el usuario que garantizan una experiencia excepcional</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Desarrollo Ágil</h3>
              <p>Implementamos la solución con metodologías ágiles, entregas incrementales y feedback continuo</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Testing y Optimización</h3>
              <p>Realizamos pruebas exhaustivas de calidad, seguridad y rendimiento para garantizar una solución robusta</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h3>Despliegue y Soporte</h3>
              <p>Implementamos la solución en producción y proporcionamos soporte continuo para asegurar su éxito</p>
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="cta-section">
          <h2>¿Listo para impulsar tu negocio?</h2>
          <p>Contáctanos hoy mismo para una consulta gratuita</p>
          <Link to="/contacto" className="cta-button">Solicitar Información</Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServiciosPage;
