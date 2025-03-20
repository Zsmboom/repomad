"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is REPO?',
    answer: 'REPO is a cooperative horror game developed by semiwork, a Swedish independent studio. It supports up to 6 players working together online. The game is set in a future world where players are employed by artificial intelligence to venture into abandoned human ruins to collect valuable items while facing various dangers.'
  },
  {
    question: 'When was REPO released?',
    answer: 'REPO was released in early access on February 26, 2025 on the Steam platform. The game is still under active development with regular updates and new content being added.'
  },
  {
    question: 'How many players can play REPO together?',
    answer: 'REPO supports up to 6 players in online cooperative mode. Players can work together to complete missions, gather resources, and survive the dangerous environments.'
  },
  {
    question: 'What are the minimum system requirements for REPO?',
    answer: 'For the best experience, we recommend a PC with at least an Intel Core i5 processor, 8GB RAM, NVIDIA GTX 1060 or equivalent graphics card, Windows 10 operating system, and 20GB of available storage space. The game may run on lower specifications but performance might be affected.'
  },
  {
    question: 'Is REPO available on platforms other than PC?',
    answer: 'Currently, REPO is only available for PC through the Steam platform. There are plans to potentially expand to other platforms in the future, but no specific dates have been announced yet.'
  },
  {
    question: 'Does REPO have single-player mode?',
    answer: 'Yes, REPO can be played solo, though the game is designed with cooperative gameplay in mind. Playing alone may present additional challenges as the game missions are balanced for team play.'
  },
  {
    question: 'How often does REPO receive updates?',
    answer: 'As an early access game, REPO receives regular updates from the developers. These typically include bug fixes, performance improvements, new content, and gameplay enhancements based on community feedback.'
  },
  {
    question: 'Is there a roadmap for future REPO development?',
    answer: 'Yes, the developers at semiwork have published a roadmap outlining planned features and content for REPO. This includes additional environments, new enemy types, expanded storyline, and more gameplay mechanics to be added during the early access period.'
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
            Everything you need to know about REPO
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
            href="mailto:support@repogame.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@repogame.com
          </a>
        </motion.div>
      </div>
    </section>
  );
} 