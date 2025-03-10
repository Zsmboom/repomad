'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiClock, FiShield, FiSettings, FiZap, FiRefreshCw } from 'react-icons/fi';

const features = [
  {
    icon: <FiTarget className="h-8 w-8 text-blue-500" />,
    title: 'Automated Fishing',
    description: 'Automate the fishing process without manual operation, improving fishing efficiency and success rate.'
  },
  {
    icon: <FiClock className="h-8 w-8 text-blue-500" />,
    title: 'Scheduled Tasks',
    description: 'Set scheduled tasks to execute specific operations at specific times, making the most of your gaming time.'
  },
  {
    icon: <FiShield className="h-8 w-8 text-blue-500" />,
    title: 'Safe & Reliable',
    description: 'Uses advanced simulation technology to mimic real player operations, reducing detection risk.'
  },
  {
    icon: <FiSettings className="h-8 w-8 text-blue-500" />,
    title: 'Highly Customizable',
    description: 'Provides rich customization options to adjust macro behavior and parameters according to your needs.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-blue-500" />,
    title: 'Resource Optimization',
    description: 'Optimizes resource acquisition paths, improving game resource collection efficiency and accelerating game progress.'
  },
  {
    icon: <FiRefreshCw className="h-8 w-8 text-blue-500" />,
    title: 'Regular Updates',
    description: 'Regular updates to adapt to game changes, ensuring the macro is always compatible with the latest version of the game.'
  }
];

export default function Features() {
  return (
    <section id="features" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Fisch Macro provides multiple features to help you get a better experience in Roblox Fisch game
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 