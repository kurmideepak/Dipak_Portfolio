import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function ProjectCursor() {
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  const secondaryRingRef = useRef(null);
  const radarLineRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef(null);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const activeParticles = useRef([]);


  const isHovering = useRef(false);
  const animFrameId = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (!visible) setVisible(true);
      
      const target = e.target.closest('.project-card-hover');
      if (target) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target.closest('.project-card-hover');
      if (target) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let rotation = 0;

    const render = () => {
      if (!prefersReducedMotion) {
        // Instant 1:1 tracking to stick precisely to the pointer
        pos.current.x = mouse.current.x;
        pos.current.y = mouse.current.y;
        rotation += 10; // Very fast spin for highly interactive searching effect

        if (coreRef.current && ringRef.current && secondaryRingRef.current && radarLineRef.current && textRef.current) {
          const transformBase = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

          coreRef.current.style.transform = `${transformBase} translate(-50%, -50%)`;

          const ringScale = isHovering.current ? 1.5 : 1;

          // Spinning rings
          ringRef.current.style.transform = `${transformBase} translate(-50%, -50%) rotate(${rotation}deg) scale(${ringScale})`;
          secondaryRingRef.current.style.transform = `${transformBase} translate(-50%, -50%) rotate(${-rotation * 0.5}deg) scale(${ringScale * 1.2})`;

          // Radar sweeping line (spins even faster)
          radarLineRef.current.style.transform = `${transformBase} translate(-50%, -50%) rotate(${rotation * 2}deg) scale(${ringScale})`;

          textRef.current.style.transform = `${transformBase} translate(25px, -50%)`;
          textRef.current.style.opacity = isHovering.current ? '1' : '0';

          if (isHovering.current) {
            ringRef.current.style.borderColor = 'rgba(34, 211, 238, 0.9)'; // brighter cyan
            secondaryRingRef.current.style.borderColor = 'rgba(168, 85, 247, 0.6)'; // stronger purple
            radarLineRef.current.style.opacity = '1';
          } else {
            ringRef.current.style.borderColor = 'rgba(34, 211, 238, 0.4)';
            secondaryRingRef.current.style.borderColor = 'rgba(168, 85, 247, 0.2)';
            radarLineRef.current.style.opacity = '0.4';
          }
        }

        // Handle particles trail (scanner trail)
        if (Math.random() > 0.4 && activeParticles.current.length < 15) {
          activeParticles.current.push({
            x: pos.current.x,
            y: pos.current.y,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            life: 1,
            size: Math.random() * 2 + 1
          });
        }

        if (particlesRef.current) {
          let html = '';
          for (let i = activeParticles.current.length - 1; i >= 0; i--) {
            let p = activeParticles.current[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;

            if (p.life <= 0) {
              activeParticles.current.splice(i, 1);
            } else {
              const opacity = p.life * (isHovering.current ? 0.7 : 0.3);
              html += `<div style="position:absolute;left:0;top:0;width:${p.size}px;height:${p.size}px;border-radius:50%;background:cyan;transform:translate3d(${p.x - p.size / 2}px,${p.y - p.size / 2}px,0);opacity:${opacity};pointer-events:none;box-shadow: 0 0 4px cyan"></div>`;
            }
          }
          particlesRef.current.innerHTML = html;
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [prefersReducedMotion, visible]);

  if (prefersReducedMotion || !visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div ref={particlesRef} className="absolute inset-0" />

      {/* Secondary slow rotating dashed ring */}
      <div
        ref={secondaryRingRef}
        className="absolute left-0 top-0 w-12 h-12 rounded-full border border-purple-500/20 border-dashed pointer-events-none transition-all duration-300 transform-origin-center"
      />

      {/* Primary fast rotating solid ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 w-8 h-8 rounded-full border-[1.5px] border-cyan-400/40 border-t-cyan-400/90 pointer-events-none transition-all duration-300 transform-origin-center shadow-[0_0_10px_rgba(34,211,238,0.3)]"
      />

      {/* Radar scanning line inside the ring */}
      <div
        ref={radarLineRef}
        className="absolute left-0 top-0 w-8 h-8 pointer-events-none transition-opacity duration-300"
      >
        <div className="absolute left-1/2 top-1/2 w-[50%] h-[1.5px] bg-gradient-to-r from-cyan-400 to-transparent origin-left -translate-y-1/2" />
      </div>

      {/* Glowing core */}
      <div
        ref={coreRef}
        className="absolute left-0 top-0 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(34,211,238,1),0_0_20px_rgba(168,85,247,0.5)] pointer-events-none"
      />

      <div
        ref={textRef}
        className="absolute left-0 top-0 text-[10px] font-bold tracking-[0.2em] text-cyan-300 pointer-events-none transition-opacity duration-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
        style={{ opacity: 0 }}
      >
        EXPLORE
      </div>
    </div>
  );
}
