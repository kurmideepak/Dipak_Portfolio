import React, { useEffect, useState } from 'react'

export default function Cursor(){
  const [pos, setPos] = useState({x: -100, y: -100})
  useEffect(()=>{
    const move = (e)=> setPos({x:e.clientX, y:e.clientY})
    window.addEventListener('mousemove', move)
    return ()=> window.removeEventListener('mousemove', move)
  },[])
  return (
    <div style={{left: pos.x, top: pos.y}} className="pointer-events-none fixed z-50 w-4 h-4 rounded-full bg-primary/90 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
    </div>
  )
}
