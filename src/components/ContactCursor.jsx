import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function ContactCursor() {
  const coreRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef(null);

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const activeParticles = useRef([]);

  const isTouch = useRef(false);
  const isHovering = useRef(false);
  const hoverText = useRef('');
  const animFrameId = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => {
      isTouch.current = true;
    };

    const handleMouseMove = (e) => {
      if (isTouch.current) return;
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target.closest('.contact-hover');
      if (target) {
        isHovering.current = true;
        hoverText.current = target.getAttribute('data-cursor-text') || '';
      } else {
        isHovering.current = false;
        hoverText.current = '';
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let tick = 0;

    const render = () => {
      if (!isTouch.current && !prefersReducedMotion) {
        pos.current.x += (mouse.current.x - pos.current.x) * 0.35;
        pos.current.y += (mouse.current.y - pos.current.y) * 0.35;
        tick += 0.05;

        if (coreRef.current && ring1Ref.current && ring2Ref.current && textRef.current) {
          const transformBase = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

          coreRef.current.style.transform = `${transformBase} translate(-50%, -50%)`;

          // Signal pulses using sine waves
          const s1 = (Math.sin(tick) + 1) / 2; // 0 to 1
          const s2 = (Math.sin(tick - 1.5) + 1) / 2;

          const baseScale = isHovering.current ? 1.5 : 1;
          const scale1 = baseScale + s1 * 0.5;
          const scale2 = baseScale + s2 * 0.8;

          ring1Ref.current.style.transform = `${transformBase} translate(-50%, -50%) scale(${scale1})`;
          ring1Ref.current.style.opacity = isHovering.current ? (1 - s1) * 0.8 : (1 - s1) * 0.4;

          ring2Ref.current.style.transform = `${transformBase} translate(-50%, -50%) scale(${scale2})`;
          ring2Ref.current.style.opacity = isHovering.current ? (1 - s2) * 0.5 : (1 - s2) * 0.2;

          textRef.current.style.transform = `${transformBase} translate(20px, -50%)`;
          textRef.current.style.opacity = hoverText.current ? '1' : '0';
          if (hoverText.current !== textRef.current.innerText) {
            textRef.current.innerText = hoverText.current;
          }
        }

        // Handle subtle signal trail (6-10 particles)
        if (Math.random() > 0.7 && activeParticles.current.length < 8) {
          activeParticles.current.push({
            x: pos.current.x,
            y: pos.current.y,
            vx: 0,
            vy: 0,
            life: 1,
            size: Math.random() * 2 + 1
          });
        }

        if (particlesRef.current) {
          let html = '';
          for (let i = activeParticles.current.length - 1; i >= 0; i--) {
            let p = activeParticles.current[i];
            p.life -= 0.04;

            if (p.life <= 0) {
              activeParticles.current.splice(i, 1);
            } else {
              const opacity = p.life * (isHovering.current ? 0.6 : 0.3);
              html += `<div style="position:absolute;left:0;top:0;width:${p.size}px;height:${p.size}px;border-radius:50%;background:#3b82f6;transform:translate3d(${p.x - p.size / 2}px,${p.y - p.size / 2}px,0) scale(${1.5 - p.life});opacity:${opacity};pointer-events:none;"></div>`;
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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [prefersReducedMotion, visible]);

  if (isTouch.current || prefersReducedMotion || !visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div ref={particlesRef} className="absolute inset-0" />

      <div
        ref={ring2Ref}
        className="absolute left-0 top-0 w-8 h-8 rounded-full border border-blue-400 pointer-events-none"
      />

      <div
        ref={ring1Ref}
        className="absolute left-0 top-0 w-6 h-6 rounded-full border-[1.5px] border-cyan-400 pointer-events-none"
      />

      <div
        ref={coreRef}
        className="absolute left-0 top-0 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(6,182,212,1)] pointer-events-none"
      />

      <div
        ref={textRef}
        className="absolute left-0 top-0 text-[9px] font-bold tracking-[0.2em] text-cyan-300 pointer-events-none transition-opacity duration-300 drop-shadow-[0_0_4px_rgba(6,182,212,0.8)]"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
