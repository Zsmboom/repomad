#!/bin/bash

# 定义项目根目录（这里假设脚本在项目的scripts文件夹下）
PROJECT_DIR="$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)")"
LOG_FILE="$PROJECT_DIR/teamheals_monitor.log"

echo "开始执行模组更新检查..." >> "$LOG_FILE"
cd "$PROJECT_DIR" || { echo "无法进入项目目录 $PROJECT_DIR" >> "$LOG_FILE"; exit 1; }

# 确保必要的npm包已安装
if [ ! -d "node_modules/axios" ] || [ ! -d "node_modules/cheerio" ]; then
  echo "安装依赖包..." >> "$LOG_FILE"
  npm install axios cheerio
fi

# 执行更新脚本
node "$PROJECT_DIR/scripts/mod_updater.js"

echo "模组更新检查完成 $(date)" >> "$LOG_FILE" 