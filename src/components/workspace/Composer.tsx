import React, { useState } from 'react';
import { Image as ImageIcon, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ComposerProps {
  onSend: (text: string) => void;
  placeholder?: string;
}

const Composer: React.FC<ComposerProps> = ({ onSend, placeholder = "Ask another question..." }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="p-6 bg-gradient-to-t from-surface-background via-surface-background to-transparent">
      <div className="max-w-4xl mx-auto relative group">
        <div className="absolute -inset-0.5 border-2 border-brand-primary/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-end gap-2 p-2 bg-white border-2 border-surface-border rounded-2xl shadow-sm focus-within:border-brand-primary transition-all">
          <button className="p-2 text-gray-400 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all">
            <ImageIcon size={22} />
          </button>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={placeholder}
            rows={1}
            className="flex-1 p-2 bg-transparent border-none focus:ring-0 resize-none max-h-40 text-text-body py-3"
            style={{ height: 'auto' }}
          />

          <Button
            onClick={handleSend}
            disabled={!text.trim()}
            className={cn(
              "p-2 rounded-xl transition-all shrink-0",
              text.trim() ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-400"
            )}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Composer;
