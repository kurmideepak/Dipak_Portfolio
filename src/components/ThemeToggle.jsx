import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle(){
  const [dark, setDark] = useState(()=>{
    const stored = localStorage.getItem('theme')
    if(stored) return stored === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(()=>{
    const root = document.documentElement
    if(dark){
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[dark])

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} 
      onClick={()=>setDark(!dark)} 
      className="fixed right-6 top-24 md:top-28 z-40 p-3 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-full text-gray-800 dark:text-gray-200 overflow-hidden group hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="absolute text-blue-300 group-hover:text-blue-400 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
            >
              <FaMoon className="text-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="absolute text-amber-500 group-hover:text-amber-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
            >
              <FaSun className="text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform origin-right px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-gray-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
        {dark ? "Light mode" : "Dark mode"}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90 dark:border-l-white/90" />
      </div>
    </motion.button>
  )
}
