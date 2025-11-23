'use client';

import React, { useState } from 'react';
import { Background } from './components/Background';
import { AccessGate } from './components/AccessGate';
import { InvitationCard } from './components/InvitationCard';
import { DestroyedView } from './components/DestroyedView';
import { TicketView } from './components/TicketView';
import { AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOCKED);

  const handleUnlock = () => {
    setAppState(AppState.UNLOCKING);
    // Add a small delay for a transition effect logic
    setTimeout(() => {
      setAppState(AppState.UNLOCKED);
    }, 500);
  };

  const handleAccept = () => {
    setAppState(AppState.ACCEPTED);
  };

  const handleDestroy = () => {
    setAppState(AppState.DESTROYED);
  };

  return (
    <main className="relative min-h-screen w-full text-gold-100 font-sans selection:bg-gold-500 selection:text-midnight-900">
      {/* Shared Background - Hidden when destroyed for dramatic effect */}
      {appState !== AppState.DESTROYED && <Background />}

      {/* View Switcher */}
      <div className="relative z-10">
        {(appState === AppState.LOCKED || appState === AppState.UNLOCKING) && (
          <div className={`transition-opacity duration-700 ease-in-out ${appState === AppState.UNLOCKING ? 'opacity-0 scale-95 transform' : 'opacity-100'}`}>
            <AccessGate onUnlock={handleUnlock} onDestroy={handleDestroy} />
          </div>
        )}

        {appState === AppState.UNLOCKED && (
           <InvitationCard onAccept={handleAccept} onDecline={handleDestroy} />
        )}

        {appState === AppState.ACCEPTED && (
           <TicketView />
        )}

        {appState === AppState.DESTROYED && (
          <DestroyedView />
        )}
      </div>

      {/* Footer Branding - Hide on destroy */}
      {appState !== AppState.DESTROYED && (
        <footer className="fixed bottom-4 w-full text-center z-20 pointer-events-none">
          <p className="text-gold-700/30 text-[10px] uppercase tracking-[0.4em]">
            Lumière Digital Experiences
          </p>
        </footer>
      )}
    </main>
  );
};

export default App;