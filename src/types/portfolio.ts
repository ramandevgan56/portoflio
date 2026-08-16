export interface PersonalInfo {
  name: string;
  role: string;
  subroles: string[];
  headline: string;
  supportingText: string;
  location: string;
  availability: string;
  availabilityBadge: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl?: string;
  twitterUrl?: string;
  resumeUrl: string;
  profileImage?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext: string;
}

export interface AboutInfo {
  heading: string;
  bioParagraphs: string[];
  currentlyFocused: string[];
  metrics: MetricItem[];
}

export interface SkillItem {
  name: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ArchNode {
  id: string;
  label: string;
  type: string;
  description: string;
  subDetails?: string;
  x?: number;
  y?: number;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  whatIBuilt: string;
  technologies: string[];
  highlights: string[];
  architectureNodes: ArchNode[];
  githubUrl: string;
  demoUrl?: string;
  diagramType: 'aws' | 'kubernetes' | 'cicd' | 'monitoring' | 'ecs' | 'docker';
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verifyUrl?: string;
  status: 'earned' | 'preparing';
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  relevantCoursework: string[];
  achievements?: string[];
}

export interface JourneyItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  techStack: string[];
  url: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  metric?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  achievements?: Achievement[];
  education: EducationInfo;
  journey: JourneyItem[];
  repos: GitHubRepo[];
}
