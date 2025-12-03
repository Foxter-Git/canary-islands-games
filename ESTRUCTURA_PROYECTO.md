# Estructura del Proyecto - CANARY ISLANDS GAMES

## 📂 Árbol de Directorios Completo

```
canary-islands-games/
│
├── 📄 package.json                    # Dependencias y scripts del proyecto Astro
├── 📄 astro.config.mjs                # Configuración de Astro (Tailwind, output, etc.)
├── 📄 tsconfig.json                   # Configuración de TypeScript
├── 📄 .env.example                    # Plantilla de variables de entorno
├── 📄 .env                            # Variables de entorno (NO subir a Git)
├── 📄 .gitignore                      # Archivos ignorados por Git
├── 📄 README.md                       # Documentación básica del proyecto
├── 📄 GUIA_PASO_A_PASO.md            # Guía detallada paso a paso
│
├── 📁 src/                            # Código fuente del proyecto
│   │
│   ├── 📁 layouts/                    # Layouts base reutilizables
│   │   └── 📄 BaseLayout.astro        # Layout principal con HTML base, Navbar y Footer slots
│   │
│   ├── 📁 pages/                      # Páginas de Astro (routing automático)
│   │   ├── 📄 index.astro             # Página principal (/) con todas las secciones
│   │   ├── 📄 tax-incentives.astro    # Página de incentivos fiscales (/tax-incentives)
│   │   ├── 📄 studios.astro           # Página de estudios (/studios)
│   │   └── 📄 contact.astro           # Página de contacto (/contact)
│   │
│   ├── 📁 components/                 # Componentes reutilizables
│   │   ├── 📄 Navbar.astro            # Barra de navegación principal
│   │   ├── 📄 Footer.astro            # Pie de página con enlaces y CTA
│   │   ├── 📄 Hero.astro              # Componente hero con título, subtítulo y CTA
│   │   ├── 📄 Section.astro           # Contenedor reutilizable para secciones
│   │   └── 📄 CTAButton.astro         # Botón de llamada a la acción reutilizable
│   │
│   └── 📁 lib/                        # Utilidades y código compartido
│       │
│       ├── 📁 cms/                    # Integración con Sanity CMS
│       │   ├── 📄 sanityClient.ts     # Cliente configurado de Sanity
│       │   └── 📄 queries.ts          # Queries GROQ para obtener datos de Sanity
│       │
│       └── 📁 types/                  # Tipos TypeScript
│           └── 📄 content.d.ts        # Tipos para contenido de Sanity (HomeContent, Studio, etc.)
│
├── 📁 sanity/                         # Configuración y esquemas de Sanity CMS
│   │
│   ├── 📄 package.json                # Dependencias de Sanity Studio
│   ├── 📄 sanity.config.ts            # Configuración del proyecto Sanity
│   ├── 📄 tsconfig.json               # TypeScript para Sanity
│   │
│   └── 📁 schemas/                    # Esquemas de tipos de contenido
│       ├── 📄 index.ts                # Exportación de todos los esquemas
│       ├── 📄 home.ts                 # Esquema para contenido de la página de inicio
│       ├── 📄 studio.ts               # Esquema para estudios de videojuegos
│       ├── 📄 taxIncentive.ts         # Esquema para información de incentivos fiscales
│       └── 📄 resource.ts             # Esquema para recursos y documentos
│
└── 📁 public/                         # Archivos estáticos (servidos directamente)
    ├── 📁 images/                     # Imágenes del sitio
    │   ├── (hero-bg.jpg)              # IMG_BG_HERO: Imagen de fondo del hero
    │   ├── (about-section.jpg)        # IMG_SECTION_ABOUT: Imagen de la sección About
    │   ├── (tax-incentives.jpg)       # IMG_SECTION_TAX_INCENTIVES: Imagen de incentivos
    │   └── (studio-logos/)            # IMG_SECTION_STUDIOS: Logos de estudios
    └── 📄 favicon.svg                 # Favicon del sitio
```

---

## 📝 Descripción de Carpetas y Archivos

### **Raíz del Proyecto**

- **`package.json`**: Define dependencias de Astro, Tailwind, Sanity Client, y scripts de desarrollo/build
- **`astro.config.mjs`**: Configuración de Astro (integración Tailwind, output estático, site URL)
- **`tsconfig.json`**: Configuración de TypeScript con paths para imports (`@/components`, etc.)
- **`.env`**: Variables de entorno (SANITY_PROJECT_ID, DATASET, etc.) - **NO subir a Git**
- **`.env.example`**: Plantilla de variables de entorno para referencia

### **`src/layouts/`**

Contiene layouts base que envuelven las páginas:

- **`BaseLayout.astro`**: Layout principal con:
  - Estructura HTML base (`<html>`, `<head>`, `<body>`)
  - Slots para Navbar y Footer
  - Meta tags configurables (title, description)
  - Estilos globales básicos

### **`src/pages/`**

Páginas de Astro que generan rutas automáticamente:

- **`index.astro`**: Página principal (`/`) con:
  - Hero principal
  - Sección "About Canary Islands Games"
  - Sección "Tax Incentives"
  - Sección "Game Studios & Ecosystem"
  - Sección "Why Canary Islands?"
  - Sección "Get Support"
  - Todos los comentarios para imágenes y formularios

- **`tax-incentives.astro`**: Página detallada sobre incentivos fiscales
- **`studios.astro`**: Listado de estudios (con datos de Sanity)
- **`contact.astro`**: Página de contacto y soporte

### **`src/components/`**

Componentes reutilizables:

- **`Navbar.astro`**: Navegación principal con enlaces a todas las páginas
- **`Footer.astro`**: Pie de página con enlaces rápidos y CTA de inscripción
- **`Hero.astro`**: Hero principal con título, subtítulo y botón CTA
- **`Section.astro`**: Contenedor reutilizable para secciones (con título, subtítulo, background)
- **`CTAButton.astro`**: Botón de llamada a la acción con variantes (primary/secondary) y tamaños

### **`src/lib/cms/`**

Integración con Sanity CMS:

- **`sanityClient.ts`**: 
  - Cliente configurado de Sanity
  - Helper para construir URLs de imágenes (`urlFor`)
  - Lee variables de entorno para configuración

- **`queries.ts`**: 
  - `getHomeContent()`: Obtiene contenido de la página de inicio
  - `getStudios()`: Lista todos los estudios
  - `getStudioBySlug()`: Obtiene un estudio por slug
  - `getTaxIncentives()`: Obtiene información de incentivos fiscales
  - `getResources()`: Lista recursos y documentos

### **`src/lib/types/`**

Tipos TypeScript para el contenido:

- **`content.d.ts`**: Define tipos para:
  - `HomeContent`: Contenido de la página de inicio
  - `Studio`: Estudio de videojuegos
  - `TaxIncentive`: Información de incentivos fiscales
  - `Resource`: Recurso o documento
  - `SanityImage`, `Slug`: Tipos auxiliares

### **`sanity/`**

Configuración y esquemas de Sanity CMS:

- **`sanity.config.ts`**: Configuración del proyecto Sanity (projectId, dataset, plugins, schemas)
- **`schemas/index.ts`**: Exporta todos los esquemas
- **`schemas/home.ts`**: Define campos para contenido de la página de inicio
- **`schemas/studio.ts`**: Define campos para estudios (nombre, slug, logo, descripción, etc.)
- **`schemas/taxIncentive.ts`**: Define campos para información de incentivos fiscales
- **`schemas/resource.ts`**: Define campos para recursos (documentos, enlaces, videos)

### **`public/`**

Archivos estáticos servidos directamente:

- **`images/`**: Imágenes del sitio (hero, secciones, logos, etc.)
- **`favicon.svg`**: Favicon

---

## 🔍 Convenciones de Nomenclatura

### **Archivos**
- **Componentes**: PascalCase (`Hero.astro`, `CTAButton.astro`)
- **Páginas**: kebab-case (`tax-incentives.astro`, `contact.astro`)
- **Utilidades**: camelCase (`sanityClient.ts`, `queries.ts`)

### **Comentarios para Imágenes**
- **`IMG_BG_HERO`**: Imagen de fondo del hero
- **`IMG_SECTION_ABOUT`**: Imagen de la sección About
- **`IMG_SECTION_TAX_INCENTIVES`**: Imagen de la sección de incentivos
- **`IMG_SECTION_STUDIOS`**: Logos o imágenes de estudios
- **`IMG_STUDIO_LOGO`**: Logo individual de un estudio

### **Comentarios para Tareas**
- **`TODO_FORM_URL`**: Reemplazar por la URL real del formulario de inscripción
- **`TODO:`**: Tareas pendientes generales

---

## 🚀 Flujo de Datos

```
Sanity CMS (Studio)
    ↓
    ↓ (GROQ Queries)
    ↓
src/lib/cms/queries.ts
    ↓
    ↓ (TypeScript Types)
    ↓
src/lib/types/content.d.ts
    ↓
    ↓ (Astro Pages)
    ↓
src/pages/*.astro
    ↓
    ↓ (Components)
    ↓
src/components/*.astro
    ↓
    ↓ (Render)
    ↓
HTML Estático (dist/)
```

---

## 📦 Dependencias Principales

### **Astro**
- `astro`: Framework principal
- `@astrojs/tailwind`: Integración de Tailwind CSS

### **Sanity**
- `@sanity/client`: Cliente para queries
- `@sanity/image-url`: Helper para URLs de imágenes

### **Estilos**
- `tailwindcss`: Framework de estilos utility-first

### **TypeScript**
- `typescript`: Compilador TypeScript
- `@types/node`: Tipos para Node.js

---

## 🎯 Próximas Extensiones Posibles

1. **Multi-idioma**: Añadir `src/locales/` con traducciones
2. **Blog**: Añadir `src/pages/blog/` y esquema `blogPost.ts` en Sanity
3. **Eventos**: Añadir página de eventos y esquema `event.ts`
4. **Testimonios**: Añadir sección de testimonios con esquema `testimonial.ts`
5. **Newsletter**: Añadir formulario de newsletter
6. **Analytics**: Integrar Google Analytics o similar

---

Esta estructura está diseñada para ser **escalable**, **mantenible** y **fácil de extender** con nuevas funcionalidades.

