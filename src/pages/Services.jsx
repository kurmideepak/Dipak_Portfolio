import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaBriefcase, FaCode, FaMobileAlt, FaTools } from 'react-icons/fa'

const services = [
  {
    title: 'Website Development',
    desc: 'Modern, responsive websites for personal brands, portfolios, organizations and online presence.',
    icon: <FaLaptopCode />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Business Websites',
    desc: 'Professional websites that help businesses showcase their services, build credibility and connect with customers.',
    icon: <FaBriefcase />,
    color: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Web Applications',
    desc: 'Custom web applications with modern frontend, backend, APIs, databases and application logic.',
    icon: <FaCode />,
    color: 'from-cyan-500 to-emerald-400'
  },
  {
    title: 'Responsive Web Design',
    desc: 'Clean interfaces that work smoothly across desktop, tablet and mobile.',
    icon: <FaMobileAlt />,
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Website Improvements',
    desc: 'UI improvements, responsive fixes, performance improvements and new features for existing websites.',
    icon: <FaTools />,
    color: 'from-blue-600 to-indigo-500'
  }
]

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative p-8 rounded-3xl bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col"
  >
    {/* Hover Glow Background */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color} transition-opacity duration-300`} />
    
    <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl text-white bg-gradient-to-br ${service.color} shadow-lg shadow-${service.color.split('-')[1]}/30 group-hover:scale-110 transition-transform duration-300`}>
      {service.icon}
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-colors">
      {service.title}
    </h3>
    
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {service.desc}
    </p>
  </motion.div>
)

export default function Services() {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="services" className="relative z-10 w-full overflow-hidden min-h-screen py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            What I Can <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Build</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            From professional websites to custom web applications, I build digital solutions around your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {services.map((service, index) => (
            <div key={service.title} className={index === services.length - 1 && services.length % 3 !== 0 ? 'lg:col-span-2 lg:max-w-md mx-auto w-full' : ''}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
