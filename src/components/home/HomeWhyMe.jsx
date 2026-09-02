import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaMobileAlt, FaCode, FaTachometerAlt, FaComments, FaServer } from 'react-icons/fa';

const whyMeData = [
  {
    title: 'Modern & Clean Design',
    description: 'Beautiful, intuitive interfaces that engage users and elevate your brand.',
    icon: <FaPaintBrush />
  },
  {
    title: 'Responsive Experience',
    description: 'Flawless performance across all devices, from mobile phones to large desktops.',
    icon: <FaMobileAlt />
  },
  {
    title: 'Custom Development',
    description: 'Tailored solutions built specifically for your unique requirements, not generic templates.',
    icon: <FaCode />
  },
  {
    title: 'Performance Focus',
    description: 'Optimized code and assets for fast loading times and smooth interactions.',
    icon: <FaTachometerAlt />
  },
  {
    title: 'Clear Communication',
    description: 'Transparent updates and collaborative discussions throughout the project lifecycle.',
    icon: <FaComments />
  },
  {
    title: 'Scalable Solutions',
    description: 'Architectures designed to grow with your business and handle increased traffic.',
    icon: <FaServer />
  }
];

export default function HomeWhyMe() {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
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
            Why Work With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium drop-shadow-sm">
            I focus on building useful, modern and maintainable digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyMeData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
                <span className="text-xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
