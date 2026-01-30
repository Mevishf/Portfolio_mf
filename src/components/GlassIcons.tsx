import React from 'react';

export interface GlassIconItem {
    icon: React.ReactNode;
    color: string;
    label: string;
    onClick?: () => void;
    customClass?: string;
}

interface GlassIconsProps {
    items: GlassIconItem[];
    className?: string;
    colorful?: boolean;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className = "", colorful = true }) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {items.map((item, index) => (
                <button
                    key={index}
                    onClick={item.onClick}
                    className={`
            relative group flex items-center justify-center p-1.5 rounded-xl
            bg-white/10 dark:bg-slate-900/10 backdrop-blur-md 
            border border-white/20 dark:border-white/10
            shadow-sm hover:shadow-lg
            transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105
            ${item.customClass || ''}
          `}
                    aria-label={item.label}
                >
                    {/* Icon */}
                    <div
                        className="transition-colors duration-300"
                        style={{ color: colorful ? item.color : 'currentColor' }}
                    >
                        {item.icon}
                    </div>

                    {/* Label */}
                    <div
                        className="hidden md:block text-xs font-bold transition-colors duration-300 px-2 font-outfit uppercase tracking-wider"
                        style={{
                            color: colorful ? item.color : 'currentColor'
                        }}
                    >
                        <div className={`${colorful ? '' : 'text-slate-600 dark:text-slate-400'}`}>
                            {item.label}
                        </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: item.color }}
                    ></div>
                </button>
            ))}
        </div>
    );
};

export default GlassIcons;
