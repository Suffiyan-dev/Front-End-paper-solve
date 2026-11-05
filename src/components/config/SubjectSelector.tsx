import React from 'react';
import { cn } from '../../lib/utils';
import type { SubjectInfo } from '../../lib/subjects';

interface SubjectSelectorProps {
  subjects: SubjectInfo[];
  selectedSubject: string | null;
  onSelect: (slug: string) => void;
}

const NOTES: Record<string, string> = {
  planned: 'Coming soon',
  building: 'Beta',
};

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, selectedSubject, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {subjects.map((subject) => {
        const note = NOTES[subject.status] ?? (subject.available ? null : 'Coming soon');
        return (
          <button
            key={subject.slug}
            onClick={() => onSelect(subject.slug)}
            disabled={!subject.available}
            title={subject.available ? undefined : 'Not available yet'}
            className={cn(
              'p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-center',
              !subject.available && 'opacity-50 cursor-not-allowed',
              selectedSubject === subject.slug
                ? 'bg-brand-primary border-brand-primary text-white shadow-sm'
                : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
            )}
          >
            {subject.name}
            {note && <span className="block text-xs font-normal opacity-80">{note}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default SubjectSelector;
