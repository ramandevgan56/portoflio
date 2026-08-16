import React from 'react';
import type { AboutInfo } from '../types/portfolio';
import { Terminal, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface AboutProps {
  about: AboutInfo;
}

export const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-20 border-b border-stone-300 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag - Emerald Theme */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-emerald-700 bg-emerald-100/80 border border-emerald-300 px-3 py-1 rounded uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            01 // ABOUT ME
          </span>
          <div className="h-px bg-emerald-300/60 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#141414] leading-[1.05] font-normal whitespace-pre-line">
              Cloud infrastructure,<br />
              <span className="text-emerald-700 italic font-semibold">built with purpose.</span>
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans pt-2">
              {about.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars - Colorful Emerald Cards */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Automation', desc: 'Zero manual console tweaks', icon: <Terminal className="w-3.5 h-3.5 text-emerald-600" /> },
                { label: 'Reliability', desc: 'Fault-tolerant architecture', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> },
                { label: 'Scalability', desc: 'Horizontal auto-scaling', icon: <Cpu className="w-3.5 h-3.5 text-emerald-600" /> },
                { label: 'Security', desc: 'Least-privilege IAM policies', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> },
                { label: 'Observability', desc: 'Real-time telemetry', icon: <Layers className="w-3.5 h-3.5 text-emerald-600" /> },
                { label: 'Infrastructure as Code', desc: 'Declarative Terraform', icon: <Terminal className="w-3.5 h-3.5 text-emerald-600" /> },
              ].map((pillar) => (
                <div key={pillar.label} className="p-3.5 bg-white border border-emerald-200/80 hover:border-emerald-400 rounded-lg shadow-xs transition-colors">
                  <div className="flex items-center gap-1.5 mb-1">
                    {pillar.icon}
                    <span className="font-mono text-xs font-bold text-stone-900">{pillar.label}</span>
                  </div>
                  <span className="text-[11px] text-stone-500 block">{pillar.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Currently Focused On & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Focused Box - Emerald / Dark Surface */}
            <div className="bg-[#064e3b] text-white p-6 sm:p-8 rounded-xl shadow-xl border border-emerald-700/60">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-800">
                <span className="font-mono text-xs text-emerald-300 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  CURRENTLY FOCUSED ON
                </span>
                <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  2026 ACTIVE TOOLKIT
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {about.currentlyFocused.map((tool) => (
                  <span
                    key={tool}
                    className="bg-emerald-950/80 hover:bg-emerald-600 text-emerald-100 hover:text-white border border-emerald-700/60 font-mono text-xs px-3 py-1.5 rounded transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-800/80 text-xs text-emerald-200/80 font-mono leading-relaxed">
                Applying cloud-native patterns to build self-healing infrastructure, minimize deployment risk, and accelerate delivery pipelines.
              </div>
            </div>

            {/* Editorial Metrics - Emerald Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {about.metrics.map((metric) => (
                <div key={metric.label} className="bg-white border border-emerald-200 p-4 rounded-lg text-center hover:border-emerald-400 transition-colors shadow-xs">
                  <span className="font-display font-extrabold text-2xl text-emerald-600 block">{metric.value}</span>
                  <span className="font-mono text-[10px] text-stone-900 font-bold uppercase tracking-wider block mt-1">{metric.label}</span>
                  <span className="text-[10px] text-stone-500 block mt-0.5">{metric.subtext}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
