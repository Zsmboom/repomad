import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | REPO Mod - Download and Install Mods for REPO Games',
  description: 'Learn about the team behind REPO Mod, the leading website for REPO game mods and customizations.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">About REPO Mod</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  REPO Mod was born out of a passion for gaming and a desire to enhance REPO games with custom modifications. Our journey began in 2021 when a group of dedicated gamers and developers came together with a shared vision: to create a platform where players could discover, download, and install the best mods for their favorite REPO games.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  What started as a small project among friends quickly grew into a thriving community hub. As more players discovered the benefits of modding their games, we continued to expand our collection and improve our platform based on user feedback and suggestions.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, REPO Mod is used by thousands of players worldwide, and we remain committed to our original mission: providing a safe, reliable, and user-friendly platform for discovering and installing game modifications that enhance the gaming experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  At REPO Mod, our mission is to enhance the gaming experience by providing access to high-quality modifications that expand, improve, and transform the games you love. We believe that modding should be accessible to everyone, regardless of their technical expertise.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We are committed to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Curating a collection of safe and reliable game mods</li>
                  <li>Providing clear installation instructions and troubleshooting support</li>
                  <li>Fostering a community where mod creators and users can connect</li>
                  <li>Respecting intellectual property rights and game developer policies</li>
                  <li>Continuously improving our platform based on user feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 