import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const handle = ()=> window.scrollTo({top:0, behavior:'smooth'})

  return (
    <AnimatePresence>
      {visible && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handle} 
          className="fixed right-6 bottom-8 z-40 p-3.5 rounded-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] text-gray-800 dark:text-gray-200 group hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden" 
          aria-label="back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FaArrowUp className="text-lg group-hover:text-blue-500 drop-shadow-sm transition-colors" />
          </motion.div>
          
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

