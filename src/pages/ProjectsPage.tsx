import React from 'react';
import type { Project } from '../types/portfolio';
import { Projects } from '../components/Projects';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-rose-800 bg-rose-100 border border-rose-300 px-3 py-1 rounded font-bold uppercase tracking-widest flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-rose-600" />
            PAGE 03 // FEATURED PROJECTS
          </span>
          <div className="h-px bg-rose-200 flex-1" />
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#141414] tracking-tight">
          Hands-On Cloud <span className="text-rose-600 italic font-serif-editorial">Projects</span>
        </h1>
        <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mt-3 font-sans">
          Production-style infrastructure, automated deployment pipelines, and SRE incident remediation.
        </p>
      </div>

      {/* Main Projects Component */}
      <Projects projects={projects} />

      {/* Next Page Link Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#141414] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider block mb-1">NEXT SECTION</span>
            <h3 className="font-display font-bold text-2xl">Check Certifications & Credentials</h3>
            <p className="text-stone-400 text-sm mt-1 font-sans">Verified AWS certifications and target CKA / HashiCorp preparations.</p>
          </div>
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs uppercase font-bold px-6 py-3.5 rounded-lg transition-colors shrink-0"
          >
            <span>Go To Certifications Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
