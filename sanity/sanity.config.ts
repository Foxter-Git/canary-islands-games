// sanity.config.ts
// Configuración del proyecto Sanity

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Importar esquemas
import { schemaTypes } from './schemas';

// Obtener projectId desde variables de entorno
// Sanity CLI carga automáticamente desde .env cuando ejecutas 'sanity dev'
// Si no está disponible, usa el valor por defecto del .env
const projectId = process.env.SANITY_PROJECT_ID || '1hhcafil';
const dataset = process.env.SANITY_DATASET || 'production';

if (!projectId) {
  throw new Error(
    'Missing SANITY_PROJECT_ID. Please ensure your .env file exists in the sanity/ folder with:\n' +
    'SANITY_PROJECT_ID=your_project_id_here\n\n' +
    'Make sure to restart the dev server after creating/updating the .env file.'
  );
}

export default defineConfig({
  name: 'canary-islands-games',
  title: 'Canary Islands Games CMS',
  
  projectId: projectId,
  dataset: dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
});