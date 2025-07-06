# Portafolio One-Page

Un portafolio moderno y minimalista inspirado en diseños tipográficos, perfecto para desarrolladores y creativos.

## 🎨 Características

- **Diseño One-Page**: Toda la información en una sola página
- **Responsive**: Se adapta perfectamente a desktop y móvil
- **Animaciones**: Transiciones suaves con Framer Motion
- **Fácil personalización**: Contenido estructurado y editable
- **Tipografía moderna**: Diseño inspirado en revistas de moda
- **Performance**: Optimizado con Next.js 15

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📝 Personalización

### Editar contenido

El contenido se encuentra en `src/app/data/content.ts`. Puedes modificar:

```typescript
export const portfolioContent = {
  // Título principal (aparece en diagonal)
  mainTitle: "TU NOMBRE",
  
  // Subtítulo
  subtitle: "TU ESPECIALIDAD",
  
  // Información personal
  personalInfo: {
    name: "Tu título profesional",
    location: "Tu ubicación",
    experience: "Años de experiencia",
    email: "tu@email.com",
    phone: "tu teléfono",
  },
  
  // Información adicional con rotación
  additionalInfo: [
    {
      label: "Especialidades",
      value: "Tus tecnologías",
      rotation: 0 // Grados de rotación
    },
    // Agrega más elementos...
  ],
  
  // Datos de contacto
  contactInfo: {
    email: "tu@email.com",
    linkedin: "tu-linkedin",
    github: "tu-github",
    website: "tu-sitio-web"
  }
};
```

### Personalizar estilos

Los estilos principales están en:
- `src/app/globals.css` - Estilos globales
- `src/app/page.tsx` - Estilos del componente principal

### Modificar posiciones y rotaciones

En `src/app/page.tsx` puedes ajustar:
- Posiciones de elementos (top, left, right, bottom)
- Rotaciones de texto
- Tamaños de fuente
- Colores y espaciados

## 📱 Responsive Design

El diseño se adapta automáticamente a:
- **Desktop**: Textos grandes, posicionamiento absoluto
- **Mobile**: Textos ajustados, reorganización de elementos

## 🎭 Animaciones

Utiliza Framer Motion para:
- Aparición progresiva de elementos
- Rotaciones suaves
- Transiciones de página
- Efectos de hover

## 🛠️ Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **GSAP** - Animaciones avanzadas

## 📄 Estructura del proyecto

```
src/
├── app/
│   ├── data/
│   │   └── content.ts      # Contenido editable
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   └── RotatedText.tsx     # Componente de texto rotado
```

## 🎯 Personalización rápida

1. **Cambiar nombre**: Modifica `mainTitle` en `content.ts`
2. **Cambiar especialidad**: Modifica `subtitle` en `content.ts`
3. **Actualizar contacto**: Modifica `contactInfo` en `content.ts`
4. **Agregar información**: Añade elementos a `additionalInfo`
5. **Cambiar colores**: Modifica las clases de Tailwind en `page.tsx`

## 📦 Despliegue

```bash
npm run build
npm start
```

O despliega en Vercel:
```bash
vercel --prod
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Siéntete libre de:
- Reportar bugs
- Sugerir mejoras
- Enviar pull requests

## 📄 Licencia

MIT License - Úsalo libremente para tus proyectos personales y comerciales.
