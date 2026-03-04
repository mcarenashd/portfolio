'use client';

import { useTranslations } from 'next-intl';
import { Code2, Briefcase, Cpu } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { key: 'stat_projects', value: '8+', icon: Briefcase },
  { key: 'stat_tech', value: '15+', icon: Code2 },
  { key: 'stat_experience', value: '2+', icon: Cpu },
];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-32 bg-surface relative">
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-text-secondary leading-[1.65] text-lg tracking-[-0.003em]">
                {t('description_1')}
              </p>
              <p className="text-text-secondary leading-[1.65] text-lg tracking-[-0.003em]">
                {t('description_2')}
              </p>
              <p className="text-text-secondary leading-[1.65] text-lg tracking-[-0.003em]">
                {t('description_3')}
              </p>
            </div>
          </ScrollReveal>

          {/* Stats + Photo placeholder */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Photo placeholder with gradient ring */}
              <div className="relative max-w-xs mx-auto">
                <div className="aspect-square rounded-[28px] bg-gradient-to-br from-primary/[0.06] via-surface-alt to-accent/[0.06] flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center ring-2 ring-white/60">
                      <span className="text-3xl font-bold gradient-text">
                        CA
                      </span>
                    </div>
                    <p className="text-sm text-text-tertiary font-medium tracking-wide">Camila Arenas</p>
                    <p className="text-xs text-text-tertiary/60 mt-1">Fullstack Developer</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="text-center p-5 rounded-[18px] bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-500"
                  >
                    <stat.icon
                      size={18}
                      className="mx-auto mb-2 text-primary/70"
                    />
                    <p className="text-2xl font-bold text-text-primary tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-tertiary mt-1">
                      {t(stat.key)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
