import React from 'react';
import { cn } from '../../lib/utils';
import type { Group } from '../../lib/subjects';

interface LevelSelectorProps {
  levels: Group[];
  selectedLevel: string | null;
  onSelect: (level: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, selectedLevel, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {levels.map((level) => {
        const disabled = level.available === 0;
        return (
          <button
            key={level.id}
            onClick={() => onSelect(level.id)}
            disabled={disabled}
            className={cn(
              'px-6 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200',
              disabled && 'opacity-50 cursor-not-allowed',
              selectedLevel === level.id
                ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
            )}
          >
            {level.name}
            {disabled && <span className="ml-2 text-xs font-normal">Coming soon</span>}
          </button>
        );
      })}
    </div>
  );
};

export default LevelSelector;
