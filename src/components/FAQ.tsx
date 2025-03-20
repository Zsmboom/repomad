"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'What are REPO mods?',
    answer: 'REPO mods are custom modifications created by the community for the game REPO. These mods can add new content, alter gameplay mechanics, introduce new items, or change visual aspects of the game to enhance your gaming experience.'
  },
  {
    question: 'How do I install REPO mods?',
    answer: 'Installing REPO mods is simple. First, download the mod files from our website. Then, locate your REPO game installation folder, find the "mods" directory, and place the downloaded files there. Restart your game, and the mods should be activated automatically. For detailed instructions, visit our "How to Install REPO Mods" page.'
  },
  {
    question: 'Are REPO mods compatible with the latest game version?',
    answer: 'Most mods on our site are updated regularly to maintain compatibility with the latest REPO version. Each mod listing includes information about which game versions it supports. We recommend checking this information before installing to ensure compatibility.'
  },
  {
    question: 'Can I use multiple REPO mods simultaneously?',
    answer: 'Yes, you can use multiple mods at the same time. However, some mods may conflict with each other if they modify the same game elements. We recommend starting with a few mods and gradually adding more while testing for compatibility issues between them.'
  },
  {
    question: 'Will using REPO mods affect my online gameplay?',
    answer: 'This depends on the mod and server settings. Some mods are client-side only and won\'t affect online play, while others may require all players in a session to have the same mods installed. Some servers may restrict the use of certain mods. Always check the mod description for multiplayer compatibility information.'
  },
  {
    question: 'Are REPO mods safe to download and use?',
    answer: 'All mods on our platform are scanned for malware and reviewed before being made available. However, as with any user-created content, we recommend using caution. Only download mods from trusted sources like our website, and make sure your antivirus software is up to date.'
  },
  {
    question: 'How can I create my own REPO mods?',
    answer: 'To create REPO mods, you\'ll need basic programming knowledge and familiarity with the game\'s modding API. Start by checking out our modding guides and tutorials. The REPO modding community is also very helpful for beginners. You can join our Discord server to connect with other modders.'
  },
  {
    question: 'What should I do if a mod isn\'t working correctly?',
    answer: 'First, verify that the mod is compatible with your game version. Try reinstalling the mod or checking for updates. If issues persist, check our forums or the mod\'s comment section for known issues and solutions. You can also contact the mod creator directly or post in our troubleshooting forum for community assistance.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Everything you need to know about REPO mods
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="h-5 w-5 text-blue-500" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-blue-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-b-lg mt-1">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have more questions? Contact our support team
          </p>
          <a 
            href="mailto:support@repomods.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@repomods.com
          </a>
        </motion.div>
      </div>
    </section>
  );
} 