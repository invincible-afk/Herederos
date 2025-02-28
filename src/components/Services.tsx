import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UtensilsCrossed, 
  Sofa, 
  Users, 
  Sparkles, 
  Music, 
  Camera, 
  Wine, 
  PartyPopper,
  Calendar,
  Lightbulb,
  MessageCircle
} from 'lucide-react';

const services = [
  {
    icon: <UtensilsCrossed className="w-12 h-12" />,
    title: 'Catering Completo',
    description: 'Menús personalizados, cocina gourmet y servicio de primera clase para todo tipo de eventos.'
  },
  {
    icon: <Sofa className="w-12 h-12" />,
    title: 'Mobiliario y Vajilla',
    description: 'Amplia selección de mobiliario elegante y vajilla fina para crear el ambiente perfecto.'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Personal de Servicio',
    description: 'Staff profesional y capacitado: meseros, bartenders, hostess y coordinadores de evento.'
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: 'Decoración',
    description: 'Diseño y ambientación personalizada que transformará tu espacio en algo mágico.'
  },
  {
    icon: <Music className="w-12 h-12" />,
    title: 'Sonido e Iluminación',
    description: 'Equipos profesionales de audio e iluminación para crear la atmósfera perfecta.'
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: 'Organización Integral',
    description: 'Planificación detallada y coordinación completa de tu evento de principio a fin.'
  },
  {
    icon: <Wine className="w-12 h-12" />,
    title: 'Servicio de Bar',
    description: 'Barra libre, coctelería de autor y bebidas premium con bartenders profesionales.'
  },
  {
    icon: <PartyPopper className="w-12 h-12" />,
    title: 'Servicios Complementarios',
    description: 'Glitters, plataforma 360°, espejo mágico, cabina de fotos y más entretenimiento.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = "2645274235"; // Número de WhatsApp sin el "+"
    const message = "¡Hola! Me gustaría recibir información sobre sus servicios para eventos.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Servicios Integrales</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos todo lo necesario para hacer de tu evento una experiencia única y memorable, 
            cuidando cada detalle para superar tus expectativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-primary p-8 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={handleWhatsAppClick}
            className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Cotización
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
