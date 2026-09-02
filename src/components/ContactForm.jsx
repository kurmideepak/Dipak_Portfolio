import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane, FaSpinner } from 'react-icons/fa'

export default function ContactForm(){
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
      setTimeout(() => setSent(false), 5000)
    }catch(err){
      console.error('EmailJS error', err)
      setError('Could not send message — please check EmailJS configuration and console for details.')
    }finally{
      setLoading(false)
    }
  }

  const inputClass = "w-full p-4 rounded-xl bg-white/50 dark:bg-[#07111F]/50 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your name" className={inputClass} disabled={loading || sent} />
        <input name="email" type="email" required placeholder="Your email" className={inputClass} disabled={loading || sent} />
      </div>
      <textarea name="message" required placeholder="How can I help you?" rows={5} className={`${inputClass} resize-none`} disabled={loading || sent} />
      
      <motion.button 
        type="submit" 
        disabled={loading || sent} 
        whileHover={{ scale: (loading || sent) ? 1 : 1.02 }}
        whileTap={{ scale: (loading || sent) ? 1 : 0.98 }}
        className={`relative overflow-hidden w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${sent ? 'bg-green-500' : 'bg-[linear-gradient(135deg,#2563eb,#06b6d4)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)] disabled:opacity-70 disabled:cursor-not-allowed'}`}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <FaSpinner className="animate-spin text-lg" /> <span>Sending...</span>
            </motion.div>
          ) : sent ? (
            <motion.div key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <FaCheckCircle className="text-lg" /> <span>Message Sent</span>
            </motion.div>
          ) : (
            <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <span>Send Message</span> <FaPaperPlane />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!sent && !loading && (
          <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
        )}
      </motion.button>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="text-red-500 text-sm font-medium flex items-center gap-2 bg-red-500/10 p-3 rounded-lg border border-red-500/20 mt-2"
          >
            <FaExclamationCircle className="shrink-0" /> 
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

