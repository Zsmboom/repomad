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

// 保存配置
function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
    log('配置文件已更新');
  } catch (error) {
    log(`保存配置文件失败: ${error.message}`);
  }
}

// 主函数
function main() {
  // 确保下载目录存在
  if (!fs.existsSync(DOWNLOADS_DIR)) {
    log(`下载目录不存在: ${DOWNLOADS_DIR}`);
    return;
  }

  // 读取配置文件
  const config = readConfig();
  
  // 读取目录中的所有文件
  const files = fs.readdirSync(DOWNLOADS_DIR);
  
  let renamedCount = 0;
  let unchangedCount = 0;
  
  // 正则表达式匹配模式
  // 匹配以下格式: 
  // - repo-ModName-1.0.0.zip
  // - repomod-ModName-1.0.0.zip
  // - REPORoles-1.3.3.zip
  // - ModName-1.0.0.zip 等
  const filePattern = /^(?:(?:repo|repomod)-)?([A-Za-z0-9_]+)-(\d+\.\d+\.\d+)\.zip$/i;
  
  for (const file of files) {
    // 跳过非zip文件和隐藏文件
    if (!file.endsWith('.zip') || file.startsWith('.')) {
      continue;
    }
    
    const oldPath = path.join(DOWNLOADS_DIR, file);
    
    // 应用正则表达式
    const match = file.match(filePattern);
    if (!match) {
      log(`跳过不符合命名规则的文件: ${file}`);
      continue;
    }
    
    const modName = match[1];
    const version = match[2];
    
    // 新文件名格式: repomod-ModName-1.0.0.zip
    const newFileName = `repomod-${modName}-${version}.zip`;
    const newPath = path.join(DOWNLOADS_DIR, newFileName);
    
    // 如果文件名已经符合规范，跳过
    if (file === newFileName) {
      log(`文件名已规范化: ${file}`);
      unchangedCount++;
      continue;
    }
    
    // 重命名文件
    try {
      fs.renameSync(oldPath, newPath);
      log(`已重命名: ${file} → ${newFileName}`);
      renamedCount++;
      
      // 更新配置文件中对应模组的文件名
      // 检查配置中是否有匹配的模组
      for (const [configModName, modInfo] of Object.entries(config.mods)) {
        if (modInfo.version === version && configModName.toLowerCase() === modName.toLowerCase()) {
          modInfo.fileName = newFileName;
          log(`已更新配置: ${configModName} 的文件名为 ${newFileName}`);
        }
      }
    } catch (error) {
      log(`重命名失败: ${file} - ${error.message}`);
    }
  }
  
  // 保存更新后的配置
  saveConfig(config);
  
  // 输出结果
  log(`\n规范化完成: 重命名了 ${renamedCount} 个文件, ${unchangedCount} 个文件无需修改`);
}

// 执行主函数
main(); 