import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    // Cierra el menú móvil al hacer clic en un enlace
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-black py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#inicio" className="flex items-center space-x-2">
            <img 
  src="/img/logo-herederos.jpg" 
  alt="Herederos Logo" 
  className="w-20 h-20 object-cover rounded-full"
/>

            <span className="text-xl font-bold">Herederos</span>
          </a>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Inicio</a>
            <a href="#servicios" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Servicios</a>
            <a href="#nosotros" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Nosotros</a>
            <a href="#contacto" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Contacto</a>
          </div>

          {/* Botón para el menú móvil */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#inicio" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Inicio</a>
              <a href="#servicios" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Servicios</a>
              <a href="#nosotros" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Nosotros</a>
              <a href="#contacto" role="button" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
