import React from 'react';
import { cn } from '../../lib/utils';
import { SUBJECTS } from '../../constants/exam';

interface SubjectSelectorProps {
  selectedSubject: string | null;
  onSelect: (subject: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ selectedSubject, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {SUBJECTS.map((subject) => (
        <button
          key={subject}
          onClick={() => onSelect(subject)}
          className={cn(
            'p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-center',
            selectedSubject === subject
              ? 'bg-brand-primary border-brand-primary text-white shadow-sm'
              : 'bg-white border-surface-border text-text-body hover:border-brand-primary/50 hover:bg-brand-primary/5'
          )}
        >
          {subject}
        </button>
      ))}
    </div>
  );
};

export default SubjectSelector;
