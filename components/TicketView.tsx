import React, { useEffect, useState, useRef } from 'react';
import { QrCode, CheckCircle2, Crown, Download } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { Button } from './Button';
import html2canvas from 'html2canvas';

export const TicketView: React.FC = () => {
  const [showQr, setShowQr] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal QR code with a delay for dramatic effect
    const timer = setTimeout(() => setShowQr(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    
    setIsDownloading(true);
    
    try {
      // Small delay to ensure state updates if needed
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(ticketRef.current, {
        scale: 2, // High resolution
        backgroundColor: '#0F172A', // Force background color as glass effect might be lost
        logging: false,
        useCORS: true,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Lumiere-VIP-Ticket.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to generate ticket image', error);
      alert('チケットの保存に失敗しました。スクリーンショットをご利用ください。');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div ref={ticketRef} className="glass-panel w-full max-w-md rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col items-center relative border border-gold-500/40">
        
        {/* Top Section - Status */}
        <div className="w-full bg-gold-900/80 p-6 text-center border-b border-gold-500/20 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-green-400 mb-2 animate-slide-up">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold">Confirmed</span>
          </div>
          <h2 className="font-display text-2xl text-gold-100 tracking-wider">VIP ACCESS PASS</h2>
        </div>

        {/* Middle Section - Ticket Details */}
        <div className="p-8 w-full flex flex-col items-center space-y-6 bg-gradient-to-b from-midnight-900/50 to-midnight-800/50">
          
          {/* Holographic Container for QR */}
          <div className="relative w-48 h-48 group cursor-pointer perspective-1000">
             <div className="absolute inset-0 bg-gold-500/10 rounded-xl blur-lg animate-pulse"></div>
             <div className={`relative bg-white p-3 rounded-xl shadow-2xl transition-all duration-1000 transform ${showQr ? 'scale-100 opacity-100 rotate-0' : 'scale-90 opacity-0 rotate-y-180'}`}>
                {/* Simulated QR Code Pattern */}
                <div className="w-full h-full border-2 border-black flex items-center justify-center relative overflow-hidden">
                    <QrCode className="w-full h-full text-black opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/20 to-transparent animate-shimmer pointer-events-none"></div>
                    
                    {/* Center Logo in QR */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-1 rounded-full shadow-lg">
                            <Crown className="w-6 h-6 text-gold-600 fill-current" />
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="text-center space-y-1">
            <p className="text-gold-400 font-sans text-[10px] uppercase tracking-[0.3em]">Ticket ID</p>
            <p className="text-white font-mono text-lg tracking-widest">LUM-8829-X</p>
          </div>

          <div className="w-full h-px bg-gold-500/30 my-4 dashed"></div>

          <div className="w-full space-y-4 text-center">
            <div>
              <p className="text-gold-500/60 text-xs uppercase mb-1">Event</p>
              <p className="text-gold-100 font-display text-lg">{EVENT_DETAILS.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-gold-500/60 text-xs uppercase mb-1">Date</p>
                  <p className="text-gold-200 font-serif">{EVENT_DETAILS.date}</p>
               </div>
               <div>
                  <p className="text-gold-500/60 text-xs uppercase mb-1">Time</p>
                  <p className="text-gold-200 font-serif">{EVENT_DETAILS.time}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Action */}
        <div className="w-full p-6 bg-midnight-900/40 border-t border-gold-500/20 flex justify-center">
           <Button 
             variant="secondary" 
             className="w-full text-xs" 
             onClick={handleDownload}
             isLoading={isDownloading}
             data-html2canvas-ignore="true"
            >
              <Download className="w-4 h-4 mr-2" />
              Save Image
           </Button>
        </div>
        
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"></div>
      </div>
      
      <p className="absolute bottom-8 text-gold-500/40 text-[10px] uppercase tracking-widest animate-pulse">
        Please present this code at the entrance
      </p>
    </div>
  );
};