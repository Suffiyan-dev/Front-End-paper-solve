import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

interface QuestionCardProps {
  text: string;
  metadata: {
    subject: string;
    level: string;
    marks: number;
  };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ text, metadata }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8 animate-in slide-in-from-left-4 duration-500">
      <div className="bg-white border-2 border-surface-border rounded-2xl p-6 shadow-sm relative overflow-hidden">
        {/* Exam Watermark/Header */}
        <div className="absolute top-0 right-0 p-4">
          <Badge variant="outline" className="font-bold text-xs uppercase tracking-widest">
            {metadata.marks} Marks
          </Badge>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-muted uppercase tracking-wide">
            <span>{metadata.subject}</span>
            <span className="text-gray-300">•</span>
            <span>{metadata.level}</span>
          </div>

          <p className="text-lg font-medium text-text-heading leading-relaxed pt-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
