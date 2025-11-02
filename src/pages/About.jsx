import React from "react";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

// ✅ Import All Icons
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload,
  FaCode, 
  FaGraduationCap, 
  FaLightbulb 
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function AnimatedImage({ src, alt }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative group w-fit mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-purple-600 rounded-full opacity-75 blur-lg transition duration-500"
        animate={{ scale: isHovered ? 1.08 : 1, opacity: isHovered ? 1 : 0.75 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      />

      <div className="relative">
        <div className="p-1 rounded-full bg-gradient-to-r from-primary via-accent to-purple-600">
          <div className="bg-white dark:bg-gray-900 p-2 rounded-full">
            <motion.img
              src={src}
              alt={alt}
              className="w-48 h-48 rounded-full shadow-2xl"
              animate={{
                scale: isHovered ? 1.18 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
                mass: 1.1
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <AnimatedImage src={profileImg} alt="Dipak" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 space-y-8"
          >

            {/* ===== Developer Info ===== */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaCode className="text-primary" />
                <span>Full Stack Developer</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Enthusiastic Java Full Stack Developer with experience in building dynamic and scalable web applications using Spring Boot, React,
                and MongoDB. Passionate about solving problems and delivering impactful products.
              </p>
            </div>

            {/* ===== Education ===== */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaGraduationCap className="text-primary" />
                <span>Education</span>
              </h3>
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                <div className="font-semibold">B.Tech, Computer Science and Engineering</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Jain University | 2022–Present</div>
              </div>
            </div>

            {/* ===== Skills / What I Do ===== */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaLightbulb className="text-primary" />
                <span>What I Do</span>
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Develop full-stack web applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Design and implement REST APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Build responsive UI with React
                </li>
              </ul>
            </div>

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
              <a 
                href="https://drive.google.com/file/d/1gEOrNZCBGgoFpYMpdW4EizMOYgfiiLrr/view"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <FaDownload className="text-xl" />
                Download Resume
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
