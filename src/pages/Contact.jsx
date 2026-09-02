import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaServer, FaLaptopCode, FaCogs } from "react-icons/fa"

const services = [
  { id: '01', title: 'Web Applications', icon: <FaLaptopCode />, desc: 'Full-stack React & Node/Spring Boot apps.' },
  { id: '02', title: 'Frontend Experiences', icon: <FaCode />, desc: 'Interactive, animated, and responsive UIs.' },
  { id: '03', title: 'Backend / APIs', icon: <FaServer />, desc: 'Scalable databases and RESTful architectures.' },
  { id: '04', title: 'Custom Solutions', icon: <FaCogs />, desc: 'Tailored software for your specific needs.' }
]

const processSteps = [
  { step: '01', title: 'Tell Me Your Idea' },
  { step: '02', title: 'Plan the Solution' },
  { step: '03', title: 'Build the Experience' },
  { step: '04', title: 'Refine & Improve' },
  { step: '05', title: 'Launch' }
]

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-20 relative overflow-hidden text-gray-900 dark:text-gray-100">

      {/* Subtle Connection Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]" />
        {/* Subtle grid/network suggestion */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO SECTION */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-cyan-500 rounded-full" />
            Let's build something
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tight max-w-3xl leading-tight"
          >
            Have an idea worth building?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-medium leading-relaxed"
          >
            Whether you need a modern website, web application, or custom digital solution, I'd love to hear what you're working on.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-gray-500 dark:text-gray-400 max-w-2xl"
          >
            Tell me what you have in mind and let's figure out the next step.
          </motion.p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT: Information & Services */}
          <div className="lg:col-span-5 space-y-12">

            {/* Social / Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a href="mailto:dipakkurmi@example.com" className="contact-hover flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 hover:border-cyan-400/50 hover:bg-white/60 dark:hover:bg-white/10 transition-all group backdrop-blur-md" data-cursor-text="EMAIL">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                    <p className="font-semibold">dipakkurmi@example.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" className="contact-hover flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 hover:border-cyan-400/50 hover:bg-white/60 dark:hover:bg-white/10 transition-all group backdrop-blur-md" data-cursor-text="VISIT">
                    <FaGithub className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-cyan-500 group-hover:-translate-y-1 transition-all" />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" className="contact-hover flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 hover:border-blue-500/50 hover:bg-white/60 dark:hover:bg-white/10 transition-all group backdrop-blur-md" data-cursor-text="VISIT">
                    <FaLinkedin className="text-2xl text-[#0077b5] dark:text-[#0077b5] group-hover:text-blue-400 group-hover:-translate-y-1 transition-all" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 px-2 py-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
                  <FaMapMarkerAlt className="text-cyan-500" />
                  Bengaluru, India (Available for remote)
                </div>
              </div>
            </div>

            {/* What can we work on? */}
            <div>
              <h3 className="text-xl font-bold mb-6">What can we work on?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(srv => (
                  <div key={srv.id} className="contact-hover p-5 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 hover:border-cyan-400/30 dark:hover:border-cyan-400/20 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all group shadow-sm backdrop-blur-sm" data-cursor-text="SERVICE">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xl text-gray-400 dark:text-gray-500 group-hover:text-cyan-500 transition-colors">
                        {srv.icon}
                      </div>
                      <span className="text-xs font-black text-gray-300 dark:text-gray-700 group-hover:text-cyan-500/50 transition-colors">{srv.id}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{srv.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5 rounded-[2rem] blur-xl pointer-events-none" />
            <div className="relative bg-white/60 dark:bg-gray-900/40 border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-2xl">
              <h3 className="text-2xl font-bold mb-8">Start a Project</h3>
              <ContactForm />
            </div>
          </div>

        </div>

        {/* TIMELINE PROCESS */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold text-center mb-16">From Idea to Launch</h3>
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-6 md:left-0 md:right-0 md:top-8 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-gray-200 dark:bg-gray-800 -z-10" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex md:flex-col items-center md:items-center gap-6 md:gap-4 relative mb-8 md:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-gray-400 dark:text-gray-500 shadow-sm z-10 transition-colors hover:border-cyan-400 hover:text-cyan-500">
                  {step.step}
                </div>
                <div className="md:text-center">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">{step.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
