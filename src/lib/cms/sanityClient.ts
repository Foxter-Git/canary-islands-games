// sanityClient.ts
// Cliente de Sanity para realizar queries al CMS

import { createClient } from '@sanity/client';

// Configuración del cliente de Sanity
// Las variables de entorno se cargan desde .env
const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION || '2024-01-01';
const useCdn = import.meta.env.SANITY_USE_CDN === 'true' || import.meta.env.SANITY_USE_CDN === true;

if (!projectId) {
  throw new Error(
    'Missing SANITY_PROJECT_ID environment variable. Please check your .env file.'
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn, // Usa CDN para mejor performance en producción
  // Si necesitas escribir datos, descomenta y añade el token:
  // token: import.meta.env.SANITY_API_TOKEN,
});

// Helper para construir URLs de imágenes de Sanity
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

