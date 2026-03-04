'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import Card from '../ui/Card';
import { blogPosts } from '@/data/blog';
import type { Locale } from '@/i18n/config';

export default function Blog() {
  const t = useTranslations('blog');
  const locale = useLocale() as Locale;

  return (
    <section id="blog" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col cursor-pointer group">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-primary-light text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date & read time */}
                <div className="flex items-center gap-3 text-xs text-text-secondary mb-3">
                  <time>
                    {new Date(post.date).toLocaleDateString(
                      locale === 'es' ? 'es-ES' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime} {t('min_read')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title[locale]}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {post.excerpt[locale]}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  {t('read_more')}
                  <ArrowRight size={14} />
                </span>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
