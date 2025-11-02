import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm(){
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Environment variables (Vite requires VITE_ prefix)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')
    if(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY){
      setError('EmailJS is not configured. Please add your keys to a .env file (see README).')
      return
    }

    setLoading(true)
    try{
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setSent(true)
      formRef.current.reset()
    }catch(err){
      console.error('EmailJS error', err)
      setError('Could not send message — please check EmailJS configuration and console for details.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="name" required placeholder="Your name" className="p-3 rounded border" />
      <input name="email" type="email" required placeholder="Your email" className="p-3 rounded border" />
      <textarea name="message" required placeholder="Message" rows={6} className="p-3 rounded border md:col-span-2"/>
      <button type="submit" disabled={loading} className="md:col-span-2 bg-primary text-white px-4 py-2 rounded hover:scale-105 transition">
        {loading? 'Sending...' : 'Send Message'}
      </button>

      {sent && <div className="md:col-span-2 text-green-600">Thanks — message sent!</div>}
      {error && <div className="md:col-span-2 text-red-500">{error}</div>}
    </form>
  )
}
