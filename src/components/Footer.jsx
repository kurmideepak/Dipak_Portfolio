import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-[#030712]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium drop-shadow-sm">
          © {year} Dipak Kurmi. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a 
            href="https://github.com/kurmideepak" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors drop-shadow-sm"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/dipak-kurmi-cse" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors drop-shadow-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

