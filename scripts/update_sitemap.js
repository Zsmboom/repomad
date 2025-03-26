const fs = require('fs');
const path = require('path');
const modConfigs = require('./mod_configs');

// 创建sitemap的基础部分
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://repomod.com/</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://repomod.com/blog</loc>
    <lastmod>2025-01-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://repomod.com/blog/new-mods-march-2025</loc>
    <lastmod>2025-01-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://repomod.com/blog/comprehensive-guide-repo-mods</loc>
    <lastmod>2025-01-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://repomod.com/privacy</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://repomod.com/terms</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://repomod.com/disclaimer</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://repomod.com/about</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://repomod.com/contact</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://repomod.com/How-to-Install-REPO-Mods</loc>
    <lastmod>2023-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://repomod.com/search-preview</loc>
    <lastmod>2024-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

// 添加MoreStamina页面（在原始sitemap中存在但不在mod_configs中）
sitemap += `
  <url>
    <loc>https://repomod.com/repomod-MoreStamina</loc>
    <lastmod>2024-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

// 从mod_configs中添加所有模组页面
for (const mod of modConfigs) {
  // 从pageFile路径中提取模组页面路径部分
  const pagePathMatch = mod.pageFile.match(/repomod-([^\/]+)/);
  if (pagePathMatch && pagePathMatch[1]) {
    const modPath = pagePathMatch[1];
    
    // 当前日期作为lastmod
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    
    sitemap += `
  <url>
    <loc>https://repomod.com/repomod-${modPath}</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  }
}

// 完成sitemap
sitemap += `
</urlset>`;

// 写入sitemap.xml文件
fs.writeFileSync(path.join(__dirname, '../src/app/sitemap.xml'), sitemap);

console.log('Sitemap.xml has been updated successfully!'); 