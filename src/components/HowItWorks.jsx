import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Tell Me Your Idea',
    desc: 'Share your website or application idea and requirements.'
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'We discuss the features, structure, design and technical approach.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I develop the solution with a focus on usability, responsiveness and performance.'
  },
  {
    num: '04',
    title: 'Refine',
    desc: 'You review the result and we make improvements where needed.'
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Prepare the project for deployment and handover.'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Works</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            From idea to launch, I keep the process simple and clear.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left -translate-y-1/2" 
          />
          
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#07111F] border-4 border-gray-100 dark:border-gray-800 shadow-xl flex items-center justify-center font-bold text-lg text-gray-900 dark:text-white mb-6 group-hover:border-blue-400 transition-colors duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Connecting Line */}
          <div className="absolute top-0 left-[27px] w-0.5 h-full bg-gray-200 dark:bg-white/10" />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-[27px] w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 origin-top" 
          />
          
          <div className="flex flex-col gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex gap-6 items-start group"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white dark:bg-[#07111F] border-4 border-gray-100 dark:border-gray-800 shadow-lg flex items-center justify-center font-bold text-lg text-gray-900 dark:text-white group-hover:border-blue-400 transition-colors duration-300">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
