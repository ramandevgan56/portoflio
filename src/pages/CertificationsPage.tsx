import React from 'react';
import type { Certification, Achievement } from '../types/portfolio';
import { Certifications } from '../components/Certifications';

interface CertificationsPageProps {
  certifications: Certification[];
  achievements?: Achievement[];
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({
  certifications,
  achievements = [],
}) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Certifications certifications={certifications} achievements={achievements} />
      </div>
    </div>
  );
};
