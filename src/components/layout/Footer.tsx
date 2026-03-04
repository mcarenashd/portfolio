'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border-subtle bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mcarenashd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mcarenash/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Camila Arenas. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
