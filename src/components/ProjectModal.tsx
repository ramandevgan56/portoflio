import React from 'react';
import type { Project } from '../types/portfolio';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf8f5] border border-stone-300 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#faf8f5]/95 backdrop-blur border-b border-stone-300 p-6 flex items-center justify-between z-10">
          <div>
            <span className="font-mono text-xs text-[#ea580c] uppercase font-bold tracking-wider block">
              {project.badge}
            </span>
            <h3 className="font-display font-bold text-2xl text-[#141414] mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Objective & Description */}
          <div className="space-y-4">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase text-stone-500 mb-1">Problem & Objective</h4>
              <p className="text-stone-800 text-sm md:text-base leading-relaxed bg-white p-4 rounded border border-stone-200 font-sans">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase text-stone-500 mb-1">What I Built</h4>
              <p className="text-stone-800 text-sm md:text-base leading-relaxed font-sans">
                {project.whatIBuilt}
              </p>
            </div>
          </div>

          {/* Architecture Topology Breakdown */}
          <div className="bg-[#141414] text-white p-6 rounded-xl border border-stone-800">
            <h4 className="font-mono text-xs text-orange-400 font-bold uppercase mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-500" />
              ARCHITECTURE TOPOLOGY & NODES
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architectureNodes.map((node) => (
                <div key={node.id} className="bg-stone-900 p-4 rounded border border-stone-800 font-mono text-xs">
                  <div className="flex items-center justify-between text-orange-400 font-bold mb-1">
                    <span>{node.label}</span>
                    <span className="text-[10px] text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded font-normal">{node.type}</span>
                  </div>
                  <p className="text-stone-300 font-sans text-xs mt-1">{node.description}</p>
                  {node.subDetails && (
                    <div className="mt-2 text-[11px] text-stone-400 border-t border-stone-800/80 pt-1.5">
                      ↳ {node.subDetails}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-stone-500 mb-3">Key Technical Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-stone-700 bg-white p-3 rounded border border-stone-200 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges & Actions */}
          <div className="pt-4 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-stone-200 text-stone-800 font-mono text-xs font-semibold px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#141414] hover:bg-[#ea580c] text-white px-4 py-2.5 rounded font-mono text-xs uppercase font-bold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 px-4 py-2.5 rounded font-mono text-xs uppercase font-bold transition-colors"
                >
                  <span>Live Spec</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
