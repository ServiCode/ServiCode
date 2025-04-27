import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useForm } from 'react-hook-form';

const ContactoPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <WhatsAppButton />
        
        {/* Header */}
        <header className="page-header">
          <h1>Contáctanos</h1>
          <p>Estamos listos para convertir tus ideas en soluciones digitales de calidad</p>
        </header>
        
        {/* Sección principal de contacto */}
        <section className="contact-main-section">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Envíanos un mensaje</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo a la brevedad</p>
              
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre*</label>
                    <input 
                      id="nombre"
                      type="text" 
                      placeholder="Tu nombre" 
                      {...register('nombre', { required: "Este campo es obligatorio" })} 
                    />
                    {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido*</label>
                    <input 
                      id="apellido"
                      type="text" 
                      placeholder="Tu apellido" 
                      {...register('apellido', { required: "Este campo es obligatorio" })} 
                    />
                    {errors.apellido && <span className="error-message">{errors.apellido.message}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico*</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="correo@ejemplo.com" 
                      {...register('email', { 
                        required: "Este campo es obligatorio",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Formato de correo inválido"
                        }
                      })} 
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input 
                      id="telefono"
                      type="tel" 
                      placeholder="+57 300 123 4567" 
                      {...register('telefono')} 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="asunto">Asunto*</label>
                  <input 
                    id="asunto"
                    type="text" 
                    placeholder="¿Sobre qué quieres hablar?" 
                    {...register('asunto', { required: "Este campo es obligatorio" })} 
                  />
                  {errors.asunto && <span className="error-message">{errors.asunto.message}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje*</label>
                  <textarea 
                    id="mensaje"
                    placeholder="Cuéntanos más sobre tu proyecto o consulta" 
                    rows="6" 
                    {...register('mensaje', { required: "Este campo es obligatorio" })}
                  ></textarea>
                  {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}
                </div>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="politica" 
                    {...register('politica', { required: "Debes aceptar la política de privacidad" })} 
                  />
                  <label htmlFor="politica">Acepto la <a href="#">política de privacidad</a></label>
                  {errors.politica && <span className="error-message">{errors.politica.message}</span>}
                </div>
                
                <button type="submit" className="submit-button">Enviar mensaje</button>
              </form>
            </div>
            
            <div className="contact-info-container">
              <div className="contact-info-card">
                <h2>Información de contacto</h2>
                <p>No dudes en contactarnos a través de cualquiera de los siguientes medios:</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Correo electrónico</h3>
                      <p>servicode.net@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Teléfonos</h3>
                      <p>+57 320 023 8080</p>
                      <p>+57 322 714 3436</p>
                      <p>+57 324 423 0348</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-text">
                      <h3>Horario de atención</h3>
                      <p>Lunes a viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-media">
                  <h3>Síguenos en redes</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de ubicación */}
        <section className="location-section">
          <h2>Nuestra ubicación</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51141489705!2d-74.2478960800545!3d4.648618591062251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1652412056211!5m2!1ses!2sco" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Servicode"
            ></iframe>
          </div>
        </section>
        
        {/* Sección FAQ */}
        <section className="faq-section">
          <h2>Preguntas frecuentes</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>¿Cuál es el tiempo estimado para desarrollar un sitio web?</h3>
              <p>El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede tomar entre 2-4 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones web pueden requerir 2-3 meses o más.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Qué información necesitan para comenzar mi proyecto?</h3>
              <p>Para iniciar, necesitamos conocer tus objetivos, público objetivo, funcionalidades deseadas, preferencias de diseño y cualquier material visual como logos o imágenes. Una vez tengamos esta información, podemos proporcionarte un presupuesto detallado.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Ofrecen mantenimiento después de finalizar el proyecto?</h3>
              <p>Sí, ofrecemos varios planes de mantenimiento mensual que incluyen actualizaciones, soporte técnico, copias de seguridad y monitoreo de seguridad para asegurar que tu sitio funcione correctamente.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Puedo actualizar mi sitio web yo mismo después de que lo desarrollen?</h3>
              <p>Absolutamente. Desarrollamos con sistemas de gestión de contenido intuitivos y proporcionamos capacitación para que puedas actualizar contenido como textos, imágenes y productos sin necesidad de conocimientos técnicos.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactoPage; 