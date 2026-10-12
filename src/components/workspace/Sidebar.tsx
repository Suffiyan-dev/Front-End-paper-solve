import React from 'react';
import {
  Plus,
  Settings,
  User,
  MessageSquare,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  // Mock history data with subject indicators and concise titles
  const history = {
    Today: [
      { id: '1', title: 'Electromagnetic Induction', subject: 'Physics' },
      { id: '2', title: 'Series Resistance', subject: 'Physics' },
    ],
    Yesterday: [
      { id: '3', title: 'Newton\'s Second Law', subject: 'Physics' },
    ],
    'Previous 7 Days': [
      { id: '4', title: 'O Level Formulae', subject: 'General' },
    ],
    Older: [
      { id: '5', title: 'Basic Electricity', subject: 'Physics' },
    ],
  };

  return (
    <aside
      aria-label="Main Navigation"
      className={cn(
        "bg-white border-r border-surface-border flex flex-col transition-all duration-300 ease-in-out relative z-40",
        // Desktop: persistent w-64, Tablet: collapsible, Mobile: drawer
        isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full lg:translate-x-0 lg:w-64",
        "fixed inset-y-0 left-0 lg:relative"
      )}
    >
      {/* Toggle Button (Tablet only - hidden on desktop/mobile drawer) */}
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        className="hidden lg:block absolute -right-3 top-12 z-10 bg-white border border-surface-border rounded-full p-1 hover:bg-gray-50 transition-colors"
      >
        {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* Top Zone: Branding & Primary Action */}
      <div className="p-4 flex flex-col gap-4 shrink-0">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold shrink-0">P</div>
          <span className="font-Montserrat font-semibold text-lg text-text-heading truncate">PaperSolve</span>
        </div>

        <Button className="w-full justify-start gap-2 py-6 h-auto text-base font-medium shadow-sm" aria-label="Start a new question">
          <Plus size={20} />
          New Question
        </Button>
      </div>

      {/* Middle Zone: Recent Conversations */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        <div className="px-3 mb-4">
          <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest">Recent</h3>
        </div>

        {Object.entries(history).map(([period, items]) => (
          <div key={period} className="mb-6">
            <h4 className="px-3 text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {period}
            </h4>
            <div className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  className="w-full group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm text-text-body text-left"
                  aria-label={`View conversation: ${item.title}`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <MessageSquare size={14} className="text-gray-400 shrink-0" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="truncate font-medium">{item.title}</span>
                      <span className="text-[10px] text-gray-400 truncate">{item.subject}</span>
                    </div>
                  </div>
                  <button
                    className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 p-2 hover:bg-gray-200 rounded transition-opacity shrink-0"
                    aria-label="More options"
                  >
                    <MoreVertical size={14} />
                  </button>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Zone: Profile & Account */}
      <div className="p-4 border-t border-surface-border bg-gray-50/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white border border-surface-border mb-3">
            <div className="w-9 h-9 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
              <User size={18} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-text-heading truncate">Zaid Ahmed</p>
              <p className="text-[10px] text-text-muted truncate">Student Account</p>
            </div>
          </div>

          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors text-sm text-text-body">
              <Settings size={16} className="text-gray-400" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-red-50 text-red-500 transition-colors text-sm font-medium">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
