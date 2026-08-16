import React from 'react';
import type { SkillCategory } from '../types/portfolio';
import { getSkillLogo } from './SkillLogos';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  // Flatten all 13 skills
  const allSkills = categories.flatMap((cat) => cat.items);

  // Brand accent color mapping for interactive hover glow
  const getBrandAccent = (name: string) => {
    switch (name.toUpperCase()) {
      case 'AWS':
        return {
          glow: 'group-hover:border-amber-500/60 group-hover:shadow-amber-950/40',
          bgGlow: 'from-amber-500/15 to-transparent',
        };
      case 'KUBERNETES':
        return {
          glow: 'group-hover:border-blue-500/60 group-hover:shadow-blue-950/40',
          bgGlow: 'from-blue-500/15 to-transparent',
        };
      case 'DOCKER':
        return {
          glow: 'group-hover:border-sky-500/60 group-hover:shadow-sky-950/40',
          bgGlow: 'from-sky-500/15 to-transparent',
        };
      case 'TERRAFORM':
        return {
          glow: 'group-hover:border-purple-500/60 group-hover:shadow-purple-950/40',
          bgGlow: 'from-purple-500/15 to-transparent',
        };
      case 'ANSIBLE':
        return {
          glow: 'group-hover:border-rose-500/60 group-hover:shadow-rose-950/40',
          bgGlow: 'from-rose-500/15 to-transparent',
        };
      case 'LINUX':
        return {
          glow: 'group-hover:border-amber-500/60 group-hover:shadow-amber-950/40',
          bgGlow: 'from-amber-500/15 to-transparent',
        };
      case 'NETWORKING':
        return {
          glow: 'group-hover:border-emerald-500/60 group-hover:shadow-emerald-950/40',
          bgGlow: 'from-emerald-500/15 to-transparent',
        };
      case 'SYSTEM DESIGN':
        return {
          glow: 'group-hover:border-indigo-500/60 group-hover:shadow-indigo-950/40',
          bgGlow: 'from-indigo-500/15 to-transparent',
        };
      case 'CI/CD PIPELINE':
      case 'CI/CD':
        return {
          glow: 'group-hover:border-pink-500/60 group-hover:shadow-pink-950/40',
          bgGlow: 'from-pink-500/15 to-transparent',
        };
      case 'PYTHON':
        return {
          glow: 'group-hover:border-blue-500/60 group-hover:shadow-blue-950/40',
          bgGlow: 'from-yellow-500/15 to-transparent',
        };
      case 'SQL':
        return {
          glow: 'group-hover:border-cyan-500/60 group-hover:shadow-cyan-950/40',
          bgGlow: 'from-cyan-500/15 to-transparent',
        };
      case 'GIT':
        return {
          glow: 'group-hover:border-orange-500/60 group-hover:shadow-orange-950/40',
          bgGlow: 'from-orange-500/15 to-transparent',
        };
      case 'GITHUB':
        return {
          glow: 'group-hover:border-stone-400/60 group-hover:shadow-stone-900/40',
          bgGlow: 'from-stone-500/15 to-transparent',
        };
      default:
        return {
          glow: 'group-hover:border-indigo-500/60 group-hover:shadow-indigo-950/40',
          bgGlow: 'from-indigo-500/15 to-transparent',
        };
    }
  };

  return (
    <section id="skills" className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 scroll-reveal">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              Skills <span className="text-indigo-400 font-serif-editorial italic">Overview</span>
            </h2>
            <p className="text-stone-400 text-base max-w-2xl mt-2 font-sans">
              Production-proven technologies, cloud platforms, and engineering toolings.
            </p>
          </div>

          <div className="font-mono text-xs text-stone-500 bg-stone-900/80 px-3.5 py-2 rounded-full border border-stone-800 self-start md:self-auto">
            ⚡ 13 PRODUCTION SKILLS
          </div>
        </div>

        {/* Minimal Logo + Skill Name Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
          {allSkills.map((skill, index) => {
            const accent = getBrandAccent(skill.name);
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-350', 'delay-400'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={skill.name}
                className={`bg-[#121215] border border-stone-800/90 ${accent.glow} rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden flex flex-col items-center justify-center text-center scroll-reveal ${delayClass}`}
              >
                {/* Background Subtle Brand Color Radial Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${accent.bgGlow} pointer-events-none rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                {/* BIG BRAND LOGO ICON CONTAINER */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-stone-900/90 border border-stone-800 flex items-center justify-center p-3.5 shadow-md group-hover:scale-110 group-hover:border-stone-700 transition-all mb-4">
                  {getSkillLogo(skill.name, 'w-10 h-10 sm:w-12 sm:h-12')}
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
