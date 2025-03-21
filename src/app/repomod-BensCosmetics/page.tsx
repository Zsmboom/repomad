'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiDownload, FiCalendar } from 'react-icons/fi';
import { GiClothes } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RelatedMods from '@/components/RelatedMods';

export default function BensCosmeticsPage() {
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
              <Link href="/#download" className="inline-flex items-center text-amber-400 hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all mods
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center">
                <GiClothes className="mr-4 text-amber-400" /> 
                BensCosmetics
                <span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v1.3.2</span>
              </h1>
              
              <div className="flex items-center mb-6 text-gray-400">
                <FiCalendar className="mr-2" />
                <span>Last updated: March 21, 2023</span>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg mb-8 border border-amber-500/20">
                <p className="text-xl text-gray-300 mb-6">
                  Enhance your REPO experience with our premium REPO MODS collection. These REPO MODS add exciting new features and customization options to improve your REPO gameplay. All REPO MODS are fully compatible with the latest version of REPO and receive regular updates. Before using mods, you need to install <a href="https://thunderstore.io/c/repo/p/BepInEx/BepInExPack/" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">BepInExPack</a> and <a href="https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">Thunderstore Mod Manager</a>. For detailed installation instructions, please check our <Link href="/How-to-Install-REPO-Mods" className="text-amber-400 hover:underline">installation guide</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 border border-amber-700/50"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-semibold mb-6">
                    Extensive Cosmetic Collection
                  </h2>
                  
                  <p className="text-gray-200 mb-6 text-lg">
                    BensCosmetics adds over 150 unique cosmetic models to enhance your character's appearance. From hats and head accessories to backpacks and body attachments, this mod offers a vast array of customization options to make your character truly stand out.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Cosmetic Categories:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">HEAD</h4>
                          <p>A variety of hats, helmets, masks and head accessories including Mario hats, Air Pods, TF2 hats, Dipper Hat, Wizard Hats, and more!</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">CHEST</h4>
                          <p>Body attachments and accessories to customize your character's torso area.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">BACK</h4>
                          <p>Backpacks and back accessories including Penguin backpack, Sonic back spikes, and more!</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">PLUSHIES</h4>
                          <p>Adorable plushies that can be equipped including Glorp plush, Seal Plush, FNAF Roxy Plush, and more!</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-amber-300">Featured Models:</h3>
                      <ul className="space-y-4">
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Gaming Favorites</h4>
                          <p>Models from popular games including Minecraft Chicken, Hotline Miami Masks, FNAF, Sonic characters, and Roblox items.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Meme Collection</h4>
                          <p>Internet favorites like Doge, Floppa & Bingus, boykisseramogus, and more meme-inspired cosmetics.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">Functional Items</h4>
                          <p>Physics & Gravity guns, Monster energy drink, Digivices, and other functional-looking accessories.</p>
                        </li>
                        <li className="bg-gray-900/50 p-4 rounded-md border border-amber-500/20">
                          <h4 className="text-xl font-semibold text-amber-400 mb-2">TF2 Collection</h4>
                          <p>A selection of Team Fortress 2 hats and accessories, created by Slipsy, Electropolitan & Telespentry.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Model Credits:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="text-gray-200 space-y-2">
                        <li>• Thekibblemeister - brainslug</li>
                        <li>• Worried - Flamingo</li>
                        <li>• Burritony - Penguin backpack</li>
                        <li>• BluieChuie - Minecraft Chicken</li>
                        <li>• MinakoTheOnly - Mario hats</li>
                        <li>• medicin3seller - Air Pods</li>
                        <li>• djanky - C_ck Hats</li>
                        <li>• Mojion - Hotline Miami Masks</li>
                        <li>• haru_3s & its_sasha - boykisseramogus</li>
                        <li>• kaliber8022 - toughertimes</li>
                        <li>• panman - glorp plush</li>
                        <li>• fishyviolet - Fruitloop</li>
                        <li>• evactouch - Bomb</li>
                        <li>• embox - gwacat</li>
                      </ul>
                      <ul className="text-gray-200 space-y-2">
                        <li>• tammasun - Dinkle & Meowsic Synth</li>
                        <li>• its_sasha - Floppa & Bingus</li>
                        <li>• dr.bob - FNAF Roxy Plush & Brimstone Elemental</li>
                        <li>• misskatsune - Murder Drones Plushies</li>
                        <li>• ujmeade & anonymousmeat - Roblox Bloxy-Cola</li>
                        <li>• widowz - Seal Plush</li>
                        <li>• darian_00 - Kerfur Plushies</li>
                        <li>• fluffluff - Wizard Hats</li>
                        <li>• roboshark1019 - Dipper Hat & Physics/Gravity guns</li>
                        <li>• BillyBnMOfficial - Curious George Hat & more</li>
                        <li>• Commander_J_Ducky - Crash Team Rumble Hats</li>
                        <li>• Slipsy & Electropolitan & Telespentry - TF2 hats</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">How to use:</h3>
                    <p className="text-gray-200 mb-4">
                      After installing the mod, cosmetics can be accessed and equipped in the character customization menu. The extensive collection of cosmetics is organized by category (HEAD, CHEST, etc.) to help you find what you're looking for.
                    </p>
                    <p className="text-gray-200">
                      Tip from Cosmiic: If your list is too long, try sorting for what you are looking for; HEAD, CHEST, etc. to easily navigate through the large collection.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Future Updates:</h3>
                    <p className="text-gray-200 mb-4">
                      The developer has a backlog of TF2 hats to work on for the next few days. Additionally, with Morehead's update allowing custom scripting, new features will be explored and added in future versions.
                    </p>
                    <p className="text-gray-200">
                      Regular updates will continue to add more cosmetic options and improve existing features.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 p-6 rounded-md border border-amber-500/20 mb-8">
                    <h3 className="text-2xl font-medium mb-4 text-amber-300">Compatibility:</h3>
                    <p className="text-gray-200 mb-4">
                      BensCosmetics is fully compatible with the latest version of R.E.P.O. and works seamlessly with other mods.
                    </p>
                    <p className="text-gray-200">
                      Requires BepInExPack to be installed first.
                    </p>
                  </div>
                  
                  <a 
                    href="/downloads/repo-BensCosmetics-1.3.2.zip" 
                    className="inline-flex items-center px-8 py-4 bg-amber-700 text-white text-lg rounded-md hover:bg-amber-600 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download BensCosmetics v1.3.2
                  </a>
                  
                  <div className="mt-16">
                    <RelatedMods currentModId="bensCosmetics" themeColor="amber" />
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