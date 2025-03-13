'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiYoutube } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Fisch Macro</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/fischmacroo" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://x.com/FischOnROBLOX" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@fischmacroo.com" className="text-gray-400 hover:text-white" aria-label="Email">
                <FiMail className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@FischONRoblox" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FiYoutube className="h-5 w-5" />
              </a>
              <a href="https://discord.com/invite/cuKz5SK3md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <FaDiscord className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#what-is" className="text-gray-400 hover:text-white">
                  macro for fisch
                </Link>
              </li>
              <li>
                <Link href="/#how-to" className="text-gray-400 hover:text-white">
                  how to macro fisch
                </Link>
              </li>
              <li>
                <Link href="/#why" className="text-gray-400 hover:text-white">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-gray-400 hover:text-white">
                  fisch macro download
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Fisch Macro. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Fisch Macro is not affiliated with Roblox Corporation or the Fisch game developer.
          </p>
        </div>
      </div>
    </footer>
  );
} 