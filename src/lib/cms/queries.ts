// queries.ts
// Queries de GROQ para obtener datos de Sanity

import { sanityClient } from './sanityClient';
import type { Studio, HomeContent, TaxIncentive, Speaker } from '../types/content';

/**
 * Obtiene el contenido de la página de inicio
 */
export async function getHomeContent(): Promise<HomeContent> {
  const query = `*[_type == "home"][0]{
    _id,
    backgroundImage,
    topImage,
    centerImage,
    eventIntro,
    schedule[]{
      _key,
      time,
      title,
      description,
      mesaRedondaLink
    },
    mesaRedonda1Image,
    mesaRedonda2Image,
    attendeeFormUrl,
    developerFormUrl
  }`;
  
  return await sanityClient.fetch(query);
}

/**
 * Obtiene todos los estudios de videojuegos
 */
export async function getStudios(): Promise<Studio[]> {
  const query = `*[_type == "studio"] | order(name asc){
    _id,
    name,
    slug,
    description,
    logo,
    website,
    location,
    specialties,
    foundedYear
  }`;
  
  return await sanityClient.fetch(query);
}

/**
 * Obtiene un estudio específico por slug
 */
export async function getStudioBySlug(slug: string): Promise<Studio | null> {
  const query = `*[_type == "studio" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    description,
    logo,
    website,
    location,
    specialties,
    foundedYear,
    fullDescription
  }`;
  
  return await sanityClient.fetch(query, { slug });
}

/**
 * Obtiene información sobre incentivos fiscales
 */
export async function getTaxIncentives(): Promise<TaxIncentive | null> {
  const query = `*[_type == "taxIncentive"][0]{
    _id,
    title,
    subtitle,
    content,
    benefits[],
    eligibilityCriteria,
    applicationProcess,
    contactInfo
  }`;
  
  return await sanityClient.fetch(query);
}

/**
 * Obtiene recursos y documentos relacionados
 */
export async function getResources() {
  const query = `*[_type == "resource"] | order(_createdAt desc){
    _id,
    title,
    description,
    type,
    file,
    url,
    category
  }`;
  
  return await sanityClient.fetch(query);
}

/**
 * Obtiene todos los ponentes agrupados por mesa redonda
 */
export async function getSpeakers(): Promise<Speaker[]> {
  const query = `*[_type == "speaker"] | order(mesaRedonda asc, order asc){
    _id,
    name,
    photo,
    description,
    mesaRedonda,
    order
  }`;
  
  return await sanityClient.fetch(query);
}

