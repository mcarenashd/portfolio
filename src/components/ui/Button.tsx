'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/15',
  secondary:
    'bg-surface-alt text-text-primary hover:bg-[#EBEBF0] border-0',
  outline:
    'bg-transparent text-primary border border-primary/30 hover:bg-primary-light hover:border-primary/50',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]';

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
