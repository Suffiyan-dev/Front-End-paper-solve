import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'soft';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-surface-card border border-surface-border shadow-paper',
      elevated: 'bg-surface-card shadow-paper-lg border-none',
      soft: 'bg-brand-soft border border-brand-primary/10 shadow-none',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg p-6 transition-all',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
