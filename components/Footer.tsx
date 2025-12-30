
import React from 'react';

interface FooterProps {
  onAboutClick: () => void;
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick, onPrivacyClick }) => {
  return (
    <footer className="w-full py-20 px-6 md:px-12 z-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-black tracking-[0.2em] uppercase">
            VENTORA<span className="text-blue-500">AI</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Advancing healthcare through responsible pharmaceutical intelligence. Empowering users with clinical depth and digital clarity.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <a href="https://www.linkedin.com/in/mauliksinh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://mauliksinhmakwana.github.io/Mauliksinh-Makwana/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xl">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-300">Quick Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={onAboutClick} className="hover:text-blue-400 transition-colors text-left">Mission & Vision</button></li>
            <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-blue-400 transition-colors text-left">Back to Top</button></li>
            <li><a href="https://ventora-ai.vercel.app/" className="hover:text-blue-400 transition-colors">Launch Assistant</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-300">Legal & Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={onPrivacyClick} className="hover:text-purple-400 transition-colors text-left">Privacy & Security</button></li>
            <li><a href="mailto:support@ventora.ai" className="hover:text-purple-400 transition-colors">Technical Support</a></li>
            <li><span className="text-[10px] tracking-widest text-gray-600 uppercase">© {new Date().getFullYear()} VENTORA LABS</span></li>
          </ul>
        </div>

      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-gray-700 font-bold">
          Developed by Maulik Sinh Makwana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
