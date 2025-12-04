# CANARY ISLANDS GAMES

Web institucional para el departamento del Gobierno de Canarias encargado de promover la industria de videojuegos.

## Stack Tecnológico

- **Astro** - Framework web moderno y rápido
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos utility-first
- **Sanity CMS** - Headless CMS para gestión de contenido

## Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia `.env.example` a `.env` y completa los valores de Sanity:

```bash
cp .env.example .env
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`

### 4. Build para producción

```bash
npm run build
```

## Estructura del Proyecto

```
canary-islands-games/
├── src/
│   ├── layouts/          # Layouts base
│   ├── pages/            # Páginas de Astro
│   ├── components/       # Componentes reutilizables
│   └── lib/              # Utilidades y clientes
│       ├── cms/          # Cliente Sanity y queries
│       └── types/        # Tipos TypeScript
├── sanity/               # Configuración y esquemas de Sanity
└── public/               # Archivos estáticos
```

## Guía de Desarrollo

Ver `GUIA_PASO_A_PASO.md` para instrucciones detalladas de configuración.

---

**Proyecto Foxter**
