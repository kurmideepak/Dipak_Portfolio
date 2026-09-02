import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/profile.jpeg';
import { FaCode } from 'react-icons/fa';

export default function HomeAbout() {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 min-h-screen flex items-center z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <motion.div 
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            Behind the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-64 sm:w-72 md:w-full md:max-w-[320px] aspect-[4/5] mx-auto group">
              {/* Glowing animated blur behind the image */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Continuously changing gradient border */}
              <motion.div 
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="relative w-full h-full rounded-3xl p-[4px] bg-[length:200%_auto] shadow-[0_0_30px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-shadow duration-500 z-10"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)'
                }}
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-gray-900">
                  <img 
                    src={profileImg} 
                    alt="Dipak Kurmi" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dipak Kurmi</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                <FaCode /> Full Stack Developer & Web Application Developer
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              I am an enthusiastic developer who specializes in building scalable web applications and modern websites. I love translating complex problems into clean, intuitive, and high-performance digital experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-8">
              Whether you need a sleek business portfolio, a comprehensive full-stack application, or performance improvements to an existing platform, I focus on delivering real-world value through code.
            </p>
            
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/40 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 text-gray-900 dark:text-white font-bold group"
            >
              More About Me
              <motion.span 
                className="text-blue-500 dark:text-blue-400"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >→</motion.span>
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
