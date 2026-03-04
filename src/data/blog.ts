export interface BlogPost {
  id: string;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  date: string;
  readTime: number;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      es: 'De la ingeniería civil al código: mi historia de transición',
      en: 'From civil engineering to code: my transition story',
    },
    excerpt: {
      es: 'Cómo mi experiencia en ingeniería civil me preparó para una carrera en desarrollo web y por qué creo que los ingenieros tienen una ventaja única en tech.',
      en: 'How my civil engineering background prepared me for a career in web development and why I believe engineers have a unique advantage in tech.',
    },
    date: '2025-01-15',
    readTime: 5,
    tags: ['Career', 'Personal'],
    slug: 'civil-engineering-to-code',
  },
  {
    id: '2',
    title: {
      es: 'Integrando IA en aplicaciones web: una guía práctica',
      en: 'Integrating AI into web applications: a practical guide',
    },
    excerpt: {
      es: 'Explorando cómo los desarrolladores fullstack pueden aprovechar las APIs de inteligencia artificial para crear aplicaciones más inteligentes y útiles.',
      en: 'Exploring how fullstack developers can leverage AI APIs to create smarter, more useful applications.',
    },
    date: '2025-02-20',
    readTime: 8,
    tags: ['AI', 'Development'],
    slug: 'integrating-ai-web-apps',
  },
  {
    id: '3',
    title: {
      es: 'Construyendo la Bitácora Digital de Obra: lecciones aprendidas',
      en: 'Building the Digital Construction Log: lessons learned',
    },
    excerpt: {
      es: 'El proceso de crear una herramienta que une mi pasión por la construcción con el desarrollo web. Retos técnicos y soluciones.',
      en: 'The process of creating a tool that bridges my passion for construction with web development. Technical challenges and solutions.',
    },
    date: '2025-03-10',
    readTime: 6,
    tags: ['Projects', 'Fullstack'],
    slug: 'building-bdo',
  },
];
