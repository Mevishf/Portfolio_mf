import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import StarBorder from './StarBorder';

export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}

export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = '',
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });
    const [flippedCards, setFlippedCards] = React.useState<Set<number>>(new Set());

    const demo: ChromaItem[] = [
        {
            image: 'https://i.pravatar.cc/300?img=8',
            title: 'Alex Rivera',
            subtitle: 'Full Stack Developer',
            handle: '@alexrivera',
            borderColor: '#4F46E5',
            gradient: 'linear-gradient(145deg,#4F46E5,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=11',
            title: 'Jordan Chen',
            subtitle: 'DevOps Engineer',
            handle: '@jordanchen',
            borderColor: '#10B981',
            gradient: 'linear-gradient(210deg,#10B981,#000)',
            url: 'https://linkedin.com/in/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=3',
            title: 'Morgan Blake',
            subtitle: 'UI/UX Designer',
            handle: '@morganblake',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(165deg,#F59E0B,#000)',
            url: 'https://dribbble.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=16',
            title: 'Casey Park',
            subtitle: 'Data Scientist',
            handle: '@caseypark',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(195deg,#EF4444,#000)',
            url: 'https://kaggle.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=25',
            title: 'Sam Kim',
            subtitle: 'Mobile Developer',
            handle: '@thesamkim',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=60',
            title: 'Tyler Rodriguez',
            subtitle: 'Cloud Architect',
            handle: '@tylerrod',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(135deg,#06B6D4,#000)',
            url: 'https://aws.amazon.com/'
        }
    ];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
        setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = (index: number, url?: string) => {
        // On mobile, tap flips the card. Must tap "View Project" button to navigate.
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            if (!flippedCards.has(index)) {
                // Flip the card
                setFlippedCards(prev => new Set(prev).add(index));
                // Auto-flip back after 5 seconds
                setTimeout(() => {
                    setFlippedCards(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(index);
                        return newSet;
                    });
                }, 5000);
            }
        } else {
            // Desktop: click opens URL
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleViewProjectClick = (e: React.MouseEvent, url?: string) => {
        e.stopPropagation(); // Prevent card flip
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    // ... (previous code)
    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full h-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center ${className}`}
            style={
                {
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                } as React.CSSProperties
            }
        >
            {data.map((c, i) => (
                <div key={i} className="relative group w-full flex justify-center">
                    <StarBorder
                        as="article"
                        onClick={() => handleCardClick(i, c.url)}
                        className="group/card relative w-[160px] h-[200px] sm:w-[200px] sm:h-[260px] md:w-[280px] md:h-[340px] lg:w-[360px] lg:h-[400px] cursor-pointer perspective-1000 transition-all duration-500 hover:-translate-y-2 bg-[#E8EBF5] border-2 md:border-4 border-[#16253E] rounded-[16px] md:rounded-[24px]"
                        color="#FFE6EA"
                        speed="5s"
                    >
                        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] shadow-xl rounded-[14px] md:rounded-[20px] ${flippedCards.has(i) ? '[transform:rotateY(180deg)]' : 'group-hover/card:[transform:rotateY(180deg)]'}`}>

                            {/* Front Face */}
                            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[14px] md:rounded-[20px] overflow-hidden bg-[#E8EBF5] flex flex-col">
                                {/* Image Section - Upper Portion */}
                                <div className="relative h-[75%] overflow-hidden bg-[#16253E]">
                                    {/* Spotlight for Front */}
                                    <div
                                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover/card:opacity-100"
                                        style={{
                                            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)'
                                        }}
                                    />

                                    <img
                                        src={c.image}
                                        alt={c.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Title Section - Lower Section */}
                                <div
                                    className="h-[25%] p-2 sm:p-3 md:p-4 flex items-center justify-center border-t-2 border-white/20"
                                    style={{ backgroundColor: c.borderColor }}
                                >
                                    <h3
                                        className="text-[0.6rem] sm:text-sm md:text-base lg:text-xl font-serif-display font-bold text-center leading-tight line-clamp-2"
                                        style={{
                                            color: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? '#1e3a8a' : 'white'
                                        }}
                                    >
                                        {c.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Back Face */}
                            <div
                                className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[14px] md:rounded-[20px] overflow-hidden p-3 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center border-2 md:border-4 overflow-y-auto scrollbar-hide"
                                style={{
                                    backgroundColor: c.borderColor,
                                    borderColor: 'rgba(255,255,255,0.1)'
                                }}
                            >
                                <h3
                                    className="text-xs sm:text-lg md:text-xl font-bold font-serif-display mb-1 sm:mb-3 md:mb-4 drop-shadow-md leading-tight px-1 shrink-0"
                                    style={{
                                        color: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? '#1e3a8a' : 'white'
                                    }}
                                >
                                    {c.title}
                                </h3>
                                <p
                                    className="text-[0.55rem] sm:text-sm md:text-base leading-tight mb-2 sm:mb-4 md:mb-6 font-sans font-medium px-1"
                                    style={{
                                        color: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? '#1e3a8a' : 'rgba(255,255,255,0.9)'
                                    }}
                                >
                                    {c.subtitle}
                                </p>

                                {c.handle && (
                                    <div className="mt-auto">
                                        <span
                                            className="inline-block px-2 py-1 sm:px-3 sm:py-1 border bg-white/10 backdrop-blur-sm rounded-full text-[0.6rem] sm:text-xs font-mono tracking-wide"
                                            style={{
                                                color: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? '#1e3a8a' : 'white',
                                                borderColor: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? 'rgba(30,58,138,0.3)' : 'rgba(255,255,255,0.3)'
                                            }}
                                        >
                                            {c.handle}
                                        </span>
                                    </div>
                                )}

                                <div
                                    onClick={(e) => handleViewProjectClick(e, c.url)}
                                    className="mt-2 sm:mt-4 md:mt-6 text-[0.55rem] sm:text-sm md:text-base font-bold uppercase tracking-wider flex items-center gap-1 sm:gap-2 group-hover/card:gap-3 transition-all border-b pb-0.5 sm:pb-1 cursor-pointer shrink-0"
                                    style={{
                                        color: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? '#1e3a8a' : 'white',
                                        borderColor: ['#BFDBFE', '#EAB308', '#FFC0CB', '#D8B4FE'].includes(c.borderColor || '') ? 'rgba(30,58,138,0.5)' : 'rgba(255,255,255,0.5)'
                                    }}
                                >
                                    View Project <span>→</span>
                                </div>
                            </div>
                        </div>
                    </StarBorder>
                </div>
            ))}
            {/* Removed the grayscale overlay elements to let the theme shine */}
        </div>
    );
};

export default ChromaGrid;
