import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4">Page not found.</p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-primary text-white rounded">Go Home</Link>
      </div>
    </main>
  )
}
