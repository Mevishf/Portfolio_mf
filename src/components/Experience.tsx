import { Ship, ExternalLink, Award, Users, Mic } from 'lucide-react';
import FadeIn from './FadeIn';

const ShipBullet = ({ color }: { color?: string }) => (
  <Ship
    className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:rotate-12"
    style={{ color: color || '#16253E', fill: color || '#16253E' }}
  />
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif-display font-medium text-[#16253E] mb-6 tracking-tight">
              Journey & <span className="text-[#053B2D] italic">Milestones</span>
            </h2>
            <div className="flex justify-center gap-2 opacity-50">
              <div className="w-2 h-2 rounded-full bg-[#16253E]"></div>
              <div className="w-2 h-2 rounded-full bg-[#053B2D]"></div>
              <div className="w-2 h-2 rounded-full bg-[#16253E]"></div>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {/* Row 1: Experience | Hackathons | Publications */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Experience Card - Pink Theme */}
            <FadeIn delay={0.2} direction="up" className="h-full">
              <div className="group h-full bg-[#FFE6EA] border-2 border-[#16253E] rounded-[2rem] p-8 hover:shadow-[8px_8px_0px_#16253E] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-serif-display font-bold text-[#16253E]">Experience</h3>
                  <div className="p-2 bg-[#16253E]/5 rounded-full text-[#16253E]"><Users size={24} /></div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <ShipBullet color="#16253E" />
                    <div>
                      <p className="font-mono text-xs font-bold tracking-widest text-[#16253E]/60 mb-1 rounded-full bg-[#16253E]/5 w-fit px-2 py-0.5">
                        FEB 2025 — MAR 2025
                      </p>
                      <h4 className="text-xl font-bold text-[#16253E] group-hover:text-[#053B2D] transition-colors leading-tight">
                        UI/UX Virtual Internship
                      </h4>
                      <p className="text-[#053B2D] font-bold text-sm mt-1">System Tron</p>
                      <ul className="mt-4 space-y-2 text-sm text-[#16253E]/80 font-medium leading-relaxed">
                        <li>• Designed interactive Figma prototypes, increasing user engagement.</li>
                        <li>• Projects: Coffee shop website, Clothing e-commerce platform, Freelancer portfolio site.</li>
                        <li>• <span className="text-[#053B2D] font-bold">Stack:</span> Figma, Adobe XD, HTML/CSS, JavaScript.</li>
                      </ul>
                      <a href="https://drive.google.com/file/d/1nivNYUKYIOfZJjBoRYZ1FUkqVDS6hX-P/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 bg-[#053B2D] text-white text-xs font-bold rounded-lg hover:bg-[#16253E] transition-colors">
                        <ExternalLink size={12} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Hackathons Card - Dark Blue Theme */}
            <FadeIn delay={0.3} direction="up" className="h-full">
              <div className="group h-full bg-[#16253E] border-2 border-[#E8EBF5]/20 rounded-[2rem] p-8 hover:shadow-[8px_8px_0px_#E8EBF5] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-serif-display font-bold text-[#FFE6EA]">Hackathons</h3>
                  <div className="p-2 bg-[#FFE6EA]/10 rounded-full text-[#FFE6EA]"><Award size={24} /></div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <p className="font-mono text-xs font-bold tracking-widest text-[#FFE6EA]/60 mb-1 rounded-full bg-[#FFE6EA]/10 w-fit px-2 py-0.5">
                        MARCH 2025
                      </p>
                      <h4 className="text-lg font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors">
                        Career Prediction ML
                      </h4>
                      <p className="text-[#FFE6EA] text-xs font-bold mt-0.5">HackMarch — KLE Society</p>
                      <p className="mt-2 text-sm text-[#E8EBF5]/80 leading-relaxed font-medium">
                        Built classification model (56% accuracy) for IT roles. Deployed in 8 hrs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <p className="font-mono text-xs font-bold tracking-widest text-[#FFE6EA]/60 mb-1 rounded-full bg-[#FFE6EA]/10 w-fit px-2 py-0.5">
                        2025
                      </p>
                      <h4 className="text-lg font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors">
                        Eco-Cycle Web App
                      </h4>
                      <p className="text-[#FFE6EA] text-xs font-bold mt-0.5">BrinHack — National Level</p>
                      <p className="mt-2 text-sm text-[#E8EBF5]/80 leading-relaxed font-medium">
                        Sustainability platform with recycle tracking & AI tips. G-Maps integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Publications Card - Green Theme */}
            <FadeIn delay={0.4} direction="up" className="h-full">
              <div className="group h-full bg-[#053B2D] border-2 border-[#E8EBF5]/20 rounded-[2rem] p-8 hover:shadow-[8px_8px_0px_#E8EBF5] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-serif-display font-bold text-[#FFE6EA]">Publications</h3>
                  <div className="p-2 bg-[#FFE6EA]/10 rounded-full text-[#FFE6EA]"><Mic size={24} /></div>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <p className="font-mono text-xs font-bold tracking-widest text-[#FFE6EA]/60 mb-1 rounded-full bg-[#FFE6EA]/10 w-fit px-2 py-0.5">
                        IJRAR
                      </p>
                      <h4 className="text-lg font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        Chatbot Integration In Ticketing Systems: Transforming Museum Ticket Management Through NLP
                      </h4>
                      <p className="text-[10px] text-[#E8EBF5]/60 uppercase tracking-wider mt-1 font-bold leading-relaxed">
                        Authors: K N Navya, Mevish Fatima, Lubna A
                      </p>
                      <a href="https://ijrar.org/viewfull.php?pid=IJRAR24D2485" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 bg-[#FFE6EA] text-[#053B2D] text-xs font-bold rounded-lg hover:bg-[#E8EBF5] transition-colors">
                        <ExternalLink size={12} />
                        Read Paper
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <p className="font-mono text-xs font-bold tracking-widest text-[#FFE6EA]/60 mb-1 rounded-full bg-[#FFE6EA]/10 w-fit px-2 py-0.5">
                        SPRINGER (ICDTE 2025)
                      </p>
                      <h4 className="text-lg font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        A Systematic Survey on DeepFake Detection using Advanced AI Models
                      </h4>
                      <p className="text-[10px] text-[#E8EBF5]/60 uppercase tracking-wider mt-1 font-bold leading-relaxed">
                        Authors: Mevish Fatima, K N Navya, Ravish Kumar, Lubna A
                      </p>
                      <a href="https://drive.google.com/drive/folders/1EK6-jUNFmN-8uvwvKzCgWkMX1hDXFklv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 bg-[#FFE6EA] text-[#053B2D] text-xs font-bold rounded-lg hover:bg-[#E8EBF5] transition-colors">
                        <ExternalLink size={12} />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Row 2: Leadership | Achievements */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Achievements Card - Dark Blue Theme */}
            <FadeIn delay={0.6} direction="up" className="h-full">
              <div className="group h-full bg-[#16253E] border-2 border-[#E8EBF5]/20 rounded-[2rem] p-8 hover:shadow-[8px_8px_0px_#E8EBF5] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-serif-display font-bold text-[#FFE6EA]">Achievements</h3>
                  <div className="p-2 bg-[#FFE6EA]/10 rounded-full text-[#FFE6EA]"><Award size={24} /></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <h4 className="text-base font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        1st Prize Project Expo 2025
                      </h4>
                      <p className="text-[10px] font-bold text-[#FFE6EA]/80 mt-1">DeepFake Detection XAI</p>
                      <a href="https://drive.google.com/drive/folders/1Z5pnydIAKc-DpxKc1DkbSonP_7iWkj6g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-[#FFE6EA] text-[#16253E] text-xs font-bold rounded-lg hover:bg-white transition-colors">
                        <ExternalLink size={12} />
                        View Project
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <h4 className="text-base font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        Google Cloud Arcade
                      </h4>
                      <p className="text-[10px] font-bold text-[#FFE6EA]/80 mt-1">Facilitator Program</p>
                      <a href="https://www.credly.com/users/mevish-fatima/badges#credly" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-[#FFE6EA] text-[#16253E] text-xs font-bold rounded-lg hover:bg-white transition-colors">
                        <ExternalLink size={12} />
                        View Badges
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <h4 className="text-base font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        Data Science Training
                      </h4>
                      <p className="text-[10px] font-bold text-[#FFE6EA]/80 mt-1">Internshala</p>
                      <a href="https://drive.google.com/file/d/1cfGZCbfy4pLweleMdSwx5ChPReDWIp9j/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-[#FFE6EA] text-[#16253E] text-xs font-bold rounded-lg hover:bg-white transition-colors">
                        <ExternalLink size={12} />
                        Certificate
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShipBullet color="#FFE6EA" />
                    <div>
                      <h4 className="text-base font-bold text-[#E8EBF5] group-hover:text-[#FFE6EA] transition-colors leading-tight">
                        Crowdfunding Internship
                      </h4>
                      <p className="text-[10px] font-bold text-[#FFE6EA]/80 mt-1">Certificate of Completion</p>
                      <a href="https://drive.google.com/file/d/1rPUGOPbmVBkCvck_OyYg7RNHg_kSjxjd/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 bg-[#FFE6EA] text-[#16253E] text-xs font-bold rounded-lg hover:bg-white transition-colors">
                        <ExternalLink size={12} />
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Leadership Card - Pink Theme */}
            <FadeIn delay={0.5} direction="up" className="h-full">
              <div className="group h-full bg-[#FFE6EA] border-2 border-[#16253E] rounded-[2rem] p-8 hover:shadow-[8px_8px_0px_#16253E] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-serif-display font-bold text-[#16253E]">Leadership</h3>
                  <div className="p-2 bg-[#16253E]/10 rounded-full text-[#16253E]"><Users size={24} /></div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="flex gap-3">
                    <ShipBullet color="#16253E" />
                    <div>
                      <h4 className="text-lg font-bold text-[#16253E] group-hover:text-[#053B2D] transition-colors">
                        Student Photographer
                      </h4>
                      <p className="text-xs font-mono text-[#053B2D]/80 mt-1">2024</p>
                      <p className="text-xs text-[#16253E]/70 mt-1 font-medium leading-relaxed">
                        Official event coverage & archives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ShipBullet color="#16253E" />
                    <div>
                      <h4 className="text-lg font-bold text-[#16253E] group-hover:text-[#053B2D] transition-colors">
                        Poster Making
                      </h4>
                      <p className="text-xs font-mono text-[#053B2D]/80 mt-1">NOV 2024</p>
                      <p className="text-xs text-[#16253E]/70 mt-1 font-medium leading-relaxed">
                        Designed main university event posters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:col-span-2">
                    <ShipBullet color="#16253E" />
                    <div>
                      <h4 className="text-lg font-bold text-[#16253E] group-hover:text-[#053B2D] transition-colors">
                        Event Coordinator
                      </h4>
                      <p className="text-xs font-mono text-[#053B2D]/80 mt-1">DEC 2024</p>
                      <p className="text-xs text-[#16253E]/70 mt-1 font-medium leading-relaxed">
                        Managed logistics & flow for college events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
