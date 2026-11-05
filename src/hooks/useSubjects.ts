import { useCallback, useEffect, useState } from 'react';
import { fetchSubjects, type SubjectInfo } from '../lib/subjects';

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; subjects: SubjectInfo[] };

let pending: Promise<SubjectInfo[]> | null = null;   // one request is shared by every component that asks

function load(): Promise<SubjectInfo[]> {
  if (!pending) {
    pending = fetchSubjects().catch((error) => {
      pending = null;                                // a failure is never kept, so Try again asks again
      throw error;
    });
  }
  return pending;
}

export function useSubjects() {
  const [state, setState] = useState<State>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let current = true;
    load().then(
      (subjects) => current && setState({ status: 'ready', subjects }),
      (error: unknown) => current && setState({ status: 'error', message: error instanceof Error ? error.message : 'Unknown error' }),
    );
    return () => { current = false; };
  }, [attempt]);

  const retry = useCallback(() => {
    pending = null;
    setState({ status: 'loading' });
    setAttempt((n) => n + 1);
  }, []);

  return { ...state, retry };
}
