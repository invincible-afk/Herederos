import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
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
    <section id="contacto" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos listos para hacer de tu próximo evento una experiencia inolvidable.
            Contáctanos y cuéntanos sobre tu proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Ubicación</h4>
                <p className="text-gray-400">Ciudad de San Juan, Argentina</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Teléfono</h4>
                <p className="text-gray-400">+54 (264) 527-4235</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-400">contactoherederos@gmail.com</p>
              </div>
            </div>
            
            <div className="pt-6">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </button>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-black/50 p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Cuéntanos sobre tu evento..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-secondary text-primary py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
