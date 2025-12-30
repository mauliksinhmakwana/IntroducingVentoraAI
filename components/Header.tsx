
import React from 'react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full h-24 flex items-center justify-between px-6 md:px-12 z-50 fixed top-0 backdrop-blur-md border-b border-white/5 bg-black/40">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-black tracking-[0.2em] uppercase">
          VENTORA<span className="text-blue-500">AI</span>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-gray-400">
        <button 
          onClick={() => onNavigate('features')} 
          className="hover:text-white hover:translate-y-[-1px] transition-all"
        >
          Features
        </button>
        <button 
          onClick={() => onNavigate('about')} 
          className="hover:text-white hover:translate-y-[-1px] transition-all"
        >
          About
        </button>
        <div className="w-px h-4 bg-white/10 mx-2"></div>
        <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-400 tracking-widest">
          V5.4 MIA
        </div>
      </nav>

      <div className="md:hidden">
         <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] tracking-widest uppercase">
          V5.4
        </div>
      </div>
    </header>
  );
};

export default Header;
