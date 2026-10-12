export interface QuestionMetadata {
  board: string;
  level: string;
  subject: string;
  marks: number;
}

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  metadata?: QuestionMetadata;
  // For assistant responses
  answerType?: 'numerical' | 'theory';
  formula?: string;
  substitution?: string;
  calculation?: string;
  finalAnswer?: string;
  markAllocation?: string[];
  references?: {
    id: string;
    title: string;
    snippet: string;
  }[];
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  metadata: QuestionMetadata;
  createdAt: Date;
  updatedAt: Date;
}
