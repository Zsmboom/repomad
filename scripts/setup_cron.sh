#!/bin/bash

# 获取项目绝对路径
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_PATH="$PROJECT_DIR/scripts/run_updater.sh"

# 确保脚本有执行权限
chmod +x "$SCRIPT_PATH"

# 创建临时crontab文件
TEMP_CRON=$(mktemp)

# 导出当前crontab
crontab -l > "$TEMP_CRON" 2>/dev/null

# 检查是否已经存在相同的cron任务
if grep -q "$SCRIPT_PATH" "$TEMP_CRON"; then
  echo "定时任务已存在，无需再次添加。"
else
  # 添加每天凌晨2点运行的cron任务
  echo "# 每天凌晨2点执行模组更新检查" >> "$TEMP_CRON"
  echo "0 2 * * * $SCRIPT_PATH >> $PROJECT_DIR/cron.log 2>&1" >> "$TEMP_CRON"
  
  # 应用新的crontab
  crontab "$TEMP_CRON"
  echo "已添加定时任务：每天凌晨2点执行模组更新检查"
fi

# 删除临时文件
rm "$TEMP_CRON"

echo "定时任务设置完成" 