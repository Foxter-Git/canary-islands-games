// schemas/taxIncentive.ts
// Esquema para información sobre incentivos fiscales

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'taxIncentive',
  title: 'Tax Incentives',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'Contenido principal sobre incentivos fiscales',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de beneficios principales',
    }),
    defineField({
      name: 'eligibilityCriteria',
      title: 'Eligibility Criteria',
      type: 'text',
      description: 'Criterios de elegibilidad',
    }),
    defineField({
      name: 'applicationProcess',
      title: 'Application Process',
      type: 'text',
      description: 'Proceso de aplicación',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'text',
      description: 'Información de contacto para más detalles',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

