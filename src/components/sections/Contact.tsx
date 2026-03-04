'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-32 bg-surface relative">
      <hr className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-muted text-xs font-semibold uppercase tracking-[0.08em] mb-6">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-text-primary">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto leading-[1.58]">
            {t('description')}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-text-primary">
                {t('info_title')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-primary/[0.06] flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">Email</p>
                    <a
                      href="mailto:mcarenasdh@gmail.com"
                      className="text-text-primary hover:text-primary transition-colors duration-300 font-medium"
                    >
                      mcarenasdh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-accent/[0.06] flex items-center justify-center">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">
                      {t('location')}
                    </p>
                    <p className="text-text-primary font-medium">Colombia</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-4">
                <a
                  href="https://github.com/mcarenashd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-text-secondary hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mcarenash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-text-secondary hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-border/70 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all duration-300"
                  placeholder={t('name')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-border/70 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all duration-300"
                  placeholder={t('email')}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t('subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-border/70 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all duration-300"
                  placeholder={t('subject')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-border/70 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all duration-300 resize-none"
                  placeholder={t('message')}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <Send size={16} />
                {t('send')}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
