import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden z-10 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5 border border-blue-200/50 dark:border-white/5 backdrop-blur-sm relative shadow-2xl"
        >
          {/* Subtle cosmic glow behind the section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm relative z-10">
            Have an idea? <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Let's build it.</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 relative z-10">
            Tell me what you want to build and let's discuss how I can help.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 rounded-full bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white text-lg font-bold shadow-[0_8px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative drop-shadow-sm flex items-center gap-2">
                Start a Project
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >→</motion.span>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
