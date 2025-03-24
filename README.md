# REPO Mods 自动更新系统

这是一个用于自动检查和更新[R.E.P.O游戏](https://repomod.com/) 模组的系统。



如果需要在本地测试更新检查：

```bash
# 安装依赖
npm install

# 运行更新检查
node scripts/mod_updater.js
```

## 查看更新日志

更新操作的日志可以在以下位置查看：

- GitHub Actions执行日志：在GitHub仓库的Actions选项卡中
- 本地日志文件：`mod_updates.log`

## 注意事项

- 确保GitHub仓库设置了正确的权限，允许Actions写入仓库内容
- 避免频繁手动触发更新检查，以防被Thunderstore视为爬虫并限制访问

## 功能特点

- 自动检查多个模组的更新
- 自动下载最新版本的模组文件
- 自动更新网站上的模组信息页面
- 规范化模组文件命名
- 自动记录日志
- 支持每日定时执行

## 文件结构

- `scripts/mod_updater.js`: 核心模组更新检查脚本
- `scripts/add_mods_batch.js`: 批量添加多个模组到监控列表
- `scripts/normalize_filenames.js`: 规范化文件名格式
- `scripts/cleanup_old_versions.js`: 清理旧版本模组文件（保留最新版本）
- `scripts/daily_update.js`: 每日自动更新执行脚本
- `scripts/setup_cron.js`: 设置crontab定时任务
- `public/downloads/`: 下载的模组文件存放目录
- `logs/`: 日志文件存放目录

## 使用方法

### 查看当前监控的模组

打开 `scripts/mod_updater.js` 文件，查看 `MOD_CONFIGS` 数组。

### 手动检查更新

```bash
node scripts/mod_updater.js
```

### 添加新的模组到监控列表

编辑 `scripts/add_mods_batch.js` 文件，在 `MODS_TO_ADD` 数组中添加新的模组配置，然后运行：

```bash
node scripts/add_mods_batch.js
```

### 规范化文件名

```bash
node scripts/normalize_filenames.js
```

### 清理旧版本文件

```bash
node scripts/cleanup_old_versions.js
```

### 设置每日自动更新

```bash
node scripts/setup_cron.js
```

这将添加一个crontab任务，在每天凌晨2点自动执行更新。

### 手动执行每日更新流程

```bash
node scripts/daily_update.js
```

## 配置文件

系统使用 `config.json` 文件存储模组的版本信息和更新状态。该文件结构如下：

```json
{
  "last_checked": "2023-03-22T14:50:11.235Z",
  "mods": {
    "ModName1": {
      "version": "1.0.1",
      "lastUpdated": "2 weeks ago",
      "lastChecked": "2023-03-22T14:50:11.235Z",
      "fileName": "repomod-ModName1-1.0.1.zip"
    },
    "ModName2": {
      "version": "1.2.3",
      "lastUpdated": "3 days ago",
      "lastChecked": "2023-03-22T14:50:11.235Z",
      "fileName": "repomod-ModName2-1.2.3.zip"
    }
  }
}
```

## 日志

系统会自动记录所有操作到日志文件中：

- 模组更新操作记录在 `teamheals_monitor.log` 文件中
- 每日更新任务记录在 `logs/update-YYYY-MM-DD.log` 文件中
- crontab执行记录在 `logs/cron.log` 文件中
