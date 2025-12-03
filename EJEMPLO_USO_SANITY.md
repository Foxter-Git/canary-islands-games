# Ejemplo de Uso de Sanity en Astro

Este documento muestra cómo usar los datos de Sanity en las páginas de Astro.

---

## 📝 Ejemplo 1: Usar Contenido de Home en `index.astro`

### Paso 1: Descomentar las importaciones

En `src/pages/index.astro`, descomenta estas líneas al inicio del frontmatter:

```astro
---
import { getHomeContent } from '@/lib/cms/queries';
const homeContent = await getHomeContent();
---
```

### Paso 2: Usar los datos en el componente

Reemplaza los valores hardcodeados por los datos de Sanity:

```astro
<Hero 
  title={homeContent.heroTitle || "Meet the New International Hub for Videogames"}
  subtitle={homeContent.heroSubtitle || "Default subtitle..."}
  ctaText={homeContent.ctaText || "Apply / Sign up"}
  ctaUrl={homeContent.ctaUrl || "FORM_URL"}
/>
```

### Paso 3: Usar imágenes de Sanity

Si tienes imágenes en Sanity, usa el helper `urlFor`:

```astro
---
import { getHomeContent } from '@/lib/cms/queries';
import { urlFor } from '@/lib/cms/sanityClient';
const homeContent = await getHomeContent();
---

{homeContent.aboutImage && (
  <img 
    src={urlFor(homeContent.aboutImage).width(800).url()} 
    alt={homeContent.aboutImage.alt || "About section"}
    class="rounded-lg shadow-lg"
  />
)}
```

---

## 📝 Ejemplo 2: Listar Estudios en `studios.astro`

### Paso 1: Obtener datos de Sanity

```astro
---
import { getStudios } from '@/lib/cms/queries';
import { urlFor } from '@/lib/cms/sanityClient';
const studios = await getStudios();
---
```

### Paso 2: Renderizar la lista

```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {studios.map((studio) => (
    <div class="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {studio.logo && (
        <img 
          src={urlFor(studio.logo).width(400).url()} 
          alt={studio.name}
          class="w-full h-48 object-cover"
        />
      )}
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">{studio.name}</h3>
        <p class="text-gray-600 mb-4">{studio.description}</p>
        {studio.website && (
          <a 
            href={studio.website} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800"
          >
            Visit website →
          </a>
        )}
      </div>
    </div>
  ))}
</div>
```

---

## 📝 Ejemplo 3: Página de Detalle de Estudio

Crea `src/pages/studios/[slug].astro`:

```astro
---
import { getStudioBySlug } from '@/lib/cms/queries';
import { urlFor } from '@/lib/cms/sanityClient';
import BaseLayout from '@/layouts/BaseLayout.astro';
import Navbar from '@/components/Navbar.astro';
import Footer from '@/components/Footer.astro';

const { slug } = Astro.params;
const studio = await getStudioBySlug(slug || '');

if (!studio) {
  return Astro.redirect('/studios');
}
---

<BaseLayout title={`${studio.name} - CANARY ISLANDS GAMES`}>
  <Navbar slot="navbar" />
  
  <article class="max-w-4xl mx-auto px-4 py-16">
    {studio.logo && (
      <img 
        src={urlFor(studio.logo).width(600).url()} 
        alt={studio.name}
        class="mb-8 rounded-lg"
      />
    )}
    
    <h1 class="text-4xl font-bold mb-4">{studio.name}</h1>
    
    {studio.description && (
      <p class="text-xl text-gray-600 mb-6">{studio.description}</p>
    )}
    
    {studio.fullDescription && (
      <div class="prose prose-lg">
        <p>{studio.fullDescription}</p>
      </div>
    )}
    
    <div class="mt-8 space-y-2">
      {studio.location && (
        <p><strong>Location:</strong> {studio.location}</p>
      )}
      {studio.foundedYear && (
        <p><strong>Founded:</strong> {studio.foundedYear}</p>
      )}
      {studio.specialties && studio.specialties.length > 0 && (
        <div>
          <strong>Specialties:</strong>
          <ul class="list-disc list-inside">
            {studio.specialties.map(specialty => (
              <li>{specialty}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
    {studio.website && (
      <a 
        href={studio.website} 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Visit Website
      </a>
    )}
  </article>
  
  <Footer slot="footer" />
</BaseLayout>
```

---

## 📝 Ejemplo 4: Manejo de Errores

```astro
---
import { getHomeContent } from '@/lib/cms/queries';

let homeContent;
try {
  homeContent = await getHomeContent();
} catch (error) {
  console.error('Error fetching home content:', error);
  // Usar valores por defecto
  homeContent = {
    heroTitle: "Meet the New International Hub for Videogames",
    heroSubtitle: "Default subtitle...",
  };
}
---
```

---

## 📝 Ejemplo 5: Portable Text (Rich Text de Sanity)

Si usas Portable Text en Sanity, necesitarás un componente para renderizarlo:

```bash
npm install @portabletext/to-html
```

```astro
---
import { getTaxIncentives } from '@/lib/cms/queries';
import { PortableText } from '@portabletext/to-html';

const taxIncentives = await getTaxIncentives();
const portableText = new PortableText({
  // Configuración opcional
});

const htmlContent = taxIncentives?.content 
  ? portableText.toHTML(taxIncentives.content)
  : '';
---

{htmlContent && (
  <div set:html={htmlContent} class="prose prose-lg" />
)}
```

---

## 🔍 Debugging

### Ver qué datos estás recibiendo

```astro
---
import { getHomeContent } from '@/lib/cms/queries';
const homeContent = await getHomeContent();

// En desarrollo, puedes ver los datos en la consola
if (import.meta.env.DEV) {
  console.log('Home content:', homeContent);
}
---
```

### Verificar que Sanity está conectado

```astro
---
import { sanityClient } from '@/lib/cms/sanityClient';

// Probar una query simple
const testQuery = '*[_type == "home"]';
const testData = await sanityClient.fetch(testQuery);
console.log('Test data:', testData);
---
```

---

## ⚠️ Errores Comunes

### Error: "Missing SANITY_PROJECT_ID"
- **Solución**: Verifica que `.env` existe y tiene `SANITY_PROJECT_ID` configurado

### Error: "Cannot find module '@/lib/cms/queries'"
- **Solución**: Verifica que `tsconfig.json` tiene los paths correctos

### Error: "Network request failed"
- **Solución**: Verifica que el `projectId` y `dataset` son correctos en `.env`

### Imágenes no se muestran
- **Solución**: Usa `urlFor()` para construir las URLs de imágenes de Sanity

---

## 📚 Recursos

- [Documentación de Sanity Client](https://www.sanity.io/docs/js-client)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)

