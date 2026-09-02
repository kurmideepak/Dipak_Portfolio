import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({project}){
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return; // Disable tilt on mobile/tablet
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      className="group relative bg-white/40 dark:bg-white/[0.03] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-200/50 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-blue-300/50 dark:hover:border-blue-400/50 flex flex-col h-full"
    >
      <div className="relative w-full h-52 bg-gray-100 dark:bg-[#07111F] overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        {project.image ? (
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            loading="lazy" 
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">No image</div>
        )}
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-white text-sm font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details <FaExternalLinkAlt className="text-xs" />
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white drop-shadow-sm">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 flex-grow leading-relaxed font-medium drop-shadow-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs mb-6">
          {project.stack.map(s => (
            <span key={s} className="px-3 py-1 bg-blue-50 dark:bg-white/10 text-blue-700 dark:text-blue-300 rounded-full font-semibold border border-blue-100 dark:border-transparent drop-shadow-sm">
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.demo && project.demo !== '#' && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2 bg-[linear-gradient(135deg,#2563eb,#06b6d4)] text-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-bold drop-shadow-sm group/btn"
            >
              Live Demo <FaExternalLinkAlt className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}

          {project.code && (
            <a 
              href={project.code} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2 border border-gray-200/50 dark:border-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-gray-800 dark:text-gray-200 text-sm font-bold shadow-sm backdrop-blur-md hover:border-blue-300/50 dark:hover:border-blue-400/50 drop-shadow-sm"
            >
              <FaGithub className="text-base" /> <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
    </motion.article>
  )
}
