import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Massive Name Text - Behind Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none"
      >
        <h1 className="flex flex-col items-center justify-center">
          <span className="text-[12vw] md:text-[13vw] font-serif-display font-bold text-[#16253E] tracking-tight uppercase whitespace-nowrap leading-none scale-y-110">
            PORTFOLIO
          </span>
        </h1>
      </motion.div>

      {/* Profile Avatar - Central Overlapping Element */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-0 flex flex-col items-center"
      >
        <div className="w-56 h-72 md:w-[22rem] md:h-[28rem] relative group mb-6">
          {/* Decorative halo/glow behind image to separate it from text */}
          <div className="absolute -inset-8 bg-[#E8EBF5]/60 blur-3xl rounded-full"></div>

          {/* Image Container - Dome Shape */}
          <div className="relative h-full w-full overflow-hidden rounded-t-[14rem] rounded-b-none border-4 border-[#16253E] shadow-2xl bg-[#C1C6D3]/20">
            <img
              src="/profile.png"
              alt="Mevish Fatima"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Badge (like the flower in reference, but functional) - Top Right */}
          <div className="absolute -right-6 top-12 bg-[#053B2D] text-[#FFE6EA] p-2 rounded-full w-20 h-20 flex items-center justify-center text-center text-[0.6rem] font-bold uppercase tracking-wider rotate-12 shadow-lg animate-[spin_12s_linear_infinite]">
            Creative Designer
          </div>

          {/* Floating Badge 2 - Bottom Left */}
          <div className="absolute -left-6 bottom-12 bg-[#16253E] text-[#FFE6EA] p-2 rounded-full w-16 h-16 flex items-center justify-center text-center text-[0.6rem] font-bold uppercase tracking-wider -rotate-12 shadow-lg">
            Dev
          </div>
        </div>

        {/* Name below image */}
        <h2 className="text-2xl md:text-4xl font-sans font-bold text-[#16253E] tracking-[0.2em] uppercase text-center relative z-20 mb-6">
          Mevish Fatima
        </h2>

        {/* CTAs - Centered */}
        <div className="flex items-center justify-center gap-6 relative z-20">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-3 bg-[#16253E] text-[#FFE6EA] rounded-full font-serif-display italic text-lg tracking-wider hover:bg-[#053B2D] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Works
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-3 bg-transparent border-2 border-[#16253E] text-[#16253E] rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#16253E] hover:text-[#E8EBF5] transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </motion.div>
    </section>
  );
}
