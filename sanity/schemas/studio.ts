// schemas/studio.ts
// Esquema para estudios de videojuegos

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'studio',
  title: 'Game Studio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Studio Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Descripción breve del estudio',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      description: 'Descripción completa del estudio',
    }),
    defineField({
      name: 'logo',
      title: 'Studio Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ubicación del estudio (isla, ciudad)',
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Especialidades del estudio (ej: Indie, AAA, Mobile, etc.)',
    }),
    defineField({
      name: 'foundedYear',
      title: 'Founded Year',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'location',
    },
  },
});

