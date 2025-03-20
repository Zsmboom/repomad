"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUsers, FiZap, FiAlertCircle, FiMap } from 'react-icons/fi';
import { FaHeadset, FaSteam } from 'react-icons/fa';

export default function HowTo() {
  return (
    <section id="how-to" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            How to Play REPO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Survive and thrive in the horror-filled ruins with our comprehensive guide to playing REPO with your friends.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 mb-10"
        >
          <div className="flex items-start bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mb-8">
            <FiAlertCircle className="text-amber-500 h-6 w-6 mr-3" />
            <p className="text-gray-700 dark:text-gray-200 italic">
              REPO is designed as a cooperative experience. While solo play is possible, teaming up with friends significantly increases your chances of survival and successful extraction.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Getting Started with REPO</h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiDownload className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 1: Purchase and Install REPO
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Purchase REPO on Steam by visiting the official store page</li>
                <li>Download and install the game (approximately 20GB of storage required)</li>
                <li>Launch REPO from your Steam library</li>
                <li>Create your character during the first-time setup</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step1.png" 
                  alt="Purchase and Install REPO" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiUsers className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 2: Form Your Team
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Invite friends through Steam or join public lobbies</li>
                <li>Coordinate roles based on equipment and abilities</li>
                <li>Use voice chat for effective communication during missions</li>
                <li>Plan your strategy before entering the ruins</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step2.png" 
                  alt="Form Your Team in REPO" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiZap className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 3: Complete Missions
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Review mission objectives and requirements</li>
                <li>Navigate the procedurally generated ruins with caution</li>
                <li>Collect valuable artifacts while avoiding threats</li>
                <li>Extract safely to claim your rewards and progress your character</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step3.png" 
                  alt="Complete Missions in REPO" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Gameplay Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Survival Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FiMap className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Survival Tips</h3>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Always stay with your team - splitting up increases risk</li>
              <li>• Use your flashlight sparingly to avoid attracting unwanted attention</li>
              <li>• Listen carefully for audio cues that signal nearby threats</li>
              <li>• Manage your inventory wisely - prioritize valuable artifacts</li>
              <li>• Know when to extract - sometimes retreating is the best strategy</li>
            </ul>
          </motion.div>

          {/* Communication Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaHeadset className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Communication is Key</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Effective team communication dramatically increases survival rates. Use the in-game voice chat system or external platforms like Discord for seamless coordination.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Develop clear callouts for common situations and establish danger signals to quickly alert teammates to threats. Remember that sound travels in the game world - sometimes silence is your best strategy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-10"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recommended Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <FaSteam className="h-5 w-5 mr-3 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Steam Friends List</p>
                <p className="text-gray-600 dark:text-gray-300">Add teammates to your friends list for easy invites</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaHeadset className="h-5 w-5 mr-3 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Quality Headphones</p>
                <p className="text-gray-600 dark:text-gray-300">Audio cues are critical for survival in REPO</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a 
            href="#download" 
            className="btn btn-primary inline-block"
          >
            Get REPO on Steam
          </a>
        </motion.div>
      </div>
    </section>
  );
} 