import React from 'react';
import { cn } from '../../lib/utils';
import MarkCalibration from './MarkCalibration';
import GroundingIndicator from './GroundingIndicator';
import MessageActions from './MessageActions';

interface AnswerCardProps {
  content: {
    text: string;
    type: 'numerical' | 'theory';
    formula?: string;
    substitution?: string;
    calculation?: string;
    finalAnswer?: string;
    points?: string[];
  };
  marks: number;
  referencesCount: number;
}

const AnswerCard: React.FC<AnswerCardProps> = ({ content, marks, referencesCount }) => {
  const isNumerical = content.type === 'numerical';

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 animate-in slide-in-from-right-4 duration-500">
      <div className="bg-white border border-surface-border rounded-2xl p-6 shadow-sm">
        {/* Response Content */}
        <div className="space-y-6">
          {isNumerical ? (
            <div className="space-y-4">
              {content.formula && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-text-muted uppercase">Formula</span>
                  <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-brand-primary italic font-medium text-text-heading">
                    {content.formula}
                  </div>
                </div>
              )}

              {content.substitution && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-text-muted uppercase">Substitution</span>
                  <div className="p-3 bg-gray-50 rounded-lg text-text-body font-mono">
                    {content.substitution}
                  </div>
                </div>
              )}

              {content.calculation && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-text-muted uppercase">Calculation</span>
                  <div className="p-3 bg-gray-50 rounded-lg text-text-body leading-relaxed">
                    {content.calculation}
                  </div>
                </div>
              )}

              {content.finalAnswer && (
                <div className="mt-4 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-xl text-center">
                  <span className="block text-xs font-bold text-brand-primary uppercase mb-1">Final Answer</span>
                  <span className="text-2xl font-bold text-text-heading">
                    {content.finalAnswer}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {content.points?.map((point, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-text-body leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Components */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-6">
          <MarkCalibration marks={marks} />
          <GroundingIndicator count={referencesCount} />
          <MessageActions />
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
