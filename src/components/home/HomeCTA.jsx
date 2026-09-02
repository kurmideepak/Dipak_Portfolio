import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="py-32 relative overflow-hidden z-10 w-full">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5 border border-blue-200/50 dark:border-white/5 backdrop-blur-sm relative shadow-[0_8px_32px_rgba(37,99,235,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Subtle cosmic glow behind the section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
          <motion.div 
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" 
          />
          <motion.div 
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" 
          />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm relative z-10">
            Have an idea? <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Let's build it.</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 relative z-10">
            Tell me what you want to build and let's discuss how I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link 
              to="/contact" 
              className="group relative px-10 py-4 rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white text-lg font-bold shadow-[0_8px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden inline-block text-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative drop-shadow-sm flex items-center justify-center gap-2">
                Start a Project
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >→</motion.span>
              </span>
            </Link>
            
            <Link 
              to="/projects"
              className="px-10 py-4 rounded-full bg-white/50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 text-gray-800 dark:text-white text-lg font-bold backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 shadow-sm text-center focus:ring-2 focus:ring-blue-500 outline-none hover:border-blue-300/50 dark:hover:border-blue-400/50 inline-block"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
