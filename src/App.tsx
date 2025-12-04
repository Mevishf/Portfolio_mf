import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import FloatingLines from './components/FloatingLines';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 transition-colors duration-700">
      <div className="fixed inset-0 z-0">
        <FloatingLines
          linesGradient={['#38bdf8', '#818cf8', '#c084fc']}
          lineCount={[6]}
          lineDistance={[5]}
          animationSpeed={0.5}
          bendStrength={0.5}
          bendRadius={3.0}
        />
      </div>
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 text-center py-8 text-blue-600 dark:text-blue-400 border-t border-blue-200 dark:border-blue-800">
        <p className="text-sm">© 2025 Salt & Code. Where the sea meets the cloud.</p>
      </footer>
    </div>
  );
}

export default App;
