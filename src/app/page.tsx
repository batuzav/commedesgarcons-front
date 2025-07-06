'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioContent } from './data/content';

// Función helper para crear hipervínculos manteniendo el estilo original
const createLink = (text: string, className: string = '') => {
  // Detectar si es una URL
  const isUrl = text.includes('http') || text.includes('www.') || text.includes('github.com') || text.includes('linkedin.com');
  // Detectar si es un email
  const isEmail = text.includes('@') && text.includes('.');
  
  if (isEmail) {
    return (
      <a 
        href={`mailto:${text}`}
        className={`${className} hover:opacity-70 transition-opacity duration-300`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        {text}
      </a>
    );
  }
  
  if (isUrl) {
    // Asegurar que la URL tenga el protocolo correcto
    let href = text;
    if (text.startsWith('www.')) {
      href = `https://${text}`;
    } else if (!text.startsWith('http')) {
      href = `https://${text}`;
    }
    
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:opacity-70 transition-opacity duration-300`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        {text}
      </a>
    );
  }
  
  return <span className={className}>{text}</span>;
};

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Contenedor principal */}
      <div className="relative w-full h-screen p-4 md:p-8 lg:p-12">
        
        {/* Título principal en diagonal - similar a la imagen */}
        <motion.div 
          className="absolute top-[20%] left-[10%] md:top-[25%] md:left-[15%] lg:top-[30%] lg:left-[20%]"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: -45 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wider transform origin-left whitespace-nowrap">
            {portfolioContent.mainTitle}
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.div 
          className="absolute top-[45%] right-[10%] md:top-[50%] md:right-[15%] lg:top-[55%] lg:right-[20%]"
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 1, rotate: 15 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wide whitespace-nowrap">
            {portfolioContent.subtitle}
          </h2>
        </motion.div>

        {/* Información personal - esquina superior izquierda */}
        <motion.div 
          className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <div className="text-xs md:text-sm lg:text-base space-y-0.5 md:space-y-1">
            <p className="font-semibold">{portfolioContent.personalInfo.name}</p>
            <p className="text-gray-700">{portfolioContent.personalInfo.location}</p>
            <p className="text-gray-700">{portfolioContent.personalInfo.experience}</p>
          </div>
        </motion.div>

        {/* Información de contacto - esquina superior derecha */}
        <motion.div 
          className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-right"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.8 }}
        >
          <div className="text-xs md:text-sm lg:text-base space-y-0.5 md:space-y-1">
            <p className="text-gray-700">
              {createLink(portfolioContent.contactInfo.email, 'text-gray-700')}
            </p>
            <p className="text-gray-700">
              {createLink(portfolioContent.contactInfo.github, 'text-gray-700')}
            </p>
            <p className="text-gray-700">
              {createLink(portfolioContent.contactInfo.linkedin, 'text-gray-700')}
            </p>
          </div>
        </motion.div>

        {/* Información adicional distribuida - similar al diseño de la imagen */}
        <motion.div
          className="absolute bottom-[30%] left-[5%] md:bottom-[25%] md:left-[10%] lg:bottom-[25%] lg:left-[15%]"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="transform origin-center">
            <p className="font-medium text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[0].label}
            </p>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[0].value}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] right-[5%] md:bottom-[30%] md:right-[10%] lg:bottom-[30%] lg:right-[15%]"
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="transform origin-center text-right">
            <p className="font-medium text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[1].label}
            </p>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[1].value}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[40%] left-[50%] md:bottom-[45%] md:left-[45%] lg:bottom-[50%] lg:left-[50%]"
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 1, rotate: 10 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="transform origin-center -translate-x-1/2">
            <p className="font-medium text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[2].label}
            </p>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[2].value}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[25%] md:bottom-[20%] md:right-[30%] lg:bottom-[20%] lg:right-[35%]"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="transform origin-center">
            <p className="font-medium text-xs md:text-sm lg:text-base">
              {portfolioContent.additionalInfo[3].label}
            </p>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base">
              {createLink(portfolioContent.additionalInfo[3].value, 'text-gray-600')}
            </p>
          </div>
        </motion.div>

        {/* Texto decorativo en el fondo - similar al estilo de la imagen */}
        <motion.div 
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div className="text-4xl md:text-7xl lg:text-9xl font-bold transform rotate-12 text-gray-200">
            DEV
          </div>
        </motion.div>

        {/* Líneas decorativas */}
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-px bg-black opacity-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
        <motion.div 
          className="absolute top-0 left-1/2 w-px h-full bg-black opacity-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
        />
      </div>

      {/* Sección de navegación/menú en la parte inferior */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 p-3 md:p-6 lg:p-8 bg-white bg-opacity-95 backdrop-blur-sm"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="flex justify-between items-center text-xs md:text-sm lg:text-base">
          <div className="flex space-x-4 md:space-x-6">
            <button className="hover:underline transition-all duration-300 font-medium">
              Proyectos 
            </button>
            <button className="hover:underline transition-all duration-300 font-medium">
              Experiencia
            </button>
            <button className="hover:underline transition-all duration-300 font-medium">
              Contacto
            </button>
          </div>
          <div className="text-gray-400 font-light">
            © 2025 BATUZAV.COM
          </div>
        </div>
      </motion.div>
    </div>
  );
}
