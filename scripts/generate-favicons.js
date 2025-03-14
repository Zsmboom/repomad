const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 检查是否安装了 sharp
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp package...');
  exec('npm install sharp --save-dev', (error) => {
    if (error) {
      console.error(`Error installing sharp: ${error}`);
      return;
    }
    console.log('Sharp installed successfully. Rerun this script.');
    process.exit(0);
  });
  return;
}

const sharp = require('sharp');

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  
  // 确保 public 目录存在
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // 添加版本号，使用当前时间戳
  const version = Date.now();
  
  // 读取 SVG 文件
  const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  const appleTouchIconSvg = fs.readFileSync(path.join(publicDir, 'apple-touch-icon.svg'));
  
  // 生成不同尺寸的 favicon
  const sizes = [16, 32, 48, 64, 128, 256];
  
  // 生成 favicon.ico (包含多个尺寸)
  const faviconBuffers = await Promise.all(
    sizes.map(size => 
      sharp(faviconSvg)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );
  
  // 使用第一个尺寸的图像生成ICO文件
  // 注意：sharp不能直接生成多尺寸的ICO文件，但这样至少能确保生成有效的ICO
  await sharp(faviconBuffers[0])
    .toFile(path.join(publicDir, `favicon-v${version}.ico`));
  // 保留原始文件名的版本，以保持兼容性
  await sharp(faviconBuffers[0])
    .toFile(path.join(publicDir, 'favicon.ico'));
  
  // 同时生成各种尺寸的PNG图标，以便在不同场景下使用
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}-v${version}.png`));
    // 保留原始文件名的版本，以保持兼容性
    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
  }
  
  // 生成 apple-touch-icon.png (180x180)
  await sharp(appleTouchIconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, `apple-touch-icon-v${version}.png`));
  // 保留原始文件名的版本，以保持兼容性
  await sharp(appleTouchIconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
  // 将版本号写入一个JSON文件，以便布局文件可以读取
  fs.writeFileSync(
    path.join(publicDir, 'favicon-version.json'), 
    JSON.stringify({ version })
  );
  
  console.log(`Favicons generated successfully with version: ${version}!`);
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
}); 