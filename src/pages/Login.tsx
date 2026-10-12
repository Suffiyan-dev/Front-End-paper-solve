import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Eye, EyeOff, Globe } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // UI PREVIEW MODE: Bypass auth and go to dashboard
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-surface-background flex">
      {/* Left Side: Brand/Product Area */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-primary p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Subtle background visual: Abstract "Paper" lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px' }}
          />
        </div>

        <div className="relative z-10">
          <Logo variant="full" className="text-white brightness-0 invert" />
        </div>

        <div className="relative z-10 max-w-md space-y-6">
          <h1 className="text-5xl font-display font-bold leading-tight">
            Turn past-paper questions into examiner-ready answers.
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            PaperSolve helps you understand exactly how to structure your answers to maximize marks, based on official marking schemes.
          </p>
        </div>

        <div className="relative z-10 text-sm text-blue-200">
          © 2026 PaperSolve. Designed for students.
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <Logo variant="full" className="mx-auto lg:mx-0 mb-6" />
            <h2 className="text-3xl font-display font-bold text-text-heading">Welcome back</h2>
            <p className="text-text-body">Your exam questions, solved properly.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="name@email.com"
                required
              />

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-text-heading">Password</label>
                  <Link to="/forgot-password" className="text-xs font-medium text-brand-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-body transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-surface-border text-brand-primary focus:ring-brand-primary/20"
              />
              <label htmlFor="remember" className="text-sm text-text-body cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
              Sign In
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-background px-2 text-text-muted">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full gap-2" type="button">
              <Globe size={18} />
              Sign in with Google
            </Button>
          </form>

          <p className="text-center text-sm text-text-body">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-brand-primary hover:underline">
              Create one for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
