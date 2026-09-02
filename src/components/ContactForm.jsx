import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane, FaSpinner } from 'react-icons/fa'

const projectTypes = [
  'Website',
  'Business Website',
  'Web Application',
  'Frontend Project',
  'Backend / API',
  'Custom Software',
  'Other'
];

export default function ContactForm() {
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [projectType, setProjectType] = useState('')

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('EmailJS is not configured. Please add your keys to a .env file.')
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setSent(true)
      formRef.current.reset()
      setProjectType('')
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      console.error('EmailJS error', err)
      setError('Could not send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 relative">

      {/* Project Type Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          What are you looking to build?
        </label>
        <input type="hidden" name="project_type" value={projectType} />
        <div className="flex flex-wrap gap-2">
          {projectTypes.map(type => (
            <button
              type="button"
              key={type}
              onClick={() => setProjectType(type)}
              className={`contact-hover px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border shadow-sm ${projectType === type
                  ? 'bg-blue-500/20 border-cyan-400 text-cyan-400 dark:text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105'
                  : 'bg-white/40 dark:bg-white/5 border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-400/50 hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              data-cursor-text="CHOOSE"
              disabled={loading || sent}
            >
              {type}
              {projectType === type && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-2 inline-block">
                  ✓
                </motion.span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <input
            name="name"
            id="name"
            required
            placeholder=" "
            className="contact-hover peer w-full p-4 pt-6 bg-white/40 dark:bg-[#07111F]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 focus:bg-white/60 dark:focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            disabled={loading || sent}
            data-cursor-text="TYPE"
          />
          <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 pointer-events-none text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:top-2 peer-valid:text-xs">
            Name
          </label>
        </div>

        <div className="relative group">
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder=" "
            className="contact-hover peer w-full p-4 pt-6 bg-white/40 dark:bg-[#07111F]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 focus:bg-white/60 dark:focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            disabled={loading || sent}
            data-cursor-text="TYPE"
          />
          <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 pointer-events-none text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:top-2 peer-valid:text-xs">
            Email
          </label>
        </div>
      </div>

      <div className="relative group">
        <textarea
          name="message"
          id="message"
          required
          placeholder=" "
          rows={5}
          className="contact-hover peer w-full p-4 pt-6 bg-white/40 dark:bg-[#07111F]/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 focus:bg-white/60 dark:focus:bg-white/10 transition-all shadow-inner focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] resize-none"
          disabled={loading || sent}
          data-cursor-text="TYPE"
        />
        <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 pointer-events-none text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-valid:top-2 peer-valid:text-xs">
          Tell me a little about your idea or goals...
        </label>
      </div>

      <motion.button
        type="submit"
        disabled={loading || sent}
        whileHover={{ scale: (loading || sent) ? 1 : 1.02 }}
        whileTap={{ scale: (loading || sent) ? 1 : 0.98 }}
        className={`contact-hover relative overflow-hidden w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${sent ? 'bg-transparent text-green-400 shadow-none border border-green-500/30' : 'bg-[linear-gradient(135deg,#06b6d4,#3b82f6)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] disabled:opacity-70 disabled:cursor-not-allowed group'}`}
        data-cursor-text="SEND"
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <FaSpinner className="animate-spin text-lg" /> <span>Sending...</span>
            </motion.div>
          ) : sent ? (
            <motion.div key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
              {/* Elegant success travel animation orb */}
              <motion.div
                initial={{ y: 30, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <FaCheckCircle className="text-xl drop-shadow-[0_0_10px_rgba(34,197,94,1)]" />
              </motion.div>
              <span>Message sent successfully.</span>
            </motion.div>
          ) : (
            <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
              <span>Start the Conversation</span> <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>

        {!sent && !loading && (
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
        )}
      </motion.button>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-gray-600 dark:text-gray-400 -mt-4"
        >
          Thanks for reaching out. I'll get back to you soon.
        </motion.p>
      )}

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-sm font-medium flex items-center gap-2 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
          >
            <FaExclamationCircle className="shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
