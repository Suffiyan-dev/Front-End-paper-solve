import React from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Card } from './components/ui/Card';

export default function VisualIdentity() {
  return (
    <div className="min-h-screen bg-surface-background p-8 max-w-6xl mx-auto space-y-16">
      {/* Header / Logo Section */}
      <section className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Logo variant="full" className="scale-150 origin-center" />
          <h1 className="text-3xl font-display font-bold text-text-heading">Visual Foundation</h1>
          <p className="text-text-body max-w-xl">
            A disciplined design system built for clarity, academic trust, and the high-stress environment of exam preparation.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Column 1: Branding & Type */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Branding</h2>
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border border-surface-border flex items-center justify-center">
                <Logo variant="full" />
              </div>
              <div className="p-4 bg-white rounded-lg border border-surface-border flex items-center justify-center">
                <Logo variant="compact" />
              </div>
              <div className="p-4 bg-white rounded-lg border border-surface-border flex items-center justify-center">
                <Logo variant="icon" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Typography</h2>
            <div className="space-y-4 p-6 bg-white rounded-lg border border-surface-border">
              <div className="space-y-1">
                <span className="text-xs text-text-muted">Heading / Display (Montserrat)</span>
                <p className="text-2xl font-display font-bold text-text-heading">Exam Mastery</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-text-muted">Body / Content (Inter)</span>
                <p className="text-base text-text-body leading-relaxed">
                  The answer provided is calibrated to the 5-mark marking scheme of BISE Lahore.
                  Ensure you mention the key terms underlined in the text.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Color & Surfaces */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Color Palette</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'PaperSolve Blue', color: 'bg-brand-primary', hex: '#2563EB' },
                { name: 'Deep Academic', color: 'bg-brand-secondary', hex: '#1E40AF' },
                { name: 'Marking Accent', color: 'bg-brand-accent', hex: '#F59E0B' },
                { name: 'Paper Base', color: 'bg-surface-background', hex: '#FDFDFD' },
                { name: 'Ink Slate', color: 'bg-text-heading', hex: '#0F172A' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-2 bg-white rounded-md border border-surface-border">
                  <div className={`w-8 h-8 rounded ${item.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-heading">{item.name}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted">{item.hex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Surfaces</h2>
            <div className="space-y-4">
              <Card variant="default">Default Surface</Card>
              <Card variant="elevated">Elevated Surface</Card>
              <Card variant="soft">Contextual Surface</Card>
            </div>
          </div>
        </div>

        {/* Column 3: Controls & Interactions */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Interactions</h2>
            <div className="space-y-4 p-6 bg-white rounded-lg border border-surface-border">
              <div className="space-y-3">
                <Button variant="primary" className="w-full">Solve Question</Button>
                <Button variant="secondary" className="w-full">Save to History</Button>
                <Button variant="outline" className="w-full">Reset Config</Button>
                <Button variant="ghost" className="w-full">Cancel</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-widest font-bold text-text-muted">Forms</h2>
            <div className="space-y-4 p-6 bg-white rounded-lg border border-surface-border">
              <Input label="Subject" placeholder="e.g. Biology" />
              <Input label="Marks" type="number" placeholder="e.g. 5" />
              <Input label="Email" error="Invalid email format" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
