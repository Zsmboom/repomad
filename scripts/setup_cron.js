#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// 获取当前脚本的绝对路径
const SCRIPT_DIR = __dirname;
const DAILY_UPDATE_SCRIPT = path.join(SCRIPT_DIR, 'daily_update.js');

// 确保daily_update.js有执行权限
try {
  fs.chmodSync(DAILY_UPDATE_SCRIPT, '755');
  console.log(`已为 ${DAILY_UPDATE_SCRIPT} 添加执行权限`);
} catch (error) {
  console.error(`为 ${DAILY_UPDATE_SCRIPT} 添加执行权限失败: ${error.message}`);
}

// 创建crontab任务
const CRON_TIME = '0 2 * * *'; // 每天凌晨2点执行
const CRON_COMMAND = `${DAILY_UPDATE_SCRIPT}`;
const CRON_JOB = `${CRON_TIME} ${CRON_COMMAND} >> ${path.join(SCRIPT_DIR, '../logs/cron.log')} 2>&1`;

// 检查是否已经存在相同的cron任务
function checkExistingCronJob(callback) {
  exec('crontab -l', (error, stdout, stderr) => {
    // 如果crontab为空或者不存在，返回空字符串
    if (error && error.code !== 0) {
      callback('');
      return;
    }
    callback(stdout);
  });
}

// 添加新的cron任务
function addCronJob(existingCrontab) {
  // 检查是否已经存在相同的任务
  if (existingCrontab.includes(DAILY_UPDATE_SCRIPT)) {
    console.log('已经存在模组更新计划任务，无需再次添加');
    return;
  }

  // 添加新任务到现有的crontab
  const newCrontab = existingCrontab.trim() + (existingCrontab.trim() ? '\n' : '') + CRON_JOB + '\n';
  
  // 写入临时文件
  const tempFile = path.join(SCRIPT_DIR, 'temp_crontab');
  fs.writeFileSync(tempFile, newCrontab);
  
  // 使用临时文件更新crontab
  exec(`crontab ${tempFile}`, (error, stdout, stderr) => {
    // 删除临时文件
    fs.unlinkSync(tempFile);
    
    if (error) {
      console.error(`设置crontab失败: ${error.message}`);
      if (stderr) {
        console.error(`错误输出: ${stderr}`);
      }
      return;
    }
    
    console.log(`已成功添加计划任务: ${CRON_JOB}`);
    console.log('模组将在每天凌晨2点自动检查更新');
  });
}

// 主函数
function main() {
  console.log('正在设置模组自动更新计划任务...');
  
  checkExistingCronJob((existingCrontab) => {
    addCronJob(existingCrontab);
  });
}

// 执行主函数
main(); 