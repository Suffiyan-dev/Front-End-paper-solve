import React from 'react';
import { cn } from '../../lib/utils';

interface LevelSelectorProps {
  levels: string[];
  selectedLevel: string | null;
  onSelect: (level: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, selectedLevel, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={cn(
            'px-6 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200',
            selectedLevel === level
              ? 'bg-brand-primary border-brand-primary text-white shadow-md'
              : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
          )}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;
