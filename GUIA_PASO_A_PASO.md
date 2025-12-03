# Guía Paso a Paso - CANARY ISLANDS GAMES

Esta guía te llevará desde cero hasta tener la web funcionando con Astro y Sanity CMS.

---

## 📋 Tabla de Contenidos

1. [Visión General del Proyecto](#visión-general-del-proyecto)
2. [Stack Tecnológico y Justificación](#stack-tecnológico-y-justificación)
3. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
4. [Paso a Paso: Configuración Inicial](#paso-a-paso-configuración-inicial)
5. [Configuración de Sanity CMS](#configuración-de-sanity-cms)
6. [Estructura de Archivos](#estructura-de-archivos)
7. [Ejemplos de Código](#ejemplos-de-código)
8. [Multi-idioma (Preparación)](#multi-idioma-preparación)
9. [Checklist de Verificación](#checklist-de-verificación)

---

## 🎯 Visión General del Proyecto

**CANARY ISLANDS GAMES** es una web institucional para el departamento del Gobierno de Canarias encargado de promover la industria de videojuegos. La web está diseñada para:

- Informar sobre incentivos fiscales
- Mostrar el ecosistema de estudios de videojuegos
- Facilitar la inscripción y contacto
- Posicionar las Islas Canarias como hub internacional de videojuegos

**Características principales:**
- ✅ Performance optimizada con Astro
- ✅ SEO-friendly
- ✅ Accesible y responsive
- ✅ Gestión de contenido con Sanity CMS
- ✅ Preparado para multi-idioma (ES/EN)

---

## 🛠 Stack Tecnológico y Justificación

### **Astro**
- **Por qué**: Framework moderno que genera sitios estáticos ultra-rápidos
- **Ventajas**: 
  - Zero JavaScript por defecto (mejor performance)
  - Island Architecture (carga solo lo necesario)
  - Excelente para SEO
  - Integración sencilla con cualquier framework

### **TypeScript**
- **Por qué**: Tipado estático para mayor seguridad y mantenibilidad
- **Ventajas**: 
  - Autocompletado mejorado
  - Detección temprana de errores
  - Mejor experiencia de desarrollo en Cursor

### **Tailwind CSS**
- **Por qué**: Framework utility-first para estilos rápidos y consistentes
- **Ventajas**: 
  - Desarrollo rápido sin escribir CSS custom
  - Responsive por defecto
  - Fácil de mantener
  - Integración nativa con Astro

### **Sanity CMS**
- **Por qué**: Headless CMS moderno y flexible
- **Ventajas**: 
  - Editor visual potente
  - API GraphQL y GROQ
  - Versionado de contenido
  - Fácil de extender
  - Gratis para proyectos pequeños/medianos

---

## 🏗 Arquitectura del Proyecto

```
canary-islands-games/
├── package.json                 # Dependencias del proyecto Astro
├── astro.config.mjs            # Configuración de Astro
├── tsconfig.json               # Configuración de TypeScript
├── .env.example                # Plantilla de variables de entorno
├── .gitignore                  # Archivos ignorados por Git
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout base para todas las páginas
│   │
│   ├── pages/
│   │   ├── index.astro         # Página principal (Home)
│   │   ├── tax-incentives.astro # Página de incentivos fiscales
│   │   ├── studios.astro       # Página de estudios
│   │   └── contact.astro       # Página de contacto
│   │
│   ├── components/
│   │   ├── Navbar.astro        # Barra de navegación
│   │   ├── Footer.astro        # Pie de página
│   │   ├── Hero.astro          # Componente hero principal
│   │   ├── Section.astro       # Contenedor de secciones
│   │   └── CTAButton.astro     # Botón de llamada a la acción
│   │
│   └── lib/
│       ├── cms/
│       │   ├── sanityClient.ts # Cliente de Sanity
│       │   └── queries.ts      # Queries GROQ para Sanity
│       └── types/
│           └── content.d.ts    # Tipos TypeScript para contenido
│
├── sanity/
│   ├── package.json            # Dependencias de Sanity
│   ├── sanity.config.ts        # Configuración de Sanity
│   ├── tsconfig.json           # TypeScript para Sanity
│   └── schemas/
│       ├── index.ts            # Exportación de esquemas
│       ├── home.ts             # Esquema de página de inicio
│       ├── studio.ts           # Esquema de estudios
│       ├── taxIncentive.ts     # Esquema de incentivos fiscales
│       └── resource.ts         # Esquema de recursos
│
└── public/                     # Archivos estáticos (imágenes, favicon, etc.)
```

### **Explicación de Carpetas:**

- **`src/layouts/`**: Layouts base reutilizables
- **`src/pages/`**: Páginas de Astro (routing automático)
- **`src/components/`**: Componentes reutilizables
- **`src/lib/cms/`**: Lógica de integración con Sanity
- **`src/lib/types/`**: Tipos TypeScript compartidos
- **`sanity/schemas/`**: Definición de tipos de contenido en Sanity
- **`public/`**: Archivos estáticos servidos directamente

---

## 🚀 Paso a Paso: Configuración Inicial

### **Paso 1: Crear el Proyecto Astro**

Abre la terminal integrada de Cursor (`Ctrl+` ` o `Cmd+` `) y ejecuta:

```bash
# Navegar al directorio del proyecto (si no estás ya ahí)
cd canary-islands-games

# Instalar dependencias
npm install
```

### **Paso 2: Configurar Variables de Entorno**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env
```

Edita el archivo `.env` y completa los valores (los obtendrás después de crear el proyecto Sanity):

```env
SANITY_PROJECT_ID=tu_project_id_aqui
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_USE_CDN=true
```

### **Paso 3: Verificar que Todo Funciona**

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre `http://localhost:4321` en tu navegador. Deberías ver la página principal con el hero y las secciones básicas.

---

## 📦 Configuración de Sanity CMS

### **Paso 1: Crear Proyecto en Sanity**

1. Ve a [sanity.io](https://www.sanity.io) y crea una cuenta (o inicia sesión)
2. Crea un nuevo proyecto:
   - Nombre: `Canary Islands Games`
   - Dataset: `production`
   - Plan: Free (suficiente para empezar)

### **Paso 2: Instalar Sanity CLI y Configurar el Proyecto**

En la terminal de Cursor:

```bash
# Instalar Sanity CLI globalmente (si no lo tienes)
npm install -g @sanity/cli

# Navegar a la carpeta sanity
cd sanity

# Iniciar sesión en Sanity
sanity login

# Inicializar el proyecto (si es necesario)
# sanity init
```

**Nota**: Si ya tienes el proyecto creado en Sanity, solo necesitas el `projectId` y el `dataset`.

### **Paso 3: Obtener Project ID y Configurar Variables**

1. En el dashboard de Sanity, ve a **Settings** → **API** → **Project ID**
2. Copia el `Project ID`
3. Actualiza tu archivo `.env` en la raíz del proyecto:

```env
SANITY_PROJECT_ID=tu_project_id_real
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_USE_CDN=true
```

### **Paso 4: Instalar Dependencias de Sanity**

```bash
# Desde la carpeta sanity/
cd sanity
npm install
```

### **Paso 5: Ejecutar el Studio de Sanity**

```bash
# Desde la carpeta sanity/
npm run dev
```

Esto abrirá el Studio de Sanity en `http://localhost:3333`. Aquí podrás:
- Crear y editar contenido
- Subir imágenes
- Gestionar estudios, recursos, etc.

### **Paso 6: Crear Contenido de Ejemplo**

En el Studio de Sanity:

1. **Crear documento "Home"**:
   - Tipo: `Home Page`
   - Completa los campos (título, subtítulo, etc.)

2. **Crear algunos estudios**:
   - Tipo: `Game Studio`
   - Añade nombre, descripción, logo, etc.

3. **Crear documento "Tax Incentive"**:
   - Tipo: `Tax Incentives`
   - Añade información sobre incentivos fiscales

### **Paso 7: Probar la Integración en Astro**

En `src/pages/index.astro`, descomenta las líneas que usan Sanity:

```astro
---
// Descomentar estas líneas:
import { getHomeContent } from '@/lib/cms/queries';
const homeContent = await getHomeContent();
---
```

Y usa los datos en el componente:

```astro
<Hero 
  title={homeContent.heroTitle}
  subtitle={homeContent.heroSubtitle}
  ...
/>
```

---

## 📁 Estructura de Archivos Detallada

### **Páginas (`src/pages/`)**

- **`index.astro`**: Página principal con todas las secciones
- **`tax-incentives.astro`**: Información detallada sobre incentivos
- **`studios.astro`**: Listado de estudios (desde Sanity)
- **`contact.astro`**: Página de contacto

### **Componentes (`src/components/`)**

- **`Navbar.astro`**: Navegación principal
- **`Footer.astro`**: Pie de página con enlaces y CTA
- **`Hero.astro`**: Hero principal con CTA de inscripción
- **`Section.astro`**: Contenedor reutilizable para secciones
- **`CTAButton.astro`**: Botón de llamada a la acción

### **CMS (`src/lib/cms/`)**

- **`sanityClient.ts`**: Cliente configurado de Sanity
- **`queries.ts`**: Queries GROQ para obtener datos

### **Tipos (`src/lib/types/`)**

- **`content.d.ts`**: Tipos TypeScript para todo el contenido

---

## 💻 Ejemplos de Código

### **1. Página Principal (`src/pages/index.astro`)**

Ya está creada con:
- ✅ Hero con mensaje principal
- ✅ Sección "About Canary Islands Games"
- ✅ Sección "Tax Incentives"
- ✅ Sección "Game Studios & Ecosystem"
- ✅ Sección "Why Canary Islands?"
- ✅ Sección "Get Support"
- ✅ Comentarios claros para imágenes (`IMG_BG_HERO`, `IMG_SECTION_TAX_INCENTIVES`, etc.)
- ✅ Comentarios para URL del formulario (`TODO_FORM_URL`)

### **2. Cliente de Sanity (`src/lib/cms/sanityClient.ts`)**

```typescript
import { createClient } from '@sanity/client';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
});
```

### **3. Query de Ejemplo (`src/lib/cms/queries.ts`)**

```typescript
export async function getStudios(): Promise<Studio[]> {
  const query = `*[_type == "studio"] | order(name asc){
    _id,
    name,
    slug,
    description,
    logo
  }`;
  
  return await sanityClient.fetch(query);
}
```

### **4. Uso en una Página**

```astro
---
import { getStudios } from '@/lib/cms/queries';
const studios = await getStudios();
---

{studios.map(studio => (
  <div>
    <h3>{studio.name}</h3>
    <p>{studio.description}</p>
  </div>
))}
```

---

## 🌍 Multi-idioma (Preparación)

La arquitectura está preparada para multi-idioma, aunque no está implementado completamente. Para implementarlo:

### **Opción 1: Astro i18n (Recomendado)**

1. Instalar `astro-i18n`:
```bash
npm install astro-i18n
```

2. Crear estructura de traducciones:
```
src/
  locales/
    en/
      common.json
      home.json
    es/
      common.json
      home.json
```

3. Configurar en `astro.config.mjs`:
```js
import i18n from 'astro-i18n';

export default defineConfig({
  integrations: [i18n()],
});
```

### **Opción 2: Sanity con Campos Multi-idioma**

En los esquemas de Sanity, añadir campos para cada idioma:

```typescript
defineField({
  name: 'title',
  title: 'Title (EN)',
  type: 'string',
}),
defineField({
  name: 'titleEs',
  title: 'Title (ES)',
  type: 'string',
}),
```

### **Opción 3: Routing por Idioma**

Crear páginas separadas:
```
src/pages/
  index.astro      # EN (default)
  es/
    index.astro    # ES
```

---

## ✅ Checklist de Verificación

### **Configuración Inicial**

- [ ] He creado el proyecto Astro y arranca sin errores (`npm run dev`)
- [ ] Tengo el layout base (`BaseLayout.astro`) funcionando
- [ ] La home (`index.astro`) muestra el texto de Canary Islands Games
- [ ] El botón de inscripción aparece y tiene un comentario claro (`TODO_FORM_URL`)
- [ ] En el código están marcadas con comentarios las zonas donde van imágenes:
  - [ ] `IMG_BG_HERO` en el hero
  - [ ] `IMG_SECTION_ABOUT` en la sección About
  - [ ] `IMG_SECTION_TAX_INCENTIVES` en la sección de incentivos
  - [ ] `IMG_SECTION_STUDIOS` para logos de estudios
  - [ ] `IMG_SECTION_WHY_CANARIES` (opcional)

### **Sanity CMS**

- [ ] He creado el proyecto Sanity en sanity.io
- [ ] He configurado las variables de entorno (`.env`) con `SANITY_PROJECT_ID`
- [ ] He instalado las dep endencias de Sanity (`cd sanity && npm install`)
- [ ] El Studio de Sanity funciona (`npm run dev` en la carpeta `sanity/`)
- [ ] He definido al menos un esquema (por ejemplo, `home` o `studio`)
- [ ] He creado contenido de ejemplo en Sanity
- [ ] He probado una query en Astro (descomentando código en `index.astro`)

### **Funcionalidad**

- [ ] La web es responsive (probado en móvil y desktop)
- [ ] Los enlaces de navegación funcionan
- [ ] El botón de inscripción tiene un placeholder claro para la URL
- [ ] Las imágenes tienen placeholders comentados

### **Puntos a Revisar si Algo Falla**

- [ ] **Error de variables de entorno**: Verifica que `.env` existe y tiene `SANITY_PROJECT_ID`
- [ ] **Error de Sanity**: Verifica que el `projectId` y `dataset` son correctos
- [ ] **Error de TypeScript**: Ejecuta `npm run build` para ver errores de tipos
- [ ] **Imágenes no cargan**: Verifica que las rutas en `public/` son correctas
- [ ] **Sanity Studio no arranca**: Verifica que estás en la carpeta `sanity/` y has ejecutado `npm install`
- [ ] **Astro no encuentra módulos**: Verifica que `tsconfig.json` tiene los paths correctos

---

## 🎨 Próximos Pasos

1. **Reemplazar `FORM_URL`**: Busca todos los `TODO_FORM_URL` y reemplázalos con la URL real del formulario
2. **Añadir imágenes**: Reemplaza los placeholders de imágenes con imágenes reales
3. **Personalizar estilos**: Ajusta colores, tipografías, espaciados en Tailwind
4. **Completar contenido en Sanity**: Añade más estudios, recursos, etc.
5. **Implementar multi-idioma**: Si es necesario, sigue la guía de multi-idioma
6. **Optimizar SEO**: Añade meta tags, Open Graph, etc.
7. **Deploy**: Prepara para producción (Vercel, Netlify, etc.)

---

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Sanity](https://www.sanity.io/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

**¡Listo para empezar!** 🚀

Si tienes dudas, revisa los comentarios en el código o consulta la documentación oficial.

