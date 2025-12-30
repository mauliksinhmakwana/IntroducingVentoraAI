
import React, { useState, useEffect } from 'react';
import StarBackground from './components/StarBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPage from './components/PrivacyPage';
import AboutPage from './components/AboutPage';

type ViewState = 'home' | 'privacy' | 'about';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Handle back-to-top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "fa-solid fa-pills",
      title: "Pharma Intelligence",
      description: "Deep insights into chemical compositions and pharmaceutical classifications."
    },
    {
      icon: "fa-solid fa-dna",
      title: "Disease Mapping",
      description: "Understanding complex pathologies and clinical manifestations clearly."
    },
    {
      icon: "fa-solid fa-apple-whole",
      title: "Nutritional Science",
      description: "Evidence-based dietary analysis and metabolic interaction studies."
    },
    {
      icon: "fa-solid fa-vial-circle-check",
      title: "Clinical Accuracy",
      description: "Verified medical data processed through advanced AI logic for research."
    }
  ];

  const securityFeatures = [
    {
      icon: "fa-solid fa-database",
      title: "Local Storage",
      desc: "All data stays on your device."
    },
    {
      icon: "fa-solid fa-user-secret",
      title: "No Tracking",
      desc: "We don't monitor your activity."
    },
    {
      icon: "fa-solid fa-id-card-clip",
      title: "No Account",
      desc: "Start instantly without sign-up."
    },
    {
      icon: "fa-solid fa-code-branch",
      title: "Open Source",
      desc: "Transparent and auditable code."
    }
  ];

  if (view === 'privacy') {
    return (
      <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
        <StarBackground />
        <Header onNavigate={scrollToSection} />
        <PrivacyPage onBack={() => setView('home')} />
        <Footer 
          onAboutClick={() => setView('about')} 
          onPrivacyClick={() => setView('privacy')} 
        />
      </div>
    );
  }

  if (view === 'about') {
    return (
      <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
        <StarBackground />
        <Header onNavigate={scrollToSection} />
        <AboutPage onBack={() => setView('home')} />
        <Footer 
          onAboutClick={() => setView('about')} 
          onPrivacyClick={() => setView('privacy')} 
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center selection:bg-purple-500/30 bg-black text-white scroll-smooth">
      {/* Animated Starry Background */}
      <StarBackground />

      {/* Blue/Purple Glowing Orbs for Depth */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <Header onNavigate={scrollToSection} />

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center z-10 w-full max-w-6xl">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-blue-400 font-semibold tracking-[0.3em] text-xs md:text-sm uppercase">
            Future of Medical Knowledge
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-tight text-white">
            VENTORA <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">AI</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            A specialized Medical Information Assistant bridging the gap between clinical research and everyday health literacy.
          </p>

          <div className="pt-12 flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://ventora-ai.vercel.app/"
                className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-300 bg-transparent rounded-full hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-3 text-xl">
                  Enter to the Ventora
                  <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                </span>
              </a>
              
              <button
                onClick={() => scrollToSection('features')}
                className="px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2"
              >
                Explore Features
              </button>
            </div>

            {/* Prominent Secondary Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                onClick={() => setView('about')}
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-blue-500/50 transition-all uppercase tracking-widest font-bold"
              >
                <i className="fa-solid fa-circle-info text-blue-500/50 group-hover:text-blue-500"></i>
                About Ventora
              </button>
              <button 
                onClick={() => setView('privacy')}
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-400 hover:text-white hover:border-purple-500/50 transition-all uppercase tracking-widest font-bold"
              >
                <i className="fa-solid fa-shield-halved text-purple-500/50 group-hover:text-purple-500"></i>
                Privacy & Security
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 w-full max-w-7xl px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Key Intelligence Features</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`${feature.icon} text-2xl text-blue-400`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Security Section */}
      <section id="trust" className="relative z-10 w-full max-w-7xl px-6 py-32 border-t border-white/5 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Privacy-First Architecture</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Your medical queries are confidential. We've built Ventora to ensure that your data never leaves your control.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {securityFeatures.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center group hover:bg-white/5 transition-all">
              <div className="mb-4 inline-flex w-10 h-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <i className={s.icon}></i>
              </div>
              <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tight">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
           <button 
             onClick={() => setView('privacy')}
             className="text-xs text-blue-500 hover:text-blue-400 font-bold tracking-widest uppercase flex items-center gap-2 group"
           >
             Read Full Security Protocol
             <i className="fas fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
           </button>
        </div>
      </section>

      {/* Creator / Developer Section */}
      <section id="developer" className="relative z-10 w-full max-w-7xl px-6 py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           {/* Left Side: Photo */}
           <div className="flex-shrink-0 animate-in fade-in slide-in-from-left-8 duration-700">
             <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-black flex items-center justify-center overflow-hidden border-4 border-black">
                   <i className="fa-solid fa-user-tie text-7xl md:text-8xl text-blue-500/50"></i>
                </div>
             </div>
           </div>

           {/* Right Side: Info */}
           <div className="flex-1 text-center md:text-left space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
             <div>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2 text-white">
                  Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Architect</span>
               </h2>
               <p className="text-2xl font-bold text-blue-400">Maulik Sinh Makwana</p>
             </div>
             
             <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                Pharmaceutical Technologist & Full Stack Developer dedicated to merging healthcare depth with intuitive AI experiences. Creating tools like Ventora to empower patients and professionals through science-backed digital innovation.
             </p>

             <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/mauliksinh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-blue-600/10 border border-blue-600/30 rounded-2xl hover:bg-blue-600/20 hover:scale-105 transition-all group shadow-[0_4px_20px_-5px_rgba(37,99,235,0.4)]"
                >
                  <i className="fab fa-linkedin text-2xl text-blue-500"></i>
                  <span className="font-bold text-white tracking-widest uppercase text-sm">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://mauliksinhmakwana.github.io/Mauliksinh-Makwana/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-purple-600/10 border border-purple-600/30 rounded-2xl hover:bg-purple-600/20 hover:scale-105 transition-all group shadow-[0_4px_20px_-5px_rgba(147,51,234,0.4)]"
                >
                  <i className="fa-solid fa-globe text-2xl text-purple-500"></i>
                  <span className="font-bold text-white tracking-widest uppercase text-sm">Portfolio Site</span>
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* Detailed Landing Page About Summary */}
      <section id="about" className="relative z-10 w-full max-w-7xl px-6 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Crafted for Clarity, <br />
              <span className="text-blue-500">Built for Science.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ventora AI is more than just a chatbot. It's a sophisticated repository of pharmaceutical knowledge designed to provide instant clarity on complex health topics. 
              Whether you're a student, researcher, or curious individual, Ventora empowers you with data-driven insights.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">V5.4</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Current Version</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">MIA</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Assistant Class</div>
              </div>
            </div>

            <p className="text-sm text-gray-500 border-l-2 border-blue-500/50 pl-4 italic">
              "Our mission is to democratize pharmaceutical information through an interface that feels both powerful and human."
            </p>
            
            <button 
              onClick={() => setView('about')}
              className="mt-4 px-8 py-3 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 text-blue-400 rounded-full font-bold transition-all text-sm uppercase tracking-widest"
            >
              Learn More About Us
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 overflow-hidden">
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <i className="fas fa-microchip"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Neural Medical Core</h4>
                      <p className="text-xs text-gray-500">Custom LLM parameters for healthcare accuracy.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <i className="fas fa-shield-heart"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Ethics-First Logic</h4>
                      <p className="text-xs text-gray-500">Strict safety guardrails and medical disclaimers.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Zero Latency Sync</h4>
                      <p className="text-xs text-gray-500">Real-time data fetching for up-to-date research.</p>
                    </div>
                  </div>
               </div>
               
               {/* Decorative Graphic Element */}
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <i className="fa-solid fa-staff-snake text-9xl text-white"></i>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        onAboutClick={() => setView('about')} 
        onPrivacyClick={() => setView('privacy')} 
      />

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        #root {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
