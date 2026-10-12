import React from 'react';
import { cn } from '../lib/utils';

interface BoardOption {
  id: string;
  name: string;
  icon: string;
}

export const BOARDS: BoardOption[] = [
  { id: 'cambridge', name: 'Cambridge', icon: '🎓' },
  { id: 'federal', name: 'Federal Board', icon: '🏛️' },
  { id: 'punjab', name: 'Punjab Board', icon: '📜' },
  { id: 'sindh', name: 'Sindh Board', icon: '🌊' },
  { id: 'kpk', name: 'KPK Board', icon: '⛰️' },
  { id: 'balochistan', name: 'Balochistan Board', icon: '🌵' },
  { id: 'other', name: 'Other', icon: '🌐' },
];

export const LEVELS: Record<string, string[]> = {
  cambridge: ['O Level', 'A Level'],
  federal: ['Matric', 'Intermediate'],
  punjab: ['Matric', 'Intermediate'],
  sindh: ['Matric', 'Intermediate'],
  kpk: ['Matric', 'Intermediate'],
  balochistan: ['Matric', 'Intermediate'],
  other: ['Other'],
};

export const SUBJECTS = [
  'Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science',
  'Economics', 'Accountancy', 'Psychology', 'English', 'Urdu'
];

export const MARKS_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];
