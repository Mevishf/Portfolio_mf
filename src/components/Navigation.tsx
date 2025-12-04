import { Sun, Moon, Anchor } from 'lucide-react';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-blue-950/80 backdrop-blur-md border-b border-blue-200 dark:border-blue-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
          <Anchor className="w-6 h-6" />
          <span className="font-semibold text-lg tracking-wide">Salt & Code</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-blue-700 dark:text-blue-300 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            Contact
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-blue-700" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>
    </nav>
  );
}
