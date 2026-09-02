import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-[#030712]/70 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 z-50 relative">
          DK.
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/50 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({isActive}) => `relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive ? 'text-blue-700 dark:text-white' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'}`}
            >
              {({isActive}) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm border border-gray-200/50 dark:border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative p-2 text-gray-800 dark:text-gray-200 focus:outline-none" 
          onClick={() => setOpen(!open)} 
          aria-label="toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current transform origin-left transition-transform" 
            />
            <motion.span 
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-current transition-opacity" 
            />
            <motion.span 
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current transform origin-left transition-transform" 
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050B1A]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setOpen(false)} 
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
