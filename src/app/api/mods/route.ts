import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const configPath = path.join(process.cwd(), 'config.json');
    
    // 检查配置文件是否存在
    if (!fs.existsSync(configPath)) {
      return NextResponse.json({ error: 'Config file not found' }, { status: 404 });
    }
    
    // 读取配置文件
    const configContent = fs.readFileSync(configPath, 'utf8');
    const configData = JSON.parse(configContent);
    
    return NextResponse.json(configData);
  } catch (error) {
    console.error('Error reading config file:', error);
    return NextResponse.json({ error: 'Failed to read config file' }, { status: 500 });
  }
} 