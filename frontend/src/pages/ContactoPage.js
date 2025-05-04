import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhoneAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTimes, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjsConfig';

const ContactoPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const form = useRef();
  
  // Limpiar el estado de envío después de 6 segundos
  useEffect(() => {
    if (submitStatus.message) {
      const timer = setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    // Usar las credenciales del archivo de configuración
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Correo enviado con éxito:', result.text);
        setSubmitStatus({ 
          success: true, 
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' 
        });
        reset(); // Limpia los campos del formulario
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error.text);
        setSubmitStatus({ 
          success: false, 
          message: 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const togglePrivacyPolicy = (e) => {
    e.preventDefault();
    setShowPrivacyPolicy(!showPrivacyPolicy);
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
        
        {/* Modal de Política de Privacidad */}
        {showPrivacyPolicy && (
          <div className="privacy-policy-modal">
            <div className="privacy-policy-content">
              <button className="close-modal" onClick={togglePrivacyPolicy}>
                <FaTimes />
              </button>
              <h2>Política de Privacidad - Servicode</h2>
              
              <div className="policy-text">
                <p><strong>Fecha de última actualización:</strong> Septiembre 2023</p>
                
                <h3>1. Introducción</h3>
                <p>En Servicode, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web y te informará sobre tus derechos de privacidad y cómo la ley te protege.</p>
                
                <h3>2. Datos que recopilamos</h3>
                <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos agrupado de la siguiente manera:</p>
                <ul>
                  <li><strong>Datos de identidad:</strong> Incluye nombre, apellido, nombre de usuario o identificador similar.</li>
                  <li><strong>Datos de contacto:</strong> Incluye dirección de correo electrónico y números de teléfono.</li>
                  <li><strong>Datos técnicos:</strong> Incluye dirección IP, datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria, tipos y versiones de plugins del navegador, sistema operativo y plataforma.</li>
                  <li><strong>Datos de uso:</strong> Incluye información sobre cómo usas nuestro sitio web y servicios.</li>
                </ul>
                
                <h3>3. Cómo utilizamos tus datos</h3>
                <p>Utilizaremos tus datos personales solo cuando la ley nos lo permita. Más comúnmente, usaremos tus datos personales en las siguientes circunstancias:</p>
                <ul>
                  <li>Para procesar y entregar los servicios solicitados.</li>
                  <li>Para gestionar nuestra relación contigo, incluida la notificación de cambios en nuestros términos o política de privacidad.</li>
                  <li>Para administrar y proteger nuestro negocio y este sitio web.</li>
                  <li>Para entregarte contenido y anuncios relevantes para ti y medir o comprender la efectividad de la publicidad que te mostramos.</li>
                </ul>
                
                <h3>4. Seguridad de datos</h3>
                <p>Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan, usen o accedan accidentalmente de manera no autorizada, se modifiquen o divulguen. Además, limitamos el acceso a tus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una necesidad comercial de conocerlos.</p>
                
                <h3>5. Tus derechos legales</h3>
                <p>Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus datos personales, que incluyen:</p>
                <ul>
                  <li>Solicitar acceso a tus datos personales.</li>
                  <li>Solicitar la corrección de tus datos personales.</li>
                  <li>Solicitar la eliminación de tus datos personales.</li>
                  <li>Oponerse al procesamiento de tus datos personales.</li>
                  <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
                  <li>Solicitar la transferencia de tus datos personales.</li>
                  <li>Derecho a retirar el consentimiento.</li>
                </ul>
                
                <h3>6. Cookies</h3>
                <p>Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar todas o algunas cookies, o para que te alerte cuando los sitios web establezcan o accedan a cookies.</p>
                
                <h3>7. Cambios a esta política de privacidad</h3>
                <p>Cualquier cambio que podamos hacer en el futuro a nuestra política de privacidad se publicará en esta página. Por favor, revisa esta política con frecuencia para ver si hay actualizaciones o cambios.</p>
                
                <h3>8. Contacto</h3>
                <p>Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctanos en:</p>
                <p>Email: servicode.net@gmail.com</p>
                <p>Teléfono: +57 320 023 8080</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Sección principal de contacto */}
        <section className="contact-main-section">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Envíanos un mensaje</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo a la brevedad</p>
              
              {submitStatus.message && (
                <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.success ? <FaCheckCircle style={{marginRight: '10px'}} /> : <FaExclamationCircle style={{marginRight: '10px'}} />}
                  {submitStatus.message}
                </div>
              )}
              
              <form className="contact-form" ref={form} onSubmit={handleSubmit(onSubmit)}>
                {/* Fila 1: Nombre y Apellido */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre*</label>
                    <input 
                      id="nombre"
                      name="nombre"
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
                      name="apellido"
                      type="text" 
                      placeholder="Tu apellido" 
                      {...register('apellido', { required: "Este campo es obligatorio" })} 
                    />
                    {errors.apellido && <span className="error-message">{errors.apellido.message}</span>}
                  </div>
                </div>
                
                {/* Fila 2: Email y Teléfono */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico*</label>
                    <input 
                      id="email"
                      name="email"
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
                      name="telefono"
                      type="tel" 
                      placeholder="+57 300 123 4567" 
                      {...register('telefono')} 
                    />
                  </div>
                </div>
                
                {/* Fila 3: Asunto (ancho completo) */}
                <div className="form-row">
                  <div className="form-group full-width">
                    <label htmlFor="asunto">Asunto*</label>
                    <input 
                      id="asunto"
                      name="asunto"
                      type="text" 
                      placeholder="¿Sobre qué quieres hablar?" 
                      {...register('asunto', { required: "Este campo es obligatorio" })} 
                    />
                    {errors.asunto && <span className="error-message">{errors.asunto.message}</span>}
                  </div>
                </div>
                
                {/* Fila 4: Mensaje (ancho completo) */}
                <div className="form-row">
                  <div className="form-group full-width">
                    <label htmlFor="mensaje">Mensaje*</label>
                    <textarea 
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos más sobre tu proyecto o consulta" 
                      rows="6" 
                      {...register('mensaje', { required: "Este campo es obligatorio" })}
                    ></textarea>
                    {errors.mensaje && <span className="error-message">{errors.mensaje.message}</span>}
                  </div>
                </div>
                
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="politica" 
                    name="politica"
                    {...register('politica', { required: "Debes aceptar la política de privacidad" })} 
                  />
                  <label htmlFor="politica">Acepto la <a href="#" onClick={togglePrivacyPolicy}>política de privacidad</a></label>
                  {errors.politica && <span className="error-message">{errors.politica.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
            
            <div className="contact-info-container">
              <div className="contact-info-card">
                <h2>Información de contacto</h2>
                <p>No dudes en contactarnos a través de cualquiera de los siguientes medios:</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-text">
                      <h3>Correo electrónico</h3>
                      <p>servicode.net@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaPhoneAlt />
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
                      <FaClock />
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
                      <FaFacebookF />
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <FaLinkedinIn />
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