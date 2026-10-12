import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-background flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Logo variant="full" className="mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-text-heading">Reset Password</h2>
          <p className="text-text-body">Enter your email and we'll send you a reset link.</p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="name@email.com"
            required
          />

          <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
            Send Reset Link
          </Button>
        </form>

        <div className="text-center">
          <Link to="/login" className="text-sm font-medium text-brand-primary hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
