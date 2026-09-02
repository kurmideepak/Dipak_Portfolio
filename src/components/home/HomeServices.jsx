import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaBriefcase, FaLayerGroup, FaMobileAlt, FaTools, FaCode } from 'react-icons/fa';

const servicesData = [
  {
    id: '01',
    title: 'Website Development',
    description: 'Modern responsive websites for personal brands, portfolios and online presence.',
    icon: <FaLaptopCode />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: '02',
    title: 'Business Websites',
    description: 'Professional websites that help businesses showcase their services and connect with customers.',
    icon: <FaBriefcase />,
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: '03',
    title: 'Web Applications',
    description: 'Custom web applications with frontend, backend, APIs, databases and application logic.',
    icon: <FaLayerGroup />,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: '04',
    title: 'Responsive Web Design',
    description: 'Clean experiences that work smoothly across desktop, tablet and mobile.',
    icon: <FaMobileAlt />,
    color: 'from-pink-500 to-orange-400'
  },
  {
    id: '05',
    title: 'Website Improvements',
    description: 'UI improvements, responsive fixes, performance improvements and new feature development.',
    icon: <FaTools />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: '06',
    title: 'Custom Software Solutions',
    description: 'Software solutions built around specific project requirements.',
    icon: <FaCode />,
    color: 'from-blue-600 to-indigo-500'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className="group relative p-8 rounded-3xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-blue-300/50 dark:hover:border-blue-400/30 overflow-hidden"
  >
    {/* Subtle gradient background that moves on hover */}
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none dark:opacity-0 dark:group-hover:opacity-10"
      style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
    />

    <div className="flex justify-between items-start mb-6">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
        {service.icon}
      </div>
      <div className="text-4xl font-extrabold text-gray-200 dark:text-gray-800/50 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300">
        {service.id}
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 drop-shadow-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {service.title}
    </h3>

    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
      {service.description}
    </p>

    {/* Subtle bottom border glow */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
    />
  </motion.div>
);

export default function HomeServices() {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 min-h-screen flex items-center z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            What I Can <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Build</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium drop-shadow-sm">
            Digital solutions designed around your goals, audience and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium text-lg">
            Have something specific in mind?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/40 dark:bg-white/[0.05] border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-400/50 text-gray-900 dark:text-white font-bold group"
          >
            Let's Discuss Your Project
            <motion.span
              className="text-blue-500 dark:text-blue-400"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
