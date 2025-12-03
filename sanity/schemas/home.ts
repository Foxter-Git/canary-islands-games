// schemas/home.ts
// Esquema para el contenido de la página de inicio

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Imagen de fondo de la página',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attendeeFormUrl',
      title: 'Attendee Form URL',
      type: 'url',
      description: 'URL del formulario de inscripción para asistentes',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'developerFormUrl',
      title: 'Developer Form URL',
      type: 'url',
      description: 'URL del formulario de inscripción para desarrolladores',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'backgroundImage',
    },
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});

