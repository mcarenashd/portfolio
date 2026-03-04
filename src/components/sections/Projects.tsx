'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { projects } from '@/data/projects';
import type { Locale } from '@/i18n/config';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <section id="projects" className="py-32 bg-surface-alt relative">
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

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="group bg-surface rounded-[20px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-full flex flex-col hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-video bg-surface-alt overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-text-primary text-xs font-semibold shadow-sm">
                        <Star size={12} className="fill-primary text-primary" />
                        {t('featured')}
                      </div>
                    )}
                    {/* Screenshot or fallback */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]">
                        <span className="text-4xl font-bold text-primary/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/50 transition-all duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-text-primary flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                          aria-label="View live"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-text-primary flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                          aria-label="View code"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-text-primary mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {project.description[locale]}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-surface-alt text-text-tertiary text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
