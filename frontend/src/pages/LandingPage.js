import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles.css';
import 'react-whatsapp-widget/dist/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importar imágenes locales
import web from '../assets/img/web.jpg';
import web2 from '../assets/img/web2.jpg';
import software from '../assets/img/software.jpg';
import soporte from '../assets/img/soporte.jpg';
import client from '../assets/img/client.png';
import client2 from '../assets/img/client2.png';

const LandingPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('todos');
  const { register, handleSubmit } = useForm();

  const portfolioItems = [
    { id: 1, category: 'web', image: web },
    { id: 2, category: 'software', image: software },
    { id: 3, category: 'soporte', image: soporte },
    { id: 4, category: 'web', image: web2 }
  ];

  const testimonios = [
    { name: 'Cliente 1', role: 'CEO', text: 'Excelente servicio y atención. El equipo de Servicode transformó nuestra visión en una solución digital impecable.', photo: client },
    { name: 'Cliente 2', role: 'CTO', text: 'Profesionales calificados con un enfoque innovador. Han superado todas nuestras expectativas.', photo: client2 },
  ];

  const blogPosts = [
    { title: 'Guía SEO 2025', category: 'SEO', date: '15/03/2025' },
    { title: 'Mejores prácticas UX', category: 'UX', date: '20/03/2025' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, centerPadding: '5%' } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: '10%' } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } }
    ]
  };

  const onSubmit = (data) => {
    // Integración con Mailchimp
    console.log('Formulario enviado:', data);
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppWidget phoneNumber="+57320023808" message="¿En qué podemos ayudarte?" />

        {/* Sección Portafolio con slider ampliado */}
        <section id="portfolio" aria-labelledby="portfolio-title" className="portfolio-section">
          <h2 id="portfolio-title">Nuestro Trabajo</h2>
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
          </div>
          <Slider {...sliderSettings}>
            {portfolioItems
              .filter(item => activeFilter === 'todos' || item.category === activeFilter)
              .map((item, index) => (
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
        </section>

        {/* Sección Servicios */}
        <section id="servicios" aria-labelledby="services-title">
          <h2 id="services-title">Nuestros Servicios</h2>
          <div className="services-grid">
            {/* ... Mismo contenido de servicios anterior ... */}
          </div>
        </section>

        {/* Sección Testimonios */}
        <section className="testimonials" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title">Casos de Éxito</h2>
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
        </section>

        {/* Sección Blog */}
        <section aria-labelledby="blog-title">
          <h2 id="blog-title">Recursos y Artículos</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-post">
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <time>{post.date}</time>
                </div>
              </article>
            ))}
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} placeholder="Suscríbete a nuestro blog" />
            <button type="submit">Suscribir</button>
          </form>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Contáctanos</h2>
          <p>Estamos aquí para ayudarte a convertir tus ideas en realidad. Contáctanos para comenzar tu proyecto.</p>
          
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
            <textarea 
              placeholder="Mensaje" 
              rows="5" 
              required 
              {...register('mensaje', { required: true })}
            ></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;