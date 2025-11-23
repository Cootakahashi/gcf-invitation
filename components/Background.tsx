import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-800 to-black" />
      
      {/* Animated Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold-600/10 rounded-full blur-[100px] animate-float opacity-30" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] animate-float opacity-30" style={{ animationDelay: '2s' }} />
      
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      {/* Floating particles (CSS simplified) */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full blur-[1px] animate-pulse opacity-40" />
      <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-gold-200 rounded-full blur-[1px] animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gold-500 rounded-full blur-[2px] animate-pulse opacity-20" style={{ animationDelay: '3s' }} />
    </div>
  );
};