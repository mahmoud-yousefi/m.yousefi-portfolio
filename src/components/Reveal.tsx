import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '../lib/hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds, applied through the --reveal-delay custom property. */
  delay?: number;
  as?: ElementType;
  id?: string;
  style?: CSSProperties;
}

export default function Reveal({ children, className = '', delay = 0, as = 'div', id, style }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
