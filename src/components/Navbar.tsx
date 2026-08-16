import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { PersonalInfo } from '../types/portfolio';
import { 
  Home, 
  Cpu, 
  Layers, 
  Award, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

interface NavbarProps {
  personal?: PersonalInfo;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Handle navigation tab clicks
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: <Home className="w-3.5 h-3.5" /> },
    { label: 'Skills', id: 'skills', icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: 'Projects', id: 'projects', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Certifications', id: 'certifications', icon: <Award className="w-3.5 h-3.5" /> },
    { label: 'Contact', id: 'contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Centered Minimal Floating Pill Capsule Bar */}
      <div className="rounded-full px-3 py-1.5 flex items-center justify-center gap-1.5 border shadow-2xl backdrop-blur-xl transition-all duration-300 bg-stone-950/85 border-stone-800 text-stone-100 shadow-black/80">

        {/* Desktop Navigation Items Pill Group */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-950/90 border border-blue-500/50 text-blue-300 shadow-xs font-bold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden text-stone-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl p-4 border shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 bg-stone-950/95 border-stone-800 text-stone-100">
          <nav className="flex flex-col gap-1.5 font-mono text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2.5 rounded-lg flex items-center gap-2 transition-colors w-full text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#ea580c] text-white font-bold'
                      : 'hover:bg-stone-900 text-stone-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
