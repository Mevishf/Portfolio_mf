import { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    const waves = [
      { y: 0.7, length: 0.01, amplitude: 100, frequency: 0.01 },
      { y: 0.75, length: 0.02, amplitude: 80, frequency: 0.015 },
      { y: 0.8, length: 0.015, amplitude: 60, frequency: 0.02 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * wave.y);

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height * wave.y +
            Math.sin(x * wave.length + time * wave.frequency) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const isDark = document.documentElement.classList.contains('dark');
        const alpha = 0.03 + index * 0.02;

        if (isDark) {
          ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
