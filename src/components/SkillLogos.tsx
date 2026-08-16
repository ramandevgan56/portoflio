import React from 'react';

interface LogoProps {
  className?: string;
}

// 1. AWS Logo
export const AwsLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* AWS Text: 'aws' in crisp white / text-currentColor */}
    <path
      fill="currentColor"
      d="M6.758 10.457c-.612 0-1.042.29-1.042.76 0 .445.31.691.82.691.489 0 .945-.25 1.077-.604v-.847h-.855zm1.88-1.282v3.886H7.711v-.626c-.318.486-.832.738-1.486.738-.972 0-1.6-.598-1.6-1.458 0-1.026.888-1.512 2.308-1.512h.748v-.196c0-.515-.374-.804-1.056-.804-.543 0-1.028.14-1.374.402l-.29-.626c.43-.318 1.084-.486 1.804-.486 1.168 0 1.794.542 1.794 1.542zm3.048-1.028l.972 3.88 1.001-3.88h1.187l1.001 3.88.972-3.88h1.103l-1.57 5.378h-1.103l-1.001-3.66-1.001 3.66h-1.103l-1.57-5.378h1.149zm8.351 4.46c-.515-.29-.832-.598-.832-1.056 0-.515.458-.888 1.178-.888.664 0 1.178.234 1.486.486l.318-.664c-.402-.29-1.028-.542-1.833-.542-1.206 0-2.01.72-2.01 1.636 0 .86.514 1.346 1.402 1.748.748.318 1.001.57 1.001 1.001 0 .515-.458.86-1.234.86-.748 0-1.374-.318-1.748-.626l-.318.664c.43.374 1.178.692 2.094.692 1.29 0 2.094-.664 2.094-1.664 0-.86-.515-1.346-1.6-1.648z"
    />
    {/* AWS Iconic Smile Arrow */}
    <path
      fill="#FF9900"
      d="M18.91 14.887c-2.486 1.832-6.196 2.804-9.336 2.804-4.402 0-8.361-1.636-11.346-4.374-.196-.187-.28-.56-.056-.795.224-.234.56-.234.757-.028 2.766 2.477 6.42 3.963 10.457 3.963 2.664 0 5.664-.748 7.84-2.224.28-.187.644-.084.822.187.178.271.084.645-.196.822zm.748-1.112c.094-.374.551-1.308.738-1.87.094-.187.28-.28.467-.187l.094.094c.374.467 1.019 1.121 1.486 1.589.187.187.187.467.094.654-.551.467-1.486 1.028-2.234 1.393-.28.187-.467-.094-.374-.374.094-.187.28-.748.374-1.019l-.551-.187z"
    />
  </svg>
);

// 2. Linux Logo
export const LinuxLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9.5 2 8 3.5 8 6v4c-1.5 1-2 3-2 5 0 3 2 5 6 5s6-2 6-5c0-2-.5-4-2-5V6c0-2.5-1.5-4-4-4zm-1.5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.5 5h4v1h-4v-1z" />
  </svg>
);

// 3. Python Logo
export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.896 2c-4.73 0-4.42 2.06-4.42 2.06v2.13h4.48v.64H5.77S2 6.39 2 11.16c0 4.77 3.3 4.6 3.3 4.6h1.98v-2.77s-.1-3.3 3.25-3.3h5.62s3.1.05 3.1-3.01V4.57S19.5 2 11.896 2zm-2.4 1.49a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
    <path fill="#FFD43B" d="M12.104 22c4.73 0 4.42-2.06 4.42-2.06v-2.13h-4.48v-.64h6.18s3.77.44 3.77-4.33c0-4.77-3.3-4.6-3.3-4.6h-1.98v2.77s.1 3.3-3.25 3.3h-5.62s-3.1-.05-3.1 3.01v2.11S4.5 22 12.104 22zm2.4-1.49a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
  </svg>
);

// 4. SQL / Database Logo
export const SqlLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

// 5. Networking Logo
export const NetworkingLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <path d="M12 8v4M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
  </svg>
);

// 6. System Design Logo
export const SystemDesignLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// 7. Kubernetes Logo
export const KubernetesLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.2 3.6v7.2L12 19.2l-7.2-3.6V8.4L12 4.8zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

// 8. Docker Logo
export const DockerLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.954 5.43h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.118a.186.186 0 00.186-.186V6.291a.186.186 0 00-.186-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.954 2.715h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.121a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.291a.186.186 0 00-.185-.186H5.121a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.955 2.715h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H2.166a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.291a.186.186 0 00-.185-.186H2.166a.186.186 0 00-.186.186v1.887c0 .102.084.186.186.186zm16.892 2.715h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM.003 14.187c.078 2.766 2.453 5.439 5.869 5.439 4.887 0 9.873-2.148 13.916-5.837 1.341-.122 2.756-.549 3.51-1.636-.576-.231-1.464-.326-2.193-.243-.377-.732-1.127-1.228-2.001-1.429a7.669 7.669 0 00-1.742-.142H.677c-.43 0-.69.417-.674.848z" />
  </svg>
);

// 9. Terraform Logo
export const TerraformLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#844FBA">
    <path d="M1.44 0v7.625l6.598 3.815V3.815zm7.396 4.28v7.625l6.598 3.81v-7.62zm0 8.563v7.625l6.598 3.81V16.66zm7.396-8.563v7.625l6.598-3.815V4.28z" />
  </svg>
);

// 10. Ansible Logo
export const AnsibleLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#EE0000">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.36 17.575h-2.16l-1.32-3.878H8.84l-1.3 3.878H5.405l4.89-13.15h3.405l4.66 13.15zm-3.08-6.192l-1.455-4.32-1.455 4.32h2.91z" />
  </svg>
);

// 11. CI/CD Pipeline Logo
export const CicdLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M18 15v-1a2 2 0 0 0-2-2H8a2 2 0 0 1-2-2V9" />
  </svg>
);

// 12. Git Logo
export const GitLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.07 1.887.437.5.502.642 1.233.435 1.876l2.66 2.66c.643-.207 1.374-.066 1.876.435.698.698.698 1.83 0 2.528-.698.698-1.83.698-2.528 0-.54-.54-.678-1.332-.416-1.996l-2.483-2.484v5.337c.18.093.344.22.48.358.698.698.698 1.83 0 2.528-.698.698-1.83.698-2.528 0-.698-.698-.698-1.83 0-2.528.163-.163.354-.287.556-.37v-5.46c-.202-.083-.393-.207-.556-.37-.53-.53-.67-1.312-.42-1.97L7.697 3.639.453 10.883c-.604.604-.604 1.582 0 2.188l10.48 10.478c.603.604 1.582.604 2.187 0l10.426-10.425c.604-.604.604-1.582 0-2.19z" />
  </svg>
);

// 13. GitHub Logo
export const GithubLogo: React.FC<LogoProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// Helper function to render logo by skill name
export const getSkillLogo = (name: string, className = 'w-4 h-4') => {
  switch (name.toUpperCase()) {
    case 'AWS': return <AwsLogo className={className} />;
    case 'LINUX': return <LinuxLogo className={className} />;
    case 'PYTHON': return <PythonLogo className={className} />;
    case 'SQL': return <SqlLogo className={className} />;
    case 'NETWORKING': return <NetworkingLogo className={className} />;
    case 'SYSTEM DESIGN': return <SystemDesignLogo className={className} />;
    case 'KUBERNETES': return <KubernetesLogo className={className} />;
    case 'DOCKER': return <DockerLogo className={className} />;
    case 'TERRAFORM': return <TerraformLogo className={className} />;
    case 'ANSIBLE': return <AnsibleLogo className={className} />;
    case 'CI/CD PIPELINE':
    case 'CI/CD': return <CicdLogo className={className} />;
    case 'GIT': return <GitLogo className={className} />;
    case 'GITHUB': return <GithubLogo className={className} />;
    default: return <AwsLogo className={className} />;
  }
};
