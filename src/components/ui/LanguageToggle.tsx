'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-transparent hover:bg-surface-alt text-text-secondary hover:text-text-primary text-xs font-medium transition-all duration-300"
      aria-label="Toggle language"
    >
      <Globe size={14} />
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
