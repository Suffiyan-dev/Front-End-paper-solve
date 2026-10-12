import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = React.createContext<{
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}>({
  addToast: () => {},
  removeToast: () => {},
});

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto animate-in slide-in-from-right-full fade-in duration-300 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border border-surface-border min-w-[300px] max-w-md bg-white"
          >
            {toast.type === 'success' && <CheckCircle2 size={18} className="text-green-500 shrink-0" />}
            {toast.type === 'error' && <AlertCircle size={18} className="text-red-500 shrink-0" />}
            {toast.type === 'info' && <div className="w-4 h-4 rounded-full bg-brand-primary shrink-0" />}

            <span className="text-sm font-medium text-text-body flex-1">
              {toast.message}
            </span>

            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={14} className="text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
