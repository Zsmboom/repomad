import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'REPO Mods Blog - Latest Updates and Guides',
  description: 'Explore our blog for the latest news, guides, and updates about REPO mods. Learn about new mods, installation tips, and gameplay enhancements.',
  keywords: ['REPO mods', 'REPO blog', 'modding guides', 'game mods', 'mod tutorials'],
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'comprehensive-guide-repo-mods',
      title: 'A Comprehensive Guide to REPO Mods - Enhance Your Gameplay Experience',
      date: 'March 22, 2024',
      excerpt: 'Discover the best REPO mods available and how they can transform your gameplay experience. From team features to cosmetic enhancements, this guide covers it all.',
      slug: 'comprehensive-guide-repo-mods',
    },
    // More blog posts can be added here as they are created
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">REPO Mods Blog</h1>
          <p className="text-lg mb-8 text-center">
            Stay updated with the latest news, guides, and information about REPO mods
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 