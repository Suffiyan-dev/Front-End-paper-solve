import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  className?: string;
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ variant = 'full', className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 select-none',
          className
        )}
      >
        {/* Logo Icon: A stylized "Solved Paper" - overlapping sheets with a checkmark */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-6 h-8 bg-brand-primary rounded-sm rotate-3 shadow-sm" />
          <div className="absolute w-6 h-8 bg-brand-primary/80 rounded-sm -rotate-3 shadow-sm border border-white/20" />
          <div className="absolute w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border border-brand-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {variant !== 'icon' && (
          <div className="flex items-baseline">
            <span className="text-xl font-display font-bold text-text-heading tracking-tight">
              Paper<span className="text-brand-primary">Solve</span>
            </span>
          </div>
        )}
      </div>
    );
  }
);

Logo.displayName = 'Logo';
