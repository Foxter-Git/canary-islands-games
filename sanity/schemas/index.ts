// schemas/index.ts
// Exportar todos los esquemas de Sanity

import home from './home';
import studio from './studio';
import taxIncentive from './taxIncentive';
import resource from './resource';
import speaker from './speaker';

export const schemaTypes = [
  home,
  studio,
  taxIncentive,
  resource,
  speaker,
];

