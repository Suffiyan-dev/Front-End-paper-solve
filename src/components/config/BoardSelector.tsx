import React from 'react';
import { cn } from '../../lib/utils';
import type { Group } from '../../lib/subjects';

interface BoardSelectorProps {
  boards: Group[];
  selectedBoard: string | null;
  onSelect: (id: string) => void;
}

const BoardSelector: React.FC<BoardSelectorProps> = ({ boards, selectedBoard, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {boards.map((board) => {
        const disabled = board.available === 0;
        return (
          <button
            key={board.id}
            onClick={() => onSelect(board.id)}
            disabled={disabled}
            className={cn(
              'group relative p-4 rounded-2xl border-2 text-left transition-all duration-200',
              disabled && 'opacity-50 cursor-not-allowed',
              selectedBoard === board.id
                ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-[1.02]'
                : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
            )}
          >
            <span className="font-Montserrat font-bold text-base block mb-1">{board.name}</span>
            <p className={cn('text-xs transition-colors duration-200', selectedBoard === board.id ? 'text-white/80' : 'text-text-muted')}>
              {disabled ? 'Coming soon' : `${board.available} of ${board.total} subjects ready`}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default BoardSelector;
