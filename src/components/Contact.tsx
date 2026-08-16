import React, { useState } from 'react';
import type { PersonalInfo } from '../types/portfolio';
import { Mail, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './SocialIcons';

interface ContactProps {
  personal: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personal.email);
    }
    setCopied(true);
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}`;
    }, 400);
    setTimeout(() => setCopied(false), 3500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#09090b] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 scroll-reveal">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
            Let's build something <span className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fbbf24] bg-clip-text text-transparent italic font-serif-editorial">reliable.</span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base font-sans mt-3.5 leading-relaxed max-w-xl mx-auto">
            Feel free to reach out for collaborations, project discussions, or just to say hi!
          </p>
        </div>

        {/* 5 Contact Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-5">
          
          {/* Row 1: 3 Equal Width Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* 1. EMAIL ME CARD (Interactive Copy & Display Email) */}
            <div
              onClick={handleEmailClick}
              className="bg-[#0e0e11] hover:bg-[#16161c] border border-stone-800/90 hover:border-stone-700/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-xl hover:-translate-y-1.5 relative overflow-hidden scroll-reveal delay-100"
              title="Click to copy email and send mail"
            >
              {/* Circular Icon Container */}
              <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 mb-3 shadow-inner ${
                copied 
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-400 scale-110' 
                  : 'bg-[#18181d] border-stone-800 text-stone-300 group-hover:text-white group-hover:border-stone-700 group-hover:scale-110'
              }`}>
                {copied ? <Check className="w-6 h-6 text-emerald-400" /> : <Mail className="w-6 h-6 text-stone-300 group-hover:text-white" />}
              </div>
              
              {/* Card Title */}
              <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                Email Me
              </span>

              {/* Display Email Address */}
              <span className="font-mono text-xs text-stone-400 group-hover:text-stone-200 mt-1.5 transition-colors block truncate max-w-full">
                {personal.email}
              </span>

              {/* Copied Feedback Badge */}
              {copied ? (
                <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 px-2.5 py-0.5 rounded-full animate-in zoom-in-95 duration-200">
                  <Check className="w-3 h-3" /> Copied to Clipboard!
                </span>
              ) : (
                <span className="mt-2.5 text-[10px] font-mono text-stone-500 group-hover:text-amber-500/80 flex items-center gap-1 transition-colors">
                  <Copy className="w-3 h-3" /> Click to copy
                </span>
              )}
            </div>

            {/* 2. LINKEDIN CARD */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e0e11] hover:bg-[#16161c] border border-stone-800/90 hover:border-stone-700/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-xl hover:-translate-y-1.5 scroll-reveal delay-200"
            >
              <div className="w-14 h-14 rounded-full bg-[#18181d] border border-stone-800 flex items-center justify-center group-hover:border-stone-700 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                <LinkedinIcon className="w-6 h-6 text-stone-300 group-hover:text-white" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                Connect
              </span>
              <span className="font-mono text-xs text-stone-400 group-hover:text-stone-200 mt-1.5 transition-colors">
                LinkedIn Profile
              </span>
            </a>

            {/* 3. GITHUB CARD */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e0e11] hover:bg-[#16161c] border border-stone-800/90 hover:border-stone-700/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-xl hover:-translate-y-1.5 scroll-reveal delay-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#18181d] border border-stone-800 flex items-center justify-center group-hover:border-stone-700 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                <GithubIcon className="w-6 h-6 text-stone-300 group-hover:text-white" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                My Code
              </span>
              <span className="font-mono text-xs text-stone-400 group-hover:text-stone-200 mt-1.5 transition-colors">
                github/ramandevgan56
              </span>
            </a>

          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            
            {/* 4. INSTAGRAM CARD */}
            <a
              href={personal.instagramUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[calc(33.333%-14px)] min-w-[240px] bg-[#0e0e11] hover:bg-[#16161c] border border-stone-800/90 hover:border-stone-700/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-xl hover:-translate-y-1.5 scroll-reveal delay-200"
            >
              <div className="w-14 h-14 rounded-full bg-[#18181d] border border-stone-800 flex items-center justify-center group-hover:border-stone-700 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                <InstagramIcon className="w-6 h-6 text-stone-300 group-hover:text-white" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                Follow Me
              </span>
              <span className="font-mono text-xs text-stone-400 group-hover:text-stone-200 mt-1.5 transition-colors">
                Instagram Profile
              </span>
            </a>

            {/* 5. TWITTER CARD */}
            <a
              href={personal.twitterUrl || 'https://x.com/ramandevgan'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[calc(33.333%-14px)] min-w-[240px] bg-[#0e0e11] hover:bg-[#16161c] border border-stone-800/90 hover:border-stone-700/90 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-xl hover:-translate-y-1.5 scroll-reveal delay-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#18181d] border border-stone-800 flex items-center justify-center group-hover:border-stone-700 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                <TwitterIcon className="w-6 h-6 text-stone-300 group-hover:text-white" />
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors">
                Twitter
              </span>
              <span className="font-mono text-xs text-stone-400 group-hover:text-stone-200 mt-1.5 transition-colors">
                @ramandevgan
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
