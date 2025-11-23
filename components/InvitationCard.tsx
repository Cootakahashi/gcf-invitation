import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Check, X } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { Button } from './Button';

interface InvitationCardProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay slightly to allow the "unlock" animation to finish in the parent
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
      
      {/* Main Card Container */}
      <div className="glass-panel w-full max-w-2xl min-h-[600px] rounded-sm relative overflow-hidden flex flex-col shadow-2xl animate-slide-up">
        
        {/* Decorative Corner Borders */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold-500 opacity-50" />
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gold-500 opacity-50" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gold-500 opacity-50" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gold-500 opacity-50" />

        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 text-center z-10">
          
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase border-b border-gold-700 pb-2">
              You Are Cordially Invited
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl text-gold-100 mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {EVENT_DETAILS.title}
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent my-8 opacity-50" />

          <p className="font-serif text-lg md:text-xl text-gold-200 leading-relaxed max-w-md mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            {EVENT_DETAILS.message}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-10 h-10 rounded-full bg-gold-900/50 flex items-center justify-center border border-gold-700/50 group-hover:border-gold-400 transition-colors">
                <Calendar className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-gold-100 font-display text-lg">{EVENT_DETAILS.date}</span>
              <span className="text-gold-500/60 text-xs uppercase tracking-wider">Date</span>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-10 h-10 rounded-full bg-gold-900/50 flex items-center justify-center border border-gold-700/50 group-hover:border-gold-400 transition-colors">
                <Clock className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-gold-100 font-display text-lg">{EVENT_DETAILS.time}</span>
              <span className="text-gold-500/60 text-xs uppercase tracking-wider">Time</span>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-10 h-10 rounded-full bg-gold-900/50 flex items-center justify-center border border-gold-700/50 group-hover:border-gold-400 transition-colors">
                <MapPin className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-gold-100 font-display text-lg whitespace-nowrap">{EVENT_DETAILS.location}</span>
              <span className="text-gold-500/60 text-xs uppercase tracking-wider">Venue</span>
            </div>
          </div>

          {/* Action Area - RSVP */}
          <div className="flex flex-col w-full max-w-sm gap-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
             <p className="text-gold-500/50 text-[10px] uppercase tracking-widest mb-2">Please Respond</p>
             <div className="flex flex-row gap-4 w-full">
                <Button onClick={onAccept} className="flex-1">
                   <Check className="w-4 h-4 mr-2" /> 参加
                </Button>
                <Button variant="secondary" onClick={onDecline} className="flex-1 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400">
                   <X className="w-4 h-4 mr-2" /> 不参加
                </Button>
             </div>
          </div>

        </div>

        {/* Decorative Bottom Pattern */}
        <div className="h-2 w-full bg-gradient-to-r from-midnight-900 via-gold-600 to-midnight-900 opacity-30" />
      </div>
    </div>
  );
};