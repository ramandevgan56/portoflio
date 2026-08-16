import React from 'react';
import type { PersonalInfo } from '../types/portfolio';
import { Contact } from '../components/Contact';

interface ContactPageProps {
  personal: PersonalInfo;
}

export const ContactPage: React.FC<ContactPageProps> = ({ personal }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Main Contact Form & Direct Channels */}
      <Contact personal={personal} />
    </div>
  );
};
