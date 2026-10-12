import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { BookOpen } from 'lucide-react';

interface QuickStartProps {
  onShortcutClick: (subject: string) => void;
}

const SUBJECT_SHORTCUTS = [
  { name: 'Physics', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'Mathematics', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { name: 'Chemistry', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { name: 'Biology', color: 'bg-rose-50 text-rose-600 border-rose-100' },
];

const QuickStart: React.FC<QuickStartProps> = ({ onShortcutClick }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-text-muted" />
        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Quick Start</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {SUBJECT_SHORTCUTS.map((s) => (
          <button
            key={s.name}
            onClick={() => onShortcutClick(s.name)}
            className={cn(
              "px-4 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 active:scale-95",
              s.color
            )}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickStart;
