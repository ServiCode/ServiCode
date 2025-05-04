# Configuración de EmailJS para el Formulario de Contacto

Para configurar el envío de correos electrónicos desde el formulario de contacto, sigue estos pasos:

## 1. Crear una cuenta en EmailJS

1. Visita [https://www.emailjs.com](https://www.emailjs.com) y regístrate para obtener una cuenta gratuita
2. La cuenta gratuita permite hasta 200 correos electrónicos al mes

## 2. Configurar un servicio de correo electrónico

1. En el dashboard de EmailJS, ve a "Email Services" (Servicios de correo electrónico)
2. Haz clic en "Add New Service" (Agregar nuevo servicio)
3. Selecciona el proveedor de correo (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de correo electrónico
5. Guarda el servicio y anota el `service_id` (se usará en el código)

## 3. Crear una plantilla de correo electrónico

1. En el dashboard de EmailJS, ve a "Email Templates" (Plantillas de correo electrónico)
2. Haz clic en "Create New Template" (Crear nueva plantilla)
3. Usa el editor para diseñar tu correo electrónico
4. Incluye las siguientes variables en tu plantilla:
   - `{{nombre}}` - Nombre del remitente
   - `{{apellido}}` - Apellido del remitente
   - `{{email}}` - Correo electrónico del remitente
   - `{{telefono}}` - Teléfono del remitente (opcional)
   - `{{asunto}}` - Asunto del mensaje
   - `{{mensaje}}` - Contenido del mensaje
5. Guarda la plantilla y anota el `template_id` (se usará en el código)

## 4. Configurar el código

En el archivo `ContactoPage.js`, actualiza las siguientes variables con los valores que anotaste:

```javascript
const serviceId = 'service_id'; // Reemplazar con tu ID de servicio
const templateId = 'template_id'; // Reemplazar con tu ID de plantilla
const publicKey = 'public_key'; // Reemplazar con tu clave pública de EmailJS
```

Puedes encontrar tu clave pública (public key) en la sección "Account" > "API Keys" en el dashboard de EmailJS.

## 5. HTML Sugerido para la Plantilla

Puedes usar el siguiente HTML como base para tu plantilla de correo:

```html
<h2>Nuevo mensaje de contacto desde Servicode</h2>

<p>Has recibido un nuevo mensaje a través del formulario de contacto de tu sitio web:</p>

<h3>Información del contacto:</h3>
<ul>
  <li><strong>Nombre:</strong> {{nombre}} {{apellido}}</li>
  <li><strong>Email:</strong> {{email}}</li>
  <li><strong>Teléfono:</strong> {{telefono}}</li>
  <li><strong>Asunto:</strong> {{asunto}}</li>
</ul>

<h3>Mensaje:</h3>
<p>{{mensaje}}</p>

<hr>
<p><small>Este mensaje fue enviado desde el formulario de contacto en Servicode.net</small></p>
```

## 6. Pruebas

Después de configurar todo, envía un formulario de prueba para verificar que todo funcione correctamente. 