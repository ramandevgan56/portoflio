import React from 'react';
import type { EducationInfo } from '../types/portfolio';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

interface EducationProps {
  education: EducationInfo;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 border-b border-stone-300 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Teal Theme */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-teal-800 bg-teal-100/90 border border-teal-300 px-3 py-1 rounded uppercase tracking-widest font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            05 // EDUCATION
          </span>
          <div className="h-px bg-teal-200 flex-1" />
        </div>

        <div className="max-w-4xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#141414] tracking-tight mb-8">
            Academic <span className="text-teal-700 italic font-serif-editorial">Background</span>
          </h2>

          <div className="bg-white border border-teal-200 rounded-2xl p-6 sm:p-10 shadow-xs hover:shadow-md transition-all duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-200">
              
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-teal-950 text-white rounded-xl border border-teal-800">
                  <GraduationCap className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#141414]">
                    {education.degree}
                  </h3>
                  <p className="text-stone-700 font-sans font-medium text-base mt-1">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end font-mono text-xs text-stone-600 gap-1">
                <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded text-teal-900 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>{education.period}</span>
                </div>
                {education.gpa && (
                  <span className="font-bold text-teal-800 bg-teal-100/80 px-2.5 py-1 rounded mt-1 border border-teal-300">
                    {education.gpa}
                  </span>
                )}
              </div>

            </div>

            {/* Relevant Coursework */}
            <div className="pt-6">
              <h4 className="font-mono text-xs font-bold uppercase text-teal-800 mb-3 tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                RELEVANT COURSEWORK
              </h4>

              <div className="flex flex-wrap gap-2">
                {education.relevantCoursework.map((course) => (
                  <span
                    key={course}
                    className="bg-teal-50/60 border border-teal-200 text-teal-900 font-mono text-xs font-semibold px-3 py-1.5 rounded hover:bg-teal-100 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            {education.achievements && education.achievements.length > 0 && (
              <div className="mt-6 pt-6 border-t border-stone-200 space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase text-stone-500 mb-2">
                  Academic Focus Highlights
                </h4>
                {education.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-sans text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
