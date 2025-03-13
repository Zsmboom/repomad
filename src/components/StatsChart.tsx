import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiStar, FiTrendingUp, FiClock } from 'react-icons/fi';

interface StatsChartProps {
  users?: string;
  rating?: number;
  efficiency?: string;
  support?: string;
}

export default function StatsChart({
  users = "10,000+",
  rating = 4.8,
  efficiency = "200%",
  support = "24/7"
}: StatsChartProps) {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fisch Macro 数据统计</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 用户数量 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <FiUsers className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{users}</h3>
            <p className="text-gray-600 dark:text-gray-300">Fisch Macro 用户</p>
            
            {/* 图表 - 简单柱状图 */}
            <div className="mt-4 h-16 flex items-end space-x-1">
              {[40, 55, 70, 85, 100].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex-1 bg-blue-500 dark:bg-blue-600 rounded-t"
                />
              ))}
            </div>
          </motion.div>
          
          {/* 评分 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-4">
              <FiStar className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{rating}/5</h3>
            <p className="text-gray-600 dark:text-gray-300">Fisch Macro 评分</p>
            
            {/* 图表 - 星级评分 */}
            <div className="mt-4 flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * star }}
                  className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center ${
                    star <= Math.floor(rating)
                      ? 'bg-yellow-500 text-white'
                      : star <= rating
                      ? 'bg-yellow-300 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {star}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* 效率 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <FiTrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{efficiency}</h3>
            <p className="text-gray-600 dark:text-gray-300">Fisch Macro 效率</p>
            
            {/* 图表 - 环形进度条 */}
            <div className="mt-4 relative h-16 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border-8 border-gray-200 dark:border-gray-600"></div>
              <motion.div
                initial={{ strokeDasharray: '0 100' }}
                whileInView={{ strokeDasharray: '75 100' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute w-16 h-16"
              >
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeDasharray="75 100"
                    strokeLinecap="round"
                    transform="rotate(-90 32 32)"
                  />
                </svg>
              </motion.div>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">+200%</span>
            </div>
          </motion.div>
          
          {/* 支持 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <FiClock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{support}</h3>
            <p className="text-gray-600 dark:text-gray-300">Fisch Macro 支持</p>
            
            {/* 图表 - 时钟 */}
            <div className="mt-4 relative h-16 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-purple-200 dark:border-purple-800 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-1 h-8 bg-purple-600 dark:bg-purple-400 rounded-full origin-bottom"
                  style={{ transformOrigin: 'bottom center' }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute w-1 h-6 bg-purple-400 dark:bg-purple-300 rounded-full origin-bottom"
                  style={{ transformOrigin: 'bottom center' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 