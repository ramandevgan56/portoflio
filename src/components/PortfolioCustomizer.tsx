import React, { useState } from 'react';
import type { PortfolioData } from '../types/portfolio';
import { X, Copy, Check, Settings, Sparkles } from 'lucide-react';

interface PortfolioCustomizerProps {
  data: PortfolioData;
  onUpdate: (updatedData: PortfolioData) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioCustomizer: React.FC<PortfolioCustomizerProps> = ({
  data,
  onUpdate,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState(data.personal);
  const [university, setUniversity] = useState(data.education.institution);
  const [gpa, setGpa] = useState(data.education.gpa || '');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof typeof formData, value: string) => {
    const updatedPersonal = { ...formData, [field]: value };
    setFormData(updatedPersonal);
    
    onUpdate({
      ...data,
      personal: updatedPersonal,
      education: {
        ...data.education,
        institution: university,
        gpa: gpa,
      }
    });
  };

  const handleUniversityChange = (val: string) => {
    setUniversity(val);
    onUpdate({
      ...data,
      personal: formData,
      education: {
        ...data.education,
        institution: val,
        gpa: gpa,
      }
    });
  };

  const handleGpaChange = (val: string) => {
    setGpa(val);
    onUpdate({
      ...data,
      personal: formData,
      education: {
        ...data.education,
        institution: university,
        gpa: val,
      }
    });
  };

  const generateTsCode = () => {
    return `// Updated Portfolio Configuration
export const customPortfolioData = ${JSON.stringify(
      {
        ...data,
        personal: formData,
        education: {
          ...data.education,
          institution: university,
          gpa: gpa
        }
      },
      null,
      2
    )};`;
  };

  const handleCopyTsCode = () => {
    navigator.clipboard.writeText(generateTsCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf8f5] border border-stone-300 rounded-2xl max-w-lg w-full h-[90vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-300 bg-[#141414] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-orange-400" />
            <h3 className="font-display font-bold text-lg text-stone-100">
              Live Content Customizer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white bg-stone-900 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 font-mono text-xs">
          
          <div className="bg-orange-50 text-orange-950 border border-orange-200 p-3 rounded text-[11px] leading-relaxed">
            <span className="font-bold flex items-center gap-1 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              Easy Live Preview Mode
            </span>
            Type your real details below to immediately update all placeholders on the portfolio page.
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="e.g. Alex Rivera"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">Primary Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="Cloud Engineer"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="e.g. San Francisco, CA / Seattle, WA"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="alex.rivera@example.com"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">GitHub Profile URL</label>
            <input
              type="text"
              value={formData.githubUrl}
              onChange={(e) => handleChange('githubUrl', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="https://github.com/yourusername"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">LinkedIn Profile URL</label>
            <input
              type="text"
              value={formData.linkedinUrl}
              onChange={(e) => handleChange('linkedinUrl', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="https://linkedin.com/in/yourusername"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">Resume Link / URL</label>
            <input
              type="text"
              value={formData.resumeUrl}
              onChange={(e) => handleChange('resumeUrl', e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="https://example.com/resume.pdf"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">University Name</label>
            <input
              type="text"
              value={university}
              onChange={(e) => handleUniversityChange(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="State University"
            />
          </div>

          <div>
            <label className="block text-stone-600 font-bold mb-1 uppercase">CGPA / GPA</label>
            <input
              type="text"
              value={gpa}
              onChange={(e) => handleGpaChange(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded p-2 text-stone-900 font-sans text-sm focus:border-orange-500 focus:outline-none"
              placeholder="CGPA: 3.8 / 4.0"
            />
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-stone-300 bg-white flex items-center justify-between gap-3">
          <button
            onClick={handleCopyTsCode}
            className="flex-1 py-3 px-4 bg-[#141414] hover:bg-orange-600 text-white font-mono text-xs uppercase font-bold rounded flex items-center justify-center gap-2 transition-colors"
          >
            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedCode ? 'Copied TS Code!' : 'Copy Config TS'}</span>
          </button>
          
          <button
            onClick={onClose}
            className="py-3 px-5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-mono text-xs uppercase font-bold rounded"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
