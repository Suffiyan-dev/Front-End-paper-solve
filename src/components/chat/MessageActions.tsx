import React from 'react';
import { Copy, RotateCcw, Sparkles, MessageCircle, Save, Flag } from 'lucide-react';
import { Button } from '../ui/Button';

const MessageActions: React.FC = () => {
  const actions = [
    { icon: Copy, label: 'Copy', color: 'text-gray-500' },
    { icon: RotateCcw, label: 'Regenerate', color: 'text-gray-500' },
    { icon: Sparkles, label: 'Simplify', color: 'text-brand-primary' },
    { icon: MessageCircle, label: 'Explain further', color: 'text-gray-500' },
    { icon: Save, label: 'Save', color: 'text-gray-500' },
    { icon: Flag, label: 'Report issue', color: 'text-red-400' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action, i) => (
        <Button
          key={i}
          variant="ghost"
          className={cn(
            "h-8 px-3 text-xs font-medium gap-2 hover:bg-gray-100 transition-colors",
            action.color
          )}
        >
          <action.icon size={14} />
          {action.label}
        </Button>
      ))}
    </div>
  );
};

// Add this helper to the top for Tailwind's cn
import { cn } from '../../lib/utils';

export default MessageActions;
