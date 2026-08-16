import React from 'react';
import type { EducationInfo, JourneyItem } from '../types/portfolio';
import { Education } from '../components/Education';
import { TechnicalJourney } from '../components/TechnicalJourney';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';

interface EducationPageProps {
  education: EducationInfo;
  journey: JourneyItem[];
}

export const EducationPage: React.FC<EducationPageProps> = ({ education, journey }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-teal-800 bg-teal-100 border border-teal-300 px-3 py-1 rounded font-bold uppercase tracking-widest flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            PAGE 05 // EDUCATION & TECHNICAL JOURNEY
          </span>
          <div className="h-px bg-teal-200 flex-1" />
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#141414] tracking-tight">
          Academic & <span className="text-teal-700 italic font-serif-editorial">Engineering Growth</span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mt-3 font-sans">
          Computer Science academic background alongside the step-by-step evolution of my cloud and SRE skill set.
        </p>
      </div>

      {/* Main Education Component */}
      <Education education={education} />

      {/* Main Technical Journey Roadmap */}
      <TechnicalJourney journey={journey} />

      {/* Next Page Link Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#141414] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">NEXT SECTION</span>
            <h3 className="font-display font-bold text-2xl">Get In Touch</h3>
            <p className="text-stone-400 text-sm mt-1 font-sans">Open for Internship and Full-time Cloud Engineering / DevOps opportunities.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs uppercase font-bold px-6 py-3.5 rounded-lg transition-colors shrink-0"
          >
            <span>Go To Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
