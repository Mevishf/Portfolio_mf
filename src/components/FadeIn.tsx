import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    fullWidth?: boolean;
    viewport?: UseInViewOptions;
}

export default function FadeIn({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.5,
    fullWidth = false,
    viewport = { once: true, margin: '-50px' },
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: 40 };
            case 'down':
                return { opacity: 0, y: -40 };
            case 'left':
                return { opacity: 0, x: 40 };
            case 'right':
                return { opacity: 0, x: -40 };
            case 'none':
                return { opacity: 0 };
            default:
                return { opacity: 0, y: 40 };
        }
    };

    const getAnimate = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { opacity: 1, y: 0 };
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 };
            case 'none':
                return { opacity: 1 };
            default:
                return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitial()}
            animate={isInView ? getAnimate() : getInitial()}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={`${className} ${fullWidth ? 'w-full' : ''}`}
        >
            {children}
        </motion.div>
    );
};
