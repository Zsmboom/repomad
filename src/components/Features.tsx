"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiZap, FiSettings, FiCpu, FiBox, FiCode } from 'react-icons/fi';

const features = [
  {
    icon: <FiBox className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Physics System',
    description: 'Experience improved object interaction with our REPO MODS refined physics system that makes handling valuable items more realistic, intuitive, and responsive in the REPO game environment.'
  },
  {
    icon: <FiUsers className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Co-op Enhancement',
    description: 'Enjoy enhanced team coordination with REPO MODS player indicators, improved voice chat, and streamlined communication tools for up to 6 players in your REPO gaming sessions.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Performance Boost',
    description: 'Benefit from significant REPO MODS performance improvements that reduce stuttering, lower loading times, and optimize resource usage for a smoother REPO gameplay experience.'
  },
  {
    icon: <FiSettings className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Quality-of-Life Features',
    description: 'Access REPO MODS customizable controls, UI scaling options, advanced graphics settings, and numerous other improvements requested by the REPO community.'
  },
  {
    icon: <FiCpu className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS AI Enhancement',
    description: 'Face more intelligent and dynamic threats with our REPO MODS improved AI system that creates more challenging and unpredictable encounters throughout your REPO missions.'
  },
  {
    icon: <FiCode className="h-8 w-8 text-blue-500" />,
    title: 'REPO MODS Compatibility',
    description: 'Our REPO MODS are designed to work seamlessly with the base REPO game and remain compatible with future updates, ensuring you can always enjoy the latest REPO content.'
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
            REPO MOD FEATURE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Our REPO MODS take the thrilling cooperative horror experience of REPO and transform it with these essential improvements that elevate your REPO gameplay to new heights.
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