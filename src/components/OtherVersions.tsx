'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
          <h2 className="heading text-center mb-12 text-white">Fisch Macro Other Versions</h2>
          
          <div className="space-y-8">
            {/* Github Versions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Github Versions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">Fisch Macro Xan All Version</span>
                  <a 
                    href="https://github.com/Hu6Cuh/xan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
                  >
                    View on Github
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">Skate&apos;s Fisch Macro</span>
                  <a 
                    href="https://github.com/SkateF/Skate-s-Fisch-Macro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Download Versions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Direct Download Versions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <span className="text-gray-200 font-semibold">
                      Skate&apos;s Fisch Macro v13
                      <span className="ml-2 inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        NEW
                      </span>
                    </span>
                    <p className="text-gray-300 text-sm mt-1">Latest version of Skate's popular Fisch Macro with enhanced features</p>
                  </div>
                  <Link 
                    href="/downloads/Skate Fisch Macro v13.ahk"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors download-btn"
                    download
                    data-text="Download"
                  >
                    <span className="sr-only">Download</span>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <span className="text-gray-200 font-semibold">
                      (Best) Xan V3 (Irus v6)
                      <span className="ml-2 inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        NEW
                      </span>
                    </span>
                    <p className="text-gray-300 text-sm mt-1">Latest version with enhanced fishing automation and resource collection features</p>
                  </div>
                  <Link 
                    href="/downloads/Xan.V3.ahk"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors download-btn"
                    download
                    data-text="Download"
                  >
                    <span className="sr-only">Download</span>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">TN Fisch Macro v1.2</span>
                  <Link 
                    href="/downloads/TN Fisch Macro v1.2.ahk"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors download-btn"
                    download
                    data-text="Download"
                  >
                    <span className="sr-only">Download</span>
                  </Link>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-200">TN Auto Click Macro v1</span>
                  <Link 
                    href="/downloads/Tn Auto Click Macro v1.ahk"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors download-btn"
                    download
                    data-text="Download"
                  >
                    <span className="sr-only">Download</span>
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