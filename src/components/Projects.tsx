import ChromaGrid, { ChromaItem } from './ChromaGrid';
import FadeIn from './FadeIn';

const projects: ChromaItem[] = [
  {
    image: '/images/museum-chatbot.jpg',
    title: 'Chatbot Integration in Ticketing Systems',
    subtitle: 'Built an NLP-powered chatbot to automate museum ticket bookings and reduce queue times.',
    handle: 'Python • Flask • NLP',
    borderColor: '#2C3E50', // Dark Blue Grey
    gradient: 'linear-gradient(135deg, transparent, transparent)', // Transparent or subtle
    url: 'https://github.com/Mevishf/Museum-chatbot-ticketing-system',
  },
  {
    image: '/images/deepfake-detection.jpg',
    title: 'DeepFake Detection in Aerial Images Using Explainable AI',
    subtitle: 'Built an AI system to detect manipulated aerial/satellite images using CNN and Vision Transformers. Applied Grad-CAM and SHAP for interpretability.',
    handle: 'Python • Deep Learning • XAI',
    borderColor: '#0F172A', // Slate 900
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://github.com/singhravish486/DeepFake-Detection',
  },
  {
    image: '/images/campus-karma.jpg',
    title: 'Campus Karma Coins – Blockchain Reward System',
    subtitle: 'Built a blockchain reward system using Solidity, MetaMask, and Ganache. Integrated smart contracts with a Tailwind frontend via Web3.js.',
    handle: 'Ganache • MetaMask • Smart Contracts',
    borderColor: '#4338ca', // Indigo 700
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://github.com/Mevishf/Campus-Karma-Coins',
  },
  {
    image: '/images/coffee-shop-web.png',
    title: 'Coffee Shop Website UI',
    subtitle: 'Modern, responsive website for a specialty coffee shop with online ordering.',
    handle: 'Figma • UI/UX',
    borderColor: '#3E2723', // Dark Brown
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://www.figma.com/design/IS5rUC8eUCehU65yHPOBtF/Coffee-shop---web?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    image: '/images/coffee-shop-app.png',
    title: 'Coffee Shop App UI',
    subtitle: 'Mobile application design for coffee ordering and loyalty rewards.',
    handle: 'Figma • App Design',
    borderColor: '#5D4037', // Brown
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://www.figma.com/design/DdauBCpWbpZf82HXySK6et/Coffee-shop-app?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    image: '/images/clothing-store.png',
    title: 'Fashion E-commerce UI',
    subtitle: 'Fashion platform with advanced filtering and virtual try-on concepts.',
    handle: 'Figma • E-commerce',
    borderColor: '#BE123C', // Rose 700
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://www.figma.com/design/lU8FDX5EjQU2wbthQUO6xt/Clothing-store?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    image: '/images/cooking-recipe.png',
    title: 'Cooking Recipe UI',
    subtitle: 'Interactive recipe sharing platform with step-by-step cooking modes.',
    handle: 'Figma • UI/UX',
    borderColor: '#15803D', // Green 700
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://www.figma.com/design/Es0x3G3eQVTa6Bbj0o0guk/cooking-recipe?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    image: '/images/portfolio-design.png',
    title: 'Portfolio Design UI',
    subtitle: 'Personal portfolio design showcasing clean typography and visual hierarchy.',
    handle: 'Figma • UI/UX',
    borderColor: '#171717', // Neutral 900
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: 'https://www.figma.com/design/li9idFYxnm7f7QcoY2ibxm/Portfolio?m=auto&t=mUgTsM6n9lQ876EU-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    title: 'Poster Works',
    subtitle: 'Collection of creative poster designs for various events and campaigns.',
    handle: 'Graphic Design',
    borderColor: '#B91C1C', // Red 700
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium text-[#16253E] mb-6">
              Main Characters
            </h2>
            <div className="w-24 h-1 bg-[#16253E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} fullWidth>
          <div style={{ height: 'auto', minHeight: '800px', position: 'relative' }}>
            <ChromaGrid
              items={projects}
              radius={400}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
