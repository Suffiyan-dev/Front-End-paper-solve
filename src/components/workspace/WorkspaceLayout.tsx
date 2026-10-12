import React from 'react';
import { cn } from '../../lib/utils';
import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';
import { useWorkspace } from '../../hooks/useWorkspace';

const WorkspaceLayout: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useWorkspace();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-surface-background text-text-body relative">
      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300 lg:hidden",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />

      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <main className={cn(
        "flex-1 flex flex-col transition-all duration-300 ease-in-out overflow-hidden relative",
        "lg:ml-0" // Sidebar is handled by its own responsive classes
      )}>
        {/* Mobile Menu Trigger */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 left-4 z-20 p-2 bg-white border border-surface-border rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-bold text-text-heading">Menu</span>
          </div>
        </button>

        <ChatContainer />
      </main>
    </div>
  );
};

export default WorkspaceLayout;
