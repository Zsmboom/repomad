const { main } = require('./mod_updater_ci');
const fs = require('fs');
const path = require('path');

// 创建一个只包含指定模组的配置
const specificMods = [
  {
    name: 'XUnity_AutoTranslator',
    url: 'https://thunderstore.io/c/repo/p/Hayrizan/XUnity_AutoTranslator/',
    pageFile: path.join(__dirname, '../src/app/repomod-XUnity_AutoTranslator/page.tsx'),
  },
  {
    name: 'FreecamSpectate',
    url: 'https://thunderstore.io/c/repo/p/nickklmao/FreecamSpectate/',
    pageFile: path.join(__dirname, '../src/app/repomod-FreecamSpectate/page.tsx'),
  },
  {
    name: 'DeadTTS',
    url: 'https://thunderstore.io/c/repo/p/flipf17/DeadTTS/',
    pageFile: path.join(__dirname, '../src/app/repomod-DeadTTS/page.tsx'),
  }
];

// 替换mod_updater_ci.js中的MOD_CONFIGS
const originalModConfigsPath = path.join(__dirname, './mod_configs.js');
const backupModConfigsPath = path.join(__dirname, './mod_configs.backup.js');

// 备份原始配置
if (fs.existsSync(originalModConfigsPath)) {
  fs.copyFileSync(originalModConfigsPath, backupModConfigsPath);
}

// 创建新的配置文件
fs.writeFileSync(
  originalModConfigsPath,
  `const path = require('path');\n\nconst MOD_CONFIGS = ${JSON.stringify(specificMods, null, 2).replace(/"__dirname \+ /g, '__dirname + ').replace(/"\.\.\//g, '../').replace(/\.tsx"/g, '.tsx')};\n\nmodule.exports = MOD_CONFIGS;`
);

// 运行检查
async function run() {
  try {
    await main();
  } finally {
    // 恢复原始配置
    if (fs.existsSync(backupModConfigsPath)) {
      fs.copyFileSync(backupModConfigsPath, originalModConfigsPath);
      fs.unlinkSync(backupModConfigsPath);
      console.log('已恢复原始配置文件');
    }
  }
}

run().catch(console.error); 