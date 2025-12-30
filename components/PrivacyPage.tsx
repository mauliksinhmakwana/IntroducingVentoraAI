
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Privacy <span className="text-blue-500">&</span> Security</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-12">
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Your privacy and security are our top priority. Ventora AI is designed with privacy-first principles to ensure your data remains secure and private.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                <i className="fas fa-database text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Local Storage</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All your conversations, settings, and personal data are stored locally in your browser. No data is sent to external servers for storage.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                <i className="fas fa-user-slash text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">No Account Required</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ventora AI doesn't require you to create an account. Your data stays with you on your device.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                <i className="fas fa-user-secret text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">No Personal Tracking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't track your personal information, browsing history, or usage patterns. Your interactions remain private.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                <i className="fas fa-hand-holding-heart text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Data Ownership</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                You own all your data. You can export your conversations at any time or clear all data with one click.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                <i className="fas fa-code text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Open Source</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ventora AI's code is transparent. You can review how it handles your data and verify its security measures.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-2">
                <i className="fas fa-exclamation-triangle text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Medical Disclaimer</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ventora AI provides educational information only. It is not a substitute for professional medical advice.
              </p>
            </section>
          </div>

          <div className="pt-20 text-center">
            <button 
              onClick={onBack}
              className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all"
            >
              Return to Landing Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
