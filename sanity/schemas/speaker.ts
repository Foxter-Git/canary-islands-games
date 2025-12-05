// schemas/speaker.ts
// Esquema para los ponentes de las mesas redondas

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Nombre del ponente',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Foto del ponente',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Descripción del ponente',
      rows: 4,
    }),
    defineField({
      name: 'mesaRedonda',
      title: 'Mesa Redonda',
      type: 'string',
      description: 'Nombre de la mesa redonda a la que pertenece',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Orden de aparición dentro de la mesa redonda',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'mesaRedonda',
      media: 'photo',
    },
  },
  orderings: [
    {
      title: 'Mesa Redonda, Order',
      name: 'mesaRedondaOrder',
      by: [
        { field: 'mesaRedonda', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
});

