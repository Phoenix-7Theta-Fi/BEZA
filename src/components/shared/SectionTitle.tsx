import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, className, children }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      {subtitle && (
        <p className="text-base font-semibold text-primary tracking-wide uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{children}</p>}
    </div>
  );
}
