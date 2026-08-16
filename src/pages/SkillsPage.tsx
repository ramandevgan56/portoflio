import React from 'react';
import type { SkillCategory } from '../types/portfolio';
import { Skills } from '../components/Skills';

interface SkillsPageProps {
  categories: SkillCategory[];
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ categories }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-12">
      {/* Main Skills Component */}
      <Skills categories={categories} />
    </div>
  );
};
