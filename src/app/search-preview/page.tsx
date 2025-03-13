import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleSearchPreview from '@/components/GoogleSearchPreview';
import StatsChart from '@/components/StatsChart';
import GoogleSearchSchema from '@/components/GoogleSearchSchema';

export const metadata = {
  title: '谷歌搜索结果预览 - Fisch Macro',
  description: '查看 Fisch Macro 在谷歌搜索结果中的展示效果',
};

export default function SearchPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleSearchSchema />
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">谷歌搜索结果预览</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
              以下是 Fisch Macro 在谷歌搜索结果中的展示效果预览，包括富媒体摘要和常见问题展示。
            </p>
          </div>
          
          <GoogleSearchPreview />
          <StatsChart />
        </div>
      </main>
      <Footer />
    </div>
  );
} 