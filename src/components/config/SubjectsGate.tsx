import React from 'react';
import { useSubjects } from '../../hooks/useSubjects';
import type { SubjectInfo } from '../../lib/subjects';
import { Button } from '../ui/Button';

interface SubjectsGateProps {
  children: (subjects: SubjectInfo[]) => React.ReactNode;
}

/** Shows the subject list's loading and failure states, and hands the loaded list to its child. */
const SubjectsGate: React.FC<SubjectsGateProps> = ({ children }) => {
  const result = useSubjects();
  if (result.status === 'loading') {
    return <p className="text-sm text-text-muted" role="status">Loading subjects…</p>;
  }
  if (result.status === 'error') {
    return (
      <div className="space-y-3" role="alert">
        <p className="text-sm text-text-body">Couldn't load the subjects ({result.message}). Check that the PaperSolve server is running.</p>
        <Button variant="secondary" onClick={result.retry}>Try again</Button>
      </div>
    );
  }
  if (result.subjects.length === 0) {
    return <p className="text-sm text-text-muted">The server has no subjects yet.</p>;
  }
  return <>{children(result.subjects)}</>;
};

export default SubjectsGate;
