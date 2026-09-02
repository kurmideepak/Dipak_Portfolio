import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Tell Me Your Idea',
    desc: 'Share your website, business or application idea.'
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'We discuss features, structure, design and technical requirements.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I develop the solution with a focus on usability and performance.'
  },
  {
    num: '04',
    title: 'Refine',
    desc: 'You review the result and we make improvements.'
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Prepare the project for deployment and handover.'
  }
];

export default function HomeProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // For horizontal layout (desktop)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // For vertical layout (mobile)
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-24 min-h-screen flex items-center z-10 w-full overflow-hidden bg-gray-50/50 dark:bg-[#030712]/50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Works</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium drop-shadow-sm">
            From idea to launch, I keep the process simple and clear.
          </p>
        </motion.div>

        {/* Desktop Layout (Horizontal) */}
        <div className="hidden md:block relative pt-10">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f6,#06b6d4,#a855f7)] shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex flex-col items-center">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wider">{step.num}</span>
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 shadow-md relative z-10 transition-colors duration-500 group-hover:border-blue-500">
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full"
                      style={{ opacity: useTransform(scrollYProgress, [index / 5, (index + 0.5) / 5], [0, 1]) }}
                    />
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (Vertical) */}
        <div className="block md:hidden relative pl-8">
          <div className="absolute top-0 bottom-0 left-3 w-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-[linear-gradient(180deg,#3b82f6,#06b6d4,#a855f7)] shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col"
              >
                <div className="absolute -left-[45px] top-4 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 shadow-md">
                  <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    style={{ opacity: useTransform(scrollYProgress, [index / 5, (index + 0.5) / 5], [0, 1]) }}
                  />
                </div>
                <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">{step.num}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
