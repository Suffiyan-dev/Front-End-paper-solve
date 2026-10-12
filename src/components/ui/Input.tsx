import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && <label className="text-sm font-semibold text-text-heading">{label}</label>}
            {description && <p className="text-xs text-text-muted">{description}</p>}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'px-3 py-2 bg-surface-card border border-surface-border rounded-md text-text-body transition-all',
            'placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary',
            error && 'border-red-500 focus:ring-red-500/20 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
