import React, { memo, lazy, Suspense } from 'react';
import 'react-whatsapp-widget/dist/index.css';
import logo from '../assets/img/logo3.png';

// Carga diferida del widget de WhatsApp con manejo correcto de la importación
const WhatsAppWidget = lazy(() => 
  import('react-whatsapp-widget').then(module => ({ default: module.WhatsAppWidget }))
);

const WhatsAppButton = memo(() => {
  // Componente de carga para el widget
  const LoadingWidget = () => (
    <div style={{ width: 70, height: 70 }} />
  );

  // Componente del logo optimizado y memoizado
  const CompanyLogoComponent = memo(() => (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(3)',
        transformOrigin: 'center',
      }}
    />
  ));

  CompanyLogoComponent.displayName = 'CompanyLogoComponent';

  return (
    <div style={{ 
      position: 'fixed', 
      zIndex: 9999, 
      bottom: '20px', 
      right: '20px',
      width: 'auto',
      height: 'auto'
    }}>
      <Suspense fallback={<LoadingWidget />}>
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
          styles={{
            headerAvatar: {
              width: '50px',
              height: '50px',
              margin: '0 10px',
            }
          }}
        />
      </Suspense>
    </div>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;