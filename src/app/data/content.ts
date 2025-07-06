export const portfolioContent = {
  // Texto principal en diagonal
  mainTitle: "PĘDRO VALDĘZ",
  
  // Texto secundario
  subtitle: "BACKĘND DEVELOPĘR",
  
  // Información personal/profesional
  personalInfo: {
    name: "Backend Developer",
    location: "México",
    experience: "5+ años de experiencia",
    email: "batuza.belmont@gmail.com",
    phone: "+52 669 205 2676",
  },
  
  // Información adicional
  additionalInfo: [
    {
      label: "Especialidades",
      value: "React, Next.js, Node.js, TypeScript, Python",
      rotation: 0
    },
    {
      label: "Ubicación",
      value: "Mazatlán, Sin.",
      rotation: -15
    },
    {
      label: "Disponibilidad",
      value: "Freelance & Tiempo Completo",
      rotation: 10
    },
    {
      label: "Portafolio",
      value: "https://github.com/batuzav",
      rotation: -5
    }
  ],
  
  // Datos de contacto
  contactInfo: {
    email: "batuza.belmont@gmail.com",
    linkedin: "https://linkedin.com/in/batuzav/",
    github: "https://github.com/batuzav",
    website: "www.programador.com"
  }
};

export type PortfolioContent = typeof portfolioContent; 