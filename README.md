# Portafolio · Joseline Franco

Portafolio personal de **Joseline Franco**, Front-End Developer especializada en **Angular y TypeScript**, con experiencia en migraciones de aplicaciones legacy (AngularJS → Angular 18), micro frontends y diseño responsivo en el sector financiero y fintech.

🔗 **Sitio en vivo:** [portafolio-joss-3z5b.vercel.app](https://portafolio-joss-3z5b.vercel.app/)
💼 **LinkedIn:** [joseline-franco](https://www.linkedin.com/in/joseline-franco-259052239/)
✉️ **Correo:** jossfranco70@gmail.com

---

## ✨ Características

- Sitio estático y rápido construido con **Astro**, sin JavaScript innecesario en el cliente.
- Una sola página con navegación por secciones: Experiencia, Proyectos, Habilidades, Educación, Sobre mí y Contacto.
- Páginas de detalle por proyecto generadas automáticamente en `/proyectos/<slug>`.
- Contenido separado del diseño: toda la información vive en archivos de datos en `src/data/`.
- Diseño responsive con **Tailwind CSS** y menú adaptado a móvil.
- Imágenes optimizadas automáticamente a WebP con `astro:assets`.
- SEO: meta tags Open Graph y Twitter, URL canónica, `sitemap.xml` y `robots.txt`.
- Página 404 personalizada.

## 🛠️ Tecnologías

| Herramienta | Uso |
| :--- | :--- |
| [Astro 4](https://astro.build) | Framework y generación del sitio estático |
| [TypeScript](https://www.typescriptlang.org) | Tipado de datos y componentes |
| [Tailwind CSS 3](https://tailwindcss.com) | Estilos |
| [Onest](https://fontsource.org/fonts/onest) | Tipografía |
| [Vercel](https://vercel.com) | Hosting y despliegue continuo |

## 🚀 Cómo ejecutarlo en local

Requisitos: **Node.js 18.14.1 o superior** (probado con Node 22).

```sh
git clone https://github.com/JossFranco/portafolio-joss.git
cd portafolio-joss
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

### Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Revisa los tipos (`astro check`) y genera el sitio en `.vercel/output/static/` |
| `npm run preview` | Sirve en local el sitio ya compilado |

## 📁 Estructura del proyecto

```text
src/
├── assets/             Imágenes (se optimizan al compilar)
├── components/
│   ├── sections/       Secciones de la página: Hero, Experience, Projects, Skills, Education, AboutMe, Contact
│   ├── ui/             Componentes reutilizables: Badge, SocialPill, TitleSection, SectionContainer, LinkInline
│   ├── ExperienceItem.astro
│   ├── Header.astro
│   └── Footer.astro
├── data/               Contenido del sitio (editar aquí para actualizar la información)
│   ├── site.ts         Nombre, descripción, correo, redes y menú
│   ├── experience.ts   Experiencia laboral
│   ├── education.ts    Educación
│   ├── skills.ts       Habilidades
│   └── projects.ts     Proyectos
├── layouts/
│   └── Layout.astro    Estructura HTML base y meta tags de SEO
├── pages/
│   ├── index.astro     Página principal
│   ├── 404.astro       Página no encontrada
│   └── proyectos/
│       └── [slug].astro  Detalle de cada proyecto
├── styles/global.css
├── types/index.ts      Interfaces de TypeScript
└── utils/date.ts       Formato de fechas en español
```

## ✏️ Cómo actualizar el contenido

No hace falta tocar los componentes: basta con editar los archivos de `src/data/`.

**Agregar un proyecto** en `src/data/projects.ts`. Se crea automáticamente su tarjeta en la sección Proyectos y su página en `/proyectos/mi-proyecto`:

```ts
export const PROJECTS: Project[] = [
  {
    slug: "mi-proyecto",
    title: "Mi proyecto",
    summary: "Resumen corto para la tarjeta.",
    description: "Descripción completa para la página de detalle.",
    tags: ["Angular", "TypeScript"],
    repo: "https://github.com/JossFranco/mi-proyecto",
    demo: "https://mi-proyecto.vercel.app",
  },
]
```

**Agregar una experiencia** en `src/data/experience.ts`. Si no tiene `endDate`, se muestra como _Presente_:

```ts
{
  company: "Empresa",
  position: "Front-End Developer",
  startDate: new Date(2025, 11, 1), 
  location: "Ecuador",
  highlights: ["Logro 1", "Logro 2"],
},
```

Las imágenes van en `src/assets/` y se importan en el archivo de datos (por ejemplo `import logo from "@/assets/logo.png"`).

## ☁️ Despliegue

El sitio se publica en **Vercel** con el adaptador [`@astrojs/vercel`](https://docs.astro.build/es/guides/integrations-guide/vercel/). Cada `git push` a `main` genera un nuevo despliegue automáticamente. La configuración de compilación está en `vercel.json`.

Antes de publicar en un dominio nuevo, actualiza la propiedad `site` en `astro.config.mjs`. Se usa para generar el sitemap, la URL canónica y las imágenes de vista previa al compartir el enlace.

---

Hecho con 💛 por Joseline Franco · Quito, Ecuador 🇪🇨
