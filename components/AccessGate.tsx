import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, AlertCircle } from 'lucide-react';
import { VALID_CODE } from '../constants';
import { Button } from './Button';

interface AccessGateProps {
  onUnlock: () => void;
  onDestroy: () => void;
}

export const AccessGate: React.FC<AccessGateProps> = ({ onUnlock, onDestroy }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  // When error occurs, clear it after animation but trigger destroy logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (error) {
       // Wait for the shake animation to finish before destroying
       timer = setTimeout(() => {
         onDestroy();
       }, 800);
    }
    return () => clearTimeout(timer);
  }, [error, onDestroy]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecking || error) return;
    
    setIsChecking(true);
    
    // Simulate a network check
    setTimeout(() => {
      if (code === VALID_CODE) {
        onUnlock();
      } else {
        setIsChecking(false);
        setError(true);
      }
    }, 800);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in">
      <div className="glass-panel p-8 md:p-12 rounded-xl w-full max-w-md shadow-2xl border-t border-gold-500/30">
        
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/30 text-gold-400">
            <Lock className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-center text-gold-100 tracking-wider">
            Private Access
          </h1>
          <p className="text-gold-200/60 font-sans text-xs uppercase tracking-[0.2em] text-center">
            One Attempt Only
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`w-full space-y-6 ${error ? 'animate-shake' : ''}`}>
          <div className="relative group">
            <div className={`absolute -inset-0.5 rounded-lg blur opacity-30 transition duration-500 ${error ? 'bg-red-600 opacity-100' : 'bg-gold-500 group-hover:opacity-75'}`}></div>
            <div className={`relative flex items-center bg-midnight-900 rounded-lg border transition-colors ${error ? 'border-red-500' : 'border-gold-700/50 focus-within:border-gold-400'}`}>
              <span className={`pl-4 ${error ? 'text-red-500' : 'text-gold-600'}`}>
                <KeyRound className="w-5 h-5" />
              </span>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter Invitation Code"
                className={`w-full bg-transparent text-gold-100 placeholder-gold-700 py-4 px-4 focus:outline-none font-sans tracking-widest text-center ${error ? 'text-red-500' : ''}`}
                autoFocus
                disabled={error || isChecking}
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center justify-center gap-2 text-red-500 text-sm font-bold tracking-widest uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>Breach Detected</span>
            </div>
          )}

          <Button 
            type="submit" 
            isLoading={isChecking} 
            className={`w-full ${error ? 'bg-red-900 border-red-700 text-red-200 opacity-50' : ''}`}
            disabled={error}
          >
            {isChecking ? 'Verifying...' : error ? 'LOCKED' : 'Unlock Invitation'}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gold-700 text-xs font-serif italic">
            "Enter with care, for the gate opens but once."
          </p>
        </div>
      </div>
    </div>
  );
};