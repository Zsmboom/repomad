import React from 'react';

interface CanonicalProps {
  path?: string;
}

/**
 * 生成规范链接URL
 * @param path - 相对于基础URL的路径
 * @returns 完整的规范链接URL对象，可用于Next.js的metadata
 */
export function generateCanonical(path: string = '') {
  const baseUrl = 'https://fischmacroo.com';
  const canonicalUrl = path ? `${baseUrl}/${path.replace(/^\//, '')}` : baseUrl;
  
  return {
    alternates: {
      canonical: canonicalUrl,
    }
  };
}

/**
 * Canonical组件 - 用于在页面中添加规范链接
 * 注意：在App Router中，推荐使用metadata对象而不是此组件
 */
const Canonical: React.FC<CanonicalProps> = ({ path = '' }) => {
  const baseUrl = 'https://fischmacroo.com';
  const canonicalUrl = path ? `${baseUrl}/${path.replace(/^\//, '')}` : baseUrl;

  // 在客户端添加canonical链接
  React.useEffect(() => {
    // 检查是否已存在canonical链接
    let link = document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      // 如果不存在，创建一个新的
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    // 设置或更新href属性
    link.setAttribute('href', canonicalUrl);
    
    return () => {
      // 清理函数（可选）
    };
  }, [canonicalUrl]);

  // 组件不渲染任何内容
  return null;
};

export default Canonical; 