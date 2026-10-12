import React, { useState } from 'react';
import { cn } from '../lib/utils';

export const useWorkspace = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [currentInput, setCurrentInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    toggleSidebar,
    activeConversationId,
    setActiveConversationId,
    currentInput,
    setCurrentInput,
    isUploading,
    setIsUploading,
  };
};
