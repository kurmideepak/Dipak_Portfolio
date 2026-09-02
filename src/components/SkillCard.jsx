import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({ icon, title, desc, level }) {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }} 
      className="group relative bg-white/40 dark:bg-white/[0.03] p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-gray-200/50 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-blue-300/50 dark:hover:border-blue-400/50 overflow-hidden"
    >
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50/80 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm drop-shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-900 dark:text-white drop-shadow-sm">{title}</h4>
            {level && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                {level}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed drop-shadow-sm">
            {desc}
          </p>
        </div>
      </div>
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
    </motion.div>
  )
}

