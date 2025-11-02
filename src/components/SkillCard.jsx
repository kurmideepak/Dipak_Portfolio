import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({icon, title, desc, level}){
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02 }} 
      className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{title}</h4>
            {level && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                {level}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
