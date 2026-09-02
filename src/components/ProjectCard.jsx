import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

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
      className="group relative project-card-hover bg-white/40 dark:bg-white/[0.03] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-200/50 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-blue-300/50 dark:hover:border-blue-400/50 flex flex-col h-full"
    >
      <div className="relative w-full h-52 bg-gray-100 dark:bg-[#07111F] overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">No image</div>
        )}
        
        {/* Subtle scan line on image hover */}
        <div className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)] -top-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100" />
        
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
          <span className="text-white text-sm font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details <FaExternalLinkAlt className="text-xs group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-transparent" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-bold text-xl text-gray-900 dark:text-white drop-shadow-sm group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 mb-6 flex-grow leading-relaxed font-medium drop-shadow-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs mb-6">
          {project.stack.map((s, idx) => (
            <span 
              key={s} 
              className="px-3 py-1 bg-cyan-50/50 dark:bg-white/5 text-cyan-800 dark:text-cyan-300 rounded-full font-semibold border border-cyan-100/50 dark:border-white/10 drop-shadow-sm transition-transform duration-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
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
              className="btn-primary flex-1 inline-flex items-center justify-center gap-2 group/btn"
            >
              Live Demo <FaExternalLinkAlt className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 inline-flex items-center justify-center gap-2"
            >
              <FaGithub className="text-base" /> <span>Source</span>
            </a>
          )}
        </div>
      </div>

      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
    </motion.article>
  )
}
