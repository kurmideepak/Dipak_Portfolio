import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Chat App',
    description: 'Full stack real-time chat application (frontend + backend).',
    stack: ['React','Node.js','Socket.io'],
    image: '/assets/project1.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-',
    category: 'Full Stack'
  },
  {
    title: 'Learning Management System',
    description: 'A platform for managing courses, students and instructors.',
    stack: ['React','Spring Boot','MySQL'],
    image: '/assets/project2.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Learning-Management-System',
    category: 'Full Stack'
  },
  {
    title: 'Tik Tac Toe (Android)',
    description: 'Classic Tic-Tac-Toe game implemented in Android (Java).',
    stack: ['Java','Android'],
    image: '/assets/project3.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Tik-Tac-Toe-Game-By-android-studio-Java-Project-',
    category: 'Mobile'
  },
  {
    title: 'To-Do List App',
    description: 'Simple and intuitive To-Do list application with persistence.',
    stack: ['React','LocalStorage'],
    image: '/assets/project4.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/To-Do-List-app',
    category: 'Frontend'
  },
  {
    title: 'Weather Forecast',
    description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.',
    stack: ['JavaScript','API'],
    image: '/assets/project5.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Weather-Forecast',
    category: 'Frontend'
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix-style frontend clone showcasing movies and trailers.',
    stack: ['React','TMDB API'],
    image: '/assets/project6.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Netflix-Clone',
    category: 'Frontend'
  }
]

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile']
const badges = ['React', 'Spring Boot', 'Node.js', 'MongoDB', 'MySQL', 'Java', 'JavaScript']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter)
  
  const featuredProject = filteredProjects.length > 0 ? filteredProjects[0] : null
  const remainingProjects = filteredProjects.slice(1)

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen py-16 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      
      {/* Subtle Background Effects */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16 pt-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent pb-4 tracking-tight"
          >
            Things I’ve Built
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto font-medium"
          >
            Real projects, experiments, and applications built while exploring modern software development.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            From full-stack applications to mobile and frontend projects, each project represents something I’ve learned, built, and improved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {badges.map((badge, i) => (
              <span key={badge} className="px-4 py-1.5 bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-full text-sm font-semibold backdrop-blur-md shadow-sm project-card-hover animate-pulse" style={{ animationDelay: `${i * 150}ms`, animationDuration: '3s' }}>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/40 dark:bg-gray-800/40 rounded-full border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2 rounded-full font-semibold transition-colors duration-300 text-sm project-card-hover ${
                  filter === cat ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS SHOWCASE */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-20 text-gray-500 dark:text-gray-400"
              >
                <div className="text-4xl mb-4">✨</div>
                <p>No projects in this category yet.</p>
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* FEATURED PROJECT */}
                {featuredProject && (
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="group relative bg-white/60 dark:bg-white/[0.02] rounded-3xl overflow-hidden border border-gray-200/50 dark:border-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row project-card-hover"
                  >
                    <div className="lg:w-3/5 h-64 lg:h-auto relative overflow-hidden bg-gray-100 dark:bg-[#07111F]">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
                      />
                      {featuredProject.image ? (
                        <img 
                          src={featuredProject.image} 
                          alt={featuredProject.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                    </div>
                    
                    <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500" />
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Featured Project</span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        {featuredProject.title}
                      </h3>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                        {featuredProject.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProject.stack.map(s => (
                          <span key={s} className="px-3 py-1 bg-gray-200/50 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-bold shadow-sm group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 group-hover:border-cyan-500/30 border border-transparent transition-colors">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 mt-auto">
                        {featuredProject.demo && featuredProject.demo !== '#' && (
                          <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all project-card-hover border border-gray-200/50 dark:border-gray-700">
                            Live Demo <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                        {featuredProject.code && (
                          <a href={featuredProject.code} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all project-card-hover">
                            <FaGithub className="text-lg" /> Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ASYMMETRIC GRID */}
                {remainingProjects.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remainingProjects.map((p, i) => (
                      <div key={p.title} className={i % 4 === 0 && remainingProjects.length > 3 ? "md:col-span-2 lg:col-span-2" : ""}>
                         <ProjectCard project={p} />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-32 mb-10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Have an idea worth building?</h3>
             <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
               Whether you need a website, web application, or a custom digital solution, let’s turn your idea into something real.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] text-white rounded-full font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all project-card-hover text-lg">
                 Start a Project <FaArrowRight />
               </Link>
             </div>
           </div>
        </motion.div>

      </div>
    </main>
  )
}
