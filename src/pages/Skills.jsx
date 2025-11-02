import React, { useState } from 'react'
import SkillCard from '../components/SkillCard'

const allSkills = {
  'Programming': [
    {icon:'J', title:'Java', desc:'Core Java, OOP, Collections'},
    {icon:'P', title:'Python', desc:'Basic syntax and libraries', level:'Basic'},
    {icon:'JS', title:'JavaScript', desc:'ES6+, DOM manipulation'},
    {icon:'H', title:'HTML5', desc:'Semantic markup, accessibility'},
    {icon:'C', title:'CSS3', desc:'Responsive design, animations'}
  ],
  'Frameworks': [
    {icon:'SB', title:'Spring Boot', desc:'REST APIs, MVC, Security'},
    {icon:'R', title:'React.js', desc:'Hooks, Context, Redux'},
    {icon:'N', title:'Node.js', desc:'Server-side JavaScript'},
    {icon:'E', title:'Express.js', desc:'RESTful APIs, Middleware'},
    {icon:'JD', title:'JDBC', desc:'Database connectivity'}
  ],
  'Mobile & Web': [
    {icon:'AD', title:'Android Development', desc:'Basic app development', level:'Basic'},
    {icon:'RD', title:'Responsive Design', desc:'Mobile-first approach'},
    {icon:'API', title:'REST APIs', desc:'Design and implementation'},
    {icon:'UI', title:'UI/UX', desc:'User-centered design principles'}
  ],
  'Databases': [
    {icon:'SQL', title:'MySQL', desc:'Relational database, CRUD'},
    {icon:'MDB', title:'MongoDB', desc:'NoSQL, aggregations'},
    {icon:'DB', title:'Database Design', desc:'Schema optimization'}
  ],
  'Dev Tools': [
    {icon:'G', title:'Git', desc:'Version control, branching'},
    {icon:'GH', title:'GitHub', desc:'Collaboration, CI/CD'},
    {icon:'GC', title:'Google Colab', desc:'Cloud computation'},
    {icon:'VS', title:'VS Code', desc:'Development environment'}
  ],
  'CS Core': [
    {icon:'DS', title:'Data Structures', desc:'Arrays, Lists, Trees, Graphs'},
    {icon:'TH', title:'Threading', desc:'Concurrent programming'},
    {icon:'OS', title:'Operating Systems', desc:'Process management, scheduling'},
    {icon:'NT', title:'Networking', desc:'TCP/IP, HTTP protocols'},
    {icon:'API', title:'REST API', desc:'Architecture principles'}
  ],
  'Soft Skills': [
    {icon:'🚀', title:'Fast Learner', desc:'Quick adaptation to new technologies'},
    {icon:'👥', title:'Leadership', desc:'Team guidance and motivation'},
    {icon:'💬', title:'Communication', desc:'Clear and effective interaction'},
    {icon:'🤝', title:'Team-Oriented', desc:'Collaborative problem solving'},
    {icon:'💡', title:'Innovative Thinking', desc:'Creative solution design'},
    {icon:'🎯', title:'Problem Solving', desc:'Analytical approach to challenges'}
  ]
}

export default function Skills(){
  const [tab, setTab] = useState('Programming')
  
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and professional capabilities
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(allSkills).map(k=> (
              <button
                key={k}
                onClick={()=>setTab(k)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  tab===k
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSkills[tab].map((skill, index) => (
                <div
                  key={skill.title}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {tab === 'Soft Skills' && (
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Beyond technical skills, I bring these essential qualities to every project
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
