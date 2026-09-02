import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Cursor from './components/Cursor'
import GlobalBackground from './components/GlobalBackground'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Skills = React.lazy(() => import('./pages/Skills'))
const Projects = React.lazy(() => import('./pages/Projects'))
const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export default function App(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-primary/30 relative">
      <GlobalBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Cursor />
      <Navbar />
      
      <div className="relative z-10">
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
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
    </div>
  )
}
