import React from 'react'
import { motion } from 'framer-motion'
import { FaPaintBrush, FaMobileAlt, FaCode, FaRocket, FaComments, FaLayerGroup } from 'react-icons/fa'

const reasons = [
  {
    title: 'Modern & Clean Design',
    desc: 'I create interfaces that look premium, professional, and are tailored to your brand identity.',
    icon: <FaPaintBrush />
  },
  {
    title: 'Responsive Experience',
    desc: 'Every project is built to work flawlessly across all devices, from mobile phones to large desktop screens.',
    icon: <FaMobileAlt />
  },
  {
    title: 'Custom Development',
    desc: 'No cookie-cutter templates. I build custom solutions that specifically address your unique requirements.',
    icon: <FaCode />
  },
  {
    title: 'Performance Focus',
    desc: 'Fast loading times and smooth animations to ensure the best possible user experience.',
    icon: <FaRocket />
  },
  {
    title: 'Clear Communication',
    desc: 'I keep you updated throughout the development process, ensuring we are always on the same page.',
    icon: <FaComments />
  },
  {
    title: 'Scalable Solutions',
    desc: 'Clean code architecture that allows your website or application to grow alongside your business.',
    icon: <FaLayerGroup />
  }
]

export default function WhyWorkWithMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative py-24 z-10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            Why Work With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            I combine technical expertise with a focus on design and user experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, i) => (
            <motion.div 
              key={reason.title} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all hover:border-blue-300/50 dark:hover:border-blue-400/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-white/50 dark:border-transparent mb-6 text-xl">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
