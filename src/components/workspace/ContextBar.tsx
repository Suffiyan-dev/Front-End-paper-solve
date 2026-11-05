import React from 'react';
import { Edit2 } from 'lucide-react';

interface ContextBarProps {
  board: string;
  level: string;
  subject: string;
  marks: number;
  onEditConfig?: () => void;
}

const ContextBar: React.FC<ContextBarProps> = ({ board, level, subject, marks, onEditConfig }) => {
  return (
    <div className="h-14 border-b border-surface-border bg-white flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 text-sm font-medium text-text-body">
        <div className="flex items-center gap-2">
          <span className="text-text-heading">{board}</span>
          <span className="text-gray-300">•</span>
          <span>{level}</span>
          <span className="text-gray-300">•</span>
          <span>{subject}</span>
        </div>

        {onEditConfig && (
          <button
            onClick={onEditConfig}
            className="p-1 text-text-muted hover:text-brand-primary transition-colors"
            aria-label="Edit configuration"
          >
            <Edit2 size={14} />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-wide">
        {marks} Marks
      </div>
    </div>
  );
};

export default ContextBar;
