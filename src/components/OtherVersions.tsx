'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OtherVersions() {
  return (
    <section id="other-versions" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center mb-12">Fisch Macro Other Versions</h2>
          
          <div className="space-y-8">
            {/* Github Versions */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Github Versions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-200">Fisch Macro Xan All Version</span>
                  <a 
                    href="https://github.com/Hu6Cuh/xan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm"
                  >
                    View on Github
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-200">Skate&apos;s Fisch Macro</span>
                  <a 
                    href="https://github.com/SkateF/Skate-s-Fisch-Macro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Download Versions */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Direct Download Versions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-200">TN Fisch Macro v1.2</span>
                  <Link 
                    href="/downloads/TN Fisch Macro v1.2.ahk"
                    className="btn btn-secondary text-sm"
                    download
                  >
                    Download
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-200">TN Auto Click Macro v1</span>
                  <Link 
                    href="/downloads/Tn Auto Click Macro v1.ahk"
                    className="btn btn-secondary text-sm"
                    download
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 