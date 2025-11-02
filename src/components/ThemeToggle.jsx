import React, { useEffect, useState } from 'react'

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
    <button aria-label="toggle theme" onClick={()=>setDark(!dark)} className="fixed right-4 top-20 p-2 bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded shadow">
      {dark? '🌙' : '☀️'}
    </button>
  )
}
