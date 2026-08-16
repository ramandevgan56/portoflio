import React from 'react';
import type { GitHubRepo, PersonalInfo } from '../types/portfolio';
import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface GitHubSectionProps {
  repos: GitHubRepo[];
  personal: PersonalInfo;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ repos, personal }) => {
  return (
    <section className="py-20 border-b border-stone-300 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Sky / Azure Theme */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-sky-800 bg-sky-100/90 border border-sky-300 px-3 py-1 rounded uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            07 // OPEN SOURCE & REPOS
          </span>
          <div className="h-px bg-sky-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141414] tracking-tight">
              Code, infrastructure & <span className="text-sky-600 italic font-serif-editorial">experiments.</span>
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mt-2 font-sans">
              Featured public GitHub repositories containing modular Terraform HCL, Kubernetes manifests, and Python cloud automation utilities.
            </p>
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white px-5 py-3 rounded font-mono text-xs uppercase font-bold transition-colors shadow shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="bg-white border border-stone-300 hover:border-sky-400 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-[#141414]">
                    <Code2 className="w-4 h-4 text-sky-600" />
                    <h3 className="font-mono font-bold text-base group-hover:text-sky-600 transition-colors">
                      {repo.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-stone-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-stone-700 text-sm font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {repo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-sky-50 border border-sky-200 text-sky-900 font-mono text-xs px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="font-mono text-xs text-stone-500 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  {repo.language}
                </span>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-stone-900 hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
