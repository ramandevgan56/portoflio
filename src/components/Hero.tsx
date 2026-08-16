import React from 'react';
import type { PersonalInfo } from '../types/portfolio';
import { InfrastructureCanvas } from './InfrastructureCanvas';
import { ArrowDownRight, FileText } from 'lucide-react';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const imageSrc = personal.profileImage || '/images/profile.png';

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-16 md:pb-24 border-b border-stone-300 relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Main Title & Role */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h1 className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight whitespace-nowrap bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fbbf24] bg-clip-text text-transparent mb-6 pb-1 pr-4">
              {personal.name}.
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-700 uppercase mb-6">
              {personal.subroles.map((sub, index) => (
                <React.Fragment key={sub}>
                  <span className="bg-stone-200/80 px-2.5 py-1 rounded text-[#141414] font-semibold">{sub}</span>
                  {index < personal.subroles.length - 1 && <span className="text-stone-400">•</span>}
                </React.Fragment>
              ))}
            </div>

            <p className="font-serif-editorial italic text-2xl sm:text-4xl text-[#141414] leading-snug mb-6 max-w-3xl">
              "{personal.headline}"
            </p>

            <p className="text-stone-700 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {personal.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-[#141414] hover:bg-[#ea580c] text-white px-6 py-3.5 rounded font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md group"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-[#141414] border border-stone-300 px-5 py-3.5 rounded font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Photo (Seamless 4-Side Environment Blend) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ea580c]/20 via-[#f97316]/10 to-[#f59e0b]/15 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
              
              <div 
                className="relative overflow-hidden w-full"
                style={{
                  maskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 65%, transparent 86%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 65%, transparent 86%)',
                }}
              >
                <img
                  src={imageSrc}
                  alt={personal.name}
                  className="w-full h-[480px] sm:h-[580px] lg:h-[650px] xl:h-[700px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Perimeter Edge Blur Layer: Directional soft blur applied around image edges */}
                <div 
                  className="absolute inset-0 backdrop-blur-[8px] pointer-events-none"
                  style={{
                    maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 80%)',
                  }}
                />

                {/* 4-Directional Vignette Overlays for 100% Seamless Melting into Dark Environment */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Cloud Infrastructure Topology Graphic */}
        <div className="mt-8">
          <InfrastructureCanvas />
        </div>

      </div>
    </section>
  );
};
