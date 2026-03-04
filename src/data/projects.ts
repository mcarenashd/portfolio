export interface Project {
  id: string;
  title: string;
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  category: 'fullstack' | 'websites' | 'learning';
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'bdo',
    title: 'Bitácora Digital de Obra',
    description: {
      es: 'Sistema digital de bitácora de obra para documentar y hacer seguimiento al progreso de proyectos de construcción en tiempo real. Combina mi experiencia en ingeniería civil con desarrollo fullstack.',
      en: 'Digital construction log system to document and track construction project progress in real-time. Combines my civil engineering background with fullstack development.',
    },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    category: 'fullstack',
    liveUrl: 'https://bdo-client-hzui.onrender.com/',
    image: '/images/bdo.png',
    featured: true,
  },
  {
    id: 'huvantia',
    title: 'Huvantia',
    description: {
      es: 'Sitio web corporativo para consultora de recursos humanos y gestión empresarial en Latinoamérica. Diseño profesional con SEO optimizado.',
      en: 'Corporate website for an HR and business management consulting firm in Latin America. Professional design with optimized SEO.',
    },
    tags: ['React', 'Tailwind', 'Responsive Design', 'SEO'],
    category: 'websites',
    liveUrl: 'https://huvantia.com/',
    image: '/images/huvantia.png',
  },
  {
    id: 'donovan',
    title: 'Consultores Donovan',
    description: {
      es: 'Sitio web para firma de consultoría en interventoría, consultoría y gerenciamiento de proyectos de ingeniería.',
      en: 'Website for an engineering consulting firm specializing in oversight, consulting, and project management.',
    },
    tags: ['React', 'CSS3', 'Responsive Design'],
    category: 'websites',
    liveUrl: 'https://www.consultoresdonovan.co/',
    image: '/images/donovan.png',
  },
  {
    id: 'ingecon',
    title: 'Ingecon S.A.S',
    description: {
      es: 'Sitio web moderno para empresa de ingeniería y consultoría. Construido con React 19 y TypeScript.',
      en: 'Modern website for an engineering and consulting firm. Built with React 19 and TypeScript.',
    },
    tags: ['React 19', 'TypeScript', 'Tailwind'],
    category: 'websites',
    liveUrl: 'https://ingecon-site.vercel.app/',
    image: '/images/ingecon.png',
  },
  {
    id: 'cine-verano',
    title: 'Cine Verano CRUD',
    description: {
      es: 'Aplicación CRUD para gestión de películas de un cine de verano. Proyecto de Factoria F5 con operaciones completas de base de datos.',
      en: 'CRUD application for managing summer cinema movies. Factoria F5 project with complete database operations.',
    },
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    category: 'learning',
    githubUrl: 'https://github.com/mcarenashd/cine-verano-crud',
  },
  {
    id: 'cora-mind',
    title: 'Cora Mind',
    description: {
      es: 'Aplicación fullstack desarrollada en el Bootcamp Femcoders de Factoría F5. Frontend en React con backend en Node.js, Express y SQL.',
      en: 'Fullstack application built during the Factoría F5 Femcoders Bootcamp. React frontend with Node.js, Express, and SQL backend.',
    },
    tags: ['React', 'Node.js', 'Express', 'SQL', 'Cloudinary'],
    category: 'fullstack',
    githubUrl: 'https://github.com/G3-PFinal-NewValue/newvalue-client',
  },
];
