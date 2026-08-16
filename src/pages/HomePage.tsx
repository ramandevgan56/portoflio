import React from 'react';
import type { PortfolioData } from '../types/portfolio';
import { ArrowRight, FileText } from 'lucide-react';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { ResumeModal } from '../components/ResumeModal';

interface HomePageProps {
  data: PortfolioData;
}

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { personal, skills, projects, certifications, achievements } = data;
  const imageSrc = personal.profileImage || '/images/profile.png';
  const [isResumeModalOpen, setIsResumeModalOpen] = React.useState(false);

  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal, .reveal-left, .reveal-right, .reveal-zoom');
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#09090b] text-white">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="pt-28 sm:pt-36 pb-20 min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Editorial Main Hero Title & Role */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-6 reveal-left">
              <h1 className="font-serif-editorial italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight whitespace-nowrap bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fbbf24] bg-clip-text text-transparent mb-6 pb-1 pr-4">
                {personal.name}.
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-300 uppercase mb-6">
                {personal.subroles.map((sub, index) => (
                  <React.Fragment key={sub}>
                    <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-200 font-semibold">{sub}</span>
                    {index < personal.subroles.length - 1 && <span className="text-stone-600">•</span>}
                  </React.Fragment>
                ))}
              </div>

              <p className="font-serif-editorial italic text-2xl sm:text-4xl text-stone-100 leading-snug mb-6 max-w-3xl">
                "{personal.headline}"
              </p>

              <p className="text-stone-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                {personal.supportingText}
              </p>

              {/* Main CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-3 bg-[#ea580c] hover:bg-orange-600 text-white px-6 py-3.5 rounded font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:shadow-orange-950/50 group cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 px-5 py-3.5 rounded font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-stone-400" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Profile Photo */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-right delay-200">
              <div className="relative w-full max-w-lg lg:max-w-xl group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ea580c]/20 via-[#f97316]/10 to-[#f59e0b]/15 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
                
                <div 
                  className="relative overflow-hidden w-full"
                  style={{
                    maskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 65%, transparent 86%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 65%, transparent 86%)',
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={personal.name}
                    className="w-full h-[480px] sm:h-[580px] lg:h-[650px] xl:h-[700px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div 
                    className="absolute inset-0 backdrop-blur-[8px] pointer-events-none"
                    style={{
                      maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 80%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 80%)',
                    }}
                  />
                  
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                  <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SKILLS SECTION */}
      <section id="skills" className="pt-16 sm:pt-24 border-t border-stone-900/80">
        <Skills categories={skills} />
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="pt-16 sm:pt-24 border-t border-stone-900/80">
        <Projects projects={projects} />
      </section>

      {/* 4. CERTIFICATIONS & ACHIEVEMENTS SECTION */}
      <section id="certifications" className="pt-16 sm:pt-24 border-t border-stone-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Certifications certifications={certifications} achievements={achievements} />
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="pt-16 sm:pt-24 border-t border-stone-900/80">
        <Contact personal={personal} />
      </section>

      {/* Resume Modal Lightbox */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeImage="/images/resume.png"
        pdfUrl="/resume.pdf"
      />

    </div>
  );
};
