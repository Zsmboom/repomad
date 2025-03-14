"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiClock, FiShield, FiSettings, FiZap, FiRefreshCw } from 'react-icons/fi';

const features = [
  {
    icon: <FiTarget className="h-8 w-8 text-blue-500" />,
    title: 'Fisch Macro Automated Fishing',
    description: 'Fisch Macro automates the fishing process without manual operation, improving fishing efficiency and success rate with Fisch Macro technology.'
  },
  {
    icon: <FiClock className="h-8 w-8 text-blue-500" />,
    title: 'Fisch Macro Scheduled Tasks',
    description: 'Fisch Macro sets scheduled tasks to execute specific operations at specific times, making the most of your gaming time with Fisch Macro.'
  },
  {
    icon: <FiShield className="h-8 w-8 text-blue-500" />,
    title: 'Fisch Macro Safety',
    description: 'Fisch Macro uses advanced simulation technology to mimic real player operations, reducing detection risk. Fisch Macro is safe & reliable.'
  },
  {
    icon: <FiSettings className="h-8 w-8 text-blue-500" />,
    title: 'Customizable Fisch Macro',
    description: 'Fisch Macro provides rich customization options to adjust Fisch Macro behavior and parameters according to your needs.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-blue-500" />,
    title: 'Fisch Macro Resource Optimization',
    description: 'Fisch Macro optimizes resource acquisition paths, improving game resource collection efficiency and accelerating game progress with Fisch Macro.'
  },
  {
    icon: <FiRefreshCw className="h-8 w-8 text-blue-500" />,
    title: 'Regular Fisch Macro Updates',
    description: 'Fisch Macro receives regular updates to adapt to game changes, ensuring Fisch Macro is always compatible with the latest version of the game.'
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
            Powerful Fisch Macro Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Fisch Macro provides multiple features to help you get a better experience in Roblox Fisch game. Fisch Macro is designed to enhance your gameplay.
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