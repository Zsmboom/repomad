#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 配置
const MOD_UPDATER_PATH = path.join(__dirname, 'mod_updater.js');
const CONFIG_PATH = path.join(__dirname, '../config.json');

// 创建readline接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示输入
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// 主函数
async function main() {
  console.log('添加新的模组到监控列表\n');
  
  // 收集信息
  const modName = await prompt('请输入模组名称（如 TeamHeals）: ');
  const urlPath = await prompt('请输入Thunderstore URL路径（如 EvilCheetah/TeamHeals）: ');
  const folderName = await prompt('请输入网站的文件夹名称（如 repomod-TeamHeals）: ');
  
  // 构造完整URL
  const url = `https://thunderstore.io/c/repo/p/${urlPath}/`;
  
  // 构造文件路径
  const pageFile = path.join(__dirname, `../src/app/${folderName}/page.tsx`);
  
  // 检查文件是否存在
  if (!fs.existsSync(pageFile)) {
    console.log(`\n警告: 页面文件不存在: ${pageFile}`);
    const confirm = await prompt('是否继续？(y/n): ');
    if (confirm.toLowerCase() !== 'y') {
      rl.close();
      return;
    }
  }
  
  // 读取mod_updater.js文件
  let updaterContent = fs.readFileSync(MOD_UPDATER_PATH, 'utf8');
  
  // 检查是否已存在
  if (updaterContent.includes(`name: '${modName}'`)) {
    console.log(`\n警告: 模组 ${modName} 已存在于监控列表中`);
    rl.close();
    return;
  }
  
  // 找到MOD_CONFIGS数组
  const configMatch = updaterContent.match(/const MOD_CONFIGS = \[\s*([\s\S]*?)\s*\/\/ 可以添加更多模组/);
  if (!configMatch) {
    console.log('\n错误: 无法在mod_updater.js中找到MOD_CONFIGS数组');
    rl.close();
    return;
  }
  
  // 创建新的配置项
  const newConfig = `  {
    name: '${modName}',
    url: '${url}',
    pageFile: path.join(__dirname, '../src/app/${folderName}/page.tsx'),
  },
  `;
  
  // 添加到数组中
  const newContent = updaterContent.replace(
    /const MOD_CONFIGS = \[\s*([\s\S]*?)\s*\/\/ 可以添加更多模组/,
    `const MOD_CONFIGS = [\n${configMatch[1]}${newConfig}  // 可以添加更多模组`
  );
  
  // 写入文件
  fs.writeFileSync(MOD_UPDATER_PATH, newContent, 'utf8');
  
  // 读取config.json
  let config = {};
  try {
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
    config = JSON.parse(configContent);
  } catch (error) {
    console.log(`\n警告: 无法读取config.json，将创建新文件`);
    config = {
      last_checked: '',
      mods: {}
    };
  }
  
  // 确保mods对象存在
  if (!config.mods) {
    config.mods = {};
  }
  
  // 添加新模组配置
  if (!config.mods[modName]) {
    config.mods[modName] = {
      version: '',
      lastUpdated: '',
      lastChecked: ''
    };
    
    // 写入配置文件
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
    console.log(`\n已将${modName}添加到config.json`);
  }
  
  console.log(`\n已成功添加模组 ${modName} 到监控列表`);
  console.log(`\n现在可以运行以下命令来检查此模组的更新:`);
  console.log(`node scripts/mod_updater.js`);
  
  rl.close();
}

// 运行主函数
main().catch(error => {
  console.error(`执行出错: ${error.message}`);
  rl.close();
}); 