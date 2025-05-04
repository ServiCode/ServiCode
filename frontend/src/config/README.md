# Configuración de EmailJS para el Formulario de Contacto

## Problema: "The Public Key is invalid"

Si estás recibiendo el error:
```
Failed to load resource: the server responded with a status of 400 ()
Error al enviar el correo: The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account
```

Es porque no has configurado correctamente las credenciales de EmailJS.

## Pasos para solucionar el problema

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com](https://www.emailjs.com) y regístrate para obtener una cuenta gratuita
2. La cuenta gratuita permite hasta 200 correos electrónicos al mes

### 2. Configurar un servicio de correo electrónico

1. En el dashboard de EmailJS, ve a "Email Services" (Servicios de correo electrónico)
2. Haz clic en "Add New Service" (Agregar nuevo servicio)
3. Selecciona el proveedor de correo (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de correo electrónico
5. Guarda el servicio y anota el `service_id` que aparece

### 3. Crear una plantilla de correo electrónico

1. En el dashboard de EmailJS, ve a "Email Templates" (Plantillas de correo electrónico)
2. Haz clic en "Create New Template" (Crear nueva plantilla)
3. Usa el editor para diseñar tu correo electrónico, o copia el código del archivo `emailTemplate.html`
4. Incluye las siguientes variables en tu plantilla:
   - `{{nombre}}` - Nombre del remitente
   - `{{apellido}}` - Apellido del remitente
   - `{{email}}` - Correo electrónico del remitente
   - `{{telefono}}` - Teléfono del remitente (opcional)
   - `{{asunto}}` - Asunto del mensaje
   - `{{mensaje}}` - Contenido del mensaje
5. Guarda la plantilla y anota el `template_id` que aparece

### 4. Obtener tu clave pública (Public Key)

1. En el dashboard de EmailJS, ve a "Account" > "API Keys"
2. Copia tu "Public Key"

### 5. Configurar el archivo emailjsConfig.js

Abre el archivo `src/config/emailjsConfig.js` y reemplaza los valores con tus credenciales reales:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123', // Tu ID de servicio real
  templateId: 'template_xyz789', // Tu ID de plantilla real
  publicKey: 'XYZ_your_public_key_123', // Tu clave pública real
};
```

### 6. Probar el formulario

Después de configurar todo correctamente, el formulario debería enviar correos electrónicos sin problemas.

## Resolución de problemas comunes

1. **Error 400 o "Public Key is invalid"** - Asegúrate de que la clave pública es correcta y está actualizada
2. **Error 403 o "Service ID not found"** - Verifica que el ID del servicio sea correcto
3. **Error 404 o "Template ID not found"** - Asegúrate de que el ID de la plantilla sea correcto
4. **No se recibe el correo** - Verifica la configuración de tu servicio de correo y que no esté en la carpeta de spam

Para más información, consulta la [documentación oficial de EmailJS](https://www.emailjs.com/docs/). 