import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaJava, FaReact, FaNodeJs, FaAndroid, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaBrain, FaUsers } from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiExpress, SiPython, SiHtml5, SiCss3, SiMysql, SiGit } from 'react-icons/si'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import SkillCard from '../components/SkillCard'

const skillCategories = [
  { id: 'programming', label: 'Programming', icon: <FaCode /> },
  { id: 'frameworks', label: 'Frameworks', icon: <FaServer /> },
  { id: 'mobile_web', label: 'Web & Mobile', icon: <FaMobileAlt /> },
  { id: 'databases', label: 'Databases', icon: <FaDatabase /> },
  { id: 'tools', label: 'Tools', icon: <FaTools /> },
  { id: 'cs', label: 'CS Core', icon: <FaBrain /> },
  { id: 'soft', label: 'Soft Skills', icon: <FaUsers /> },
]

const skillsData = {
  programming: [
    { title: 'Java', icon: <FaJava />, desc: 'Core language for backend and Android development', level: 'Advanced' },
    { title: 'Python', icon: <SiPython />, desc: 'Scripting and data structures', level: 'Basic' },
  ],
  frameworks: [
    { title: 'Spring Boot', icon: <SiSpringboot />, desc: 'REST APIs and microservices', level: 'Advanced' },
    { title: 'React.js', icon: <FaReact />, desc: 'Interactive frontend UIs', level: 'Intermediate' },
    { title: 'Node.js', icon: <FaNodeJs />, desc: 'Server-side JavaScript', level: 'Intermediate' },
    { title: 'Express.js', icon: <SiExpress />, desc: 'Web framework for Node.js', level: 'Intermediate' },
  ],
  mobile_web: [
    { title: 'Android Dev', icon: <FaAndroid />, desc: 'Native Java Android applications', level: 'Basic' },
    { title: 'HTML5', icon: <SiHtml5 />, desc: 'Semantic markup', level: 'Advanced' },
    { title: 'CSS3', icon: <SiCss3 />, desc: 'Responsive styling & animations', level: 'Advanced' },
  ],
  databases: [
    { title: 'MySQL', icon: <SiMysql />, desc: 'Relational database management', level: 'Intermediate' },
    { title: 'MongoDB', icon: <SiMongodb />, desc: 'NoSQL document database', level: 'Intermediate' },
  ],
  tools: [
    { title: 'Git', icon: <SiGit />, desc: 'Version control system', level: 'Intermediate' },
    { title: 'GitHub', icon: <FaGithub />, desc: 'Code hosting and collaboration', level: 'Intermediate' },
  ],
  cs: [
    { title: 'Data Structures', icon: <FaBrain />, desc: 'Efficient data organization and algorithms' },
    { title: 'Threading Models', icon: <FaBrain />, desc: 'Concurrency and multithreading' },
    { title: 'OS Concepts', icon: <FaBrain />, desc: 'Memory management and processes' },
    { title: 'REST API', icon: <FaBrain />, desc: 'Representational state transfer architecture' },
  ],
  soft: [
    { title: 'Fast Learner', icon: <FaUsers />, desc: 'Quickly adapt to new technologies' },
    { title: 'Problem Solving', icon: <FaUsers />, desc: 'Analytical approach to debugging' },
    { title: 'Team-Oriented', icon: <FaUsers />, desc: 'Collaborative development' },
  ]
}

const projectsData = [
  { title: 'Chat App', description: 'Full stack real-time chat application (frontend + backend).', stack:['React','Node.js','Socket.io'], image: '/assets/project1.svg', demo:'#', code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-' },
  { title: 'Learning Management System', description: 'A platform for managing courses, students and instructors.', stack:['React','Spring Boot','MySQL'], image: '/assets/project2.svg', demo:'#', code: 'https://github.com/kurmideepak/Learning-Management-System' },
  { title: 'Tik Tac Toe (Android)', description: 'Classic Tic-Tac-Toe game implemented in Android (Java).', stack:['Java','Android'], image: '/assets/project3.svg', demo:'#', code: 'https://github.com/kurmideepak/Tik-Tac-Toe-Game-By-android-studio-Java-Project-' },
  { title: 'To-Do List App', description: 'Simple and intuitive To-Do list application with persistence.', stack:['React','LocalStorage'], image: '/assets/project4.svg', demo:'#', code: 'https://github.com/kurmideepak/To-Do-List-app' },
  { title: 'Weather Forecast', description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.', stack:['JavaScript','API'], image: '/assets/project5.svg', demo:'#', code: 'https://github.com/kurmideepak/Weather-Forecast' },
  { title: 'Netflix Clone', description: 'A Netflix-style frontend clone showcasing movies and trailers.', stack:['React','TMDB API'], image: '/assets/project6.svg', demo:'#', code: 'https://github.com/kurmideepak/Netflix-Clone' }
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <main className="relative z-10 w-full overflow-hidden">
      <Hero />

      {/* SKILLS SECTION */}
      <section id="skills" className="relative py-24 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
              Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical toolkit and competencies.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-300 bg-white/40 dark:bg-white/[0.03] hover:bg-white/60 dark:hover:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 hover:border-blue-300/50 dark:hover:border-blue-400/30'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[linear-gradient(135deg,#2563eb,#06b6d4)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="z-10 drop-shadow-sm">{cat.icon}</span>
                <span className="z-10 drop-shadow-sm">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skillsData[activeCategory].map(skill => (
                  <motion.div key={skill.title} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A selection of my recent work, side projects, and open-source contributions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => (
              <motion.div key={project.title} variants={itemVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
              Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Great</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind, an opportunity, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 bg-white/40 dark:bg-white/[0.03] p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-200/50 dark:border-white/10 backdrop-blur-md h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 flex-grow">
                <a href="mailto:dipakkurmi@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">dipakkurmi@example.com</div>
                  </div>
                </a>
                
                <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <FaGithub className="text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">GitHub</div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">github.com/kurmideepak</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">LinkedIn</div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">linkedin.com/in/dipak-kurmi-cse</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white/40 dark:bg-white/[0.03] p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-200/50 dark:border-white/10 backdrop-blur-md"
            >
              <ContactForm />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5 border border-blue-200/50 dark:border-white/5 backdrop-blur-sm relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight drop-shadow-sm">
              Let's create something <span className="italic font-serif text-blue-600 dark:text-blue-400">meaningful.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-3 rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white font-bold shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-1">
                Start a Conversation
              </a>
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
          </motion.div>
        </div>
      </section>

    </main>
  )
}
