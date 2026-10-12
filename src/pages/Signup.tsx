import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Globe } from 'lucide-react';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
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
            Join thousands of students mastering their exams.
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Get access to curated marking schemes and high-scoring answer patterns for your specific board.
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
            <h2 className="text-3xl font-display font-bold text-text-heading">Create account</h2>
            <p className="text-text-body">Start solving your past papers today.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="name@email.com"
                required
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
              Create Account
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-surface-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-background px-2 text-text-muted">Or sign up with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full gap-2" type="button">
              <Globe size={18} />
              Sign up with Google
            </Button>
          </form>

          <p className="text-center text-sm text-text-body">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
