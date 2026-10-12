import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface GroundingIndicatorProps {
  count: number;
}

const GroundingIndicator: React.FC<GroundingIndicatorProps> = ({ count }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-brand-primary transition-colors"
      >
        <BookOpen size={14} />
        <span>Based on {count} relevant marking-scheme references</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <div className="p-3 bg-gray-50 rounded-lg border border-surface-border text-xs text-text-body space-y-2 animate-in fade-in slide-in-from-top-2">
          <div className="font-semibold text-text-heading">Source References:</div>
          <div className="pl-2 space-y-1">
            <div className="p-2 bg-white border border-gray-100 rounded">Reference 1: Page 42, Section 3.2</div>
            <div className="p-2 bg-white border border-gray-100 rounded">Reference 2: Mark Scheme Summer 2022, Q4</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroundingIndicator;
