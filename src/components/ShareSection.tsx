'use client';

import React from 'react';
import ShareButtons from './ShareButtons';

export default function ShareSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Share REPO MOD</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Spread the word about REPO MOD and help grow our community of modders and players enhancing their REPO experience!
          </p>
        </div>
        
        <div className="flex justify-center">
          <ShareButtons 
            url="https://repomod.com" 
            title="REPO MOD - Modifications for REPO" 
            description="REPO MOD enhances the REPO cooperative horror game with additional features, improvements and customization options for a better gameplay experience."
            className="justify-center"
            iconSize={40}
          />
        </div>
      </div>
    </section>
  );
} 