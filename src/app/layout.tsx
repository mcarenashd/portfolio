import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camila Arenas — Fullstack Developer & AI Enthusiast',
  description:
    'Portfolio de Camila Arenas. Desarrolladora Fullstack especializada en React, Next.js, Node.js e Inteligencia Artificial.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
