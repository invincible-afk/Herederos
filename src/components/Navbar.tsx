import React, { useState, useEffect } from 'react'; 
import { Menu, X } from 'lucide-react'; 

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 

  const handleNavLinkClick = () => { 
    if (isOpen) { 
      setIsOpen(false); 
    } 
  }; 

  return ( 
    <nav className="fixed w-full z-50 bg-black py-6 transition-all duration-300"> 
      <div className="container mx-auto px-4"> 
        <div className="flex justify-between items-center"> 
          <a href="#inicio" className="flex items-center space-x-4">
  {/* Logo más grande */}
  <img  
    src="/img/logo-herederos.jpg"  
    alt="Herederos Logo"  
    className="w-24 h-24 object-cover rounded-full"
  />

  {/* Imagen en lugar del texto */}
  <img  
    src="/img/herederos-productora.jpg"  
    alt="Herederos"  
    className="h-24 w-auto object-contain"
  />
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
          <div className="md:hidden absolute top-full left-0 w-full bg-black"> 
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
