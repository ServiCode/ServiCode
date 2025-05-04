/**
 * Configuración de EmailJS para el formulario de contacto
 * 
 * INSTRUCCIONES:
 * 1. Crea una cuenta en https://www.emailjs.com si aún no tienes una
 * 2. Configura un servicio de correo electrónico en Email Services
 * 3. Crea una plantilla de correo electrónico en Email Templates
 * 4. Obtén tu Public Key en Account > API Keys
 * 5. Reemplaza los valores a continuación con tus credenciales reales
 */

// Reemplaza estos valores con tus credenciales reales
export const EMAILJS_CONFIG = {
  serviceId: 'service_id',  // Ejemplo: 'service_abc123'
  templateId: 'template_id', // Ejemplo: 'template_xyz789'
  publicKey: 'public_key',  // Ejemplo: 'XYZ_your_public_key_123'
};

/**
 * Variables disponibles en la plantilla de EmailJS:
 * - {{nombre}} - Nombre del remitente
 * - {{apellido}} - Apellido del remitente
 * - {{email}} - Correo electrónico del remitente
 * - {{telefono}} - Teléfono del remitente (opcional)
 * - {{asunto}} - Asunto del mensaje
 * - {{mensaje}} - Contenido del mensaje
 */ 