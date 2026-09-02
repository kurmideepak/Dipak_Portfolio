import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaAws } from 'react-icons/fa6';
import { SiSpringboot, SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiDocker } from 'react-icons/si';

const techData = [
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'inherit', className: 'text-gray-900 dark:text-white' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'Java', icon: <FaJava />, color: '#f89820' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' }
];

export default function HomeTech() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="relative py-24 z-10 w-full overflow-hidden bg-gray-50/30 dark:bg-[#030712]/30">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
            Technology I <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Work With</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {techData.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-blue-300/50 dark:hover:border-blue-400/30 hover:shadow-lg group"
            >
              <div className={`text-2xl drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 ${tech.className || ''}`} style={tech.color !== 'inherit' ? { color: tech.color } : {}}>
                {tech.icon}
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-200">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
