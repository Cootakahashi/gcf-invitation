import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed font-sans uppercase tracking-widest text-sm font-semibold py-4 px-8 rounded-sm";
  
  const variants = {
    primary: "bg-gold-500 text-midnight-900 hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] border border-gold-400",
    secondary: "bg-transparent text-gold-400 border border-gold-600/50 hover:border-gold-400 hover:bg-gold-600/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </div>
    </button>
  );
};