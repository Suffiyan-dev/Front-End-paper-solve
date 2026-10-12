import React, { useState } from 'react';
import ContextBar from './ContextBar';
import EmptyState from './EmptyState';
import Composer from './Composer';
import QuestionCard from '../chat/QuestionCard';
import AnswerCard from '../chat/AnswerCard';
import type { Message, QuestionMetadata } from '../../types/workspace';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitial, setIsInitial] = useState(true);

  // Mock metadata for the current session
  const [sessionMetadata] = useState<QuestionMetadata>({
    board: 'Cambridge',
    level: 'O Level',
    subject: 'Physics',
    marks: 5,
  });

  const handleSend = (text: string) => {
    setIsInitial(false);

    // User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
      metadata: sessionMetadata,
    };

    setMessages(prev => [...prev, userMsg]);

    // Simulate AI Response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'The resistance of the circuit is calculated by summing the individual resistors in series...',
        timestamp: new Date(),
        answerType: 'numerical',
        formula: 'R = R1 + R2 + R3',
        substitution: 'R = 10Ω + 20Ω + 5Ω',
        calculation: 'R = 35Ω',
        finalAnswer: '35 Ω',
        markAllocation: ['Correct formula', 'Correct substitution', 'Arithmetic accuracy', 'Final unit included', 'Clear steps shown'],
        references: [
          { id: '1', title: 'Syllabus 5054', snippet: 'Resistance in series' },
          { id: '2', title: 'Mark Scheme 2021', snippet: 'Calculation steps' },
        ],
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  const handleEditConfig = () => {
    console.log('Edit config trigger activated');
    // In a real app, this would open a Quick-Edit modal or navigate to configurator
  };

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden">
      <ContextBar
        board={sessionMetadata.board}
        level={sessionMetadata.level}
        subject={sessionMetadata.subject}
        marks={sessionMetadata.marks}
        onEditConfig={handleEditConfig}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {isInitial ? (
          <EmptyState onPromptClick={handleSend} />
        ) : (
          <div className="flex flex-col gap-8 py-4">
            {messages.map((msg) => (
              msg.role === 'user' ? (
                <QuestionCard
                  key={msg.id}
                  text={msg.content}
                  metadata={msg.metadata!}
                />
              ) : (
                <AnswerCard
                  key={msg.id}
                  marks={sessionMetadata.marks}
                  referencesCount={msg.references?.length || 0}
                  content={{
                    text: msg.content,
                    type: msg.answerType === 'numerical' ? 'numerical' : 'theory',
                    formula: msg.formula,
                    substitution: msg.substitution,
                    calculation: msg.calculation,
                    finalAnswer: msg.finalAnswer,
                    points: msg.answerType === 'theory' ? [msg.content] : [],
                  }}
                />
              )
            ))}
          </div>
        )}
      </div>

      <Composer onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
