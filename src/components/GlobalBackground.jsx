import React, { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useMotionTemplate } from 'framer-motion';

const BackgroundParticles = ({ prefersReducedMotion }) => {
  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const duration = 15 + Math.random() * 20; 
        const horizontalDrift = -20 + Math.random() * 40;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: `${Math.random() * 100}%`, 
              x: `${Math.random() * 100}%` 
            }}
            animate={{
              opacity: [0, Math.random() * 0.4 + 0.1, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 10}%`],
              x: `calc(${Math.random() * 100}% + ${horizontalDrift}px)`
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 blur-[0.5px]"
          />
        );
      })}
    </div>
  );
};

const AnimatedAuroraBlobs = ({ prefersReducedMotion }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40">
      <motion.div 
        animate={prefersReducedMotion ? {} : { 
          x: [-30, 30, -30], 
          y: [-20, 20, -20],
          scale: [1, 1.05, 1] 
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-0 left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px] lg:blur-[140px]"
      />
      <motion.div 
        animate={prefersReducedMotion ? {} : { 
          x: [30, -30, 30], 
          y: [20, -20, 20],
          scale: [1, 1.05, 1] 
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-0 right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[100px] lg:blur-[140px]"
      />
      <motion.div 
        animate={prefersReducedMotion ? {} : { 
          x: [-20, 20, -20], 
          y: [30, -30, 30],
          scale: [1.05, 1, 1.05] 
        }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-[100px] lg:blur-[140px]"
      />
      <motion.div 
        animate={prefersReducedMotion ? {} : { 
          x: [20, -20, 20], 
          y: [-30, 30, -30]
        }}
        transition={{ repeat: Infinity, duration: 28, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-magenta-400/10 dark:bg-pink-600/15 blur-[100px] lg:blur-[140px]"
      />
    </div>
  );
};

const MouseGlow = ({ prefersReducedMotion }) => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (prefersReducedMotion || isTouchDevice) return null;

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.1), transparent 40%)`;

  return (
    <motion.div 
      className="fixed inset-0 z-10 pointer-events-none mix-blend-screen"
      style={{ background }}
    />
  );
};

export default function GlobalBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Base Background Color applied to body/html via App.jsx, but we can do a fixed layer here too if needed */}
      <div className="fixed inset-0 z-0 bg-[#F8FAFC] dark:bg-[#030712] transition-colors duration-500 pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] dark:opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* Dynamic Elements */}
      <div className="fixed inset-0 z-[2] pointer-events-none">
        <AnimatedAuroraBlobs prefersReducedMotion={prefersReducedMotion} />
        <BackgroundParticles prefersReducedMotion={prefersReducedMotion} />
        <MouseGlow prefersReducedMotion={prefersReducedMotion} />
      </div>
    </>
  );
}
