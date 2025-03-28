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
      id: 'top-8-essential-repo-mods',
      title: '8 Best R.E.P.O. MODs and Installation Guide',
      date: 'April 1, 2025',
      excerpt: 'Discover the top 8 R.E.P.O. mods that will transform your gameplay experience, from expanding player count to enhancing customization options.',
      slug: '8-Best-REPO-MODs-and-Installation-Guide',
    },
    {
      id: 'new-mods-march-28-2025',
      title: 'Latest R.E.P.O. Mods Update - March 28, 2025',
      date: 'March 28, 2025',
      excerpt: 'Check out the latest additions to R.E.P.O. including cosmetics, gameplay enhancements, and quality-of-life improvements that will enhance your gaming experience.',
      slug: 'new-mods-march-28-2025',
    },
    {
      id: 'new-mods-march-2025',
      title: 'New R.E.P.O. Mods Added in March 2025',
      date: 'January 25, 2025',
      excerpt: 'Discover 11 exciting new mods added to R.E.P.O. in March 2025, including gameplay enhancements, cosmetics, and quality-of-life improvements.',
      slug: 'new-mods-march-2025',
    },
    {
      id: 'comprehensive-guide-repo-mods',
      title: 'A Comprehensive Guide to REPO Mods - Enhance Your Gameplay Experience',
      date: 'January 22, 2025',
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