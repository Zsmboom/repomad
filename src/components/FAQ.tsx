'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'Is Fisch Macro safe to use?',
    answer: 'Yes, our Fisch Macro uses advanced simulation technology to mimic real player operations, posing no risk to your game account. We regularly update the macro program to ensure it is compatible with the latest version of the game and complies with game rules.'
  },
  {
    question: 'How do I install Fisch Macro?',
    answer: 'The installation process is very simple. First, download the latest version of the Fisch Macro installation package from our official website. Then, double-click the installation package and follow the installation wizard\'s instructions to complete the installation. After installation, you can find the Fisch Macro shortcut in the start menu or on the desktop.'
  },
  {
    question: 'Which operating systems does Fisch Macro support?',
    answer: 'Currently, Fisch Macro supports Windows 10 and Windows 11 operating systems. We plan to support more operating systems in the future, such as macOS and Linux.'
  },
  {
    question: 'Is Fisch Macro free to use?',
    answer: 'Yes, Fisch Macro is completely free to use. We believe in providing value to the gaming community without any cost barriers.'
  },
  {
    question: 'How can I get technical support if I encounter problems?',
    answer: 'You can get technical support in several ways: 1. Check our online help documentation; 2. Join our user community to ask other users; 3. Contact our technical support team via email. We will respond to your questions as soon as possible.'
  },
  {
    question: 'Does Fisch Macro update automatically?',
    answer: 'Yes, Fisch Macro automatically checks for updates. When a new version is available, the macro program will prompt you to update. You can also choose whether to enable the automatic update feature in the settings.'
  },
  {
    question: 'Can I use the same Fisch Macro account on multiple computers?',
    answer: 'Yes, you can use the same account on multiple computers, but not simultaneously on multiple computers. If you need to use it on multiple computers at the same time, please consider downloading separate copies for each machine.'
  },
  {
    question: 'Does Fisch Macro support multiple Roblox accounts?',
    answer: 'Yes, Fisch Macro supports multiple Roblox accounts. You can add and manage multiple accounts in the macro program and set different macro configurations for each account.'
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
            Here are some of the most commonly asked questions and answers
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
            href="mailto:support@fischmacroo.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@fischmacroo.com
          </a>
        </motion.div>
      </div>
    </section>
  );
} 