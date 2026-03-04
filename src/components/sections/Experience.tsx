'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Briefcase, GraduationCap, HardHat } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { experiences } from '@/data/experience';
import type { Locale } from '@/i18n/config';

const typeIcons: Record<string, typeof Briefcase> = {
  tech: Briefcase,
  education: GraduationCap,
  engineering: HardHat,
};

const typeColors: Record<string, string> = {
  tech: 'bg-primary/90 text-white shadow-sm shadow-primary/20',
  education: 'bg-accent/90 text-white shadow-sm shadow-accent/20',
  engineering: 'bg-[#A0A0A5] text-white shadow-sm shadow-black/10',
};

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;

  return (
    <section id="experience" className="py-32 bg-surface relative">
      <hr className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-muted text-xs font-semibold uppercase tracking-[0.08em] mb-6">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-text-primary">
            {t('title')}
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type];
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal
                key={exp.id}
                delay={index * 0.15}
                direction={isLeft ? 'left' : 'right'}
              >
                <div
                  className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                    isLeft
                      ? 'md:flex-row md:text-right'
                      : 'md:flex-row-reverse md:text-left'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="bg-surface rounded-[20px] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]">
                      <span className="text-xs text-text-tertiary font-medium">
                        {exp.period[locale]}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary mt-1">
                        {exp.role[locale]}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {exp.company}
                      </p>
                      <ul
                        className={`mt-3 space-y-1.5 ${
                          isLeft ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        {exp.description[locale].map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-text-secondary leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2">
                    <div
                      className={`w-12 h-12 rounded-full ${typeColors[exp.type]} flex items-center justify-center`}
                    >
                      <Icon size={18} />
                    </div>
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
