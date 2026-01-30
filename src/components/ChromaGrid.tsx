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

    const handleCardClick = (url?: string) => {
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    // ... (previous code)
    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ${className}`}
            style={
                {
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                } as React.CSSProperties
            }
        >
            {data.map((c, i) => (
                <div key={i} className="relative group">
                    <StarBorder
                        as="article"
                        onClick={() => handleCardClick(c.url)}
                        className="group/card relative w-[360px] h-[400px] cursor-pointer perspective-1000 transition-all duration-500 hover:-translate-y-2 bg-[#E8EBF5] border-4 border-[#16253E] rounded-[24px]"
                        color="#FFE6EA"
                        speed="5s"
                    >
                        <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] shadow-xl rounded-[20px]">

                            {/* Front Face */}
                            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[20px] overflow-hidden bg-[#16253E]">
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
                                    className="w-full h-full object-cover rounded-[18px]"
                                />

                                {/* Overlay Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#16253E]/90 to-transparent">
                                    <h3 className="text-[#E8EBF5] text-2xl font-serif-display font-bold">{c.title}</h3>
                                </div>
                            </div>

                            {/* Back Face */}
                            <div
                                className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[20px] overflow-hidden p-8 flex flex-col items-center justify-center text-center border-4"
                                style={{
                                    backgroundColor: c.borderColor,
                                    borderColor: 'rgba(255,255,255,0.1)'
                                }}
                            >
                                <h3 className="text-white text-xl font-bold font-serif-display mb-4 drop-shadow-md">{c.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed mb-6 font-sans font-medium">
                                    {c.subtitle}
                                </p>

                                {c.handle && (
                                    <div className="mt-auto">
                                        <span className="inline-block px-3 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white font-mono tracking-wide">
                                            {c.handle}
                                        </span>
                                    </div>
                                )}

                                <div className="mt-6 text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover/card:gap-3 transition-all border-b-2 border-white/50 pb-1">
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
