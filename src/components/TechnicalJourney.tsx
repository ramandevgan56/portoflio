import React from 'react';
import type { JourneyItem } from '../types/portfolio';
import { Compass, ArrowDown } from 'lucide-react';

interface TechnicalJourneyProps {
  journey: JourneyItem[];
}

export const TechnicalJourney: React.FC<TechnicalJourneyProps> = ({ journey }) => {
  return (
    <section className="py-20 border-b border-stone-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Purple Theme */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-purple-800 bg-purple-100/90 border border-purple-300 px-3 py-1 rounded uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            06 // ENGINEERING GROWTH
          </span>
          <div className="h-px bg-purple-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141414] tracking-tight">
              Always <span className="text-purple-700 italic font-serif-editorial">learning.</span> Always building.
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mt-2 font-sans">
              Chronological roadmap illustrating technical skill acquisition, domain evolution, and infrastructure practices.
            </p>
          </div>

          <div className="bg-purple-50 text-purple-900 border border-purple-200 px-3.5 py-2 rounded text-xs font-mono font-semibold flex items-center gap-2 shrink-0">
            <Compass className="w-4 h-4 text-purple-600" />
            <span>Note: Technical Growth Progression (Not Employment History)</span>
          </div>
        </div>

        {/* Roadmap Timeline Flow */}
        <div className="relative border-l-2 border-purple-300 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {journey.map((step, index) => (
            <div key={step.step} className="relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-6 h-6 rounded-full bg-purple-700 text-white border-2 border-white flex items-center justify-center font-mono text-[10px] font-bold group-hover:bg-purple-900 transition-colors shadow-xs">
                {step.step}
              </div>

              {/* Step Card */}
              <div className="bg-[#faf8f5] border border-purple-200 hover:border-purple-400 rounded-xl p-5 md:p-6 shadow-xs hover:shadow-md transition-all duration-200 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-300">
                    STAGE {step.step} // {step.subtitle}
                  </span>
                  <span className="font-mono text-xs text-stone-400">EVOLUTION ROADMAP</span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#141414] mb-2 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-stone-700 font-sans text-sm md:text-base leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Associated Tools */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-purple-200/60">
                  <span className="font-mono text-[10px] text-stone-400 uppercase">Core Tools:</span>
                  {step.tools.map((t) => (
                    <span key={t} className="bg-white border border-purple-200 text-purple-900 font-mono text-xs font-semibold px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Connector between steps */}
              {index < journey.length - 1 && (
                <div className="my-2 ml-4 text-purple-300">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
