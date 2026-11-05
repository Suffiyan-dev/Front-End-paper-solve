import React, { useState } from 'react';
import {
  User,
  BookOpen,
  Palette,
  MessageSquare,
  AlertTriangle,
  LogOut,
  Trash2,
  Camera
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import SubjectsGate from '../components/config/SubjectsGate';
import { boardsOf, levelsOf, subjectsOf } from '../lib/subjects';

type Category = 'account' | 'academic' | 'appearance' | 'chat' | 'account-actions';

// Remove the broken interface and just use the component
const Settings: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('account');
  const [account, setAccount] = useState({ name: 'Zaid Ahmed', email: 'zaid@example.com' });
  const [academic, setAcademic] = useState({ board: 'cambridge', level: 'o-level', subjects: ['physics'] });
  const [appearance, setAppearance] = useState('system');
  const [chatPrefs, setChatPrefs] = useState({ saveHistory: true, formatting: 'detailed' });

  const categories = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'account-actions', label: 'Danger Zone', icon: AlertTriangle },
  ] as const;

  return (
    <div className="min-h-screen bg-surface-background flex">
      {/* Left Navigation */}
      <aside className="w-64 bg-white border-r border-surface-border flex flex-col py-8 px-4">
        <div className="mb-8 px-4">
          <h1 className="font-Montserrat font-bold text-xl text-text-heading">Settings</h1>
          <p className="text-xs text-text-muted">Manage your study experience</p>
        </div>

        <nav className="flex-1 space-y-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-brand-primary text-white shadow-sm"
                    : "text-text-body hover:bg-gray-100"
                )}
              >
                <Icon size={18} />
                {cat.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Panel */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Account Section */}
          {activeCategory === 'account' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-1">Account</h2>
                <p className="text-text-muted text-sm">Manage your personal information</p>
              </div>

              <Card className="p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-full bg-brand-primary/10 border-2 border-surface-border flex items-center justify-center text-brand-primary overflow-hidden">
                      <User size={40} />
                    </div>
                    <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-surface-border rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                      <Camera size={14} />
                    </button>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text-heading">Student Profile</h3>
                    <p className="text-sm text-text-muted">Keep your profile updated for better tracking</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name</label>
                    <Input
                      value={account.name}
                      onChange={(e) => setAccount({...account, name: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                    <Input
                      value={account.email}
                      onChange={(e) => setAccount({...account, email: e.target.value})}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <Button variant="primary" className="w-fit px-6">Save Changes</Button>
              </Card>
            </div>
          )}

          {/* Academic Section */}
          {activeCategory === 'academic' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-1">Academic Preferences</h2>
                <p className="text-text-muted text-sm">Set your defaults for faster question solving</p>
              </div>

              <Card className="p-6 space-y-8">
                <SubjectsGate>{(subjects) => (<>
                <div className="space-y-4">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Default Board</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {boardsOf(subjects).map(b => (
                      <button
                        key={b.id}
                        disabled={b.available === 0}
                        onClick={() => setAcademic({...academic, board: b.id, level: levelsOf(subjects, b.id).find(l => l.available > 0)?.id ?? '', subjects: []})}
                        className={cn(
                          "px-3 py-2 rounded-lg border text-sm transition-all text-center",
                          academic.board === b.id
                            ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                            : "bg-white text-text-body border-surface-border hover:border-brand-primary/50"
                        )}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Default Level</label>
                  <div className="flex flex-wrap gap-3">
                    {levelsOf(subjects, academic.board).map(l => (
                      <button
                        key={l.id}
                        disabled={l.available === 0}
                        onClick={() => setAcademic({...academic, level: l.id, subjects: []})}
                        className={cn(
                          "px-4 py-2 rounded-full border text-sm transition-all",
                          academic.level === l.id
                            ? "bg-brand-primary text-white border-brand-primary"
                            : "bg-white text-text-body border-surface-border hover:border-brand-primary/50"
                        )}
                      >
                        {l.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Favorite Subjects</label>
                  <div className="flex flex-wrap gap-2">
                    {subjectsOf(subjects, academic.board, academic.level).map(subject => (
                      <button
                        key={subject.slug}
                        disabled={!subject.available}
                        onClick={() => {
                          const s = subject.slug;
                          const newSubs = academic.subjects.includes(s)
                            ? academic.subjects.filter(sub => sub !== s)
                            : [...academic.subjects, s];
                          setAcademic({...academic, subjects: newSubs});
                        }}
                        className={cn(
                          "px-3 py-1.5 rounded-md border text-xs transition-all",
                          !subject.available && "opacity-50 cursor-not-allowed",
                          academic.subjects.includes(subject.slug)
                            ? "bg-brand-primary/10 border-brand-primary text-brand-primary font-bold"
                            : "bg-white border-surface-border text-text-muted"
                        )}
                      >
                        {subject.name}{subject.available ? '' : ' (coming soon)'}
                      </button>
                    ))}
                  </div>
                </div>
                </>)}</SubjectsGate>
              </Card>
            </div>
          )}

          {/* Appearance Section */}
          {activeCategory === 'appearance' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-1">Appearance</h2>
                <p className="text-text-muted text-sm">Customize how PaperSolve looks</p>
              </div>

              <Card className="p-6">
                <div className="flex items-center justify-between p-1 bg-gray-100 rounded-xl w-fit">
                  {['light', 'dark', 'system'].map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setAppearance(theme)}
                      className={cn(
                        "px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize",
                        appearance === theme
                          ? "bg-white text-text-heading shadow-sm scale-100"
                          : "text-text-muted hover:text-text-body"
                      )}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Chat Section */}
          {activeCategory === 'chat' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-1">Chat Preferences</h2>
                <p className="text-text-muted text-sm">Configure how the AI generates your solutions</p>
              </div>

              <Card className="p-6 space-y-6">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-text-heading">Save Chat History</p>
                    <p className="text-xs text-text-muted">Keep your previous solves accessible in the sidebar</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={chatPrefs.saveHistory}
                    onChange={(e) => setChatPrefs({...chatPrefs, saveHistory: e.target.checked})}
                    className="w-5 h-5 rounded border-surface-border text-brand-primary focus:ring-brand-primary"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Answer Detail Level</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['concise', 'detailed', 'exhaustive'].map(fmt => (
                      <button
                        key={fmt}
                        onClick={() => setChatPrefs({...chatPrefs, formatting: fmt})}
                        className={cn(
                          "p-3 rounded-xl border text-sm transition-all text-center capitalize",
                          chatPrefs.formatting === fmt
                            ? "bg-brand-primary text-white border-brand-primary"
                            : "bg-white border-surface-border text-text-body"
                        )}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Danger Zone */}
          {activeCategory === 'account-actions' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h2 className="text-2xl font-bold text-text-heading mb-1">Danger Zone</h2>
                <p className="text-text-muted text-sm">Actions that cannot be undone</p>
              </div>

              <Card className="p-6 space-y-4 border-red-100 bg-red-50/30">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-surface-border">
                  <LogOut size={18} className="text-text-muted" />
                  <span className="text-sm font-medium text-text-body">Sign out of your account</span>
                  <Button variant="ghost" className="ml-auto text-xs">Logout</Button>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-red-100">
                  <Trash2 size={18} className="text-red-500" />
                  <span className="text-sm font-medium text-red-600">Permanently delete your account</span>
                  <Button variant="ghost" className="ml-auto text-xs text-red-500 hover:bg-red-50">Delete</Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Settings;
