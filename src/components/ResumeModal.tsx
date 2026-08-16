import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeImage?: string;
  pdfUrl?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumeImage = '/images/resume.png',
  pdfUrl = '/resume.pdf',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0e0e11] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800 bg-[#141418] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Raman Devgan — Resume
              </h3>
              <p className="text-stone-400 text-xs font-mono">Official Cloud Engineering & DevOps Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Raman_Devgan_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Image View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#09090b] flex items-center justify-center">
          <div className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-800">
            <img
              src={resumeImage}
              alt="Raman Devgan Official Resume"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="px-5 py-3 border-t border-stone-800 bg-[#141418] shrink-0 flex items-center justify-between font-mono text-xs text-stone-400">
          <span>Page 1 of 1</span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline flex items-center gap-1 font-semibold"
          >
            Open Original PDF in New Tab &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
