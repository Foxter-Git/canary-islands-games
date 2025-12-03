# 🚀 Guía de Despliegue en Vercel

## Paso 1: Preparar el Proyecto en GitHub

1. **Inicializa Git** (si no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crea un repositorio en GitHub**:
   - Ve a [github.com](https://github.com)
   - Clic en "New repository"
   - Nombre: `canary-islands-games` (o el que prefieras)
   - Público o Privado (tu elección)
   - **NO** marques "Initialize with README"
   - Clic en "Create repository"

3. **Conecta tu proyecto local con GitHub**:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/canary-islands-games.git
   git branch -M main
   git push -u origin main
   ```

## Paso 2: Desplegar en Vercel

### Opción A: Desde la Web (Recomendado)

1. **Ve a Vercel**:
   - Abre [vercel.com](https://vercel.com)
   - Clic en "Sign Up" o "Log In"
   - Puedes usar tu cuenta de GitHub para iniciar sesión

2. **Importa tu proyecto**:
   - Clic en "Add New..." → "Project"
   - Selecciona "Import Git Repository"
   - Conecta tu cuenta de GitHub si es necesario
   - Selecciona el repositorio `canary-islands-games`
   - Clic en "Import"

3. **Configura el proyecto**:
   - **Framework Preset**: Vercel detectará "Astro" automáticamente
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (ya está configurado)
   - **Output Directory**: `dist` (ya está configurado)
   - **Install Command**: `npm install` (ya está configurado)

4. **Configura Variables de Entorno**:
   - En la sección "Environment Variables", añade:
     - `SANITY_PROJECT_ID` = `1hhcafil` (tu Project ID de Sanity)
     - `SANITY_DATASET` = `production`
     - `SANITY_API_VERSION` = `2024-01-01`
     - `SANITY_USE_CDN` = `true`
   - Clic en "Add" para cada variable

5. **Despliega**:
   - Clic en "Deploy"
   - Espera 1-2 minutos mientras Vercel construye y despliega
   - ¡Listo! Obtendrás una URL como: `https://canary-islands-games.vercel.app`

### Opción B: Desde la Terminal (CLI)

1. **Instala Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión**:
   ```bash
   vercel login
   ```

3. **Despliega**:
   ```bash
   vercel
   ```
   - Sigue las instrucciones en pantalla
   - Cuando pregunte por variables de entorno, añade las de Sanity

4. **Despliega a producción**:
   ```bash
   vercel --prod
   ```

## Paso 3: Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a "Settings" → "Domains"
3. Añade tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## Paso 4: Actualizaciones Automáticas

- Cada vez que hagas `git push` a la rama `main`, Vercel desplegará automáticamente
- Puedes ver el estado de los despliegues en el dashboard de Vercel

## 🔧 Solución de Problemas

### Error: "Missing SANITY_PROJECT_ID"
- Verifica que hayas añadido todas las variables de entorno en Vercel
- Ve a Settings → Environment Variables y verifica que estén todas

### Error en el build
- Revisa los logs en Vercel para ver el error específico
- Asegúrate de que `npm run build` funciona localmente primero

### La imagen no se ve
- Verifica que las imágenes estén en Sanity y publicadas
- Revisa que las variables de entorno estén correctas

## 📝 Notas Importantes

- **Variables de entorno**: Nunca subas tu archivo `.env` a GitHub (ya está en `.gitignore`)
- **Sanity Studio**: El Studio de Sanity se despliega por separado (no se incluye en Vercel)
- **Build local**: Siempre prueba `npm run build` localmente antes de hacer push

## 🎉 ¡Listo!

Una vez desplegado, tendrás una URL pública como:
- `https://canary-islands-games.vercel.app`
- O tu dominio personalizado si lo configuraste

