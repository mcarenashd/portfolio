'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Quote } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import Card from '../ui/Card';
import type { Locale } from '@/i18n/config';

const testimonials = [
  {
    id: '1',
    name: 'Cliente Huvantia',
    role: {
      es: 'Director de Recursos Humanos',
      en: 'HR Director',
    },
    text: {
      es: 'Camila entendió nuestra visión desde el primer momento. El sitio web refleja perfectamente nuestra identidad corporativa y ha mejorado significativamente nuestra presencia digital.',
      en: 'Camila understood our vision from the start. The website perfectly reflects our corporate identity and has significantly improved our digital presence.',
    },
  },
  {
    id: '2',
    name: 'Cliente Ingecon',
    role: {
      es: 'Gerente General',
      en: 'General Manager',
    },
    text: {
      es: 'Su experiencia en ingeniería civil fue un gran plus. Habla nuestro idioma técnico y tradujo eso en una experiencia web moderna y profesional.',
      en: 'Her civil engineering background was a huge plus. She speaks our technical language and translated that into a modern, professional web experience.',
    },
  },
  {
    id: '3',
    name: 'Compañero Factoria F5',
    role: {
      es: 'Desarrollador Frontend',
      en: 'Frontend Developer',
    },
    text: {
      es: 'Trabajar con Camila fue una experiencia increíble. Su capacidad para gestionar proyectos y resolver problemas complejos destacó en cada sprint.',
      en: 'Working with Camila was an incredible experience. Her ability to manage projects and solve complex problems stood out in every sprint.',
    },
  },
];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale() as Locale;

  return (
    <section className="py-24 gradient-section">
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
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col">
                <Quote size={24} className="text-primary/20 mb-4" />
                <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.text[locale]}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {testimonial.role[locale]}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
