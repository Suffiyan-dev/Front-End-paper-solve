import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Select } from './components/ui/Select';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';

export default function DesignSystem() {
  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">PaperSolve Design System</h1>
        <p className="text-text-body">Visual identity and component library for the modern academic experience.</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Primary', color: 'bg-brand-primary', hex: '#4F46E5' },
            { name: 'Secondary', color: 'bg-brand-secondary', hex: '#3730A3' },
            { name: 'Accent', color: 'bg-brand-accent', hex: '#F59E0B' },
            { name: 'Background', color: 'bg-surface-background', hex: '#F9FAFB' },
            { name: 'Surface', color: 'bg-surface-card', hex: '#FFFFFF' },
            { name: 'Border', color: 'bg-surface-border', hex: '#E5E7EB' },
            { name: 'Text Heading', color: 'bg-text-heading', hex: '#111827' },
            { name: 'Text Body', color: 'bg-text-body', hex: '#4B5563' },
          ].map((item) => (
            <div key={item.name} className="space-y-2">
              <div className={`h-16 w-full rounded-lg border border-surface-border ${item.color}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs text-text-muted font-mono">{item.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-text-muted">H1 - Montserrat Bold</span>
            <h1 className="text-4xl font-bold mt-1">The future of exam preparation</h1>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-text-muted">H2 - Montserrat SemiBold</span>
            <h2 className="text-2xl font-semibold mt-1">Calibrated marks for every answer</h2>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-text-muted">Body - Inter Regular</span>
            <p className="text-base text-text-body mt-1 leading-relaxed">
              PaperSolve generates marks-calibrated answers based on official marking schemes, past papers, and curriculum-aligned sources.
              It feels intelligent without trying too hard to look "AI".
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button size="sm" variant="primary">Small</Button>
              <Button size="lg" variant="primary">Large</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Form Controls</h3>
            <div className="space-y-4 max-w-sm">
              <Input label="Student Name" placeholder="Enter your name..." />
              <Select label="Examination Board" defaultValue="">
                <option value="" disabled>Select Board</option>
                <option value="bise">BISE Lahore</option>
                <option value="cambridge">Cambridge O-Level</option>
                <option value="edexcel">Pearson Edexcel</option>
              </Select>
              <Input label="Marks" type="number" placeholder="e.g. 5" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Surfaces & Badges</h3>
            <div className="space-y-4">
              <Card variant="elevated" className="max-w-md">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold">Question Answer</h4>
                  <Badge variant="primary">5 Marks</Badge>
                </div>
                <p className="text-text-body leading-relaxed">
                  This is an example of how the final answer will be presented in an elevated card.
                  The spacing is generous, the borders are soft, and the hierarchy is clear.
                </p>
              </Card>
              <div className="flex gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
