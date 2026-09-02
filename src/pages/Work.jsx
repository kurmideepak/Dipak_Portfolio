import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const projectsData = [
  { 
    title: 'Chat App', 
    description: 'Full stack real-time chat application (frontend + backend).', 
    stack:['React','Node.js','Socket.io'], 
    image: '/assets/project1.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-',
    category: 'Web'
  },
  { 
    title: 'Learning Management System', 
    description: 'A platform for managing courses, students and instructors.', 
    stack:['React','Spring Boot','MySQL'], 
    image: '/assets/project2.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/Learning-Management-System',
    category: 'Applications'
  },
  { 
    title: 'Tik Tac Toe (Android)', 
    description: 'Classic Tic-Tac-Toe game implemented in Android (Java).', 
    stack:['Java','Android'], 
    image: '/assets/project3.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/Tik-Tac-Toe-Game-By-android-studio-Java-Project-',
    category: 'Android'
  },
  { 
    title: 'To-Do List App', 
    description: 'Simple and intuitive To-Do list application with persistence.', 
    stack:['React','LocalStorage'], 
    image: '/assets/project4.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/To-Do-List-app',
    category: 'Web'
  },
  { 
    title: 'Weather Forecast', 
    description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.', 
    stack:['JavaScript','API'], 
    image: '/assets/project5.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/Weather-Forecast',
    category: 'Web'
  },
  { 
    title: 'Netflix Clone', 
    description: 'A Netflix-style frontend clone showcasing movies and trailers.', 
    stack:['React','TMDB API'], 
    image: '/assets/project6.svg', 
    demo:'#', 
    code: 'https://github.com/kurmideepak/Netflix-Clone',
    category: 'Web'
  }
]

const categories = ['All', 'Web', 'Applications', 'Android']

export default function Work() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = projectsData.filter(project => filter === 'All' || project.category === filter)

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="work" className="relative z-10 w-full overflow-hidden min-h-screen py-24 flex flex-col justify-center">
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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            A selection of projects that demonstrate what I can build.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-600 dark:text-gray-300 bg-white/40 dark:bg-white/[0.03] hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[linear-gradient(135deg,#2563eb,#06b6d4)] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
