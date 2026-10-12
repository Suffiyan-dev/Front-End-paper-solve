import React, { useState, useCallback } from 'react';
import {
  CloudUpload,
  X,
  FileText,
  AlertCircle,
  Loader2,
  Send
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

type UploadState = 'IDLE' | 'PREVIEW' | 'PROCESSING' | 'ERROR';

interface ImageUploaderProps {
  onSolve: (image: File, instructions: string) => Promise<void>;
  onSwitchToText: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onSolve, onSwitchToText }) => {
  const [state, setState] = useState<UploadState>('IDLE');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [instructions, setInstructions] = useState('');
  const [processStep, setProcessStep] = useState(0);

  const processingSteps = [
    "Reading question...",
    "Understanding question...",
    "Preparing examiner-style answer...",
  ];

  const handleFile = useCallback((selectedFile: File | null) => {
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setState('PREVIEW');
    }
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0] || null;
    handleFile(droppedFile);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    handleFile(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewUrl(null);
    setInstructions('');
    setState('IDLE');
  };

  const startSolving = async () => {
    if (!file) return;

    setState('PROCESSING');

    // Simulate sequential processing steps
    for (let i = 0; i < processingSteps.length; i++) {
      setProcessStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    try {
      await onSolve(file, instructions);
    } catch (error) {
      setState('ERROR');
    }
  };

  return (
    <div className="w-full transition-all duration-300">
      {state === 'IDLE' && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="relative group cursor-pointer"
        >
          <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-surface-border rounded-2xl bg-surface-background hover:bg-brand-primary/5 hover:border-brand-primary/50 transition-all cursor-pointer group">
            <div className="p-3 bg-white rounded-full shadow-sm border border-surface-border mb-3 group-hover:scale-110 transition-transform duration-200">
              <CloudUpload size={24} className="text-brand-primary" />
            </div>
            <span className="text-sm font-bold text-text-heading mb-1">Upload a question image</span>
            <span className="text-xs text-text-muted">PNG, JPG or screenshot</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={onFileChange}
            />
          </label>
        </div>
      )}

      {state === 'PREVIEW' && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-surface-border bg-gray-100 group">
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Question preview"
                className="w-full h-full object-contain"
              />
            )}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={handleRemove}
                className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm text-red-500 hover:bg-red-50 transition-colors"
                title="Remove Image"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-muted">
              <FileText size={14} />
              <span>Optional instructions for the AI</span>
            </div>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Example: Focus only on part (b)..."
              className="w-full p-3 text-sm bg-surface-card border border-surface-border rounded-xl focus:ring-2 focus:ring-brand-primary/20 outline-none resize-none h-20"
            />
            <Button
              variant="primary"
              className="w-full py-3 font-bold gap-2 shadow-md"
              onClick={startSolving}
            >
              Solve Question <Send size={18} />
            </Button>
          </div>
        </div>
      )}

      {state === 'PROCESSING' && (
        <div className="flex flex-col items-center justify-center p-8 space-y-6 animate-in fade-in duration-300">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 size={24} className="text-brand-primary animate-spin" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-base font-medium text-text-heading animate-pulse">
              {processingSteps[processStep]}
            </p>
            <div className="flex justify-center gap-1">
              {processingSteps.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-500",
                    i === processStep ? "bg-brand-primary w-3" : i < processStep ? "bg-brand-primary" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {state === 'ERROR' && (
        <div className="p-6 border-2 border-red-100 bg-red-50 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-300">
          <div className="flex justify-center">
            <div className="p-3 bg-white rounded-full text-red-500 shadow-sm">
              <AlertCircle size={24} />
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-text-heading">Image unreadable</h3>
            <p className="text-sm text-text-muted">We couldn't read this question clearly. Please ensure the photo is well-lit and clear.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-50"
              onClick={() => setState('IDLE')}
            >
              Try another image
            </Button>
            <Button
              variant="ghost"
              className="text-text-muted"
              onClick={onSwitchToText}
            >
              Type the question instead
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
