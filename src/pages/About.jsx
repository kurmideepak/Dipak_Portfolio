import React from "react";
import profileImg from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import All Icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
  FaGraduationCap,
  FaLightbulb,
  FaGlobe,
  FaBriefcase,
  FaLaptopCode,
  FaCogs,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

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
          <div className="bg-white dark:bg-gray-900 p-2 rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56">
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top rounded-full shadow-2xl"
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
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen py-16 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent mb-16"
        >
          About Me
        </motion.h2>

        {/* SECTION 1 & 8: INTRODUCTION & QUICK PROFILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <AnimatedImage src={profileImg} alt="Dipak" />

            {/* QUICK PROFILE */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">Quick Profile</h3>
              <ul className="space-y-3">
                <li><span className="font-semibold text-primary">Name:</span> Dipak Kurmi</li>
                <li><span className="font-semibold text-primary">Role:</span> Full Stack Developer & Web Application Developer</li>
                <li><span className="font-semibold text-primary">Education:</span> B.Tech — Computer Science and Engineering</li>
                <li><span className="font-semibold text-primary">Primary Stack:</span> Java • Spring Boot • React • Node.js • MongoDB</li>
                <li><span className="font-semibold text-primary">Focus:</span> Websites • Web Applications • Software Solutions</li>
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                <a
                  href="https://drive.google.com/file/d/1gEOrNZCBGgoFpYMpdW4EizMOYgfiiLrr/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 space-y-10"
          >
            {/* INTRODUCTION */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <FaCode className="text-primary" />
                <span>Full Stack Developer & Web Application Developer</span>
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Hi, I'm Dipak Kurmi, a Computer Science and Engineering graduate and Full Stack Developer focused on architecting modern, high-performance, and user-centric digital experiences.
                </p>
                <p>
                  I primarily work with Java, Spring Boot, React, Node.js and databases such as MongoDB and MySQL. I enjoy turning ideas into practical websites, web applications and software solutions.
                </p>
              </div>
            </div>

            {/* WHAT I'M LOOKING FOR (CURRENT GOAL) */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What I'm Looking For</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm interested in opportunities where I can continue growing as a software developer, contribute to meaningful products, and work on practical web and application development projects.
                </p>
                <p>
                  I'm also open to suitable freelance projects involving websites, business websites and custom web applications.
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* SECTION 2: WHAT I BUILD */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">What I Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaGlobe className="text-3xl text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Websites</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Modern responsive websites for individuals, portfolios and organizations.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaBriefcase className="text-3xl text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Business Websites</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Professional online experiences that help businesses present their services and connect with customers.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaLaptopCode className="text-3xl text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Web Applications</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Custom applications with frontend, backend, APIs, databases and application logic.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <FaCogs className="text-3xl text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Software Solutions</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Practical software solutions designed around specific requirements.</p>
            </div>

          </div>
        </motion.div>

        {/* SECTION 3 & 4: MY APPROACH & ENJOY BUILDING */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">My Approach</h3>
            <ul className="space-y-6 text-gray-700 dark:text-gray-300">
              <li>
                <div className="font-bold text-primary mb-1">01 — Understand the Problem</div>
                <div className="text-sm">I first understand the purpose, users and requirements of a project.</div>
              </li>
              <li>
                <div className="font-bold text-primary mb-1">02 — Keep It Simple</div>
                <div className="text-sm">I prefer clean interfaces and straightforward solutions that are easy to understand and use.</div>
              </li>
              <li>
                <div className="font-bold text-primary mb-1">03 — Build Responsively</div>
                <div className="text-sm">I make responsive experiences that work across different screen sizes.</div>
              </li>
              <li>
                <div className="font-bold text-primary mb-1">04 — Improve Continuously</div>
                <div className="text-sm">I keep learning, experimenting and improving my development skills.</div>
              </li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <FaLightbulb className="text-primary" />
              <span>What I Enjoy Building</span>
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> Modern web interfaces</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> Full-stack applications</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> REST APIs</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> Database-driven applications</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> Business-oriented web solutions</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-accent" /> Interactive user experiences</li>
            </ul>
          </motion.div>

        </div>

        {/* SECTION 5 & 6: EDUCATION & TECHNICAL FOCUS */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <FaGraduationCap className="text-primary" />
              <span>Education</span>
            </h3>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
              <div className="font-semibold text-lg text-gray-900 dark:text-white">B.Tech, Computer Science and Engineering</div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">Jain University</div>
              <div className="text-sm text-primary font-medium mt-1">Class of 2026</div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">My Technical Focus</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">Java</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">Spring Boot</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">React</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">Node.js</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">MongoDB</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">MySQL</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">HTML</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">CSS</span>
              <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200">JavaScript</span>
            </div>
            <div className="mt-auto">
              <Link to="/skills" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                View All Skills <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* SECTION 9: CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Have a Project in Mind?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            If you're looking for someone to build a website or web application, let's talk about your idea.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Start a Project <FaArrowRight />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all shadow-md"
            >
              View My Work
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
