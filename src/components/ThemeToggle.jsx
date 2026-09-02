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
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"} 
      onClick={()=>setDark(!dark)} 
      className={`relative p-2.5 rounded-full overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${
        dark 
          ? 'bg-white/[0.03] border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-400/50 focus:ring-purple-500' 
          : 'bg-white border border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:border-amber-400/60 focus:ring-amber-400'
      }`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="absolute text-purple-300 group-hover:text-purple-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
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
              className="absolute text-amber-500 group-hover:text-amber-600 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            >
              <FaSun className="text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle internal glow background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${dark ? 'bg-gradient-to-tr from-purple-500/10 to-cyan-500/10' : 'bg-gradient-to-tr from-amber-400/10 to-orange-500/10'}`} />
      
      {/* Tooltip */}
      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform origin-top px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-gray-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-50">
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900/90 dark:border-b-white/90" />
      </div>
    </motion.button>
  )
}
