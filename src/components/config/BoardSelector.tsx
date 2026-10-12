import React from 'react';
import { cn } from '../../lib/utils';
import { BOARDS } from '../../constants/exam';

interface BoardSelectorProps {
  selectedBoard: string | null;
  onSelect: (id: string) => void;
}

const BOARD_DESCRIPTIONS: Record<string, string> = {
  cambridge: 'International Standard',
  federal: 'National Curriculum',
  punjab: 'Provincial Board',
  sindh: 'Provincial Board',
  kpk: 'Provincial Board',
  balochistan: 'Provincial Board',
  other: 'Custom System',
};

const BoardSelector: React.FC<BoardSelectorProps> = ({ selectedBoard, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {BOARDS.map((board) => (
        <button
          key={board.id}
          onClick={() => onSelect(board.id)}
          className={cn(
            'group relative p-4 rounded-2xl border-2 text-left transition-all duration-200',
            selectedBoard === board.id
              ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-[1.02]'
              : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
          )}
        >
          <div className="flex items-center gap-3 mb-1">
            <span className={cn(
              "text-2xl transition-transform group-hover:scale-110 duration-200",
              selectedBoard === board.id ? "brightness-0 invert" : ""
            )}>
              {board.icon}
            </span>
            <span className="font-Montserrat font-bold text-base">
              {board.name}
            </span>
          </div>
          <p className={cn(
            "text-xs transition-colors duration-200",
            selectedBoard === board.id ? "text-white/80" : "text-text-muted"
          )}>
            {BOARD_DESCRIPTIONS[board.id] || 'Examination System'}
          </p>
        </button>
      ))}
    </div>
  );
};

export default BoardSelector;
