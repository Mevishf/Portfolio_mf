import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';


import LightGridBackground from './components/LightGridBackground';
import ClickSpark from './components/ClickSpark';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen transition-colors duration-700">
      <LightGridBackground />
      <ClickSpark sparkColor="#053B2D" sparkSize={12} sparkRadius={25} sparkCount={10} duration={500}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <footer className="relative z-10 text-center py-10 bg-[#16253E] text-[#E8EBF5] border-t-2 border-[#324561]">
          <p className="text-sm font-bold font-sans tracking-widest uppercase">© 2025 Mevish Fatima. crafted with intent.</p>
        </footer>
      </ClickSpark>
    </div>
  );
}

export default App;
