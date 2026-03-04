export interface Experience {
  id: string;
  role: {
    es: string;
    en: string;
  };
  company: string;
  period: {
    es: string;
    en: string;
  };
  description: {
    es: string[];
    en: string[];
  };
  type: 'tech' | 'engineering' | 'education';
}

export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: {
      es: 'Desarrolladora Fullstack Freelance',
      en: 'Freelance Fullstack Developer',
    },
    company: 'Independiente',
    period: {
      es: '2024 — Presente',
      en: '2024 — Present',
    },
    description: {
      es: [
        'Desarrollo de sitios web corporativos para empresas de ingeniería y consultoría',
        'Construcción de aplicaciones fullstack como la Bitácora Digital de Obra',
        'Implementación de diseños responsivos y optimización SEO',
      ],
      en: [
        'Development of corporate websites for engineering and consulting firms',
        'Building fullstack applications like the Digital Construction Log',
        'Implementation of responsive designs and SEO optimization',
      ],
    },
    type: 'tech',
  },
  {
    id: 'factoria',
    role: {
      es: 'Estudiante Fullstack Web Development',
      en: 'Fullstack Web Development Student',
    },
    company: 'Factoria F5',
    period: {
      es: '2024',
      en: '2024',
    },
    description: {
      es: [
        'Bootcamp intensivo de desarrollo web fullstack',
        'Proyectos reales con metodologías ágiles (Scrum)',
        'Stack: React, Node.js, Express, MongoDB, TypeScript',
      ],
      en: [
        'Intensive fullstack web development bootcamp',
        'Real-world projects using agile methodologies (Scrum)',
        'Stack: React, Node.js, Express, MongoDB, TypeScript',
      ],
    },
    type: 'education',
  },
  {
    id: 'civil-eng',
    role: {
      es: 'Ingeniera Civil',
      en: 'Civil Engineer',
    },
    company: 'Sector Construcción',
    period: {
      es: '2018 — 2023',
      en: '2018 — 2023',
    },
    description: {
      es: [
        'Gestión de proyectos de construcción e infraestructura',
        'Coordinación de equipos multidisciplinarios',
        'Interventoría y control de calidad en obra',
      ],
      en: [
        'Management of construction and infrastructure projects',
        'Coordination of multidisciplinary teams',
        'Project oversight and on-site quality control',
      ],
    },
    type: 'engineering',
  },
];
