'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { GiPartyHat } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function EvenMoreHatsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="section bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/repo-mods-Download" className="inline-flex items-center text-purple-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <GiPartyHat className="mr-4 text-purple-400" /> 
                EvenMoreHats
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.2.2</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: 5 hours ago</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-purple-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-purple-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-purple-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-purple-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Express Yourself with an Extensive Collection of Fun Cosmetic Hats!
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    EvenMoreHats introduces a variety of fun and creative cosmetic options to R.E.P.O., allowing you to personalize your character with over 25 different hat styles. From playful animal ears to stylish accessories, this mod adds a new dimension of customization to your gameplay experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Featured Cosmetics:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Animal-Themed Hats</h4>
                          <p>Express your wild side with Bunny Ears, Bear Ears, Cat Ears, Dog Ears, Pufferfish Head, and more animal-inspired cosmetics.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Classic Hat Styles</h4>
                          <p>Add some class with traditional hat options like the Cowboy Hat, Beanie, Fez, and Dino Hat for a touch of style during your missions.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Unique Accessories</h4>
                          <p>Stand out with distinctive items like Daft Punk Helmets, Vanoss Owl Head, Eggshell Hat, and more creative accessories.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-purple-300">Customization Benefits:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Personal Expression</h4>
                          <p>Create a unique look that matches your personality with a diverse range of cosmetic options.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Team Identification</h4>
                          <p>Coordinate with your team by wearing matching or complementary cosmetics for easy visual identification.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-purple-500/20">
                          <h4 className="text-xl font-semibold text-purple-400 mb-2">Fun Factor</h4>
                          <p>Add an element of fun and whimsy to your R.E.P.O. adventures with these playful cosmetic options.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Complete Hat Collection:</h3>
                    <p className="text-gray-200 mb-4">
                      EvenMoreHats includes the following cosmetic options:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <ul className="list-disc pl-5 space-y-1 text-gray-200">
                        <li>Bunny Ears</li>
                        <li>Beanie</li>
                        <li>LilSemiBot</li>
                        <li>Unicorn Pink Hair</li>
                        <li>Egg Shell Hat</li>
                        <li>Cowboy Hat</li>
                        <li>Bag Hat</li>
                        <li>Daft Punk Helmets</li>
                        <li>Vanoss Owl Head</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-1 text-gray-200">
                        <li>WildCats Pig Ear Helmet</li>
                        <li>Noglas Headphones</li>
                        <li>H20 Mask</li>
                        <li>Terroriser Eye</li>
                        <li>Bear Ears</li>
                        <li>Pufferfish Head</li>
                        <li>Puffer Neck</li>
                        <li>Milk Bag</li>
                        <li>Pezzy Can</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-1 text-gray-200">
                        <li>Droids Glasses</li>
                        <li>Rectrixx</li>
                        <li>Yumi</li>
                        <li>Dog Ears</li>
                        <li>Fez</li>
                        <li>Choker</li>
                        <li>Cat Ears</li>
                        <li>Dino Hat</li>
                        <li>Canine Teeth (top and bottom)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Installation:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-200">
                      <li>First, ensure you have <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> installed.</li>
                      <li>Download the EvenMoreHats mod from the link below.</li>
                      <li>Extract the downloaded zip file to your REPO game directory, or use a mod manager like <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>.</li>
                      <li>Launch the game and enjoy your new cosmetic options!</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-purple-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-purple-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      EvenMoreHats is designed to work well with other mods. It's particularly compatible with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li><Link href="/repomod-MoreHead" className="text-purple-400 hover:underline">MoreHead</Link> - Expands on the base cosmetic system</li>
                      <li><Link href="/repomod-MoreHeadPlus" className="text-purple-400 hover:underline">MoreHeadPlus</Link> - Additional cosmetic options that complement EvenMoreHats</li>
                      <li><Link href="/repomod-BensCosmetics" className="text-purple-400 hover:underline">BensCosmetics</Link> - Even more customization options for your character</li>
                      <li><Link href="/repomod-EvenMoreHead" className="text-purple-400 hover:underline">EvenMoreHead</Link> - Additional head customization options</li>
                    </ul>
                  </div>
                  
                  <a 
                    href="/downloads/repomod-EvenMoreHats-1.2.2.zip" 
                    className="inline-flex items-center px-8 py-4 bg-purple-700 text-white text-lg rounded-md hover:bg-purple-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download EvenMoreHats v1.2.2
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="evenMoreHats" themeColor="purple" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 