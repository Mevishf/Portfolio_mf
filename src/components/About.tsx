import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#16253E] mb-4 sm:mb-6 font-serif-display italic">
              About Me
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#16253E] mx-auto"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

          {/* Text Content Side */}
          <div className="flex-1 space-y-8 text-[#16253E] w-full order-1 lg:order-1">
            {/* Description - Mobile version (without quote) */}
            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none lg:hidden">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-display text-[#16253E] mb-3 sm:mb-4">Creative Developer & Designer</h3>
                <p className="leading-relaxed text-lg sm:text-xl text-[#807178] font-sans">
                  I focus on solving real-world problems through software. My work emphasizes clarity, usability, and purposeful design.
                </p>
              </div>
            </FadeIn>

            {/* Description - Desktop version (with quote) */}
            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none hidden lg:block">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-display text-[#16253E] mb-3 sm:mb-4">Creative Developer & Designer</h3>
                <p className="leading-relaxed text-lg sm:text-xl text-[#807178] font-sans">
                  I focus on solving real-world problems through software. My work emphasizes clarity, usability, and purposeful design.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif-display italic font-bold text-[#053B2D] mt-6 sm:mt-8">
                  "Engineered for performance, designed for people."
                </p>
              </div>
            </FadeIn>

            {/* Mobile: Photo and Education Side by Side */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              {/* Image - Mobile Version (smaller, side by side) */}
              <div className="w-full">
                <FadeIn delay={0.15}>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-[#16253E] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[5rem] border-3 border-[#16253E] bg-white">
                      <img
                        src="/mevish-profile.jpg"
                        alt="Mevish Fatima"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>

                    {/* Floating badge - smaller on mobile */}
                    <div className="absolute top-3 -right-2 bg-[#053B2D] text-[#FFFFFF] p-2 rounded-full shadow-lg z-20 rotate-12">
                      <div className="flex items-center justify-center w-10 h-10">
                        <p className="text-center font-serif-display italic leading-none font-bold text-[0.45rem]">Open<br />to<br />Work</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Education Card - Mobile Version (compact) */}
              <div className="w-full">
                <FadeIn delay={0.2}>
                  <div className="bg-[#FFE6EA] p-4 rounded-tr-[1.5rem] rounded-bl-[1.5rem] border-2 border-[#16253E] shadow-[4px_4px_0px_rgba(22,37,62,1)] transition-colors h-full">
                    <h3 className="text-base mb-2 text-[#053B2D] font-serif-display italic font-bold">
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex flex-col mb-1">
                          <p className="text-[#16253E] text-[0.65rem] font-bold tracking-tight leading-tight break-words">Sri Venkateshwara College of Engineering, Bengaluru</p>
                          <span className="inline-block mt-1 text-[0.6rem] bg-[#053B2D] text-[#E8EBF5] px-2 py-0.5 font-bold rounded-full w-fit">4th Year</span>
                        </div>
                        <p className="text-[0.65rem] text-[#16253E] font-medium">B.E. in Computer Science</p>
                        <p className="text-[0.65rem] text-[#16253E] opacity-80 font-mono">CGPA: 8.7</p>
                      </div>

                      <div className="pt-2 border-t border-[#16253E]/20">
                        <p className="text-[#16253E] text-[0.65rem] font-bold tracking-tight">Atomic Energy Central School, Kaiga</p>
                        <p className="text-[0.65rem] text-[#16253E] font-medium">Schooling</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Quote - Mobile Only (appears below photo/education) */}
            <FadeIn delay={0.25}>
              <div className="lg:hidden">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif-display italic font-bold text-[#053B2D] text-center">
                  "Engineered for performance, designed for people."
                </p>
              </div>
            </FadeIn>

            {/* Desktop: Education Card (full size) */}
            <div className="hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="bg-[#FFE6EA] p-6 sm:p-8 rounded-tr-[2rem] sm:rounded-tr-[3rem] rounded-bl-[2rem] sm:rounded-bl-[3rem] border-2 border-[#16253E] shadow-[6px_6px_0px_rgba(22,37,62,1)] sm:shadow-[8px_8px_0px_rgba(22,37,62,1)] transition-colors">
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-[#053B2D] flex items-center gap-3 font-serif-display italic font-bold">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <p className="text-[#16253E] text-base sm:text-xl font-bold tracking-tight leading-snug">Sri Venkateshwara College of Engineering, Bengaluru</p>
                        <span className="inline-block mt-2 md:mt-0 text-xs sm:text-sm bg-[#053B2D] text-[#E8EBF5] px-3 py-1 font-bold rounded-full">4th Year</span>
                      </div>
                      <p className="text-base sm:text-lg text-[#16253E] font-medium">B.E. in Computer Science and Engineering</p>
                      <p className="text-base sm:text-lg text-[#16253E] mt-1 opacity-80 font-mono">CGPA: 8.7</p>
                    </div>

                    <div className="pt-4 border-t border-[#16253E]/20">
                      <p className="text-[#16253E] text-base sm:text-xl font-bold tracking-tight">Atomic Energy Central School, Kaiga</p>
                      <p className="text-base sm:text-lg text-[#16253E] font-medium">Schooling</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>

          {/* Image Side - Shows on Desktop Only */}
          <div className="hidden lg:block flex-1 w-full max-w-xs mx-auto lg:mx-0 order-3 lg:order-2">
            <FadeIn delay={0.2} direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#16253E] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[10rem] border-4 border-[#16253E] bg-white">
                  <img
                    src="/mevish-profile.jpg"
                    alt="Mevish Fatima"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute top-10 -right-4 bg-[#053B2D] text-[#FFFFFF] p-4 rounded-full shadow-lg z-20 rotate-12">
                  <div className="flex items-center justify-center w-20 h-20">
                    <p className="text-center font-serif-display italic leading-none font-bold">Open<br />to<br />Work</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div >
    </section >
  );
}
