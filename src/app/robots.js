export default function robots() {
  // 屏蔽的文件扩展名 - 移除了下载文件相关的扩展名
  const disallowedExtensions = [
    "mp3", "mp4", "avi", "mov", "wmv", "flv", "jpg", "jpeg", "png", "gif", "svg",
    "ico", "woff", "woff2", "ttf", "eot", "map"
  ];

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        ...disallowedExtensions.map(ext => `/*.${ext}$`)
      ],
    },
    host: 'https://repomod.com',
    sitemap: 'https://repomod.com/sitemap.xml',
  };
} 