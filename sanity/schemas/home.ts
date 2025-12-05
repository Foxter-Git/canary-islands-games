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
      name: 'topImage',
      title: 'Top Image',
      type: 'image',
      description: 'Imagen superior centrada (encima de la imagen principal)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'centerImage',
      title: 'Center Image',
      type: 'image',
      description: 'Imagen centrada sobre el fondo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'eventIntroShort',
      title: 'Event Intro Short',
      type: 'text',
      description: 'Introducción corta del evento (2-3 líneas máximo)',
      rows: 3,
    }),
    defineField({
      name: 'eventCard1',
      title: 'Event Card 1 - Qué es el foro',
      type: 'object',
      description: 'Primera tarjeta informativa',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Título de la tarjeta',
          initialValue: 'Qué es el foro',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Descripción del contenido',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'eventCard2',
      title: 'Event Card 2 - Qué ocurrirá durante la jornada',
      type: 'object',
      description: 'Segunda tarjeta informativa',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Título de la tarjeta',
          initialValue: 'Qué ocurrirá durante la jornada',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Descripción del contenido',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'eventCard3',
      title: 'Event Card 3 - A quién va dirigido',
      type: 'object',
      description: 'Tercera tarjeta informativa',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Título de la tarjeta',
          initialValue: 'A quién va dirigido',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Descripción del contenido',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      description: 'Timeline de horario del evento',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'Hora del evento (ej: "09:00 - 10:30")',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Título de la actividad',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Descripción de la actividad',
              rows: 2,
            }),
            defineField({
              name: 'mesaRedondaLink',
              title: 'Mesa Redonda Link',
              type: 'string',
              description: 'Si esta actividad corresponde a una mesa redonda, selecciona "1" o "2" para enlazar a la imagen correspondiente',
              options: {
                list: [
                  { title: 'Ninguna', value: '' },
                  { title: 'Mesa Redonda 1', value: '1' },
                  { title: 'Mesa Redonda 2', value: '2' },
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'mesaRedonda1Image',
      title: 'Mesa Redonda 1 Image',
      type: 'image',
      description: 'Imagen de la mesa redonda 1 (se muestra debajo del timeline)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mesaRedonda2Image',
      title: 'Mesa Redonda 2 Image',
      type: 'image',
      description: 'Imagen de la mesa redonda 2 (se muestra debajo de la mesa redonda 1)',
      options: {
        hotspot: true,
      },
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

