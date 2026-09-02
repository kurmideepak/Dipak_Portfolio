import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function SkillsCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef(null);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const activeParticles = useRef([]);


  const isHovering = useRef(false);
  const hoverTarget = useRef(null);
  const animFrameId = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (!visible) setVisible(true);
      
      const target = e.target.closest('.skill-card-hover');
      if (target) {
        isHovering.current = true;
        hoverTarget.current = target.getBoundingClientRect();
      } else {
        isHovering.current = false;
        hoverTarget.current = null;
      }
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target.closest('.skill-card-hover');
      if (target) {
        isHovering.current = true;
        hoverTarget.current = target.getBoundingClientRect();
      } else {
        isHovering.current = false;
        hoverTarget.current = null;
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const render = () => {
      if (!prefersReducedMotion) {
        // Interpolate position
        let targetX = mouse.current.x;
        let targetY = mouse.current.y;

        // Apply magnetic pull if hovering
        if (isHovering.current && hoverTarget.current) {
          const rect = hoverTarget.current;
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Pull 10% towards center
          targetX = targetX + (centerX - targetX) * 0.10;
          targetY = targetY + (centerY - targetY) * 0.10;
        }

        pos.current.x += (targetX - pos.current.x) * 0.2;
        pos.current.y += (targetY - pos.current.y) * 0.2;

        if (cursorRef.current && glowRef.current) {
          const scale = isHovering.current ? 1.2 : 1;
          const transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale})`;

          cursorRef.current.style.transform = transform;
          glowRef.current.style.transform = transform;

          if (isHovering.current) {
            glowRef.current.style.opacity = '0.8';
            glowRef.current.style.width = '36px';
            glowRef.current.style.height = '36px';
            glowRef.current.style.marginLeft = '-18px';
            glowRef.current.style.marginTop = '-18px';
          } else {
            glowRef.current.style.opacity = '0.4';
            glowRef.current.style.width = '24px';
            glowRef.current.style.height = '24px';
            glowRef.current.style.marginLeft = '-12px';
            glowRef.current.style.marginTop = '-12px';
          }
        }

        // Handle particles
        if (Math.random() > 0.4 && activeParticles.current.length < 12) {
          activeParticles.current.push({
            x: pos.current.x,
            y: pos.current.y,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            life: 1,
            size: Math.random() * 2 + 1
          });
        }

        // Update and draw particles
        if (particlesRef.current) {
          let html = '';
          for (let i = activeParticles.current.length - 1; i >= 0; i--) {
            let p = activeParticles.current[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.04; // Fade speed

            if (p.life <= 0) {
              activeParticles.current.splice(i, 1);
            } else {
              const opacity = p.life * (isHovering.current ? 0.8 : 0.4);
              html += `<div style="position:absolute;left:0;top:0;width:${p.size}px;height:${p.size}px;border-radius:50%;background:cyan;transform:translate3d(${p.x}px,${p.y}px,0);opacity:${opacity};pointer-events:none;"></div>`;
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
      <div
        ref={glowRef}
        className="absolute left-0 top-0 w-6 h-6 -ml-3 -mt-3 rounded-full bg-cyan-500 blur-md transition-all duration-300 ease-out pointer-events-none mix-blend-screen"
        style={{ opacity: 0.4 }}
      />
      <div
        ref={cursorRef}
        className="absolute left-0 top-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-white shadow-[0_0_10px_rgba(34,211,238,0.8)] dark:bg-cyan-100 pointer-events-none transition-transform duration-75 ease-out"
      />
    </div>
  );
}
