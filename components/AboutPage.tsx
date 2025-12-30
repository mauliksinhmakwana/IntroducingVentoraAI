
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="relative z-10 w-full pt-32 pb-20 px-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white">About <span className="text-blue-500">Ventora AI</span></h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Bridging the Gap</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Ventora AI is a sophisticated Medical Information Assistant (MIA) developed to provide people with clear, science-backed understanding of medicines, diseases, and nutrition. We believe that health literacy shouldn't be gated behind complex academic jargon.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              By combining cutting-edge pharmaceutical science with advanced AI technology, Ventora acts as a reliable companion for educational awareness, helping users navigate the complexities of clinical data through a simplified, intuitive interface.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 border-l-2 border-blue-500/30 pl-6">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To democratize healthcare information by making pharmaceutical depth accessible to everyone, ensuring people can make more informed decisions about their well-being.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-purple-500/30 pl-6">
              <h3 className="text-xl font-bold text-white">Clinical Integrity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ventora is built on verified data structures. While it is an educational tool, the accuracy and depth of information provided are rooted in established pharmaceutical research.
              </p>
            </div>
          </div>

          <section className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
             <div className="relative z-10 space-y-6">
               <h2 className="text-2xl font-bold text-white">Technology & Versioning</h2>
               <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                   <div className="text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-1">Current Version</div>
                   <div className="text-xl font-black text-white">V5.4 MIA</div>
                 </div>
                 <div className="px-6 py-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                   <div className="text-[10px] uppercase tracking-widest font-bold text-purple-400 mb-1">Architecture</div>
                   <div className="text-xl font-black text-white">Hybrid-Neural</div>
                 </div>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                 The current V5.4 Medical Information Assistant (MIA) update introduces enhanced reasoning for drug-to-drug interactions and expanded nutritional metabolic mapping.
               </p>
             </div>
             <i className="fa-solid fa-dna absolute bottom-[-20%] right-[-5%] text-[15rem] opacity-5 text-white pointer-events-none"></i>
          </section>

          <section className="text-center py-10 space-y-6">
            <h3 className="text-xl font-bold text-white">The Creator</h3>
            <p className="text-gray-400">Created with care and scientific rigor by</p>
            <div className="text-2xl md:text-3xl font-black tracking-[0.4em] uppercase text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Maulik Sinh Makwana
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-8">Pharmaceutical Technologist & AI Enthusiast</p>
            
            <div className="flex flex-wrap justify-center gap-4">
               <a 
                 href="https://www.linkedin.com/in/mauliksinh" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 hover:bg-blue-500/10 transition-all text-xs font-bold uppercase tracking-widest"
               >
                 <i className="fab fa-linkedin"></i>
                 LinkedIn
               </a>
               <a 
                 href="https://mauliksinhmakwana.github.io/Mauliksinh-Makwana/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 hover:bg-purple-500/10 transition-all text-xs font-bold uppercase tracking-widest"
               >
                 <i className="fa-solid fa-globe"></i>
                 Portfolio
               </a>
            </div>
          </section>

          <div className="pt-10 text-center">
            <button 
              onClick={onBack}
              className="px-12 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all uppercase tracking-widest text-xs"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
