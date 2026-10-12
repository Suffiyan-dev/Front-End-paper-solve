import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface MarkCalibrationProps {
  marks: number;
}

const MarkCalibration: React.FC<MarkCalibrationProps> = ({ marks }) => {
  // Mock allocation for demonstration
  const allocation = Array.from({ length: marks }, (_, i) => `Point ${i + 1} requirement`);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
          Mark Allocation
        </span>
        <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded">
          Structured for {marks} marks
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {allocation.map((point, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-text-body">
            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkCalibration;
