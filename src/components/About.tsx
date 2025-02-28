import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="nosotros" className="py-20 bg-primary overflow-hidden w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold w-full">
              Creando Momentos
              <span className="text-secondary"> Memorables</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base w-full">
              En Herederos, nos especializamos en transformar ideas en experiencias extraordinarias. 
              Con años de experiencia en la industria del entretenimiento y eventos, hemos construido 
              una reputación basada en la excelencia y la innovación.
            </p>
            <p className="text-gray-400 text-sm md:text-base w-full">
              Nuestro equipo de profesionales apasionados trabaja incansablemente para asegurar 
              que cada evento supere las expectativas, cuidando cada detalle desde la concepción 
              hasta la ejecución.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Evento Herederos"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
