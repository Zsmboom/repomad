'use client';

import { motion } from 'framer-motion';

export default function WhatIs() {
  return (
    <section id="what-is" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading mb-8">What is Fisch Macro?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fisch Macro is an automation tool designed specifically for the <a href="https://www.roblox.com/games/16732694052/Fisch-2X-XP" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Fisch game on Roblox</a>. It can simulate player operations, automatically complete repetitive tasks in the game, such as fishing and resource collection, thereby improving game efficiency and experience.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            By using Fisch Macro, you can:
          </p>
          <ul className="list-disc text-left max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Automatically complete repetitive tasks in the game</li>
            <li>Improve resource collection efficiency</li>
            <li>Save time and effort</li>
            <li>Get a better gaming experience</li>
            <li>Continue game progress even when you're not at your computer</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fisch Macro uses advanced simulation technology to mimic real player operations, making it safe and reliable without posing any risk to your game account.
          </p>
          <div className="mt-8">
            <a 
              href="https://www.roblox.com/games/16732694052/Fisch-2X-XP" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-150 ease-in-out"
            >
              Play Fisch on Roblox
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 