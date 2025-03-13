import React from 'react';
import { FiStar, FiDownload, FiUsers, FiClock, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface GoogleSearchPreviewProps {
  title?: string;
  description?: string;
  url?: string;
  rating?: number;
  ratingCount?: number;
  downloadCount?: string;
  efficiency?: string;
  support?: string;
  features?: Array<string>;
}

export default function GoogleSearchPreview({
  title = "Fisch Macro[Latest], including V13, V12, Xan V3",
  description = "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
  url = "https://fischmacroo.com",
  rating = 4.8,
  ratingCount = 10000,
  downloadCount = "10,000+",
  efficiency = "200%",
  support = "24/7",
  features = [
    "Automated Fishing",
    "Scheduled Tasks",
    "Safety Features",
    "Customizable Settings",
    "Resource Optimization",
    "Regular Updates"
  ]
}: GoogleSearchPreviewProps) {
  
  // 生成星级评分
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FiStar key={i} className="text-yellow-400 fill-current" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FiStar key={i} className="text-yellow-400 fill-current opacity-50" />);
      } else {
        stars.push(<FiStar key={i} className="text-gray-300" />);
      }
    }
    
    return stars;
  };
  
  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">谷歌搜索结果预览</h2>
      
      {/* 搜索结果预览 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          {/* 标题和 URL */}
          <div className="mb-2">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">{title}</h3>
            <p className="text-green-700 dark:text-green-500 text-sm">{url}</p>
          </div>
          
          {/* 描述 */}
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          {/* 评分和统计 */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <div className="flex mr-1">
                {renderStars(rating)}
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{rating} ({ratingCount} reviews)</span>
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiDownload className="mr-1" />
              <span>{downloadCount} downloads</span>
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiClock className="mr-1" />
              <span>{efficiency} efficiency</span>
            </div>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiUsers className="mr-1" />
              <span>{support} support</span>
            </div>
          </div>
          
          {/* 特性列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 富媒体摘要预览 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">富媒体摘要预览</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Fisch Macro 图片</span>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderStars(rating)}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{rating}</span>
              </div>
              
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{description.substring(0, 100)}...</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">免费</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Windows</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">游戏工具</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">主要特性</h4>
              <ul className="space-y-1 mb-4">
                {features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{downloadCount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">用户</div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{efficiency}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">效率提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* FAQ 预览 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">常见问题预览</h3>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h4 className="font-semibold mb-2">Fisch Macro 安全吗？</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                是的，Fisch Macro 设计时考虑了安全性。它使用先进的模拟技术来模仿真实玩家操作，使其安全可靠，不会对您的游戏账户造成任何风险。
              </p>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h4 className="font-semibold mb-2">如何安装 Fisch Macro？</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                要安装 Fisch Macro，首先从 autohotkey.com 下载 AutoHotkey，然后从我们的网站下载 Fisch Macro 文件，右键点击并选择"用 AutoHotkey 打开"。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Fisch Macro 支持哪些操作系统？</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fisch Macro 目前支持 Windows 10 和 11。Mac 版本（代号"Aurium"）即将推出。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 