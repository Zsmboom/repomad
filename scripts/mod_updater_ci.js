const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { execSync } = require('child_process');

// 配置 - CI环境适用
const CONFIG_PATH = path.join(__dirname, '../config.json');
const LOG_FILE = path.join(__dirname, '../mod_updates.log');
const DOWNLOADS_DIR = path.join(__dirname, '../public/downloads');
const MODS_DIR = path.join(__dirname, '../public/mods');

// 确保目录存在
if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

if (!fs.existsSync(MODS_DIR)) {
  fs.mkdirSync(MODS_DIR, { recursive: true });
}

// 引入模组配置
const MOD_CONFIGS = require('./mod_configs');

// 记录日志
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(LOG_FILE, logMessage);
}

// 读取配置文件
function readConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
      return JSON.parse(configContent);
    } else {
      log(`配置文件不存在，创建新配置`);
      return {
        last_checked: '',
        mods: {}
      };
    }
  } catch (error) {
    log(`读取配置文件失败: ${error.message}`);
    return {
      last_checked: '',
      mods: {}
    };
  }
}

// 保存配置文件
function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
    log(`配置已保存`);
  } catch (error) {
    log(`保存配置文件失败: ${error.message}`);
  }
}

// 从页面提取模组信息
async function fetchModInfo(modConfig) {
  try {
    log(`正在检查模组 ${modConfig.name} 的更新...`);
    
    // 使用用户代理头部，避免被认为是爬虫
    const response = await axios.get(modConfig.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 30000 // 增加超时时间到30秒
    });
    
    const $ = cheerio.load(response.data);
    
    // 从元数据中提取版本号
    let version = null;
    const metaTitle = $('meta[property="og:title"]').attr('content');
    if (metaTitle) {
      const versionMatch = metaTitle.match(/v([\d.]+)/);
      if (versionMatch) {
        version = versionMatch[1];
        log(`从元数据提取到版本号: ${version}`);
      }
    }
    
    // 尝试从表格中提取最后更新日期
    let lastUpdated = null;
    $('table.table tr').each(function() {
      const label = $(this).find('td').first().text().trim();
      if (label === 'Last updated') {
        lastUpdated = $(this).find('td').last().text().trim();
        log(`从表格提取到更新日期: ${lastUpdated}`);
        return false;
      }
    });
    
    // 查找手动下载链接
    let downloadLink = null;
    $('a').each(function() {
      const text = $(this).text().trim();
      if (text.includes('Manual Download')) {
        downloadLink = $(this).attr('href');
        log(`提取到下载链接: ${downloadLink}`);
        return false;
      }
    });
    
    // 如果没找到必要信息，尝试其他方式解析
    if (!version) {
      // 尝试从URL路径提取版本
      const versionPathMatch = response.request?.path?.match(/\/(\d+\.\d+\.\d+)\//);
      if (versionPathMatch) {
        version = versionPathMatch[1];
        log(`从URL路径提取到版本号: ${version}`);
      }
    }
    
    if (!version || !downloadLink) {
      throw new Error(`无法从页面提取所需信息: ${!version ? '版本' : ''} ${!downloadLink ? '下载链接' : ''}`);
    }
    
    // 如果没找到更新日期，使用当前日期
    if (!lastUpdated) {
      lastUpdated = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      log(`未找到更新日期，使用当前日期代替: ${lastUpdated}`);
    }
    
    return {
      version,
      lastUpdated,
      downloadLink: downloadLink.startsWith('http') ? downloadLink : `https://thunderstore.io${downloadLink}`
    };
  } catch (error) {
    log(`获取模组信息失败: ${error.message}`);
    return null;
  }
}

// 下载文件
async function downloadFile(url, filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      log(`开始下载文件: ${url}`);
      
      // 使用axios下载文件，它会自动处理重定向
      const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream',
        maxRedirects: 5, // 允许最多5次重定向
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
          'Referer': 'https://thunderstore.io/'
        },
        timeout: 60000 // 增加下载超时时间到60秒
      });
      
      // 创建写入流
      const writer = fs.createWriteStream(filePath);
      
      // 管道化响应到文件
      response.data.pipe(writer);
      
      // 监听写入完成事件
      writer.on('finish', () => {
        writer.close();
        log(`文件下载完成: ${filePath}`);
        resolve(true);
      });
      
      // 监听错误事件
      writer.on('error', err => {
        writer.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(err);
      });
      
      response.data.on('error', err => {
        writer.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(err);
      });
    } catch (error) {
      // 如果文件已创建，则删除
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      
      log(`下载文件失败: ${error.message}`);
      
      // 在GitHub Actions环境中，curl通常是可用的
      if (error.response && (error.response.status === 302 || error.response.status === 301 || error.code === 'ETIMEDOUT')) {
        log('尝试使用curl下载文件...');
        try {
          // 使用curl下载
          const command = `curl -L -o "${filePath}" -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -e "https://thunderstore.io/" "${url}"`;
          
          log(`执行命令: ${command}`);
          execSync(command);
          
          // 检查文件是否存在且大小大于0
          const stats = fs.statSync(filePath);
          if (stats.size > 0) {
            log(`文件下载完成: ${filePath} (${stats.size} 字节)`);
            resolve(true);
            return;
          } else {
            throw new Error('下载的文件大小为0');
          }
        } catch (shellError) {
          log(`使用curl命令下载失败: ${shellError.message}`);
          reject(shellError);
        }
      } else {
        reject(error);
      }
    }
  });
}

// 更新网站的模组页面
function updateModPage(modConfig, modInfo) {
  try {
    // 检查页面文件是否存在
    if (!fs.existsSync(modConfig.pageFile)) {
      log(`页面文件不存在，跳过更新页面: ${modConfig.pageFile}`);
      return true; // 仍然视为成功，因为在CI环境中这是正常的
    }
    
    // 读取页面文件
    const pageContent = fs.readFileSync(modConfig.pageFile, 'utf8');
    
    // 构建更新后的内容
    let updatedContent = pageContent;
    
    // 更新版本号
    const versionRegex = /<span className="ml-3 text-sm bg-[a-z0-9-]+?-700 px-2 py-1 rounded-full">v[\d.]+<\/span>/;
    if (versionRegex.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        versionRegex,
        `<span className="ml-3 text-sm bg-amber-700 px-2 py-1 rounded-full">v${modInfo.version}</span>`
      );
    } else {
      log(`警告: 未找到版本号标签，无法更新版本号`);
    }
    
    // 更新最后更新日期
    const dateRegex = /<span>Last updated: .*?<\/span>/;
    if (dateRegex.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        dateRegex,
        `<span>Last updated: ${modInfo.lastUpdated}</span>`
      );
    } else {
      log(`警告: 未找到更新日期标签，无法更新日期信息`);
    }
    
    // 生成文件名模式的正则表达式
    const fileNameRegex = /href="\/downloads\/(repomod|repo)-[^"]*?\.zip"/;
    
    // 更新下载按钮链接
    if (fileNameRegex.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        fileNameRegex,
        `href="/downloads/${modInfo.fileName}"`
      );
    } else {
      log(`警告: 未找到下载链接，无法更新下载链接`);
    }
    
    // 更新下载按钮文本
    // 尝试几种可能的按钮文本格式
    let buttonTextUpdated = false;
    const buttonTextPatterns = [
      new RegExp(`Download ${modConfig.name} v[\\d.]+`, 'i'),
      new RegExp(`Download.*?v[\\d.]+`, 'i')
    ];
    
    for (const pattern of buttonTextPatterns) {
      if (pattern.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          pattern,
          `Download ${modConfig.name} v${modInfo.version}`
        );
        buttonTextUpdated = true;
        break;
      }
    }
    
    if (!buttonTextUpdated) {
      log(`警告: 未找到下载按钮文本，无法更新按钮文本`);
    }
    
    // 如果内容没有变化，记录警告
    if (updatedContent === pageContent) {
      log(`警告: 页面内容未发生变化，可能需要手动检查页面格式: ${modConfig.pageFile}`);
    }
    
    // 保存更新后的页面
    fs.writeFileSync(modConfig.pageFile, updatedContent, 'utf8');
    
    return true;
  } catch (error) {
    log(`更新网站页面失败: ${error.message}`);
    return false;
  }
}

// 检查并更新模组
async function checkAndUpdateMod(modConfig) {
  try {
    const config = readConfig();
    
    // 初始化模组配置（如果不存在）
    if (!config.mods) {
      config.mods = {};
    }
    if (!config.mods[modConfig.name]) {
      config.mods[modConfig.name] = {
        version: '',
        lastUpdated: '',
        lastChecked: ''
      };
    }
    
    // 获取模组信息
    const modInfo = await fetchModInfo(modConfig);
    if (!modInfo) {
      throw new Error('无法获取模组信息');
    }
    
    // 更新最后检查时间
    config.mods[modConfig.name].lastChecked = new Date().toISOString();
    
    // 检查是否有更新
    const currentModInfo = config.mods[modConfig.name];
    
    // 处理相对时间日期（如"2 weeks ago"）
    let isUpdated = false;
    
    // 首先检查版本号是否变更
    if (!currentModInfo.version || modInfo.version !== currentModInfo.version) {
      isUpdated = true;
      log(`版本号变更: ${currentModInfo.version || '无'} -> ${modInfo.version}`);
    } 
    // 如果版本号未变更，但是网站上显示的是相对时间（如"2 weeks ago"），则不视为更新
    // 只有当网站更新日期为具体日期（如"April 22, 2023"）并且与本地记录不同时才视为更新
    else if (!modInfo.lastUpdated.includes("ago") && modInfo.lastUpdated !== currentModInfo.lastUpdated) {
      isUpdated = true;
      log(`更新日期变更: ${currentModInfo.lastUpdated || '无'} -> ${modInfo.lastUpdated}`);
    }
    
    if (isUpdated) {
      log(`发现模组 ${modConfig.name} 有更新`);
      
      // 确保文件名使用repomod前缀，保持模组名称原始大小写
      const fileName = `repomod-${modConfig.name}-${modInfo.version}.zip`;
      const filePath = path.join(DOWNLOADS_DIR, fileName);
      
      // 记录文件名供更新页面使用
      modInfo.fileName = fileName;
      
      // 检查文件是否已存在
      if (fs.existsSync(filePath)) {
        log(`文件已存在，无需重新下载: ${filePath}`);
      } else {
        // 下载文件
        log(`正在下载模组: ${modInfo.downloadLink}`);
        await downloadFile(modInfo.downloadLink, filePath);
        log(`已下载模组到: ${filePath}`);
      }
      
      // 删除旧版本文件
      const oldFiles = fs.readdirSync(DOWNLOADS_DIR)
        .filter(file => file.startsWith(`repomod-${modConfig.name}-`) && file !== fileName);
      
      for (const oldFile of oldFiles) {
        const oldFilePath = path.join(DOWNLOADS_DIR, oldFile);
        fs.unlinkSync(oldFilePath);
        log(`已删除旧版本: ${oldFile}`);
      }
      
      // 更新网站页面（在CI环境中可能会跳过）
      const pageUpdateResult = updateModPage(modConfig, modInfo);
      
      // 更新配置
      config.mods[modConfig.name].version = modInfo.version;
      config.mods[modConfig.name].lastUpdated = modInfo.lastUpdated;
      config.mods[modConfig.name].fileName = fileName; // 保存文件名
      saveConfig(config);
      
      log(`模组 ${modConfig.name} 更新完成`);
      return {
        name: modConfig.name,
        oldVersion: currentModInfo.version,
        newVersion: modInfo.version
      };
    } else {
      log(`模组 ${modConfig.name} 没有更新`);
      saveConfig(config);
      return null;
    }
  } catch (error) {
    log(`处理模组 ${modConfig.name} 时出错: ${error.message}`);
    throw error;
  }
}

async function checkModUpdates() {
  const results = {
    success: [],
    failed: [],
    noUpdate: []
  };

  for (const modConfig of MOD_CONFIGS) {
    try {
      const updated = await checkAndUpdateMod(modConfig);
      if (updated) {
        results.success.push(updated);
      } else {
        results.noUpdate.push(modConfig);
      }
      // 添加延迟，避免被网站视为爬虫而限制
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      results.failed.push({
        name: modConfig.name,
        error: error.message
      });
    }
  }

  return results;
}

// 主函数
async function main() {
  try {
    console.log('开始检查模组更新...');
    const results = await checkModUpdates();
    
    // 输出结果
    console.log('\n更新检查完成:');
    console.log(`- 成功: ${results.success.length}`);
    console.log(`- 失败: ${results.failed.length}`);
    console.log(`- 无更新: ${results.noUpdate.length}`);
    
    if (results.success.length > 0) {
      console.log('\n已更新的模组:');
      results.success.forEach(mod => {
        console.log(`- ${mod.name}: ${mod.oldVersion} -> ${mod.newVersion}`);
      });
    }
    
    if (results.failed.length > 0) {
      console.log('\n更新失败的模组:');
      results.failed.forEach(mod => {
        console.log(`- ${mod.name}: ${mod.error}`);
      });
    }
    
    return results;
  } catch (error) {
    console.error('更新检查失败:', error);
    throw error;
  }
}

// 如果直接运行此脚本，则执行主函数
if (require.main === module) {
  main().catch((error) => {
    log(`执行出错: ${error.message}`);
    process.exit(1);
  });
}

// 导出主函数供其他模块使用
module.exports = { main }; 