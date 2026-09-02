import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import DragonCursor from './DragonCursor'
import FlowingCursor from './FlowingCursor'
import SkillsCursor from './SkillsCursor'
import ProjectCursor from './ProjectCursor'
import ContactCursor from './ContactCursor'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const location = useLocation()

  useEffect(() => {

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      // Check if hovering over an interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]') !== null;
      setIsHovering(isInteractive);
    }

    const touchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('touchmove', touchMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', touchMove)
    }
  }, [])

  // On Home page, render the Dragon cursor instead of the standard one
  if (location.pathname === '/') {
    return <DragonCursor />
  }

  // On About page, render the new Flowing Cursor
  if (location.pathname === '/about') {
    return <FlowingCursor />
  }

  // On Skills page, render the new Energy Cursor
  if (location.pathname === '/skills') {
    return <SkillsCursor />
  }

  // On Projects page, render the new Scanner Cursor
  if (location.pathname === '/projects') {
    return <ProjectCursor />
  }

  // On Contact page, render the new Signal Cursor
  if (location.pathname === '/contact') {
    return <ContactCursor />
  }

  // Standard cursor for all other pages
  return (
    <motion.div
      className="pointer-events-none fixed z-[100] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
      animate={{
        x: pos.x,
        y: pos.y,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovering ? 'bg-white' : 'bg-white'}`} />
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute w-full h-full rounded-full border-[0.5px] border-white/50"
        />
      )}
    </motion.div>
  )
}


