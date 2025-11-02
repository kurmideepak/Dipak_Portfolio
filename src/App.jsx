import React, { Suspense, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ThemeToggle from './components/ThemeToggle'
import Cursor from './components/Cursor'
import { motion } from 'framer-motion'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Skills = React.lazy(() => import('./pages/Skills'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export default function App(){
  useEffect(()=>{
    // set CSS vars from tailwind config; kept simple
    document.documentElement.style.setProperty('--bg', '#F8FAFC')
  },[])

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Cursor />
      <Navbar />
      <ThemeToggle />
      <Suspense fallback={<div className="flex items-center justify-center h-64">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BackToTop />
      <Footer />
    </div>
  )
}
