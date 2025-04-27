import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import logo from '../assets/img/logo3.png';

const WhatsAppButton = () => {
  // Componente personalizado con imagen más grande
  const CompanyLogoComponent = () => (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(3)', // Hacer la imagen 1.5 veces más grande
        transformOrigin: 'center',
      }}
    />
  );

  return (
    <div style={{ 
      position: 'fixed', 
      zIndex: 9999, 
      bottom: '20px', 
      right: '20px',
      width: 'auto',
      height: 'auto'
    }}>
      <WhatsAppWidget 
        phoneNumber="+573204340912" 
        companyName="Servicode"
        CompanyIcon={CompanyLogoComponent}
        replyTimeText="Páginas web, software a medida y soporte técnico. 🛠️🛜"
        message="¡Hola! Bienvenido/a a ServiCode 👋💻
                  Gracias por comunicarte con nosotros.

                  En ServiCode nos especializamos en el desarrollo de páginas web 🌐, software a la medida 🧩, soporte técnico remoto y presencial 🛠️, y asesorías tecnológicas personalizadas 🤝.

                  Nuestro equipo está listo para ayudarte a llevar tu idea al siguiente nivel 🚀.
                  ¿En qué podemos ayudarte hoy? Si necesitas más información, no dudes en escribirnos. Te responderemos lo antes posible ⏳.

                  ¡Gracias por confiar en ServiCode, tecnología a tu alcance! ⚙️✨"
        // Estilos personalizados para agrandar elementos
        styles={{
          headerAvatar: {
            width: '50px',  // Aumentar ancho
            height: '50px', // Aumentar altura
            margin: '0 10px',
          }
        }}
      />
    </div>
  );
};

export default WhatsAppButton; 