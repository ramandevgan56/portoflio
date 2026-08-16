import React from 'react';
import type { PersonalInfo } from '../types/portfolio';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] dark:bg-[#09090b] text-stone-500 py-6 border-t border-stone-800 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-stone-400 text-[11px] gap-2">
        <span>Copyright © {currentYear} {personal.name}. All rights reserved.</span>
        <span>Cloud Engineer • AWS, Docker & Kubernetes Infrastructure</span>
      </div>
    </footer>
  );
};
