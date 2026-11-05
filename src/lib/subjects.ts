// The boards, levels and subjects the app offers come from the API's GET /subjects.
// Nothing here names a subject: a config added on the server shows up on the next load.

export type SubjectStatus = 'supported' | 'building' | 'planned';

export interface SubjectInfo {
  slug: string;
  name: string;
  code: string;
  board: string;
  board_name: string;
  level: string;
  level_name: string;
  status: SubjectStatus;
  available: boolean;
  papers: string[];
  uses_paper: boolean;
  aliases: string[];
}

export interface Group {
  id: string;
  name: string;
  total: number;
  available: number;
}

export const API_URL: string = (import.meta.env.VITE_API_URL ?? 'http://localhost:8000').replace(/\/+$/, '');

export async function fetchSubjects(signal?: AbortSignal): Promise<SubjectInfo[]> {
  const response = await fetch(`${API_URL}/subjects`, { signal });
  if (!response.ok) throw new Error(`The server answered ${response.status}`);
  const body = await response.json();
  if (!body || !Array.isArray(body.subjects)) throw new Error('The server sent a subject list in a shape this page does not know');
  return body.subjects as SubjectInfo[];
}

function group(subjects: SubjectInfo[], id: (s: SubjectInfo) => string, name: (s: SubjectInfo) => string): Group[] {
  const found = new Map<string, Group>();
  for (const s of subjects) {
    const g = found.get(id(s)) ?? { id: id(s), name: name(s), total: 0, available: 0 };
    g.total += 1;
    if (s.available) g.available += 1;
    found.set(g.id, g);
  }
  return [...found.values()];   // in the order the server listed them
}

export function boardsOf(subjects: SubjectInfo[]): Group[] {
  return group(subjects, (s) => s.board, (s) => s.board_name);
}

export function levelsOf(subjects: SubjectInfo[], board: string | null): Group[] {
  return group(subjects.filter((s) => s.board === board), (s) => s.level, (s) => s.level_name);
}

export function subjectsOf(subjects: SubjectInfo[], board: string | null, level: string | null): SubjectInfo[] {
  return subjects.filter((s) => s.board === board && s.level === level);
}
