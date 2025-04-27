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

// Importar imágenes locales
import pagina1 from '../assets/img/Pagina1.png';
import pagina2 from '../assets/img/Pagina2.png';
import pagina3 from '../assets/img/Pagina3.png';
import pagina4 from '../assets/img/Pagina4.png';
import mantenimiento from '../assets/img/mantenimiento5.jpeg';
import ceo from '../assets/img/ceo1.jpeg';
import landing from '../assets/img/landing.jpg';

const LandingPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { register, handleSubmit } = useForm();

  const portfolioItems = [
    { id: 1, image: pagina1 },
    { id: 2, image: pagina3 },
    { id: 3, image: mantenimiento },
    { id: 4, image: pagina2 }
  ];

  const testimonios = [
    { name: 'Cliente 1', role: 'CEO', text: 'Excelente servicio y atención. El equipo de Servicode transformó nuestra visión en una solución digital impecable.', photo: ceo },
    { name: 'Cliente 2', role: 'CTO', text: 'Profesionales calificados con un enfoque innovador. Han superado todas nuestras expectativas.', photo: ceo },
  ];

  const blogPosts = [
    { title: 'Guía SEO 2025', category: 'SEO', date: '15/03/2025' },
    { title: 'Mejores prácticas UX', category: 'UX', date: '20/03/2025' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } }
    ],
    afterChange: (current) => {
      document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.display = 'flex';
        item.style.justifyContent = 'center';
        item.style.alignItems = 'center';
      });
    }
  };

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppButton />

        {/* Sección Portafolio con slider simplificado */}
        <section id="portfolio" aria-labelledby="portfolio-title" className="portfolio-section">
          <h2 id="portfolio-title">Nuestro Trabajo</h2>
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