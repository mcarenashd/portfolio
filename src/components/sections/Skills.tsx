'use client';

import { useTranslations } from 'next-intl';
import { Monitor, Server, Wrench, Brain } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { skillCategories } from '@/data/skills';

const icons: Record<string, typeof Monitor> = {
  frontend: Monitor,
  backend: Server,
  tools: Wrench,
  ai: Brain,
};

const cardColors: Record<string, { accent: string; hover: string }> = {
  frontend: { accent: 'bg-primary/[0.08] text-primary', hover: 'hover:border-primary/20' },
  backend: { accent: 'bg-sky-500/[0.08] text-sky-600', hover: 'hover:border-sky-500/20' },
  tools: { accent: 'bg-slate-500/[0.08] text-slate-600', hover: 'hover:border-slate-500/20' },
  ai: { accent: 'bg-accent/[0.08] text-accent', hover: 'hover:border-accent/20' },
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-32 bg-surface-alt relative">
      <hr className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-muted text-xs font-semibold uppercase tracking-[0.08em] mb-6">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-text-primary">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.id];
            const colors = cardColors[category.id];

            return (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <div
                  className={`card-accent-hover rounded-[20px] p-7 bg-surface border border-transparent ${colors.hover} shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-full hover:-translate-y-1`}
                >
                  <div className="relative z-10 flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl ${colors.accent} flex items-center justify-center`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-text-primary text-sm tracking-tight">
                      {t(category.id)}
                    </h3>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-surface-alt text-text-secondary text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
