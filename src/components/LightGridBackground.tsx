import { motion } from 'framer-motion';

export default function LightGridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Base Background Color */}
            <div className="absolute inset-0 bg-[#E8EBF5]"></div>

            {/* Animated Grid Pattern */}
            <motion.div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #C1C6D3 1px, transparent 1px),
            linear-gradient(to bottom, #C1C6D3 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "50px 50px"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                }}
            />

            {/* Soft Vignette / Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#E8EBF5_100%)] opacity-60"></div>
        </div>
    );
}
