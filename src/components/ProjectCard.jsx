import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({project}){
  return (
    <motion.article whileHover={{ y: -6 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-transparent hover:border-primary transition-all">
      <div className="w-full h-44 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-44 object-cover" loading="lazy" />
        ) : (
          <div className="text-gray-400">No image</div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <div className="text-sm text-gray-500">{project.year || ''}</div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 my-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {project.stack.map(s=> <span key={s} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{s}</span>)}
        </div>

        <div className="mt-3 flex flex-wrap gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-md shadow-sm">
              Demo <FaExternalLinkAlt className="text-sm opacity-80" />
            </a>
          )}

          {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:border-primary transition text-gray-800 dark:text-gray-100">
                <FaGithub /> <span>Code</span>
              </a>
            )}
        </div>
      </div>
    </motion.article>
  )
}
