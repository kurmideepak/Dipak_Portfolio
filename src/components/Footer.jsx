import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© 2025 Dipak Kurmi. All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
