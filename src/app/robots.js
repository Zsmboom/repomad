export default function robots() {
  // 屏蔽的文件扩展名
  const disallowedExtensions = [
    "zip", "rar", "tar", "gz", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
    "mp3", "mp4", "avi", "mov", "wmv", "flv", "jpg", "jpeg", "png", "gif", "svg",
    "ico", "woff", "woff2", "ttf", "eot", "map", "ahk"
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
    host: 'https://fischmacroo.com',
    sitemap: 'https://fischmacroo.com/sitemap.xml',
  };
} 