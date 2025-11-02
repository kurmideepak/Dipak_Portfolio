import React from 'react'
import ContactForm from '../components/ContactForm'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact(){
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Whether it's a project, collaboration or just to say hello — my inbox is open.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <aside className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl">DK</div>
              <div>
                <h3 className="text-lg font-semibold">Dipak Kurmi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Full Stack & Android Developer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <div>Bengaluru, India</div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:dipakkurmi@example.com" className="text-gray-800 dark:text-gray-100">dipakkurmi@example.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-primary" />
                <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-gray-100">github.com/kurmideepak</a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-primary" />
                <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-gray-100">linkedin.com/in/dipak-kurmi-cse</a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Availability</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Open to internships and freelance work · Weekdays 9am–6pm IST</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://github.com/kurmideepak" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-primary hover:text-white transition">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/dipak-kurmi-cse" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-md hover:bg-[#0077b5] hover:text-white transition">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </aside>

          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Share a brief about your project or opportunity — I usually respond within a few business days.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
