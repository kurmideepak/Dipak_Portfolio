import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard';

const featuredProjects = [
  { title: 'Chat App', description: 'Full stack real-time chat application (frontend + backend).', stack:['React','Node.js','Socket.io'], image: '/assets/project1.svg', demo:'#', code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-' },
  { title: 'Learning Management System', description: 'A platform for managing courses, students and instructors.', stack:['React','Spring Boot','MySQL'], image: '/assets/project2.svg', demo:'#', code: 'https://github.com/kurmideepak/Learning-Management-System' },
  { title: 'Weather Forecast', description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.', stack:['JavaScript','API'], image: '/assets/project5.svg', demo:'#', code: 'https://github.com/kurmideepak/Weather-Forecast' }
];

export default function HomeWork() {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-24 min-h-screen flex items-center z-10 w-full overflow-hidden bg-gray-50/50 dark:bg-[#030712]/50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium drop-shadow-sm">
            A few projects that demonstrate what I can build.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white font-bold shadow-[0_8px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative drop-shadow-sm flex items-center gap-2">
              View All Projects
              <motion.span 
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >→</motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
