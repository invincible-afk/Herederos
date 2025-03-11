import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Eye } from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    if (!localStorage.getItem('visited')) {
      const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
      localStorage.setItem('visitorCount', newCount);
      localStorage.setItem('visited', 'true'); // Marca como visitado
      setVisitorCount(newCount);
    } else {
      setVisitorCount(storedCount ? parseInt(storedCount, 10) : 1);
    }
  }, []);

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/img/logo-footer.jpg"
                alt="Herederos Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transformando ideas en experiencias inolvidables.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/p/DGj8pcEOE-G/?igsh=MW1nZjE0M2xwZDJ1cw==" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-secondary transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-secondary transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Producción de Eventos</li>
              <li className="text-gray-400">Producción Audiovisual</li>
              <li className="text-gray-400">Gestión de Venues</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Ciudad de San Juan, Argentina</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+54 (264) 527-4235</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary" />
                <span>contactoherederos@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Herederos. Todos los derechos reservados.
          </p>
          <div className="flex justify-center items-center text-gray-600 text-sm mt-2">
            <Eye className="w-4 h-4 mr-1 text-gray-500" />
            <span>{visitorCount}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
