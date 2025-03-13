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
  
  // 读取 SVG 文件
  const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  const appleTouchIconSvg = fs.readFileSync(path.join(publicDir, 'apple-touch-icon.svg'));
  
  // 生成不同尺寸的 favicon
  const sizes = [16, 32, 48, 64, 128, 256];
  
  // 生成 favicon.ico (包含多个尺寸)
  const faviconBuffers = await Promise.all(
    sizes.slice(0, 3).map(size => 
      sharp(faviconSvg)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );
  
  // 使用 sharp 生成 ICO 文件
  await sharp(faviconBuffers[1])
    .toFile(path.join(publicDir, 'favicon.ico'));
  
  // 生成 apple-touch-icon.png (180x180)
  await sharp(appleTouchIconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
}); 