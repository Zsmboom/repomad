'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiYoutube } from 'react-icons/fi';
import { FaDiscord, FaSteam } from 'react-icons/fa';
import ShareButtons from './ShareButtons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">REPO MOD</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              REPO MOD provides enhancements and modifications for REPO, the cooperative horror game developed by semiwork. Our mods add new features, improve gameplay and create customization options for players.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/semiwork" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/REPOgame" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="mailto:support@repogame.com" className="text-gray-400 hover:text-white" aria-label="Email">
                <FiMail className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/repogame" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href="https://store.steampowered.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Steam">
                <FaSteam className="h-5 w-5" />
              </a>
            </div>
            <ShareButtons 
              url="https://repomod.com"
              title="REPO MOD - Modifications for REPO"
              description="REPO MOD enhances the REPO cooperative horror game with additional features, improvements and customization options for a better gameplay experience."
              className="justify-start"
            />
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
                  About REPO MOD
                </Link>
              </li>
              <li>
                <Link href="/#how-to" className="text-gray-400 hover:text-white">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/How-to-Install-REPO-Mods" className="text-gray-400 hover:text-white">
                  Game Guide
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} REPO MOD. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-gray-300">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}