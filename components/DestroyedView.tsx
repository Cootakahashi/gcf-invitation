import React from 'react';
import { Ban, AlertTriangle } from 'lucide-react';

export const DestroyedView: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-red-600 overflow-hidden animate-fade-in">
      {/* Background Noise/Glitch effect simulation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      
      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 animate-pulse"></div>
          <Ban className="w-24 h-24 text-red-700 relative z-10" strokeWidth={1} />
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-widest text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] uppercase">
          Invalid Access
        </h1>
        
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-red-900 to-transparent my-8" />
        
        <p className="font-serif text-xl md:text-2xl text-red-500 tracking-wider mb-4 animate-[pulse_3s_ease-in-out_infinite]">
          この招待状は消滅しました
        </p>
        
        <p className="font-sans text-xs text-red-900/80 uppercase tracking-[0.3em] mt-8">
          Self-Destruct Sequence Complete
        </p>
        
        <div className="mt-12 flex gap-2">
            <div className="w-2 h-2 bg-red-900 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-red-900 rounded-full animate-bounce delay-200"></div>
            <div className="w-2 h-2 bg-red-900 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, black 120%)' }} />
    </div>
  );
};