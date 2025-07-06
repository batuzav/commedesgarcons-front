# 🎨 Guía de Personalización - Portafolio de Programador

## 📋 Pasos para Personalizar tu Portafolio

### 1. Editar Información Personal

Ve a `src/app/data/content.ts` y modifica estos campos:

```typescript
// Cambia por tu nombre real
mainTitle: "TU NOMBRE COMPLETO",

// Cambia por tu especialidad
subtitle: "TU ESPECIALIDAD",

// Tu información profesional
personalInfo: {
  name: "Tu Título Profesional",
  location: "Tu Ciudad, País",
  experience: "X+ años de experiencia",
  email: "tu@email.com",
  phone: "tu número",
},
```

### 2. Personalizar Información Técnica

Modifica las especialidades y tecnologías:

```typescript
additionalInfo: [
  {
    label: "Tech Stack",
    value: "React • Node.js • TypeScript • AWS", // Cambia por tus tecnologías
    rotation: 0
  },
  {
    label: "Especialización",
    value: "Frontend • Backend • Mobile", // Tu área de expertise
    rotation: -15
  },
  {
    label: "Industrias",
    value: "Fintech • E-commerce • SaaS", // Sectores donde has trabajado
    rotation: 10
  },
  {
    label: "Modalidad",
    value: "Remoto • Presencial • Híbrido", // Tu disponibilidad
    rotation: -5
  }
],
```

### 3. Actualizar Datos de Contacto

```typescript
contactInfo: {
  email: "tu@email.real",
  linkedin: "linkedin.com/in/tu-perfil",
  github: "github.com/tu-usuario",
  website: "tu-website.com"
}
```

## 🛠️ Ejemplos por Especialidad

### Frontend Developer
```typescript
import { frontendExample } from './data/programmer-example';
// Usa frontendExample como base
```

### Backend Developer
```typescript
import { backendExample } from './data/programmer-example';
// Usa backendExample como base
```

### Mobile Developer
```typescript
import { mobileExample } from './data/programmer-example';
// Usa mobileExample como base
```

## 🎯 Personalización Avanzada

### Cambiar Posiciones de Elementos

En `src/app/page.tsx`, busca las clases de posición y modifica:

```typescript
// Título principal
className="absolute top-[30%] left-[20%]" // Ajusta top y left

// Subtítulo
className="absolute top-[55%] right-[20%]" // Ajusta top y right

// Información adicional
className="absolute bottom-[25%] left-[15%]" // Ajusta bottom y left
```

### Cambiar Rotaciones

```typescript
// En las animaciones de motion.div
initial={{ opacity: 0, rotate: -45 }} // Cambia el ángulo
animate={{ opacity: 1, rotate: -45 }}  // Mantén el mismo ángulo
```

### Modificar Tamaños de Fuente

```typescript
// Título principal
className="text-3xl md:text-6xl lg:text-8xl xl:text-9xl"

// Subtítulo
className="text-lg md:text-3xl lg:text-4xl xl:text-5xl"

// Información adicional
className="text-xs md:text-sm lg:text-base"
```

## 🎨 Personalización de Colores

### Cambiar Color de Fondo

En `src/app/globals.css`:

```css
:root {
  --background: #ffffff; /* Cambia por tu color preferido */
  --foreground: #000000; /* Color del texto */
}
```

### Colores en Componentes

En `src/app/page.tsx`:

```typescript
// Fondo principal
<div className="min-h-screen bg-white text-black">

// Textos secundarios
<p className="text-gray-700">

// Líneas decorativas
<div className="bg-black opacity-10">
```

## 📱 Responsive Breakpoints

El diseño usa estos breakpoints:
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

### Ejemplo de uso:
```typescript
className="text-xs md:text-sm lg:text-base xl:text-lg"
// xs: muy pequeño
// md: tablet
// lg: desktop
// xl: pantalla grande
```

## 🚀 Consejos para Programadores

### 1. Información Técnica Relevante
- Incluye tus tecnologías principales
- Menciona frameworks y herramientas
- Especifica años de experiencia por tecnología

### 2. Proyectos Destacados
```typescript
// Agrega información sobre proyectos
additionalInfo: [
  {
    label: "Proyecto Principal",
    value: "E-commerce con 10M+ usuarios",
    rotation: 0
  }
]
```

### 3. Certificaciones
```typescript
additionalInfo: [
  {
    label: "Certificaciones",
    value: "AWS • Google Cloud • Microsoft Azure",
    rotation: -10
  }
]
```

### 4. Idiomas
```typescript
additionalInfo: [
  {
    label: "Idiomas",
    value: "Español • Inglés • Portugués",
    rotation: 8
  }
]
```

## 🔧 Comandos Útiles

### Desarrollo
```bash
npm run dev        # Servidor de desarrollo
npm run build      # Construir para producción
npm start          # Servidor de producción
```

### Personalización Rápida
1. Modifica `src/app/data/content.ts`
2. Guarda el archivo
3. Ve los cambios en tiempo real

## 📚 Recursos Adicionales

### Animaciones
- [Framer Motion Docs](https://framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

### Despliegue
- [Vercel](https://vercel.com) - Recomendado para Next.js
- [Netlify](https://netlify.com) - Alternativa gratuita

### Optimización
- Comprime imágenes antes de subirlas
- Usa formato WebP para mejor rendimiento
- Configura metadatos SEO en `layout.tsx`

## 🆘 Problemas Comunes

### Texto muy largo
Si el texto se corta, añade `whitespace-nowrap` o ajusta el tamaño:
```typescript
className="text-2xl whitespace-nowrap"
```

### Elementos superpuestos
Ajusta las posiciones usando porcentajes:
```typescript
className="absolute top-[25%] left-[15%]"
```

### Responsividad
Siempre define tamaños para móvil y desktop:
```typescript
className="text-sm md:text-base lg:text-lg"
```

---

¡Listo! Con esta guía podrás personalizar completamente tu portafolio para reflejar tu experiencia como programador. 🚀 