// schemas/resource.ts
// Esquema para recursos y documentos

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Document', value: 'document' },
          { title: 'Link', value: 'link' },
          { title: 'Video', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Archivo PDF, DOC, etc. (solo si type es "document")',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'URL del recurso (solo si type es "link" o "video")',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tax Incentives', value: 'tax-incentives' },
          { title: 'Legal', value: 'legal' },
          { title: 'Resources', value: 'resources' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
});

