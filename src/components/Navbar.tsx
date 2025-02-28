import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react'; 

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 

  const handleNavLinkClick = () => { 
    if (isOpen) { 
      setIsOpen(false); 
    } 
  }; 

  return ( 
    <nav className="fixed w-full z-50 bg-black py-4 transition-all duration-300"> 
      <div className="container mx-auto px-4"> 
        <div className="flex justify-between items-center"> 
          <a href="#inicio" className="flex items-center space-x-4">
            {/* Logo más grande, adaptable */}
            <img  
              src="/img/logo-herederos.jpg"  
              alt="Herederos Logo"  
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full"
            />

            {/* Imagen del nombre, adaptable */}
            <img  
              src="/img/herederos-productora.jpg"  
              alt="Herederos"  
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Menú de escritorio */} 
          <div className="hidden md:flex space-x-8"> 
            <a href="#inicio" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Inicio</a> 
            <a href="#servicios" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Servicios</a> 
            <a href="#nosotros" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Nosotros</a> 
            <a href="#contacto" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Contacto</a> 
          </div> 

          {/* Botón para el menú móvil */} 
          <button  
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Abrir menú de navegación" 
          > 
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />} 
          </button> 
        </div> 

        {/* Menú móvil */} 
        {isOpen && ( 
          <div className="md:hidden absolute top-full left-0 w-full bg-black"> 
            <div className="flex flex-col space-y-4 p-4"> 
              <a href="#inicio" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Inicio</a> 
              <a href="#servicios" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Servicios</a> 
              <a href="#nosotros" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Nosotros</a> 
              <a href="#contacto" onClick={handleNavLinkClick} className="hover:text-secondary transition-colors">Contacto</a> 
            </div> 
          </div> 
        )} 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;
