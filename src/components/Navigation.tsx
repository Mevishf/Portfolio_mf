import { useState, useEffect } from 'react';
import { Ship } from 'lucide-react';

interface NavigationProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled
        ? 'bg-[#16253E]/95 backdrop-blur-md py-4 border-[#324561] shadow-lg'
        : 'bg-[#16253E]/0 py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Ship size={24} className={`transition-colors ${scrolled ? 'text-[#E8EBF5]' : 'text-[#16253E]'}`} />
          <span className={`font-serif-display font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-[#E8EBF5]' : 'text-[#16253E]'}`}>
            Salt and Code
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans text-sm font-medium uppercase tracking-widest transition-colors relative group ${scrolled ? 'text-[#E8EBF5]/80 hover:text-[#E8EBF5]' : 'text-[#16253E]/80 hover:text-[#16253E]'
                }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#053B2D] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder - keeping it simple for now as per desktop request */}
        <div className="md:hidden text-[#E8EBF5]">
          {/* Add mobile menu toggle here if needed later */}
        </div>
      </div>
    </nav>
  );
}
