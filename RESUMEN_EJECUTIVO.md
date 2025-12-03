# Resumen Ejecutivo - CANARY ISLANDS GAMES

## 🎯 ¿Qué es este proyecto?

Web institucional para el departamento del Gobierno de Canarias encargado de promover la industria de videojuegos. Diseñada para informar sobre incentivos fiscales, mostrar el ecosistema de estudios y facilitar la inscripción.

---

## ⚡ Inicio Rápido (3 pasos)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env y añadir SANITY_PROJECT_ID (después de crear proyecto Sanity)
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

Abre `http://localhost:4321`

---

## 📋 Stack Tecnológico

- **Astro** - Framework web moderno y rápido
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Sanity CMS** - Headless CMS para gestión de contenido

---

## 📁 Estructura Clave

```
src/
├── pages/          # Páginas (index, tax-incentives, studios, contact)
├── components/     # Componentes reutilizables (Hero, Navbar, Footer, etc.)
├── layouts/        # Layouts base
└── lib/
    ├── cms/        # Cliente Sanity y queries
    └── types/      # Tipos TypeScript

sanity/
└── schemas/        # Esquemas de contenido (home, studio, taxIncentive, resource)
```

---

## 🔑 Puntos Importantes

### **Comentarios en el Código**

- **`IMG_BG_HERO`**: Imagen de fondo del hero
- **`IMG_SECTION_TAX_INCENTIVES`**: Imagen de la sección de incentivos
- **`TODO_FORM_URL`**: Reemplazar por la URL real del formulario de inscripción

### **Configuración de Sanity**

1. Crear proyecto en [sanity.io](https://www.sanity.io)
2. Obtener `Project ID` del dashboard
3. Añadir a `.env`: `SANITY_PROJECT_ID=tu_project_id`
4. Ejecutar Studio: `cd sanity && npm install && npm run dev`

### **Botón de Inscripción**

Buscar todos los `TODO_FORM_URL` o `FORM_URL` en el código y reemplazar por la URL real del formulario.

---

## 📚 Documentación Completa

- **`GUIA_PASO_A_PASO.md`**: Guía detallada paso a paso
- **`ESTRUCTURA_PROYECTO.md`**: Explicación completa de la estructura
- **`README.md`**: Documentación básica

---

## ✅ Checklist Rápido

- [ ] `npm install` ejecutado sin errores
- [ ] `npm run dev` funciona y muestra la home
- [ ] Variables de entorno configuradas (`.env`)
- [ ] Proyecto Sanity creado y `SANITY_PROJECT_ID` configurado
- [ ] Studio de Sanity funciona (`cd sanity && npm run dev`)
- [ ] Contenido de ejemplo creado en Sanity
- [ ] URL del formulario reemplazada en todos los `TODO_FORM_URL`

---

## 🚀 Próximos Pasos

1. Reemplazar `FORM_URL` por la URL real del formulario
2. Añadir imágenes reales (reemplazar placeholders)
3. Personalizar estilos (colores, tipografías)
4. Completar contenido en Sanity
5. Deploy a producción (Vercel, Netlify, etc.)

---

**¿Necesitas ayuda?** Consulta `GUIA_PASO_A_PASO.md` para instrucciones detalladas.

