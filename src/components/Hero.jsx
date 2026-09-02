import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useAnimationFrame } from 'framer-motion';

const TYPEWRITER_WORDS = ["Custom Software Solutions", "Modern Digital Experiences", "Responsive Landing Pages", "Scalable SaaS Architectures"];
const TYPEWRITER_COLORS = [
  "from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400", 
  "from-purple-600 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-300 dark:to-red-400", 
  "from-emerald-500 via-teal-400 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400", 
  "from-orange-500 via-amber-400 to-yellow-500 dark:from-orange-400 dark:via-amber-300 dark:to-yellow-400" 
];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    if (subIndex === TYPEWRITER_WORDS[index].length + 1) {
      const timeout = setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, Math.max(40, parseInt(Math.random() * 80)));

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${TYPEWRITER_COLORS[index]} drop-shadow-sm transition-colors duration-500 whitespace-nowrap lg:whitespace-normal`}>
      {`${TYPEWRITER_WORDS[index].substring(0, subIndex)}`}
      <span className={`inline-block w-[3px] md:w-[4px] h-[0.9em] bg-gray-900 dark:bg-white ml-1 md:ml-2 align-baseline rounded-full transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiSpringboot, SiMongodb } from 'react-icons/si';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';

const TechBadge = ({ icon: Icon, name, color, smoothX, smoothY, depth }) => {
  const prefersReducedMotion = useReducedMotion();
  const x = useTransform(smoothX, (v) => prefersReducedMotion ? 0 : v * depth);
  const y = useTransform(smoothY, (v) => prefersReducedMotion ? 0 : v * depth);

  return (
    <motion.div
      style={{ x, y }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-lg transition-all duration-300 group hover:border-blue-300/50 dark:hover:border-blue-400/30"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon className="text-lg drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300" style={{ color }} />
      </motion.div>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors drop-shadow-sm">{name}</span>
    </motion.div>
  );
};

const SocialBtn = ({ icon: Icon, href, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3); // subtle magnetic pull
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative group p-3.5 rounded-full bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 shadow-sm"
      aria-label={label}
    >
      <Icon className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
      
      <motion.div 
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-md -z-10" 
      />
      
      {/* Tooltip */}
      <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform origin-bottom px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-gray-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap z-50">
        {label}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90 dark:border-t-white/90" />
      </div>
    </motion.a>
  );
};

const OrbitingTech = ({ icon: Icon, color, angleOffset, radius, speed, isHovered, prefersReducedMotion }) => {
  const angle = useMotionValue(angleOffset);
  
  useAnimationFrame((t, delta) => {
    if (prefersReducedMotion) return;
    const currentSpeed = isHovered ? speed * 0.15 : speed; // significantly slower on hover
    const move = (currentSpeed * delta) / 1000;
    angle.set(angle.get() + move);
  });

  const x = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius);
  const y = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * radius);

  return (
    <motion.div
      style={{ x, y }}
      className="absolute top-1/2 left-1/2 -ml-6 -mt-6 pointer-events-auto"
    >
      <motion.div 
        whileHover={{ scale: 1.15 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/[0.05] backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-blue-300/50 dark:hover:border-white/20"
      >
        <Icon className="text-2xl drop-shadow-md" style={{ color }} />
        <div className="absolute inset-0 blur-xl opacity-30 dark:opacity-40 rounded-full" style={{ backgroundColor: color }} />
      </motion.div>
    </motion.div>
  );
};

const InteractiveProfile = ({ smoothX, smoothY }) => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const pX = useTransform(smoothX, (v) => prefersReducedMotion ? 0 : v * -0.4);
  const pY = useTransform(smoothY, (v) => prefersReducedMotion ? 0 : v * -0.4);

  return (
    <motion.div 
      style={{ x: pX, y: pY }}
      className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] mx-auto mt-12 lg:mt-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Aurora Light Effect / Profile Halo */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-[140%] h-[140%] rounded-full bg-cyan-500/20 blur-3xl mix-blend-screen dark:mix-blend-lighten"
        />
        <motion.div 
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute w-[120%] h-[120%] rounded-full bg-blue-500/20 blur-3xl mix-blend-screen dark:mix-blend-lighten"
        />
        <motion.div 
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-[130%] h-[130%] rounded-full bg-purple-500/10 blur-3xl mix-blend-screen dark:mix-blend-lighten"
        />
        <motion.div 
          animate={{ opacity: isHovered ? 0.2 : 0.1 }}
          transition={{ duration: 0.8 }}
          className="absolute w-[90%] h-[90%] rounded-full bg-white/20 dark:bg-white/10 blur-2xl"
        />
      </div>
      
      {/* Animated Gradient Border Ring */}
      <motion.div 
        animate={{ 
          backgroundPosition: prefersReducedMotion ? '0% 50%' : ['0% 50%', '100% 50%', '0% 50%'],
          scale: isHovered ? 1.03 : 1
        }}
        transition={{ 
          backgroundPosition: { repeat: Infinity, duration: 8, ease: "linear" },
          scale: { duration: 0.5, ease: "easeOut" }
        }}
        className="relative w-full h-full rounded-full p-[3px] shadow-2xl z-10 bg-[length:200%_auto]"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #a855f7, #ec4899, #3b82f6)'
        }}
      >
        <div className="w-full h-full rounded-full bg-white/50 dark:bg-[#07111F]/80 backdrop-blur-md p-1.5">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/60 dark:border-white/10 relative shadow-inner">
            <motion.img 
              animate={{ scale: isHovered ? 1.06 : 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={profileImg} 
              alt="Dipak Kurmi" 
              className="w-full h-full object-cover object-top"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 mix-blend-overlay pointer-events-none" 
            />
          </div>
        </div>
      </motion.div>

      {/* Orbital Tech System */}
      <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
        <OrbitingTech icon={FaJava} color="#f89820" angleOffset={0} radius={210} speed={12} isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />
        <OrbitingTech icon={FaReact} color="#61DBFB" angleOffset={72} radius={195} speed={16} isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />
        <OrbitingTech icon={FaNodeJs} color="#68A063" angleOffset={144} radius={220} speed={14} isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />
        <OrbitingTech icon={SiMongodb} color="#4DB33D" angleOffset={216} radius={205} speed={18} isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />
        <OrbitingTech icon={SiSpringboot} color="#6db33f" angleOffset={288} radius={190} speed={13} isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />
      </div>

      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 -right-4 md:right-4 bg-white/80 dark:bg-white/[0.05] backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center gap-2 z-30 pointer-events-auto hover:border-blue-200 dark:hover:border-white/20 transition-colors duration-300"
      >
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <motion.span 
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inline-flex h-full w-full rounded-full bg-green-400"
          />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        </div>
        <span className="text-xs font-bold text-gray-800 dark:text-gray-200 tracking-wide">Available for New Projects</span>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    if (window.innerWidth >= 768) {
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      mouseX.set(x * 20); 
      mouseY.set(y * 20);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] } }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200/50 dark:border-blue-500/30 shadow-sm backdrop-blur-md">
              <span className="animate-wave text-lg origin-bottom-right inline-block">👋</span> 
              <span>Hi, I'm Dipak Kurmi</span>
              <span className="opacity-40 mx-1">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 font-bold tracking-wide">Software Engineer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 leading-tight">
              I Build Modern <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 drop-shadow-sm">
                Websites & Web Applications
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 min-h-[32px] sm:min-h-[36px]">
              Specializing in <TypewriterEffect />
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed font-medium drop-shadow-sm">
              I partner with forward-thinking businesses and startups to turn ambitious ideas into highly performant, scalable, and visually stunning digital products.
            </motion.p>
            
            {/* Service Labels */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors cursor-default">✨ Custom Development</span>
              <span className="px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors cursor-default">⚡ High Performance</span>
              <span className="px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/10 text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors cursor-default">📱 Responsive Design</span>
            </motion.div>

            {/* CTA & Socials */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start mb-10">
              <div className="flex gap-4 w-full sm:w-auto">
                <Link to="/projects">
                  <motion.button 
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto group relative px-8 py-3.5 rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white font-bold shadow-[0_8px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative flex items-center justify-center gap-2 drop-shadow-sm">
                      View My Work
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>→</motion.span>
                    </span>
                  </motion.button>
                </Link>
                
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto relative group px-8 py-3.5 rounded-full bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 text-gray-800 dark:text-white font-bold backdrop-blur-md hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 shadow-sm text-center focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300/50 dark:hover:border-blue-400/50"
                  >
                    <span className="relative drop-shadow-sm">Start a Project</span>
                  </motion.button>
                </Link>
              </div>
              
              <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-2">
                <SocialBtn icon={FaGithub} href="https://github.com/kurmideepak" label="GitHub" />
                <SocialBtn icon={FaLinkedin} href="https://www.linkedin.com/in/dipak-kurmi-cse" label="LinkedIn" />
                <SocialBtn icon={FaEnvelope} href="mailto:dipakkurmi@example.com" label="Email" />
              </div>
            </motion.div>

            {/* Tech Badges with Parallax */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3">
              <TechBadge icon={FaJava} name="Java" color="#f89820" smoothX={smoothX} smoothY={smoothY} depth={0.6} />
              <TechBadge icon={SiSpringboot} name="Spring Boot" color="#6db33f" smoothX={smoothX} smoothY={smoothY} depth={0.4} />
              <TechBadge icon={FaReact} name="React" color="#61DAFB" smoothX={smoothX} smoothY={smoothY} depth={0.7} />
              <TechBadge icon={FaNodeJs} name="Node.js" color="#339933" smoothX={smoothX} smoothY={smoothY} depth={0.5} />
              <TechBadge icon={SiMongodb} name="MongoDB" color="#47A248" smoothX={smoothX} smoothY={smoothY} depth={0.65} />
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-end pb-10 lg:pb-0"
          >
            <InteractiveProfile smoothX={smoothX} smoothY={smoothY} />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none z-20"
        >
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase drop-shadow-sm">Scroll to explore</span>
          <motion.div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
