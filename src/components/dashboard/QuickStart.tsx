import React from 'react';
import { cn } from '../../lib/utils';
import { BookOpen } from 'lucide-react';
import SubjectsGate from '../config/SubjectsGate';

interface QuickStartProps {
  onShortcutClick: (subject: string) => void;
}

const COLORS = [
  'bg-blue-50 text-blue-600 border-blue-100',
  'bg-indigo-50 text-indigo-600 border-indigo-100',
  'bg-emerald-50 text-emerald-600 border-emerald-100',
  'bg-rose-50 text-rose-600 border-rose-100',
];

const QuickStart: React.FC<QuickStartProps> = ({ onShortcutClick }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-text-muted" />
        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Quick Start</span>
      </div>
      <SubjectsGate>
        {(subjects) => (
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject, i) => (
              <button
                key={subject.slug}
                disabled={!subject.available}
                onClick={() => onShortcutClick(subject.slug)}
                className={cn(
                  "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                  subject.available ? "hover:scale-105 active:scale-95" : "opacity-50 cursor-not-allowed",
                  COLORS[i % COLORS.length]
                )}
              >
                {subject.name}
              </button>
            ))}
          </div>
        )}
      </SubjectsGate>
    </div>
  );
};

export default QuickStart;
