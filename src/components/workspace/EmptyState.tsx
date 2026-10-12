import React from 'react';
import { Logo } from '../Logo';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ExamplePrompt {
  text: string;
  marks: number;
}

const EXAMPLE_PROMPTS: ExamplePrompt[] = [
  { text: "Explain Newton's second law", marks: 3 },
  { text: "Calculate the resistance of a circuit", marks: 5 },
  { text: "Define electromagnetic induction", marks: 2 },
];

interface EmptyStateProps {
  onPromptClick: (prompt: string) => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onPromptClick }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 relative">
        <div className="absolute -inset-4 bg-brand-primary/10 rounded-full blur-2xl opacity-60" />
        <Logo className="relative w-24 h-24" />
      </div>

      <h1 className="font-Montserrat text-3xl font-bold text-text-heading mb-4">
        What are you solving today?
      </h1>
      <p className="text-text-body max-w-md mb-10">
        Enter a question from your past papers or textbook, and we'll guide you through a professionally structured answer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {EXAMPLE_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => onPromptClick(prompt.text)}
            className="p-4 text-left border border-surface-border rounded-xl bg-white hover:border-brand-primary hover:shadow-md transition-all group"
          >
            <p className="text-sm font-medium text-text-body group-hover:text-brand-primary transition-colors">
              "{prompt.text} — {prompt.marks} marks"
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;
