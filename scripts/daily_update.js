#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// 配置
const LOG_DIR = path.join(__dirname, '../logs');
const LOG_FILE = path.join(LOG_DIR, `update-${getDateString()}.log`);

// 创建日志目录（如果不存在）
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// 获取当前日期字符串
function getDateString() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// 获取当前时间戳字符串
function getTimestamp() {
  const now = new Date();
  return `${now.toISOString().replace('T', ' ').substring(0, 19)}`;
}

// 写入日志
function logMessage(message) {
  const timestamp = getTimestamp();
  const logLine = `[${timestamp}] ${message}\n`;
  
  // 打印到控制台
  console.log(message);
  
  // 写入日志文件
  fs.appendFileSync(LOG_FILE, logLine);
}

// 运行一个命令并返回 Promise
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    logMessage(`执行命令: ${command} ${args.join(' ')}`);
    
    const process = spawn(command, args);
    let stdout = '';
    let stderr = '';
    
    process.stdout.on('data', (data) => {
      const output = data.toString();
      stdout += output;
      logMessage(`输出: ${output.trim()}`);
    });
    
    process.stderr.on('data', (data) => {
      const error = data.toString();
      stderr += error;
      logMessage(`错误: ${error.trim()}`);
    });
    
    process.on('close', (code) => {
      logMessage(`命令完成，退出代码: ${code}`);
      if (code === 0) {
        resolve({ code, stdout, stderr });
      } else {
        reject(new Error(`命令失败，退出代码: ${code}\n${stderr}`));
      }
    });
  });
}

// 主函数
async function main() {
  logMessage('开始每日模组更新检查');
  
  try {
    // 步骤 1: 运行模组更新检查
    logMessage('1. 检查模组更新');
    await runCommand('node', [path.join(__dirname, 'mod_updater.js')]);
    
    // 步骤 2: 规范化文件名
    logMessage('2. 规范化文件名');
    await runCommand('node', [path.join(__dirname, 'normalize_filenames.js')]);
    
    // 步骤 3: 清理旧版本文件 (暂时跳过)
    logMessage('3. 清理旧版本文件 (已跳过)');
    // await runCommand('node', [path.join(__dirname, 'cleanup_old_versions.js')]);
    
    // 步骤 4: 清理过期日志文件（保留最近30天）
    logMessage('4. 清理过期日志文件');
    await cleanupOldLogs(30); // 保留最近30天的日志
    
    logMessage('每日更新完成');
  } catch (error) {
    logMessage(`更新过程中发生错误: ${error.message}`);
    process.exit(1);
  }
}

// 清理旧日志文件
async function cleanupOldLogs(daysToKeep) {
  if (!fs.existsSync(LOG_DIR)) {
    return;
  }
  
  const files = fs.readdirSync(LOG_DIR);
  const now = new Date();
  let deletedCount = 0;
  
  for (const file of files) {
    if (!file.startsWith('update-') || !file.endsWith('.log')) {
      continue;
    }
    
    try {
      // 从文件名中提取日期 (update-YYYY-MM-DD.log)
      const dateMatch = file.match(/update-(\d{4}-\d{2}-\d{2})\.log/);
      if (!dateMatch) continue;
      
      const fileDate = new Date(dateMatch[1]);
      const diffTime = Math.abs(now - fileDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > daysToKeep) {
        const filePath = path.join(LOG_DIR, file);
        fs.unlinkSync(filePath);
        logMessage(`已删除过期日志: ${file}`);
        deletedCount++;
      }
    } catch (error) {
      logMessage(`处理日志文件时出错: ${file} - ${error.message}`);
    }
  }
  
  if (deletedCount > 0) {
    logMessage(`共删除 ${deletedCount} 个过期日志文件`);
  } else {
    logMessage('没有需要删除的过期日志文件');
  }
}

// 执行主函数
main().catch(error => {
  logMessage(`未处理的异常: ${error.message}`);
  process.exit(1);
}); 