import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Chat App',
    description: 'Full stack real-time chat application (frontend + backend).',
    stack: ['React','Node.js','Socket.io'],
    image: '/assets/project1.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Chat-App-Frontend-and-Backend-'
  },
  {
    title: 'Learning Management System',
    description: 'A platform for managing courses, students and instructors.',
    stack: ['React','Spring Boot','MySQL'],
    image: '/assets/project2.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Learning-Management-System'
  },
  {
    title: 'Tik Tac Toe (Android)',
    description: 'Classic Tic-Tac-Toe game implemented in Android (Java).',
    stack: ['Java','Android'],
    image: '/assets/project3.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Tik-Tac-Toe-Game-By-android-studio-Java-Project-'
  },
  {
    title: 'To-Do List App',
    description: 'Simple and intuitive To-Do list application with persistence.',
    stack: ['React','LocalStorage'],
    image: '/assets/project4.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/To-Do-List-app'
  },
  {
    title: 'Weather Forecast',
    description: 'Weather forecast app consuming third-party APIs to show current and weekly weather.',
    stack: ['JavaScript','API'],
    image: '/assets/project5.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Weather-Forecast'
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix-style frontend clone showcasing movies and trailers.',
    stack: ['React','TMDB API'],
    image: '/assets/project6.svg',
    demo: '#',
    code: 'https://github.com/kurmideepak/Netflix-Clone'
  }
]

export default function Projects(){
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p=> <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </main>
  )
}
