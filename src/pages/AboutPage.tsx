import React from 'react';
import type { AboutInfo, PersonalInfo } from '../types/portfolio';
import { About } from '../components/About';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

interface AboutPageProps {
  about: AboutInfo;
  personal: PersonalInfo;
}

export const AboutPage: React.FC<AboutPageProps> = ({ about, personal }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded font-bold uppercase tracking-widest flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-emerald-600" />
            PAGE 01 // ABOUT ME
          </span>
          <div className="h-px bg-emerald-200 flex-1" />
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#141414] tracking-tight">
          About <span className="text-emerald-700 italic font-serif-editorial">{personal.name}</span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mt-3 font-sans">
          Cloud Infrastructure Engineer dedicated to building fault-tolerant, scalable, and automated cloud systems.
        </p>
      </div>

      {/* Main About Component */}
      <About about={about} />

      {/* Next Page Link Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#141414] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">NEXT SECTION</span>
            <h3 className="font-display font-bold text-2xl">Explore My Technical Skills</h3>
            <p className="text-stone-400 text-sm mt-1 font-sans">Detailed breakdown of AWS, Terraform, Docker, and Kubernetes capabilities.</p>
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold px-6 py-3.5 rounded-lg transition-colors shrink-0"
          >
            <span>Go To Skills Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
