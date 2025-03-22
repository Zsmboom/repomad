#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const DOWNLOADS_DIR = path.join(__dirname, '../public/downloads');
const CONFIG_PATH = path.join(__dirname, '../config.json');

// 日志函数
function log(message) {
  console.log(message);
}

// 读取配置
function readConfig() {
  try {
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
    return JSON.parse(configContent);
  } catch (error) {
    log(`读取配置文件失败: ${error.message}`);
    return { mods: {} };
  }
}

// 主函数
function main() {
  // 确保下载目录存在
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    log(`下载目录不存在: ${DOWNLOADS_DIR}`);
    return;
  }

  // 读取配置文件，获取最新版本信息
  const config = readConfig();
  const latestVersions = {};
  
  // 从配置中提取最新版本信息
  for (const [modName, modInfo] of Object.entries(config.mods)) {
    if (modInfo.version && modInfo.fileName) {
      latestVersions[modName.toLowerCase()] = {
        version: modInfo.version,
        fileName: modInfo.fileName
      };
    }
  }
  
  // 读取目录中的所有文件
  const files = fs.readdirSync(DOWNLOADS_DIR);
  
  // 按模组名分组所有文件
  const filesByMod = {};
  const modPattern = /^repomod-([A-Za-z0-9_]+)-(\d+\.\d+\.\d+)\.zip$/i;
  
  for (const file of files) {
    // 跳过非zip文件和隐藏文件
    if (!file.endsWith('.zip') || file.startsWith('.')) {
      continue;
    }
    
    const match = file.match(modPattern);
    if (!match) continue;
    
    const modName = match[1];
    const version = match[2];
    
    if (!filesByMod[modName.toLowerCase()]) {
      filesByMod[modName.toLowerCase()] = [];
    }
    
    filesByMod[modName.toLowerCase()].push({
      fileName: file,
      version: version
    });
  }
  
  let deletedCount = 0;
  let retainedCount = 0;
  
  // 遍历每个模组，保留最新版本，删除旧版本
  for (const [modNameLower, versions] of Object.entries(filesByMod)) {
    // 按版本号排序（使用语义化版本排序）
    versions.sort((a, b) => {
      const versionA = a.version.split('.').map(Number);
      const versionB = b.version.split('.').map(Number);
      
      for (let i = 0; i < 3; i++) {
        if (versionA[i] !== versionB[i]) {
          return versionB[i] - versionA[i]; // 降序排列
        }
      }
      
      return 0;
    });
    
    // 获取配置中的最新版本
    const latestInfo = latestVersions[modNameLower];
    
    // 遍历所有版本，除了最新版本外都删除
    for (let i = 0; i < versions.length; i++) {
      const file = versions[i];
      const filePath = path.join(DOWNLOADS_DIR, file.fileName);
      
      // 如果是配置中的最新版本或列表中的第一个（最新）版本，则保留
      if ((latestInfo && file.fileName === latestInfo.fileName) || i === 0) {
        log(`保留最新版本: ${file.fileName}`);
        retainedCount++;
      } else {
        try {
          fs.unlinkSync(filePath);
          log(`已删除旧版本: ${file.fileName}`);
          deletedCount++;
        } catch (error) {
          log(`删除失败: ${file.fileName} - ${error.message}`);
        }
      }
    }
  }
  
  // 输出结果
  log(`\n清理完成: 删除了 ${deletedCount} 个旧版本文件, 保留了 ${retainedCount} 个最新版本文件`);
}

// 执行主函数
main(); 