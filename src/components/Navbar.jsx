import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary dark:text-primary">Dipak Kurmi</Link>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive})=>isActive? 'text-primary font-semibold' : 'text-gray-800 dark:text-gray-100 hover:text-primary'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-primary font-semibold' : 'text-gray-800 dark:text-gray-100 hover:text-primary'}>About</NavLink>
          <NavLink to="/skills" className={({isActive})=>isActive? 'text-primary font-semibold' : 'text-gray-800 dark:text-gray-100 hover:text-primary'}>Skills</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive? 'text-primary font-semibold' : 'text-gray-800 dark:text-gray-100 hover:text-primary'}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-primary font-semibold' : 'text-gray-800 dark:text-gray-100 hover:text-primary'}>Contact</NavLink>
        </div>
        <button className="md:hidden p-2 text-gray-800 dark:text-gray-100" onClick={()=>setOpen(!open)} aria-label="toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800/90">
          <div className="flex flex-col gap-2 px-4 py-3">
            <Link to="/" onClick={()=>setOpen(false)} className="text-gray-800 dark:text-gray-100">Home</Link>
            <Link to="/about" onClick={()=>setOpen(false)} className="text-gray-800 dark:text-gray-100">About</Link>
            <Link to="/skills" onClick={()=>setOpen(false)} className="text-gray-800 dark:text-gray-100">Skills</Link>
            <Link to="/projects" onClick={()=>setOpen(false)} className="text-gray-800 dark:text-gray-100">Projects</Link>
            <Link to="/contact" onClick={()=>setOpen(false)} className="text-gray-800 dark:text-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
