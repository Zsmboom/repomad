const fs = require('fs');
const path = require('path');

const DOWNLOADS_DIR = path.join(__dirname, '../public/downloads');

// 获取所有模组文件
console.log('开始清理downloads目录...');
const files = fs.readdirSync(DOWNLOADS_DIR);

// 按模组名分组文件
const modFiles = {};
files.forEach(file => {
  // 只处理repomod开头的文件
  if (file.startsWith('repomod-')) {
    // 提取模组名和版本号
    const match = file.match(/repomod-(.*?)-(\d+\.\d+\.\d+)\.zip/);
    if (match) {
      const [, modName, version] = match;
      if (!modFiles[modName]) {
        modFiles[modName] = [];
      }
      modFiles[modName].push({
        fileName: file,
        version: version
      });
    }
  }
});

// 对每个模组，只保留最新版本
let deletedCount = 0;
let keptCount = 0;

Object.entries(modFiles).forEach(([modName, versions]) => {
  if (versions.length > 1) {
    // 按版本号排序（从新到旧）
    versions.sort((a, b) => {
      const versionA = a.version.split('.').map(Number);
      const versionB = b.version.split('.').map(Number);
      for (let i = 0; i < 3; i++) {
        if (versionA[i] !== versionB[i]) {
          return versionB[i] - versionA[i];
        }
      }
      return 0;
    });

    // 保留最新版本，删除其他版本
    console.log(`\n处理模组 ${modName}:`);
    console.log(`- 保留最新版本: ${versions[0].fileName}`);
    keptCount++;

    versions.slice(1).forEach(version => {
      const filePath = path.join(DOWNLOADS_DIR, version.fileName);
      fs.unlinkSync(filePath);
      console.log(`- 删除旧版本: ${version.fileName}`);
      deletedCount++;
    });
  } else if (versions.length === 1) {
    console.log(`\n处理模组 ${modName}:`);
    console.log(`- 只有一个版本: ${versions[0].fileName}`);
    keptCount++;
  }
});

console.log('\n清理完成:');
console.log(`- 保留的文件数: ${keptCount}`);
console.log(`- 删除的文件数: ${deletedCount}`); 