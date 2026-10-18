import type { Experience } from "@/types"
import bpLogo from "@/assets/bp.png"

export const EXPERIENCE: Experience[] = [
  {
    company: "EasySoft",
    position: "Front-End Developer",
    startDate: new Date(2025, 11, 1),
    location: "Ecuador",
    highlights: [
      "Lideré la migración del módulo de Cash Management de AngularJS a Angular 18, modernizando componentes legacy y aplicando herramientas de desarrollo asistido por IA para acelerar la refactorización y reducir tiempos de entrega.",
      "Desarrollé y documenté componentes reutilizables en Angular 18 (standalone components, nueva sintaxis de control de flujo) siguiendo buenas prácticas de arquitectura escalable.",
      "Apliqué buenas prácticas de arquitectura frontend (componentes standalone, lazy loading, optimización de rendimiento) para mejorar la escalabilidad del módulo migrado.",
      "Colaboré con equipos de producto en la definición de requerimientos técnicos para servicios de cash management, asegurando alineación entre frontend y backend.",
    ],
  },
  {
    company: "Banco Pichincha",
    position: "Front-End Developer",
    startDate: new Date(2022, 6, 1),
    endDate: new Date(2025, 3, 1),
    location: "Ecuador",
    highlights: [
      "Desarrollé micro frontends con Angular y TypeScript, creando componentes modulares y reutilizables que mejoraron la escalabilidad y mantenibilidad de la arquitectura frontend.",
      "Construí mockups funcionales e implementé interfaces responsivas, asegurando coherencia visual y experiencia de usuario en múltiples dispositivos.",
      "Implementé pruebas unitarias y validé APIs RESTful con Postman, documentando hallazgos y reduciendo defectos en entornos de QA y producción.",
      "Gestioné control de versiones con Git, participé en revisiones de código y ejecuté pruebas manuales y exploratorias, aplicando prácticas de Clean Code y SOLID.",
      "Colaboré en equipos multidisciplinarios bajo Scrum, integrando frontend con servicios backend y optimizando rendimiento, tiempos de carga y visualización de datos en proyectos del sector bancario.",
    ],
    link: "https://www.pichincha.com",
    logo: bpLogo,
  },
  {
    company: "Banco Pichincha",
    position: "Ejecutiva de Servicios Transaccionales",
    startDate: new Date(2018, 2, 1),
    endDate: new Date(2022, 0, 1),
    location: "Ecuador",
    highlights: [
      "Gestioné transacciones y cuadré caja diaria, asegurando precisión y cumplimiento de procedimientos internos y tiempos de respuesta establecidos.",
      "Brindé atención personalizada y soporte en canales digitales (banca móvil, web y app), resolviendo accesos y facilitando la adopción de canales electrónicos.",
      "Detecté y escalé oportunidades de mejora en procesos operativos, colaborando con equipos internos para optimizar eficiencia y experiencia del cliente.",
    ],
    logo: bpLogo,
  },
]
