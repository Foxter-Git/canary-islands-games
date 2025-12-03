# Comandos Rápidos - CANARY ISLANDS GAMES

## 🚀 Desarrollo

```bash
# Instalar dependencias del proyecto Astro
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Sanity CMS

```bash
# Navegar a la carpeta Sanity
cd sanity

# Instalar dependencias de Sanity
npm install

# Iniciar Studio de Sanity (editor visual)
npm run dev

# Build del Studio
npm run build

# Deploy del Studio a Sanity
npm run deploy
```

## 🔧 Configuración Inicial

```bash
# Copiar variables de entorno
cp .env.example .env

# Editar .env y añadir SANITY_PROJECT_ID
# (Obtenerlo de https://www.sanity.io/manage)
```

## 📝 Sanity CLI

```bash
# Instalar Sanity CLI globalmente
npm install -g @sanity/cli

# Iniciar sesión en Sanity
sanity login

# Crear nuevo proyecto (si es necesario)
sanity init
```

## 🧹 Limpieza

```bash
# Limpiar build de Astro
rm -rf dist .astro

# Limpiar node_modules (reinstalar después)
rm -rf node_modules package-lock.json
npm install
```

## 🔍 Verificación

```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar estructura de archivos
tree -L 3 -I 'node_modules|dist|.astro'
```

## 📦 Dependencias

```bash
# Añadir nueva dependencia
npm install nombre-paquete

# Añadir dependencia de desarrollo
npm install -D nombre-paquete

# Actualizar dependencias
npm update
```

## 🌐 URLs de Desarrollo

- **Astro**: http://localhost:4321
- **Sanity Studio**: http://localhost:3333

---

## ⚡ Comandos Útiles en Cursor

### Buscar TODOs
```bash
# Buscar todos los TODO_FORM_URL
grep -r "TODO_FORM_URL" src/

# Buscar todos los comentarios de imágenes
grep -r "IMG_" src/
```

### Reemplazar FORM_URL
```bash
# Reemplazar todos los FORM_URL por la URL real
# (Usar el editor de Cursor para buscar y reemplazar)
# Buscar: FORM_URL
# Reemplazar: https://tu-formulario.com
```

---

## 🐛 Debugging

```bash
# Ver variables de entorno cargadas
node -e "console.log(process.env)"

# Verificar conexión a Sanity
node -e "
  import('@sanity/client').then(({createClient}) => {
    const client = createClient({
      projectId: 'tu_project_id',
      dataset: 'production',
      useCdn: true
    });
    client.fetch('*[_type == \"home\"][0]').then(console.log);
  });
"
```

---

## 📚 Documentación

- Ver `GUIA_PASO_A_PASO.md` para instrucciones detalladas
- Ver `ESTRUCTURA_PROYECTO.md` para entender la arquitectura
- Ver `EJEMPLO_USO_SANITY.md` para ejemplos de código

