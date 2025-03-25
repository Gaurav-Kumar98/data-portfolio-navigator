
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-20 scroll-mt-16", 
        className
      )}
    >
      {children}
    </section>
  );
}
