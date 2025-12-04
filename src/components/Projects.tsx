import { MessageSquare, Coins, Coffee, Smartphone, ShoppingBag, UtensilsCrossed, Palette, Image, Shield } from 'lucide-react';

const projects = [
  {
    icon: MessageSquare,
    title: 'Chatbot Integration in Ticketing Systems',
    description:
      'Built an NLP-powered chatbot to automate museum ticket bookings and reduce queue times. This intelligent system understands natural language queries and streamlines the entire booking process.',
    tech: ['Python', 'Flask', 'NLP'],
    color: 'from-cyan-500 to-teal-500',
    achievement: 'Published Research',
    link: 'https://github.com/Mevishf/Museum-chatbot-ticketing-system',
    image: '/images/museum-chatbot.jpg',
  },
  {
    icon: Shield,
    title: 'DeepFake Detection in Aerial Images',
    description:
      'Developed a system to detect deepfakes in aerial imagery using Explainable AI (XAI). Ensures authenticity and security in remote sensing data through advanced deep learning models.',
    tech: ['Python', 'Deep Learning', 'XAI'],
    color: 'from-red-500 to-pink-600',
    link: 'https://github.com/singhravish486/DeepFake-Detection',
    image: '/images/deepfake-detection.jpg',
  },
  {
    icon: Coins,
    title: 'Campus Karma Coins – Blockchain Reward System',
    description:
      'Built a blockchain reward system using Solidity smart contracts deployed on Ganache. Integrated Web3.js with a modern TailwindCSS frontend for seamless user interaction.',
    tech: ['Solidity', 'MetaMask', 'Web3.js', 'Node.js', 'TailwindCSS'],
    color: 'from-yellow-500 to-orange-500',
    link: 'https://github.com/Mevishf/Campus-Karma-Coins',
    image: '/images/campus-karma.jpg',
  },
  {
    icon: Coffee,
    title: 'Coffee Shop Website',
    description:
      'A modern, responsive website for a specialty coffee shop featuring menu browsing, online ordering, and location services. Designed with a warm, inviting aesthetic.',
    tech: ['Figma', 'UI/UX', 'Web Design'],
    color: 'from-amber-500 to-orange-600',
    achievement: 'Figma Design',
    image: '/images/coffee-shop-web.png',
    link: 'https://www.figma.com/design/IS5rUC8eUCehU65yHPOBtF/Coffee-shop---web?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    icon: Smartphone,
    title: 'Coffee Shop Mobile App',
    description:
      'Mobile application design for coffee ordering and loyalty rewards. Focuses on intuitive navigation and seamless checkout experience for on-the-go customers.',
    tech: ['Figma', 'Prototyping', 'App Design'],
    color: 'from-brown-500 to-amber-700',
    achievement: 'Figma Design',
    image: '/images/coffee-shop-app.png',
    link: 'https://www.figma.com/design/DdauBCpWbpZf82HXySK6et/Coffee-shop-app?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    icon: ShoppingBag,
    title: 'Clothing Store E-commerce',
    description:
      'Fashion e-commerce platform with advanced filtering, virtual try-on concepts, and a clean, minimalist interface to highlight the products.',
    tech: ['Figma', 'UI/UX', 'E-commerce'],
    color: 'from-pink-500 to-rose-600',
    achievement: 'Figma Design',
    image: '/images/clothing-store.png',
    link: 'https://www.figma.com/design/lU8FDX5EjQU2wbthQUO6xt/Clothing-store?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cooking Recipe Platform',
    description:
      'Interactive recipe sharing platform allowing users to post, rate, and save recipes. Features include ingredient adjustments and step-by-step cooking modes.',
    tech: ['Figma', 'UI/UX', 'Web App'],
    color: 'from-green-500 to-emerald-600',
    achievement: 'Figma Design',
    image: '/images/cooking-recipe.png',
    link: 'https://www.figma.com/design/Es0x3G3eQVTa6Bbj0o0guk/cooking-recipe?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    icon: Palette,
    title: 'Portfolio Design',
    description:
      'Personal portfolio design showcasing creative work and technical skills. Focuses on clean typography, effective use of whitespace, and visual hierarchy.',
    tech: ['Figma', 'UI/UX', 'Personal Branding'],
    color: 'from-violet-500 to-purple-600',
    achievement: 'Figma Design',
    image: '/images/portfolio-design.png',
    link: 'https://www.figma.com/design/li9idFYxnm7f7QcoY2ibxm/Portfolio?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    icon: Image,
    title: 'Poster Works',
    description:
      'Collection of creative poster designs for various events and campaigns. Demonstrates strong graphic design skills and ability to communicate messages visually.',
    tech: ['Figma', 'Graphic Design', 'Visual Art'],
    color: 'from-red-500 to-rose-600',
    achievement: 'Figma Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/30 dark:bg-blue-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-blue-700 dark:text-blue-300 text-lg max-w-2xl mx-auto">
            Exploring the intersection of AI, blockchain, and creative design
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-blue-900/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200 dark:border-blue-800 flex flex-col"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {project.achievement && (
                      <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full shadow-sm">
                        {project.achievement}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-blue-700 dark:text-blue-300 mb-6 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors text-sm font-medium mt-auto"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
