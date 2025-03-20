'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiShare2 } from 'react-icons/fi';
import ShareButtons from './ShareButtons';

export default function HeaderShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label="Share"
      >
        <FiShare2 className="h-5 w-5 mr-1" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 p-4">
          <div className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Share REPO</h3>
          </div>
          <ShareButtons 
            url="https://repomod.com"
            title="REPO - Cooperative Horror Game by semiwork"
            description="REPO is a cooperative horror game where up to 6 players venture into abandoned ruins to collect valuable artifacts while evading hostile entities."
            iconSize={32}
            className="justify-center"
          />
        </div>
      )}
    </div>
  );
} 