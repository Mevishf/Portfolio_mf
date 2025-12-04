import { Cloud, Waves, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div
        className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Waves className="w-8 h-8 text-cyan-500 animate-pulse" />
          <Sparkles className="w-6 h-6 text-sky-400" />
          <Cloud className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight">
          Mevish Fatima
        </h1>

        <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 mb-4 font-light">
          Creative Developer & Designer
        </p>

        <p className="text-lg text-blue-900 dark:text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
          Computer Science student passionate about AI, blockchain, and creating
          beautiful digital experiences. From NLP chatbots to smart contracts, I build
          technology that solves real problems with elegance and impact.
        </p>

        <div className="mt-12 flex gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-950/50 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-blue-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">8.7</div>
            <div className="text-sm">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</div>
            <div className="text-sm">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">Published</div>
            <div className="text-sm">Research</div>
          </div>
        </div>
      </div>
    </section>
  );
}
