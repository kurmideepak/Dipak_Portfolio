import React, { useEffect, useRef, useState } from 'react';

const N = 35;
const MAX_PARTICLES = 10;

export default function DragonCursor() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const svgRef = useRef(null);
  const useRefs = useRef([]);
  const particlesRefs = useRef([]);

  // Animation state refs
  const elems = useRef(Array.from({ length: N }, () => ({ x: 0, y: 0 })));
  const pointer = useRef({ x: 0, y: 0 });
  const particles = useRef(Array.from({ length: MAX_PARTICLES }, () => ({ x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0 })));
  
  const frameRef = useRef(null);
  const isVisible = useRef(false);
  const isHovering = useRef(false);
  const idleTime = useRef(0);
  const lastMoveTime = useRef(Date.now());
  const animTime = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    // Initialize positions
    pointer.current.x = window.innerWidth / 2;
    pointer.current.y = window.innerHeight / 2;
    elems.current.forEach(e => {
      e.x = window.innerWidth / 2;
      e.y = window.innerHeight / 2;
    });

    const handleMouseMove = (e) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      lastMoveTime.current = Date.now();
      idleTime.current = 0;
      isVisible.current = true;
    };

    const handleMouseLeave = () => isVisible.current = false;
    const handleMouseEnter = () => isVisible.current = true;

    // Hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button')) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        pointer.current.x = e.touches[0].clientX;
        pointer.current.y = e.touches[0].clientY;
        lastMoveTime.current = Date.now();
        idleTime.current = 0;
        isVisible.current = true;
      }
    };

    window.addEventListener('pointermove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    const run = () => {
      const now = Date.now();
      const dt = now - lastMoveTime.current;
      if (dt > 100) idleTime.current += 16;

      let e0 = elems.current[0];
      
      const headDx = pointer.current.x - elems.current[1].x;
      const headDy = pointer.current.y - elems.current[1].y;
      const speedSq = headDx * headDx + headDy * headDy;
      const speed = Math.sqrt(speedSq);
      
      // Advance organic slither animation ONLY when moving
      animTime.current += Math.min(speed * 0.015, 0.25);
      
      let idleOffsetX = 0;
      let idleOffsetY = 0;
      if (idleTime.current > 500) {
        // Smoothly ramp up the search behavior over 2 seconds
        const searchIntensity = Math.min(1, (idleTime.current - 500) / 2000);
        
        // Search across the entire page! (Lissajous curve spanning 35% of the screen size)
        const t = idleTime.current * 0.0005; 
        idleOffsetX = Math.sin(t) * (window.innerWidth * 0.35) * searchIntensity; 
        idleOffsetY = Math.sin(t * 1.3) * (window.innerHeight * 0.35) * searchIntensity;
      }

      // Slow, trailing glide to cursor (creates a chasing/following animation)
      e0.x += (pointer.current.x + idleOffsetX - e0.x) * 0.12;
      e0.y += (pointer.current.y + idleOffsetY - e0.y) * 0.12;

      for (let i = 1; i < N; i++) {
        let e = elems.current[i];
        let ep = elems.current[i - 1];
        
        const a = Math.atan2(e.y - ep.y, e.x - ep.x);
        
        // Dynamic segment distance for a graceful curve
        const dist = Math.max(2, 9 - (i / N) * 5); 
        
        // Better natural wave animation (more pronounced S-curve)
        const slither = Math.sin(animTime.current - i * 0.35) * (i / N) * 6;
        
        const targetX = ep.x + Math.cos(a) * dist + Math.cos(a + Math.PI/2) * slither;
        const targetY = ep.y + Math.sin(a) * dist + Math.sin(a + Math.PI/2) * slither;
        
        // Natural follow speed (balanced between too rubbery and too snappy)
        const followSpeed = Math.max(0.25, 0.7 - (i / N) * 0.45);
        e.x += (targetX - e.x) * followSpeed;
        e.y += (targetY - e.y) * followSpeed;
        
        // Beautiful tapered scaling (0.5 to 0.05)
        const baseScale = isHovering.current ? 1.05 : 1;
        const s = Math.max(0.05, (0.5 - (i / N) * 0.45)) * baseScale;
        
        const node = useRefs.current[i];
        if (node) {
          node.setAttributeNS(
            null,
            "transform",
            `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${(180 / Math.PI) * a}) scale(${s},${s})`
          );
          node.style.opacity = isVisible.current ? Math.max(0.15, 1 - (i / N)) : 0;
        }
      }

      const headNode = useRefs.current[0];
      const headAngle = Math.atan2(headDy, headDx);
      
      if (headNode) {
        // Larger, more prominent head
        const headScale = (isHovering.current ? 0.75 : 0.8);
        headNode.setAttributeNS(
          null,
          "transform",
          `translate(${e0.x},${e0.y}) rotate(${(180 / Math.PI) * headAngle}) scale(${headScale}, ${headScale})`
        );
        headNode.style.opacity = isVisible.current ? 1 : 0;
      }

      if (isVisible.current && speedSq > 5 && Math.random() > 0.6) {
        const p = particles.current.find(p => p.life <= 0);
        if (p) {
          p.x = e0.x + (Math.random() - 0.5) * 8;
          p.y = e0.y + (Math.random() - 0.5) * 8;
          p.vx = -Math.cos(headAngle) * (Math.random() * 3) + (Math.random() - 0.5) * 2;
          p.vy = -Math.sin(headAngle) * (Math.random() * 3) + (Math.random() - 0.5) * 2;
          p.maxLife = Math.random() * 20 + 10;
          p.life = p.maxLife;
        }
      }

      for (let i = 0; i < MAX_PARTICLES; i++) {
        const p = particles.current[i];
        const node = particlesRefs.current[i];
        if (p.life > 0) {
          p.x += p.vx;
          p.y += p.vy;
          p.life--;
          if (node) {
            const size = (p.life / p.maxLife) * (isHovering.current ? 1.5 : 1);
            node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${size})`;
            node.style.opacity = (p.life / p.maxLife) * 0.6;
          }
        } else if (node && node.style.opacity !== '0') {
          node.style.opacity = '0';
        }
      }

      frameRef.current = requestAnimationFrame(run);
    };

    frameRef.current = requestAnimationFrame(run);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);


  if (reducedMotion) {
    return (
      <div 
        className="pointer-events-none fixed z-[100] w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 dark:mix-blend-screen shadow-[0_0_12px_rgba(6,182,212,0.8)] dark:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-75" 
        style={{ left: pointer.current.x, top: pointer.current.y, transform: 'translate(-50%, -50%)' }} 
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden dark:mix-blend-screen">
      {Array.from({ length: MAX_PARTICLES }).map((_, i) => (
        <div
          key={`p-${i}`}
          ref={el => particlesRefs.current[i] = el}
          className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-300 shadow-[0_0_4px_rgba(6,182,212,0.6)] dark:shadow-[0_0_4px_rgba(103,232,249,0.8)] opacity-0 will-change-transform"
          style={{ transform: 'translate3d(-1000px, -1000px, 0)' }}
        />
      ))}

      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="dragonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <g id="Cabeza">
            <path fill="#22D3EE" d="M-28.9,-1.1L-28.55 -1.95Q-28.1 -3.1 -27.25 -2.95L-26.7 -2.95Q-27.7 -1.65 -28.9 -1.1M-18.35,-1.8Q-15.1 -10.3 -9.6 -6.05Q-15.1 -6.2 -18.35 -1.8M-18.35,1.1Q-15.1 5.45 -9.6 5.35Q-15.1 9.55 -18.35 1.1M-26.7,2.2L-27.25 2.25Q-28.1 2.4 -28.55 1.2L-28.9 0.35Q-27.7 0.9 -26.7 2.2" />
            <path fill="#4F46E5" d="M-21.05,-8.25Q-13.6 -15.95 -1.3 -12.1Q-7.85 -8.5 -5.85 -4.35Q-2.3 -4.85 10.5 0.15Q0 4.35 -5.85 3.65Q-7.85 7.75 -1.25 12.45Q-13.6 15.2 -21.05 7.5Q-29.55 4.05 -30.2 -0.35Q-29.55 -4.8 -21.05 -8.25M-26.7,-2.95L-27.25 -2.95Q-28.1 -3.1 -28.55 -1.95L-28.9 -1.1Q-27.7 -1.65 -26.7 -2.95M-9.6,-6.05Q-15.1 -10.3 -18.35 -1.8Q-15.1 -6.2 -9.6 -6.05M-9.6,5.35Q-15.1 5.45 -18.35 1.1Q-15.1 9.55 -9.6 5.35M-28.9,0.35L-28.55 1.2Q-28.1 2.4 -27.25 2.25L-26.7 2.2Q-27.7 0.9 -28.9 0.35" />
          </g>
          
          <g id="Aletas">
            <g transform="scale(0.6)">
              <linearGradient id="LinearGradID_1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0935974, 0, 0, 0.188782, -20.55, 0)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">
                <stop offset="0" stopColor="#06B6D4" />
                <stop offset="1" stopColor="#9333EA" />
              </linearGradient>
              <path fill="url(#LinearGradID_1)" d="M29.75,-36.85Q-17.75 -61.45 -42.05 -40.95L-45.35 -38.35L-53.7 -41.15L-51.15 -44.85Q-34.85 -68.4 21 -57.8Q-32.2 -72.1 -50.25 -50Q-53.85 -45.65 -56.05 -41.95L-64.7 -43.35L-60.6 -50.3Q-45.9 -75.55 5.1 -79.35Q-2.2 -79.8 -9.45 -79.15Q-16.2 -78.55 -22.85 -77.15Q-29.85 -75.65 -36.5 -73Q-43.05 -70.4 -48.8 -66.85Q-54.55 -63.35 -56.8 -60.3L-60.5 -55.4Q-62.95 -52.1 -67 -43.55L-70.55 -43.55L-76.35 -42.95Q-74.6 -49.1 -71.85 -54.85Q-68.9 -61.25 -64.8 -67.1Q-60.8 -73 -55.45 -77.55Q-49.9 -82.35 -43.65 -85.85L-30.6 -92.7Q-24.05 -95.95 -17 -98.25Q-63.75 -86.35 -73.65 -57.1Q-75.75 -50.75 -77.45 -42.75Q-82.9 -41.75 -88 -39.65Q-87.65 -46.65 -86.3 -53.05Q-79.8 -89.8 -36.65 -117.2Q-80.65 -94.5 -87.55 -59.55Q-88.65 -54.15 -88.95 -39.4L-89.8 -38.85L-92.7 -37.6Q-93.75 -44.35 -94.1 -51.15Q-94.4 -58.2 -93.25 -65.1Q-92.15 -72.5 -90.05 -79.65Q-88.05 -86.55 -85 -93Q-82.1 -99.3 -78.45 -105.15Q-74.6 -111.35 -70.25 -117.25Q-65.95 -123.1 -61.1 -128.55Q-70.3 -119.35 -77.9 -108.7Q-86 -97.3 -90.8 -84.05Q-95.8 -70.5 -96 -56.15Q-96.1 -46 -94.05 -36.05L-93.25 -31.55Q-93.5 -35.65 -92.35 -36Q-79.85 -42 -66.6 -40.45Q-52.45 -38.85 -39.2 -33.25Q-28.3 -29.9 -21.25 -24.15Q-17.8 -23.3 -8.6 -15.6Q-12.1 -20.75 -16.75 -24.5Q-24.55 -30.7 -34.25 -34.05L-42.55 -37Q-38.9 -41.25 -31.5 -43.25Q-24.05 -45.3 -16.2 -46.3Q-8.35 -47.35 -1 -46Q5.95 -44.75 12.75 -42.85Q19.85 -40.9 29.75 -36.85M-92.45,-27.35L-94.95 -36.25Q-109.7 -105 -27.95 -154.65Q-98.65 -103.8 -91.75 -39.4L-89.95 -40.2Q-92.2 -105.25 -5.6 -130.9Q-78.8 -99.95 -87.45 -40.9Q-83.15 -42.95 -78.45 -43.95Q-70 -101.3 17.65 -103.8Q-56.9 -93.4 -74.5 -44.55L-67.4 -45.45Q-49.1 -94.95 39.25 -75.65Q-36.75 -84.35 -62.25 -44.25L-57.3 -43.6Q-31.65 -86.5 56.15 -46.05Q-20.3 -73.35 -51.35 -41.7L-45.95 -39.75Q-17.85 -71.35 51.85 -24.8Q-8.7 -56.4 -39.75 -37.05Q-28.15 -34.05 -14.25 -24.45Q-8.6 -19.85 -5.8 -16.95Q5.95 -2.4 20 0Q5.95 2.4 -5.8 16.95Q-8.6 19.85 -14.25 24.45Q-28.15 34.05 -39.75 37.05Q-8.7 56.4 51.85 24.8Q-17.85 71.35 -45.95 39.75L-51.35 41.7Q-20.3 73.35 56.15 46.1Q-31.65 86.5 -57.3 43.65L-62.25 44.3Q-36.75 84.35 39.25 75.7Q-49.1 94.95 -67.4 45.5L-74.5 44.6Q-56.9 93.4 17.65 103.85Q-70 101.3 -78.45 43.95Q-83.15 42.95 -87.45 40.9Q-78.8 99.95 -5.6 130.9Q-92.2 105.25 -89.95 40.25L-91.75 39.4Q-98.65 103.8 -27.95 154.65Q-109.7 105 -94.95 36.3L-92.45 27.35Q-93.05 33.9 -92.05 34.75Q-91.1 35.55 -88.95 36.7L-87.95 37Q-83.7 38.25 -79.05 38.8L-77.25 38.95Q-72.55 39.3 -67.5 38.85L-65.45 38.65Q-44.4 36.05 -17.8 19.6Q-9.9 12.8 -15.15 4.4Q-18.15 3.15 -19 0Q-18.15 -3.15 -15.15 -4.4Q-9.9 -12.8 -17.8 -19.6L-17.8 -19.55Q-44.4 -36.05 -65.45 -38.6L-67.5 -38.8Q-72.55 -39.3 -77.25 -38.95L-79.05 -38.75Q-83.7 -38.25 -87.95 -36.95L-88.95 -36.65Q-91.1 -35.55 -92.05 -34.7Q-93.05 -33.9 -92.45 -27.35M-8.6,15.6Q-17.8 23.3 -21.25 24.2Q-28.3 29.9 -39.2 33.3Q-52.45 38.85 -66.6 40.5Q-79.85 42 -92.35 36Q-93.5 35.65 -93.25 31.55L-94.05 36.1Q-96.1 46.05 -96 56.15Q-95.8 70.5 -90.8 84.1Q-86 97.3 -77.9 108.75Q-70.3 119.35 -61.1 128.6Q-65.95 123.1 -70.25 117.25Q-74.6 111.35 -78.45 105.15Q-82.1 99.3 -85 93Q-88.05 86.55 -90.05 79.7Q-92.15 72.5 -93.25 65.1Q-94.4 58.2 -94.1 51.2Q-93.75 44.35 -92.7 37.6L-89.8 38.9L-88.95 39.45Q-88.65 54.15 -87.55 59.55Q-80.65 94.5 -36.65 117.25Q-79.8 89.8 -86.3 53.1Q-87.65 46.65 -88 39.65Q-82.9 41.75 -77.45 42.75Q-75.75 50.75 -73.65 57.15Q-63.75 86.35 -17 98.3Q-24.05 95.95 -30.6 92.75L-43.65 85.9Q-49.9 82.35 -55.45 77.6Q-60.8 73 -64.8 67.15Q-68.9 61.25 -71.85 54.85Q-74.6 49.1 -76.35 42.95L-70.55 43.6L-67 43.6Q-62.95 52.1 -60.5 55.4L-56.8 60.35Q-54.55 63.35 -48.8 66.9Q-43.05 70.4 -36.5 73Q-29.85 75.65 -22.85 77.15Q-16.2 78.55 -9.45 79.15Q-2.2 79.8 5.1 79.35Q-45.9 75.55 -60.6 50.3L-64.7 43.4L-56.05 41.95Q-53.85 45.65 -50.25 50Q-32.2 72.1 21 57.85Q-34.85 68.4 -51.15 44.85L-53.7 41.2L-45.35 38.35L-42.05 40.95Q-17.75 61.45 29.75 36.85Q19.85 40.9 12.75 42.9Q5.95 44.75 -1 46Q-8.35 47.35 -16.2 46.35Q-24.05 45.3 -31.5 43.3Q-38.9 41.25 -42.55 37.05L-34.25 34.05Q-24.55 30.7 -16.75 24.5Q-12.1 20.75 -8.6 15.6" />
            </g>
          </g>
          
          <g id="Espina">
            <linearGradient id="LinearGradID_2" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0229492, 0, 0, -0.0152893, 0, 0.05)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">
              <stop offset="0" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
            <path fill="url(#LinearGradID_2)" d="M-18.8,0Q-17.85 -5.7 -12.3 -9.6Q-11.2 -5.35 -6.5 -8.25L-6.45 -8.2L-6.2 -8.3Q1.25 -16.25 6.65 -12.4Q0.05 -12.55 0 -5.95Q2.7 -2.4 7.75 -4.1Q18 -1.45 18.8 0L-18.8 0" />
            
            <linearGradient id="LinearGradID_3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0229492, 0, 0, 0.0152893, 0, -0.05)" spreadMethod="pad" x1="-819.2" y1="0" x2="819.2" y2="0">
              <stop offset="0" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
            <path fill="url(#LinearGradID_3)" d="M18.8,0Q18 1.45 7.75 4.1Q2.7 2.4 0 5.95Q0.05 12.55 6.65 12.4Q1.25 16.25 -6.2 8.35Q-6.35 8.25 -6.45 8.25L-6.5 8.25Q-11.2 5.35 -12.3 9.6Q-17.85 5.7 -18.8 0L18.8 0" />
          </g>
        </defs>

        <g filter="url(#dragonGlow)">
          {Array.from({ length: N - 1 }).map((_, idx) => {
            const i = idx + 1;
            let href = "#Espina";
            if (i === 1) href = "#Cabeza";
            else if (i === 6 || i === 12) href = "#Aletas"; 
            
            return (
              <use 
                key={i}
                ref={el => useRefs.current[i] = el}
                href={href}
                opacity={0}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
