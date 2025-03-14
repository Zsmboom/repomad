"use client";

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
        
        {/* 鱼形图表 */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-80 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Fisch Macro 用户增长趋势</h3>
            
            {/* 鱼形图表 - SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 500 200" 
                className="w-full h-full max-h-48"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* 水平基准线 */}
                <line 
                  x1="50" 
                  y1="150" 
                  x2="450" 
                  y2="150" 
                  stroke="#CBD5E0" 
                  strokeWidth="2" 
                  strokeDasharray="5,5" 
                />
                
                {/* Y轴标签 */}
                <text x="20" y="50" className="text-xs fill-gray-500 dark:fill-gray-400">10k</text>
                <text x="20" y="100" className="text-xs fill-gray-500 dark:fill-gray-400">5k</text>
                <text x="20" y="150" className="text-xs fill-gray-500 dark:fill-gray-400">0</text>
                
                {/* 鱼身体路径 - 使用贝塞尔曲线创建鱼形 */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M50,150 C100,120 150,60 200,90 C250,120 300,40 350,70 C400,100 450,50 450,50"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                
                {/* 鱼鳍 */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  d="M200,90 C180,60 160,70 170,90"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  d="M350,70 C330,40 310,50 320,70"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* 鱼尾 */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  d="M50,150 C30,130 30,170 50,150"
                  fill="#3B82F6"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
                
                {/* 鱼眼 */}
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                  cx="440"
                  cy="50"
                  r="6"
                  fill="#2563EB"
                />
                
                {/* 数据点 */}
                {[
                  { x: 50, y: 150 },
                  { x: 150, y: 60 },
                  { x: 250, y: 120 },
                  { x: 350, y: 70 },
                  { x: 450, y: 50 }
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 * index + 1 }}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#3B82F6"
                  />
                ))}
                
                {/* X轴标签 */}
                <text x="50" y="170" className="text-xs fill-gray-500 dark:fill-gray-400 text-center">2021</text>
                <text x="150" y="170" className="text-xs fill-gray-500 dark:fill-gray-400 text-center">2022</text>
                <text x="250" y="170" className="text-xs fill-gray-500 dark:fill-gray-400 text-center">2023</text>
                <text x="350" y="170" className="text-xs fill-gray-500 dark:fill-gray-400 text-center">2024</text>
                <text x="450" y="170" className="text-xs fill-gray-500 dark:fill-gray-400 text-center">2025</text>
              </svg>
            </div>
            
            {/* 图例 */}
            <div className="absolute bottom-4 right-6 flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-300">用户数量</span>
            </div>
          </motion.div>
        </div>
        
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
            
            {/* 鱼鳞图表 */}
            <div className="mt-4 h-16 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full">
                {[0, 1, 2, 3, 4].map((col) => (
                  <g key={`col-${col}`}>
                    {[0, 1].map((row) => (
                      <motion.path
                        key={`scale-${col}-${row}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * (col + row * 5) }}
                        d={`M${col * 24 + 10},${row * 20 + 10} a10,10 0 0 1 10,-10 a10,10 0 0 1 10,10 a10,10 0 0 1 -10,10 a10,10 0 0 1 -10,-10 z`}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        className="origin-center"
                      />
                    ))}
                  </g>
                ))}
              </svg>
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
            
            {/* 鱼骨图表 */}
            <div className="mt-4 h-16 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full">
                {/* 鱼骨主线 */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  x1="10"
                  y1="20"
                  x2="110"
                  y2="20"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* 鱼骨刺 */}
                {[20, 40, 60, 80, 100].map((x, i) => (
                  <motion.line
                    key={`bone-${i}`}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i + 0.5 }}
                    x1={x}
                    y1="10"
                    x2={x}
                    y2="30"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
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
            
            {/* 鱼形进度条 */}
            <div className="mt-4 relative h-16 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full">
                {/* 鱼形轮廓 */}
                <path
                  d="M10,20 C20,10 40,5 60,20 C80,35 100,30 110,20 C100,10 80,5 60,20 C40,35 20,30 10,20 Z"
                  fill="none"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                />
                
                {/* 填充的鱼 - 使用裁剪路径来显示进度 */}
                <clipPath id="fish-clip">
                  <rect x="0" y="0" width="90" height="40" />
                </clipPath>
                
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  d="M10,20 C20,10 40,5 60,20 C80,35 100,30 110,20 C100,10 80,5 60,20 C40,35 20,30 10,20 Z"
                  fill="#10B981"
                  clipPath="url(#fish-clip)"
                />
                
                {/* 鱼眼 */}
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  cx="100"
                  cy="15"
                  r="3"
                  fill="#065F46"
                />
              </svg>
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
            
            {/* 气泡图表 */}
            <div className="mt-4 relative h-16 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full">
                {[
                  { cx: 20, cy: 20, r: 5, delay: 0 },
                  { cx: 40, cy: 15, r: 3, delay: 0.1 },
                  { cx: 60, cy: 25, r: 4, delay: 0.2 },
                  { cx: 80, cy: 10, r: 3, delay: 0.3 },
                  { cx: 100, cy: 20, r: 6, delay: 0.4 }
                ].map((bubble, i) => (
                  <motion.circle
                    key={`bubble-${i}`}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ 
                      y: [0, -5, 0],
                      opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      y: { 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      },
                      opacity: { duration: 0.3, delay: bubble.delay }
                    }}
                    cx={bubble.cx}
                    cy={bubble.cy}
                    r={bubble.r}
                    fill="#8B5CF6"
                    opacity="0.7"
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 