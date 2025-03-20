"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSteam, FaDiscord, FaTwitter, FaReddit } from 'react-icons/fa';

export default function OtherVersions() {
  return (
    <section id="other-versions" className="section bg-gray-700 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center mb-12 text-white">REPO Community Resources</h2>
          
          <div className="space-y-8">
            {/* Official Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Official Resources</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">REPO Steam Page</span>
                  <a 
                    href="https://store.steampowered.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors inline-flex items-center"
                  >
                    <FaSteam className="mr-2" />
                    Visit
                  </a>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">Official REPO Discord Server</span>
                  <a 
                    href="https://discord.gg/repogame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors inline-flex items-center"
                  >
                    <FaDiscord className="mr-2" />
                    Join
                  </a>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">REPO Twitter/X Account</span>
                  <a 
                    href="https://twitter.com/REPOgame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors inline-flex items-center"
                  >
                    <FaTwitter className="mr-2" />
                    Follow
                  </a>
                </div>
              </div>
            </div>
            
            {/* Community Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Community Resources</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">REPO Subreddit</span>
                  <a 
                    href="https://reddit.com/r/REPOgame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md transition-colors inline-flex items-center"
                  >
                    <FaReddit className="mr-2" />
                    Join
                  </a>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">Official Wiki</span>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors"
                  >
                    Visit
                  </a>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">Community Guides</span>
                  <Link
                    href="/How-to-Install-REPO-Mods"
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Future Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Upcoming Content</h3>
              <p className="text-gray-300 mb-4">
                The development team at semiwork is working on exciting new content for REPO. Stay tuned for these upcoming additions:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>New environment types with unique hazards and entities</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>Additional character specializations and equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>Expanded narrative elements revealing the world's backstory</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
                  <span>New mission types with unique objectives and rewards</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/#download" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
            >
              Get REPO on Steam
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 