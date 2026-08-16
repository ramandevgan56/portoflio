import React, { useState } from 'react';
import type { Project } from '../types/portfolio';
import { initialPortfolioData } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  projects?: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectList = (projects && projects.length > 0) ? projects : initialPortfolioData.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Crimson / Rose Theme */}
        <div className="flex items-center gap-3 mb-6 scroll-reveal">
          <span className="font-mono text-xs text-rose-400 bg-rose-950/80 border border-rose-800/80 px-3 py-1 rounded uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            03 // FEATURED PROJECTS
          </span>
          <div className="h-px bg-stone-800 flex-1" />
        </div>

        <div className="scroll-reveal">
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            Things I've <span className="text-rose-500 italic font-serif-editorial">built.</span>
          </h2>
          <p className="text-stone-400 text-lg sm:text-xl max-w-3xl mt-3 font-sans">
            Hands-on projects focused on cloud infrastructure, containerization, microservices, deployment and reliability.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className={`grid grid-cols-1 ${projectList.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8 mt-12`}>
          {projectList.map((project, index) => (
            <div
              key={project.id || index}
              className={`bg-[#121215] border border-stone-800/90 hover:border-rose-500/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden scroll-reveal delay-${(index % 4 + 1) * 100}`}
            >
              <div>
                {/* Badge & GitHub Link */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs text-rose-400 bg-rose-950/60 border border-rose-900/60 px-3 py-1 rounded font-bold uppercase tracking-wider">
                    {project.badge}
                  </span>
                  
                  {project.githubUrl && project.githubUrl !== '[GITHUB URL]' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-white transition-colors p-1.5 hover:bg-stone-800 rounded-lg"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-rose-400 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6 bg-stone-950/60 p-4 rounded-xl border border-stone-900">
                  <span className="font-mono text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-2">
                    Key Highlights
                  </span>
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-stone-900 text-stone-300 border border-stone-800 font-mono text-xs font-semibold px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-rose-950/80 text-rose-300 hover:text-rose-200 border border-stone-800 hover:border-rose-700/60 px-4 py-2.5 rounded-lg font-mono text-xs font-bold transition-all group-hover:shadow-md cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-rose-400" />
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && project.githubUrl !== '[GITHUB URL]' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-400 hover:text-white font-mono text-xs font-semibold transition-colors"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Architecture Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

