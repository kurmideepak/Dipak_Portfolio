import React, { useState, useEffect } from 'react'

export default function BackToTop(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const onScroll = ()=>{
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const handle = ()=> window.scrollTo({top:0, behavior:'smooth'})

  return (
    <button onClick={handle} className={`fixed right-6 bottom-8 p-3 rounded-full shadow-lg bg-primary text-white ${visible? 'block':'hidden'}`} aria-label="back to top">
      ↑
    </button>
  )
}
