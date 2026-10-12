import React from 'react';
import { cn } from '../../lib/utils';

interface MarksSelectorProps {
  value: number;
  onChange: (val: number) => void;
}

export const MarksSelector = ({ value, onChange }: MarksSelectorProps) => {
  const marks = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];

  // Map the index of the marks array to a 0-100 range for the input range
  const currentIndex = marks.indexOf(value);
  const percentage = (currentIndex / (marks.length - 1)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    const index = Math.round((val / 100) * (marks.length - 1));
    const snappedValue = marks[Math.max(0, Math.min(index, marks.length - 1))];
    onChange(snappedValue);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 py-8 px-4">
      {/* Prominent Value Display */}
      <div className="text-center space-y-2">
        <div className="text-5xl font-Montserrat font-bold text-text-heading tracking-tight">
          {value} <span className="text-brand-primary">marks</span>
        </div>
        <p className="text-sm font-medium text-text-muted">
          Answer structured for a {value}-mark response.
        </p>
      </div>

      {/* Custom Slider Container */}
      <div className="relative px-4 group">
        {/* Hidden Native Input for Accessibility & Logic */}
        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-12 opacity-0 cursor-pointer z-30"
          aria-label="Select marks for answer depth"
          aria-valuemin={marks[0]}
          aria-valuemax={marks[marks.length - 1]}
          aria-valuenow={value}
        />

        {/* Visual Track */}
        <div className="relative h-2 w-full bg-surface-border rounded-full overflow-hidden">
          {/* Active Fill */}
          <div
            className="absolute h-full bg-brand-primary transition-all duration-200 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Ticks and Labels */}
        <div className="absolute top-6 left-0 w-full px-4 flex justify-between items-center">
          {marks.map((mark) => {
            const isSelected = value === mark;
            return (
              <div key={mark} className="flex flex-col items-center gap-2">
                {/* Subtle Tick */}
                <div className={cn(
                  "w-0.5 h-2 rounded-full transition-all duration-200",
                  isSelected ? "bg-brand-primary h-3 w-1" : "bg-gray-300"
                )} />
                {/* Label: Only show key marks or based on space to avoid clutter */}
                {(mark === 1 || mark === 5 || mark === 10 || mark === 20 || isSelected) && (
                  <span className={cn(
                    "text-[10px] font-bold transition-all duration-200",
                    isSelected ? "text-brand-primary scale-110" : "text-gray-400"
                  )}>
                    {mark}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Visual Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-brand-primary rounded-full shadow-lg transition-all duration-200 ease-out z-20 pointer-events-none group-focus-within:ring-4 ring-brand-primary/20"
          style={{
            left: `calc(${percentage}% - 12px)`,
          }}
        >
          <div className="w-1 h-1 bg-brand-primary rounded-full m-auto mt-2" />
        </div>
      </div>
    </div>
  );
};
