# 模组自动更新系统

这个系统可以自动检测Thunderstore上的模组更新，并自动下载最新版本，同时更新网站上的模组信息。

## 文件结构

- `mod_updater.js`: 主要的更新脚本，负责检查和下载更新
- `add_mod.js`: 交互式添加新模组到监控列表的助手脚本
- `run_updater.sh`: 用于执行更新脚本的bash脚本
- `setup_cron.sh`: 设置定时任务的脚本

## 配置

配置文件位于项目根目录的`config.json`，其结构如下：

```json
{
  "last_checked": "",
  "mods": {
    "ModName": {
      "version": "版本号",
      "lastUpdated": "最后更新日期",
      "lastChecked": "最后检查时间"
    }
  }
}
```

## 添加新的模组监控

### 方法1: 使用交互式助手脚本

运行以下命令，按照提示输入模组信息：

```bash
node scripts/add_mod.js
```

### 方法2: 手动添加

1. 打开`scripts/mod_updater.js`文件
2. 在`MOD_CONFIGS`数组中添加新的模组配置：

```javascript
{
  name: '模组名称',
  url: 'Thunderstore模组页面URL',
  pageFile: path.join(__dirname, '../src/app/repomod-模组名/page.tsx'), // 网站中的页面文件路径
  downloadFileName: 'repomod-模组名', // 下载文件的名称前缀
}
```

## 使用方法

### 手动运行更新检查

```bash
# 直接运行更新脚本
node scripts/mod_updater.js

# 或使用bash脚本运行
./scripts/run_updater.sh
```

### 设置定时任务

运行以下命令设置每天自动检查更新：

```bash
./scripts/setup_cron.sh
```

默认设置为每天凌晨2点运行检查。如需修改时间，请编辑`scripts/setup_cron.sh`文件中的cron表达式。

## 工作原理

此脚本会：

1. 检查Thunderstore页面上的模组版本和更新日期
2. 与本地记录比较，判断是否有更新
3. 下载最新版本的模组文件（如果有更新）
4. 更新网站页面内的版本号、更新日期和下载链接

脚本会自动处理网页抓取、重定向下载等复杂情况，使用以下技术：
- 使用axios和cheerio解析网页内容
- 处理HTTP重定向
- 支持回退到curl/wget下载

## 日志

- 脚本执行日志保存在项目根目录的`teamheals_monitor.log`文件中
- cron任务的日志保存在项目根目录的`cron.log`文件中

## 依赖项

此脚本需要以下Node.js包：
- axios: 用于HTTP请求
- cheerio: 用于解析HTML页面

安装依赖：

```bash
npm install axios cheerio
``` 