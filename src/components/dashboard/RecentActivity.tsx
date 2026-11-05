import React from 'react';
import { Clock, MessageSquare, ChevronRight } from 'lucide-react';

interface ActivityItem {
  id: string;
  title: string;
  subject: string;
  time: string;
  type: 'recent' | 'continue';
}

const MOCK_ACTIVITY: ActivityItem[] = [
  { id: '1', title: 'Newton\'s Second Law', subject: 'Physics', time: '2h ago', type: 'recent' },
  { id: '2', title: 'Photosynthesis Process', subject: 'Biology', time: 'Yesterday', type: 'continue' },
  { id: '3', title: 'Quadratic Equations', subject: 'Mathematics', time: '3d ago', type: 'recent' },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Recent Solves */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-text-muted" />
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Recent Solves</span>
        </div>
        <div className="space-y-3">
          {MOCK_ACTIVITY.filter(a => a.type === 'recent').map(item => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-3 bg-white border border-surface-border rounded-xl hover:border-brand-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-surface-background rounded-lg text-text-muted group-hover:text-brand-primary transition-colors">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-heading">{item.title}</p>
                  <p className="text-[10px] text-text-muted">{item.subject} • {item.time}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Continue Studying */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare size={16} className="text-text-muted" />
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Continue Studying</span>
        </div>
        <div className="space-y-3">
          {MOCK_ACTIVITY.filter(a => a.type === 'continue').map(item => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-3 bg-brand-primary/5 border border-brand-primary/10 rounded-xl hover:border-brand-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-brand-primary shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-heading">{item.title}</p>
                  <p className="text-[10px] text-brand-primary/60">{item.subject} • Continue where you left off</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
