"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const reasons = [
  'Immersive cooperative horror experience with up to 6 players',
  'Procedurally generated environments ensure every playthrough is unique',
  'Deep character progression system with meaningful upgrades',
  'Atmospheric sound design and dynamic lighting that heightens tension',
  'Strategic gameplay that rewards teamwork and planning',
  'Regular content updates from dedicated Swedish development team',
  'Engaging narrative that unfolds as you explore the world',
  'Risk-reward extraction mechanics with high-stakes decisions'
];

export default function Why() {
  return (
    <section id="why" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Why Play REPO</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              REPO delivers a unique horror experience that combines cooperative gameplay with strategic decision-making. Here's why players are drawn to this atmospheric horror adventure:
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <FiCheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Stats/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Player Experience</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Atmosphere</span>
                  <span className="text-gray-700 dark:text-gray-300">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Team Gameplay</span>
                  <span className="text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Replayability</span>
                  <span className="text-gray-700 dark:text-gray-300">88%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Horror Elements</span>
                  <span className="text-gray-700 dark:text-gray-300">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 