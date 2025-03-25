
import React, { useRef, useEffect } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Create particles
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      directionX: number;
      directionY: number;
      opacity: number;
    }

    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30)); // Adjust for performance

    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: 'rgba(120, 220, 200, 0.8)',
          speed: Math.random() * 0.2 + 0.1,
          directionX: Math.random() * 0.6 - 0.3,
          directionY: Math.random() * 0.6 - 0.3,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    createParticles();

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 160) {
            const opacity = 1 - distance / 160;
            ctx.strokeStyle = `rgba(180, 220, 210, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        p.x += p.directionX;
        p.y += p.directionY;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 220, 200, ${p.opacity})`;
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};

export default BackgroundAnimation;
