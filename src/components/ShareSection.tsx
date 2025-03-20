'use client';

import React from 'react';
import ShareButtons from './ShareButtons';

export default function ShareSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Share REPO</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Spread the word about REPO and help grow our community of cooperative horror game enthusiasts!
          </p>
        </div>
        
        <div className="flex justify-center">
          <ShareButtons 
            url="https://repomod.com" 
            title="REPO - Cooperative Horror Game by semiwork" 
            description="REPO is a cooperative horror game developed by semiwork, a Swedish independent studio. Released in early access on February 26, 2025, REPO supports up to 6 players online."
            className="justify-center"
            iconSize={40}
          />
        </div>
      </div>
    </section>
  );
} 