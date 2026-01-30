import { useState, useEffect } from 'react';
import { Ship, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu after clicking
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled
          ? 'bg-[#16253E]/95 backdrop-blur-md py-4 border-[#324561] shadow-lg'
          : 'bg-[#16253E]/0 py-4 md:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Ship size={20} className={`sm:w-6 sm:h-6 transition-colors ${scrolled ? 'text-[#E8EBF5]' : 'text-[#16253E]'}`} />
            <span className={`font-serif-display font-bold text-lg sm:text-2xl tracking-tight transition-colors ${scrolled ? 'text-[#E8EBF5]' : 'text-[#16253E]'}`}>
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#E8EBF5]' : 'text-[#16253E]'
              }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#16253E] z-40 md:hidden transition-all duration-300 ${mobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ top: scrolled ? '72px' : '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans text-2xl font-medium uppercase tracking-widest text-[#E8EBF5] hover:text-[#FFE6EA] transition-all duration-300 ${mobileMenuOpen ? 'animate-fade-in' : ''
                }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'backwards',
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
