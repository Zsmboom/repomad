const fs = require('fs');
const path = require('path');

const DOWNLOADS_DIR = path.join(__dirname, '../public/downloads');

// 创建测试文件
console.log('创建测试文件...');
fs.writeFileSync(path.join(DOWNLOADS_DIR, 'repomod-TestMod-1.0.0.zip'), 'test');
fs.writeFileSync(path.join(DOWNLOADS_DIR, 'repomod-TestMod-1.0.1.zip'), 'test');
console.log('测试文件创建完成');

// 模拟更新过程
console.log('\n开始模拟更新过程...');
const modName = 'TestMod';
const newVersion = '1.0.2';
const newFileName = `repomod-${modName}-${newVersion}.zip`;
const newFilePath = path.join(DOWNLOADS_DIR, newFileName);

// 创建新版本文件
fs.writeFileSync(newFilePath, 'test');
console.log(`创建新版本文件: ${newFileName}`);

// 删除旧版本文件
const oldFiles = fs.readdirSync(DOWNLOADS_DIR)
  .filter(file => file.startsWith(`repomod-${modName}-`) && file !== newFileName);

for (const oldFile of oldFiles) {
  const oldFilePath = path.join(DOWNLOADS_DIR, oldFile);
  fs.unlinkSync(oldFilePath);
  console.log(`已删除旧版本: ${oldFile}`);
}

// 验证结果
console.log('\n验证结果:');
const remainingFiles = fs.readdirSync(DOWNLOADS_DIR)
  .filter(file => file.startsWith(`repomod-${modName}-`));

console.log('剩余文件:');
remainingFiles.forEach(file => console.log(`- ${file}`)); 