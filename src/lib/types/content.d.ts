// content.d.ts
// Tipos TypeScript para el contenido de Sanity

import type { SanityImageAsset, SanityReference } from '@sanity/client';

/**
 * Tipos base de Sanity
 */
export interface SanityImage {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  alt?: string;
  caption?: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

/**
 * Contenido de la página de inicio
 */
export interface HomeContent {
  _id: string;
  backgroundImage?: SanityImage;
  topImage?: SanityImage;
  centerImage?: SanityImage;
  attendeeFormUrl?: string;
  developerFormUrl?: string;
}

/**
 * Estudio de videojuegos
 */
export interface Studio {
  _id: string;
  name: string;
  slug: Slug;
  description?: string;
  fullDescription?: string;
  logo?: SanityImage;
  website?: string;
  location?: string;
  specialties?: string[];
  foundedYear?: number;
}

/**
 * Información sobre incentivos fiscales
 */
export interface TaxIncentive {
  _id: string;
  title?: string;
  subtitle?: string;
  content?: any; // Portable Text de Sanity
  benefits?: string[];
  eligibilityCriteria?: string;
  applicationProcess?: string;
  contactInfo?: string;
}

/**
 * Recurso o documento
 */
export interface Resource {
  _id: string;
  title: string;
  description?: string;
  type: 'document' | 'link' | 'video';
  file?: SanityReference;
  url?: string;
  category?: string;
}

