import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from '../components/ContactForm'

const roles = ['Developer', 'Coder', 'Designer']

function Typing(){
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState('')
  useEffect(()=>{
    let mounted = true
    let i = 0
    let forward = true
    const tick = ()=>{
      if(!mounted) return
      const full = roles[idx]
      if(forward){
        setSub(full.slice(0,i+1))
        i++
        if(i === full.length){
          forward = false
          setTimeout(()=>tick(),1000)
          return
        }
      } else {
        setSub(full.slice(0,i-1))
        i--
        if(i === 0){
          forward = true
          setIdx((p)=> (p+1)%roles.length)
        }
      }
      setTimeout(tick, 120)
    }
    tick()
    return ()=> mounted = false
  },[idx])
  return <span className="text-accent font-semibold">{sub}</span>
}

function InteractiveProfile({ src, size = 256 }){
  const [hovered, setHovered] = useState(false)
  const baseRing = {
    background: 'conic-gradient(from 0deg, #2563EB, #14B8A6, #6366F1, #2563EB)',
    boxShadow: '0 12px 40px rgba(20,184,166,0.18)'
  }

  const ringStyle = hovered ? { ...baseRing, transform: 'scale(1.06)' } : baseRing

  const imgStyle = hovered ? { transform: 'scale(1.12)', transition: 'transform 220ms cubic-bezier(.2,.9,.2,1)' } : { transform: 'scale(1)', transition: 'transform 320ms cubic-bezier(.2,.9,.2,1)' }

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative w-fit group">
      <div style={ringStyle} className="rounded-full p-[3px] shadow-2xl transition-all duration-150">
        <div className="rounded-full bg-white dark:bg-secondary p-2 backdrop-blur-sm">
          <motion.img 
            src={src} 
            alt="profile" 
            className="object-cover rounded-full shadow-lg"
            initial={{ y: 0 }} 
            animate={{ y: [0] }} 
            transition={{ duration: 0.01 }}
            style={{ width: size, height: size, ...imgStyle }}
          />
        </div>
      </div>

      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"/>
    </div>
  )
}

export default function Home(){
  return (
    <main className="pt-20 md:pt-24">
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{delay:0.1}}>
            <p className="text-lg">Hi, I’m <span className="font-bold">Dipak Kurmi</span> 👋</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2">Software Developer | Android & Full Stack Developer</h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">I build efficient, scalable, and user-friendly software solutions.</p>
            <p className="mt-2">I am a <Typing />.</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-4 py-2 bg-primary text-white rounded">View My Work</a>
              <a href="#contact" className="px-4 py-2 border rounded">Contact Me</a>
            </div>

            <div className="mt-8 flex gap-6 items-center">
              <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:dipakkurmi@example.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
            <div className="transform lg:translate-x-6">
              <InteractiveProfile src={profileImg} size={320} />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <h2 className="text-2xl font-bold text-center">Skills & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">A comprehensive overview of my technical skills and expertise</p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Programming Languages</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Python (Basic)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Libraries & Frameworks</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Spring Boot</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>React.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Express.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>JDBC</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Web & Mobile Development</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Android Development (Basic)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>HTML</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>CSS</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.4}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Databases</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>MongoDB</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.5}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Development Tools</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Git</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Google Colab</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.6}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Computer Science Fundamentals</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Data Structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Threading Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Operating System Concepts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Networking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>REST API</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.7}}
              className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-primary">Soft Skills</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Fast Learner
                </div>
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Leadership
                </div>
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Communication
                </div>
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Team-Oriented
                </div>
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Innovative Thinker
                </div>
                <div className="px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary">
                  Problem Solving Skills
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">A few highlights of my work.</p>

          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Chat App', description: 'Full stack real-time chat application (frontend + backend).', stack:['React','Node.js','Socket.io'], image: '/assets/project1.svg', demo:'#', code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-' },
              { title: 'Learning Management System', description: 'A platform for managing courses, students and instructors.', stack:['React','Spring Boot','MySQL'], image: '/assets/project2.svg', demo:'#', code: 'https://github.com/kurmideepak/Learning-Management-System' },
              { title: 'Tik Tac Toe (Android)', description: 'Classic Tic-Tac-Toe game implemented in Android (Java).', stack:['Java','Android'], image: '/assets/project3.svg', demo:'#', code: 'https://github.com/kurmideepak/Tik-Tac-Toe-Game-By-android-studio-Java-Project-' },
              { title: 'To-Do List App', description: 'Simple and intuitive To-Do list application with persistence.', stack:['React','LocalStorage'], image: '/assets/project4.svg', demo:'#', code: 'https://github.com/kurmideepak/To-Do-List-app' },
              { title: 'Weather Forecast', description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.', stack:['JavaScript','API'], image: '/assets/project5.svg', demo:'#', code: 'https://github.com/kurmideepak/Weather-Forecast' },
              { title: 'Netflix Clone', description: 'A Netflix-style frontend clone showcasing movies and trailers.', stack:['React','TMDB API'], image: '/assets/project6.svg', demo:'#', code: 'https://github.com/kurmideepak/Netflix-Clone' }
            ].map((p) => (
              <motion.div key={p.title} whileHover={{ y:-6 }} transition={{ type:'spring', stiffness: 200 }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Feel free to reach out for collaborations or just a friendly hello 👋</p>

          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">I usually respond within a few days. For quick enquiries, reach out on GitHub or LinkedIn.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><strong>Email:</strong> <a href="mailto:dipakkurmi@example.com" className="text-primary">dipakkurmi@example.com</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" className="text-primary">github.com/kurmideepak</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" className="text-primary">linkedin.com/in/dipak-kurmi-cse</a></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Send a message</h3>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
