import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SkillCard from '../components/SkillCard'

// React Icons
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaArrowRight } from 'react-icons/fa6'
import { SiJavascript, SiSpringboot, SiExpress, SiMongodb, SiMysql, SiGooglecolab } from 'react-icons/si'
import { TbDatabase, TbApi, TbNetwork, TbCpu } from 'react-icons/tb'
import { VscDebugDisconnect, VscVscode } from 'react-icons/vsc'
// Soft skills
import { MdOutlineSpeed, MdOutlinePsychology, MdOutlineGroup, MdOutlineChat, MdOutlineLightbulb } from 'react-icons/md'

const allSkills = {
  'Programming': [
    { icon: <FaJava />, title: 'Java', desc: 'Primary language, OOP, Collections' },
    { icon: <FaPython />, title: 'Python', desc: 'Basic syntax, scripting', level: 'Basic' },
    { icon: <SiJavascript />, title: 'JavaScript', desc: 'ES6+, Async, DOM manipulation' }
  ],
  'Frontend': [
    { icon: <FaReact />, title: 'React.js', desc: 'Hooks, Components, SPA' },
    { icon: <FaHtml5 />, title: 'HTML5', desc: 'Semantic markup, accessibility' },
    { icon: <FaCss3Alt />, title: 'CSS3', desc: 'Responsive design, Flexbox/Grid' }
  ],
  'Backend': [
    { icon: <SiSpringboot />, title: 'Spring Boot', desc: 'REST APIs, MVC, Security' },
    { icon: <FaNodeJs />, title: 'Node.js', desc: 'Server-side JavaScript runtime' },
    { icon: <SiExpress />, title: 'Express.js', desc: 'RESTful APIs, Middleware' },
    { icon: <TbApi />, title: 'REST APIs', desc: 'Design and implementation' },
    { icon: <TbDatabase />, title: 'JDBC', desc: 'Database connectivity' }
  ],
  'Databases': [
    { icon: <SiMongodb />, title: 'MongoDB', desc: 'NoSQL, Aggregations' },
    { icon: <SiMysql />, title: 'MySQL', desc: 'Relational database, CRUD' },
    { icon: <TbDatabase />, title: 'Database Design', desc: 'Schema optimization' }
  ],
  'Development Tools': [
    { icon: <FaGitAlt />, title: 'Git', desc: 'Version control, branching' },
    { icon: <FaGithub />, title: 'GitHub', desc: 'Collaboration, CI/CD' },
    { icon: <VscVscode />, title: 'VS Code', desc: 'Primary IDE environment' },
    { icon: <SiGooglecolab />, title: 'Google Colab', desc: 'Cloud computation' }
  ],
  'Computer Science': [
    { icon: <VscDebugDisconnect />, title: 'Data Structures', desc: 'Arrays, Trees, Graphs, Hash' },
    { icon: <TbCpu />, title: 'Operating Systems', desc: 'Process management, scheduling' },
    { icon: <TbNetwork />, title: 'Networking', desc: 'TCP/IP, HTTP protocols' },
    { icon: <TbCpu />, title: 'Threading', desc: 'Concurrent programming models' }
  ],
  'Soft Skills': [
    { icon: <MdOutlineSpeed />, title: 'Fast Learner', desc: 'Quick adaptation to new tech' },
    { icon: <MdOutlinePsychology />, title: 'Problem Solving', desc: 'Analytical approach to challenges' },
    { icon: <MdOutlineChat />, title: 'Communication', desc: 'Clear and effective interaction' },
    { icon: <MdOutlineGroup />, title: 'Team-Oriented', desc: 'Collaborative execution' },
    { icon: <MdOutlineLightbulb />, title: 'Innovative Thinking', desc: 'Creative solution design' }
  ]
}

export default function Skills() {
  const [tab, setTab] = useState('Programming')

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen py-16 text-gray-900 dark:text-gray-100 relative overflow-hidden">

      {/* Background Ambient Glow */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent pb-2"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Technologies, tools and technical areas I use to design and build digital solutions.
          </motion.p>
        </div>

        {/* CORE STACK HIGHLIGHT */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-20 bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm text-center"
        >
          <h3 className="text-xl font-bold mb-6">My Core Stack</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 group skill-card-hover cursor-default">
              <FaJava className="text-5xl text-[#f89820] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Java</span>
            </div>
            <div className="flex flex-col items-center gap-3 group skill-card-hover cursor-default">
              <SiSpringboot className="text-5xl text-[#6db33f] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center gap-3 group skill-card-hover cursor-default">
              <FaReact className="text-5xl text-[#61DAFB] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">React</span>
            </div>
            <div className="flex flex-col items-center gap-3 group skill-card-hover cursor-default">
              <FaNodeJs className="text-5xl text-[#339933] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 group skill-card-hover cursor-default">
              <SiMongodb className="text-5xl text-[#47A248] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">MongoDB</span>
            </div>
          </div>
        </motion.div>

        {/* SKILLS FILTER */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(allSkills).map(k => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`relative px-5 py-2.5 rounded-full font-semibold transition-colors duration-300 skill-card-hover ${tab === k ? 'text-white' : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                  }`}
              >
                {tab === k && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"
                    style={{ zIndex: -1 }}
                  />
                )}
                <span className="relative z-10">{k}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allSkills[tab].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="skill-card-hover"
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SKILL RELATIONSHIPS */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-24 mb-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">How They Connect</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-white/30 dark:bg-gray-800/30 p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md">

            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors skill-card-hover cursor-default">
              <FaReact className="text-5xl text-[#61DAFB] group-hover:scale-110 transition-transform" />
              <span className="font-bold">Frontend</span>
            </div>

            <div className="hidden md:flex text-gray-400">
              <FaArrowRight />
            </div>
            <div className="md:hidden text-gray-400 rotate-90 my-2">
              <FaArrowRight />
            </div>

            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors skill-card-hover cursor-default">
              <TbApi className="text-5xl text-purple-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold">REST APIs</span>
            </div>

            <div className="hidden md:flex text-gray-400">
              <FaArrowRight />
            </div>
            <div className="md:hidden text-gray-400 rotate-90 my-2">
              <FaArrowRight />
            </div>

            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors skill-card-hover cursor-default">
              <SiSpringboot className="text-5xl text-[#6db33f] group-hover:scale-110 transition-transform" />
              <span className="font-bold">Backend</span>
            </div>

            <div className="hidden md:flex text-gray-400">
              <FaArrowRight />
            </div>
            <div className="md:hidden text-gray-400 rotate-90 my-2">
              <FaArrowRight />
            </div>

            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors skill-card-hover cursor-default">
              <div className="flex gap-2">
                <SiMongodb className="text-5xl text-[#47A248] group-hover:scale-110 transition-transform" />
                <SiMysql className="text-5xl text-[#00758F] group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-bold">Database</span>
            </div>

          </div>
        </motion.div>

        {/* ALWAYS LEARNING & CTAS */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Technology keeps evolving, and so do I. I continue exploring new tools, improving my fundamentals and building projects that strengthen my development skills.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Want to see these skills in action?</h4>
              <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors skill-card-hover">
                View My Work <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-accent to-purple-600 rounded-2xl p-8 shadow-lg text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Need something built?</h3>
            <p className="text-white/90 leading-relaxed mb-8 text-lg">
              These technologies are the foundation I use to build modern websites and custom web applications.
            </p>
            <div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all skill-card-hover">
                Start a Project <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
