'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAlertCircle, FiShield, FiCheckSquare } from 'react-icons/fi';
import { FaWindows, FaApple, FaMobileAlt, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

const macroFiles = [
  {
    name: 'fisch macro v12 update3.18',
    description: '最新更新版本的fisch宏，增强了钓鱼功能和性能优化',
    size: '16 KB',
    date: 'March 20, 2025',
    downloadUrl: '/downloads/fischmacro-v12-update.rar',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/2b9648ed55fc57ffc31812968aa57492a05550b9fa2f5b379e7c432de6fe3ac0',
    isNew: true
  },
  {
    name: 'Skate\'s Fisch Macro v13',
    description: 'Latest version of Skate\'s popular Fisch Macro with enhanced features and optimizations',
    size: '36 KB',
    date: 'March 11, 2025',
    downloadUrl: '/downloads/Skate Fisch Macro v13.ahk',
    virusTotalUrl: 'https://github.com/SkateF/Skate-s-Fisch-Macro',
    isNew: true
  },
  {
    name: '(Best) Xan V3 (Irus v6)',
    description: 'Latest version with enhanced fishing automation and resource collection features, includes Irus v6 enhancements',
    size: '61 KB',
    date: 'March 11, 2025',
    downloadUrl: '/downloads/Xan.V3.ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/2b9648ed55fc57ffc31812968aa57492a05550b9fa2f5b379e7c432de6fe3ac0',
    isNew: true
  },
  {
    name: 'Fisch Macro v12 with Config (Updated)',
    description: 'Latest version with improved fishing automation and resource collection, includes configuration files',
    size: '12.5 KB',
    date: 'March 1, 2025',
    downloadUrl: '/downloads/Fisch Macro v12 with Config (Updated).rar',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/2b9648ed55fc57ffc31812968aa57492a05550b9fa2f5b379e7c432de6fe3ac0'
  },
  {
    name: 'Fisch Macro v11 Shake Only (New)',
    description: 'Specialized version focusing only on shake functionality',
    size: '8.2 KB',
    date: 'February 20, 2025',
    downloadUrl: '/downloads/Fisch Macro V11 Shake Only.ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/d81f664a1bbaef9cb6f3a0757ac6ca656807ea9cba4ed3f9f3132e19d55093cb'
  },
  {
    name: 'Xan Legacy (New)',
    description: 'Legacy version of the popular Xan macro with classic features',
    size: '9.7 KB',
    date: 'February 10, 2025',
    downloadUrl: '/downloads/Xan LEGACY.ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/09af2b815992d7d2f83acf82fcc78c147994a9ee286a957a974c48ef9d637e49'
  },
  {
    name: 'Biblical Accuracy (for Seraphic) (New)',
    description: 'Special version optimized for Seraphic fishing style',
    size: '10.3 KB',
    date: 'January 25, 2025',
    downloadUrl: '/downloads/Biblical Accuracy (for Seraphic).ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/1d60c7602da7a72529c1b79b27cefd5b5335a58f10bffee2185154ea18e27f69'
  },
  {
    name: 'Fisch Macro V12 (feat IRUS)',
    description: 'V12 version featuring IRUS enhancements for improved performance',
    size: '11.8 KB',
    date: 'January 15, 2025',
    downloadUrl: '/downloads/Fisch Macro V12 (feat. IRUS).ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/ddb7e78d5c7bf7621c85d0204689df57e0a8acbbe10abafd763e63df8256229e'
  },
  {
    name: 'Angel\'s True Form (V12 Seraphic)',
    description: 'V12 version optimized for Seraphic fishing with advanced features',
    size: '11.2 KB',
    date: 'January 10, 2025',
    downloadUrl: '/downloads/Angel\'s True Form (V12 Seraphic).ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/b6a06d95159c4413b821d806b83e7e56d10972d2c3db1b0f4ac0d44d516dc2cb'
  },
  {
    name: 'v12 No GUI',
    description: 'Lightweight version without graphical interface for minimal resource usage',
    size: '7.5 KB',
    date: 'January 5, 2025',
    downloadUrl: '/downloads/V12 no GUI.ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/e3a00c1d175ecdc700254d7f92baa8e18b08edfb04cffe0ec336ba9e5ea0a583'
  },
  {
    name: 'Fisch Macro v11 (Updated on Feb)',
    description: 'February update of the stable v11 version with bug fixes',
    size: '9.8 KB',
    date: 'January 1, 2025',
    downloadUrl: '/downloads/Fisch Macro V11.ahk',
    virusTotalUrl: 'https://www.virustotal.com/gui/file/44ac95254e84dd288997d3c89cf2d68ece2ca81d7b86513341a8bc762725ad22'
  }
];

export default function Download() {
  return (
    <section id="download" className="section bg-gray-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            fisch macro download
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            Fisch macro is the most popular macro among Roblox gamers. Many new & old players are searching for Macro files, that&apos;s why we launched <a href="https://fischmacroo.com/" className="text-blue-300 hover:underline" aria-label="Fisch Macro Official Website">fischmacroo.com</a>. Macro files are downloaded only from this website.
          </motion.p>
        </div>

        {/* How to Macro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4">How to Macro in Fisch</h3>
          <ol className="space-y-3 text-gray-200 list-none">
            <li className="flex items-start">
              <FiCheckSquare className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
              <span>First visit the site <a href="https://fischmacroo.com/" className="text-gray-300 hover:underline" aria-label="Fisch Macro Official Website">fischmacroo.com</a></span>
            </li>
            <li className="flex items-start">
              <FiCheckSquare className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
              <span>Download Autohotkey (v1.1 or v2) from <a href="https://www.autohotkey.com/" className="text-gray-300 hover:underline" target="_blank" rel="noopener noreferrer" aria-label="AutoHotkey Official Website">autohotkey.com</a></span>
            </li>
            <li className="flex items-start">
              <FiCheckSquare className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
              <span>Now click on the Fisch script button</span>
            </li>
            <li className="flex items-start">
              <FiCheckSquare className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
              <span>Here you select your macro version and hit the download button</span>
            </li>
            <li className="flex items-start">
              <FiCheckSquare className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
              <span>Now follow the proper guide & complete the setup</span>
            </li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-10"
        >
          <div className="flex items-start mb-6">
            <FiAlertCircle className="h-6 w-6 text-yellow-300 mt-1 mr-3 flex-shrink-0" />
            <p className="text-blue-50">
              Unlike other Roblox macros, Fisch Macros can be downloaded or used to run on Windows. I know this sounds awkward but developers might release Fisch macro mac version. But there is no update for the mobile version (android & ios).
            </p>
          </div>
          <div className="flex items-start">
            <FiAlertCircle className="h-6 w-6 text-yellow-300 mt-1 mr-3 flex-shrink-0" />
            <p className="text-blue-50">
              If you own a Windows system this macro is for you. In this post, we will teach you how to download Fisch macro on Windows and how to use it. If you download from other websites, the macro would not work properly. Always download from <a href="https://fischmacroo.com/" className="text-blue-300 hover:underline">fischmacroo.com</a>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4">Available Versions</h3>
          <p className="mb-6 text-blue-50">
            Fisch macro is currently available in multiple versions including the latest <strong>(Best) Xan V3 (Irus v6)</strong>, v12, v11, Xan Legacy, Biblical Accuracy, IRUS, and more. The newest Xan V3 version provides enhanced fishing automation with Irus v6 features for optimal performance. Check your favourite macro right now and enjoy Fisch gaming. Join the telegram Channel for updates or visit <a href="https://fischmacroo.com/" className="text-blue-300 hover:underline">fischmacroo.com</a> regularly for the latest versions.
          </p>
          <div className="flex items-center mb-6">
            <FiShield className="h-6 w-6 text-green-300 mr-3" />
            <p className="text-blue-50">
              All our macros have been scanned with VirusTotal for your safety. Click on the &quot;Virus Check&quot; link next to each download to view the scan results.
            </p>
          </div>
          <div className="flex items-center mb-6">
            <FiAlertCircle className="h-6 w-6 text-yellow-300 mr-3" />
            <p className="text-blue-50">
              <strong>Note:</strong> You need to install AutoHotkey to run these macros. Download it from <a href="https://www.autohotkey.com/" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">autohotkey</a>.
            </p>
          </div>
          <a 
            href="https://t.me/fischmacroo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaTelegram className="mr-2" />
            Join Telegram Channel
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {macroFiles.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden ${file.isNew ? 'ring-4 ring-blue-500 relative' : ''}`}
            >
              {file.isNew && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-bold">
                  LATEST VERSION
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {file.name}
                  {file.isNew && (
                    <span className="ml-2 inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      NEW
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 mb-4">{file.description}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span>Size: {file.size}</span>
                  <span>Released: {file.date}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={file.downloadUrl} 
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors download-btn"
                    aria-label={`Download ${file.name}`}
                    data-text="Download"
                    rel="nofollow"
                  >
                    <FiDownload className="mr-2" />
                    <span className="sr-only">Download</span>
                  </a>
                  <a 
                    href={file.virusTotalUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors ${file.name.includes('Skate') ? 'github-btn' : 'virus-check-btn'}`}
                    aria-label={file.name.includes('Skate') ? `View ${file.name} on GitHub` : `Virus check for ${file.name}`}
                    data-text={file.name.includes('Skate') ? 'View on GitHub' : 'Virus Check'}
                  >
                    <FiShield className="mr-2" />
                    <span className="sr-only">{file.name.includes('Skate') ? 'View on GitHub' : 'Virus Check'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Compatibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FaWindows className="h-8 w-8 text-gray-300 mr-3" />
              <h3 className="text-xl font-semibold">Windows</h3>
            </div>
            <p className="text-gray-200">
              Fully supported. All versions of Fisch Macro work perfectly on Windows 10 and 11.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FaApple className="h-8 w-8 text-gray-300 mr-3" />
              <h3 className="text-xl font-semibold">Mac</h3>
            </div>
            <p className="text-gray-200">
              Coming soon. Developers might release a Mac version (codenamed &quot;Aurium&quot;) in the near future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FaMobileAlt className="h-8 w-8 text-gray-300 mr-3" />
              <h3 className="text-xl font-semibold">Mobile</h3>
            </div>
            <p className="text-gray-200">
              Not available. Currently there are no plans for Android or iOS versions of Fisch Macro.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xl mb-6">Without any further ado, let&apos;s get started. Visit <a href="https://fischmacroo.com/" className="text-gray-300 hover:underline" aria-label="Fisch Macro Official Website">fischmacroo.com</a> for more information.</p>
          <Link 
            href="#how-to" 
            className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
            aria-label="Learn how to use Fisch Macro"
          >
            How to Use Fisch Macro
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 