import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import logo from '../assets/img/logo.png';

const WhatsAppButton = () => {
  return (
    <WhatsAppWidget 
      phoneNumber="+573204340912" 
      companyName="Servicode" 
      headerIcon={logo}
      message="¡Hola! Bienvenido/a a ServiCode 👋💻
                Gracias por comunicarte con nosotros.

                En ServiCode nos especializamos en el desarrollo de páginas web 🌐, software a la medida 🧩, soporte técnico remoto y presencial 🛠️, y asesorías tecnológicas personalizadas 🤝.

                Nuestro equipo está listo para ayudarte a llevar tu idea al siguiente nivel 🚀.
                ¿En qué podemos ayudarte hoy? Si necesitas más información, no dudes en escribirnos. Te responderemos lo antes posible ⏳.

                ¡Gracias por confiar en ServiCode, tecnología a tu alcance! ⚙️✨" 
    />
  );
};

export default WhatsAppButton; 