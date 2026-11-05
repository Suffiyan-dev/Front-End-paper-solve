import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { boardsOf, levelsOf, subjectsOf, type SubjectInfo } from '../../lib/subjects';
import { MarksSelector } from '../ui/MarksSelector';
import BoardSelector from './BoardSelector';
import LevelSelector from './LevelSelector';
import SubjectSelector from './SubjectSelector';
import SubjectsGate from './SubjectsGate';

interface ExamConfiguratorProps {
  onConfigComplete: (config: { board: string, level: string, subject: string, marks: number }) => void;
}

const ExamConfiguratorBody: React.FC<ExamConfiguratorProps & { subjects: SubjectInfo[] }> = ({ onConfigComplete, subjects }) => {
  const [config, setConfig] = useState({
    board: '' as string | null,
    level: '' as string | null,
    subject: '' as string | null,
    marks: 5,
  });

  const updateConfig = (key: keyof typeof config, value: any) => {
    setConfig(prev => {
      const next = { ...prev, [key]: value };

      // Progressive Reset Logic
      if (key === 'board') {
        next.level = null;
        next.subject = null;
      } else if (key === 'level') {
        next.subject = null;
      }

      return next;
    });
  };

  const handleComplete = () => {
    if (config.board && config.level && config.subject) {
      onConfigComplete({
        board: config.board,
        level: config.level!,
        subject: config.subject!,
        marks: config.marks,
      });
    }
  };

  return (
    <div className="space-y-6 py-4">
      {/* Stage 1: Board */}
      <div className="space-y-4 animate-in fade-in duration-500">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold">1</span>
          <label className="text-sm font-bold text-text-heading uppercase tracking-wider">Select Examination Board</label>
        </div>
        <BoardSelector
          boards={boardsOf(subjects)}
          selectedBoard={config.board}
          onSelect={(id) => updateConfig('board', id)}
        />
      </div>

      {/* Stage 2: Level - Progressive Reveal */}
      {config.board && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold">2</span>
            <label className="text-sm font-bold text-text-heading uppercase tracking-wider">Select Level</label>
          </div>
          <LevelSelector
            levels={levelsOf(subjects, config.board)}
            selectedLevel={config.level}
            onSelect={(l) => updateConfig('level', l)}
          />
        </div>
      )}

      {/* Stage 3: Subject - Progressive Reveal */}
      {config.level && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold">3</span>
            <label className="text-sm font-bold text-text-heading uppercase tracking-wider">Select Subject</label>
          </div>
          <SubjectSelector
            subjects={subjectsOf(subjects, config.board, config.level)}
            selectedSubject={config.subject}
            onSelect={(s) => updateConfig('subject', s)}
          />
        </div>
      )}

      {/* Stage 4: Marks - Progressive Reveal */}
      {config.subject && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold">4</span>
            <label className="text-sm font-bold text-text-heading uppercase tracking-wider">Calibrate Answer Depth</label>
          </div>
          <div className="p-6 bg-surface-background rounded-2xl border border-surface-border">
            <MarksSelector
              value={config.marks}
              onChange={(m) => updateConfig('marks', m)}
            />
          </div>
        </div>
      )}

      {/* Final Call to Action */}
      {config.subject && (
        <div className="flex justify-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Button
            variant="primary"
            className="px-12 py-6 text-lg font-bold shadow-lg hover:scale-105 transition-transform"
            onClick={handleComplete}
          >
            Ready to Solve <ChevronRight size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const ExamConfigurator: React.FC<ExamConfiguratorProps> = (props) => (
  <SubjectsGate>{(subjects) => <ExamConfiguratorBody {...props} subjects={subjects} />}</SubjectsGate>
);

export default ExamConfigurator;
