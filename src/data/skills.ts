export interface SkillCategory {
  id: string;
  titleKey: string;
  color: string;
  bgColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    titleKey: 'skills.frontend',
    color: 'text-primary',
    bgColor: 'bg-primary-light',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    titleKey: 'skills.backend',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs'],
  },
  {
    id: 'tools',
    titleKey: 'skills.tools',
    color: 'text-amber-600',
    bgColor: 'bg-accent-light',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Jest', 'Vercel'],
  },
  {
    id: 'ai',
    titleKey: 'skills.ai',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    skills: ['Python', 'Agent Training', 'Predictive AI', 'Data Analysis', 'Machine Learning', 'AI Integration', 'Prompt Engineering'],
  },
];
