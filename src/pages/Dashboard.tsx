import { useState } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';
import { Image, Send, User } from 'lucide-react';
import ExamConfigurator from '../components/config/ExamConfigurator';
import ImageUploader from '../components/config/ImageUploader';
import QuickStart from '../components/dashboard/QuickStart';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const [question, setQuestion] = useState('');
  const [uploadMode, setUploadMode] = useState(false);

  const handleSolve = (config: any) => {
    console.log('Solving with config:', config);
  };

  const handleImageSolve = async (image: File, instructions: string) => {
    console.log('Solving with image:', image, 'Instructions:', instructions);
    // Integrate with the workspace/API
  };

  const handleQuickStart = (subject: string) => {
    console.log('Quick start for subject:', subject);
  };

  return (
    <div className="min-h-screen bg-surface-background flex flex-col">
      {/* Top Navigation */}
      <nav className="h-16 bg-white border-b border-surface-border px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Logo variant="compact" />
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-surface-background border border-surface-border rounded-lg text-sm text-text-muted w-64">
            <span className="opacity-50">Search history...</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pl-4 border-l border-surface-border">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-text-heading leading-none">Zaid Ahmed</p>
              <p className="text-[10px] text-text-muted">Cambridge O-Level</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
              <User size={16} />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-12">
        {/* 1. Welcome Section */}
        <section className="text-left space-y-2 py-6">
          <h1 className="text-4xl font-Montserrat font-bold text-text-heading tracking-tight">
            Ready for the next question?
          </h1>
          <p className="text-text-body text-lg max-w-2xl">
            Set your exam parameters and paste your question. We'll generate an examiner-calibrated response.
          </p>
        </section>

        {/* 2. Solve a Question (Primary Action) */}
        <section className="space-y-6">
          <Card variant="elevated" className="p-8 space-y-8 relative overflow-hidden border-2 border-surface-border">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />

            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <h2 className="text-xl font-display font-bold text-text-heading">New Solution</h2>
              <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
                <span className="px-2 py-1 bg-surface-background rounded border border-surface-border">
                  AI-powered calibration
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <ExamConfigurator onConfigComplete={handleSolve} />

              <div className="space-y-4 pt-8 border-t border-surface-border">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-text-heading">Your Question</label>
                  <button
                    onClick={() => setUploadMode(!uploadMode)}
                    className={cn(
                      "text-xs font-medium transition-colors flex items-center gap-1",
                      uploadMode ? "text-text-body underline" : "text-brand-primary hover:underline"
                    )}
                  >
                    <Image size={14} />
                    {uploadMode ? "Switch to text" : "Upload Image"}
                  </button>
                </div>

                {uploadMode ? (
                  <ImageUploader
                    onSolve={handleImageSolve}
                    onSwitchToText={() => setUploadMode(false)}
                  />
                ) : (
                  <div className="relative">
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Paste your exam question here... (e.g. Explain the process of photosynthesis in plants)"
                      className="w-full h-32 px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-text-body focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none resize-none placeholder:text-text-muted"
                    />
                    {question && (
                      <button
                        onClick={() => setQuestion('')}
                        className="absolute top-3 right-3 p-1 text-text-muted hover:text-red-500 transition-colors"
                      >
                        <span className="text-xs font-medium">Clear</span>
                      </button>
                    )}
                  </div>
                )}

                {!uploadMode && (
                  <Button
                    variant="primary"
                    className="w-full py-4 text-lg font-bold gap-2 shadow-lg"
                    disabled={!question}
                  >
                    Solve Question <Send size={20} />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </section>

        {/* 3 & 4. Your Activity */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-display font-bold text-text-heading">Your Activity</h2>
            <div className="flex-1 h-px bg-surface-border" />
          </div>
          <RecentActivity />
        </section>

        {/* 5. Quick Start */}
        <section className="pb-12">
          <QuickStart onShortcutClick={handleQuickStart} />
        </section>
      </main>
    </div>
  );
}
