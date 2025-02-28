import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo de Herederos */}
              <img
                src="/img/logo-footer.jpg"
                alt="Herederos Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full"
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

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Herederos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
