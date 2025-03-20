"use client";

import React from 'react';
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
          <h2 className="heading mb-8">REPOMOD[NEW] - The most complete R.E.P.O mods</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            REPO MODS are professionally crafted modifications for <a href="https://store.steampowered.com/app/3241660/REPO/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">REPO</a>, the cooperative horror game developed by semiwork. Our REPO MODS enhance the core gameplay experience while preserving the intense atmosphere that REPO fans love. Each REPO MOD is regularly updated to maintain compatibility with the latest version of REPO.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            With our REPO MODS, you'll experience:
          </p>
          <ul className="list-disc text-left max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-300 space-y-2">
            <li>Enhanced REPO gameplay mechanics with unique player roles</li>
            <li>REPO MODS for customizable player counts and flexible multiplayer</li>
            <li>Realistic REPO MODS stamina system for greater immersion</li>
            <li>REPO MODS performance optimizations for smoother gameplay</li>
            <li>Full REPO MODS compatibility with the base game and online multiplayer</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our REPO MODS are designed for players who want to maximize their REPO experience. As you and up to 5 friends explore dangerous environments to locate valuable objects and extract them safely, REPO MODS enhance various aspects of that journey. From REPO MODS physics-based interactions to unique REPO MODS player abilities, these modifications make the handling and transportation of objects more intuitive and responsive, all while maintaining the tension and horror elements that make REPO unique.
          </p>
          <div className="mt-8">
            <a 
              href="/#download" 
              className="btn btn-primary"
            >
              Download REPO MODS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 