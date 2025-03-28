'use client';

import { useState, useEffect } from 'react';
import { modDefaults } from './ModData';

export function useModData() {
  const [modVersions, setModVersions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchModInfo() {
      try {
        // 获取最新的配置信息
        const response = await fetch('/api/mods');
        const configData = await response.json();
        
        // 定义要显示的9个特定mod (按要求排序)
        const specificModIds = [
          'R.E.P.O. Roles', 
          'R.E.P.O. MorePlayers', 
          'MoreHead', 
          'LateJoin', 
          'MoreUpgrades', 
          'REPOLib', 
          'TeamUpgrades', 
          'MenuLib', 
          'MoreHeadPlus'
        ];
        
        if (configData && configData.mods) {
          // 筛选出指定的9个mod并保持顺序
          const filteredMods = specificModIds
            .map(modId => {
              // 查找匹配的mod
              const mod = modDefaults.find(mod => mod.name === modId);
              return mod; // 明确返回mod或undefined
            })
            .filter((mod): mod is typeof modDefaults[0] => mod !== undefined); // 类型守卫确保过滤掉undefined值
          
          // 将配置信息与筛选后的模组信息合并
          const updatedMods = filteredMods.map(mod => {
            const configKey = mod.nameOverride || mod.name;
            const modConfig = configData.mods[configKey];
            
            if (modConfig) {
              // 格式化日期显示
              let formattedDate = formatLastUpdatedDate(modConfig.lastUpdated);
              
              return {
                ...mod,
                version: modConfig.version ? `v${modConfig.version}` : undefined,
                date: formattedDate,
                downloadUrl: modConfig.fileName ? `/downloads/${modConfig.fileName}` : undefined
              };
            }
            
            return mod;
          });
          
          setModVersions(updatedMods);
        } else {
          // 如果API调用失败，使用过滤后的默认信息
          const filteredDefaultMods = specificModIds
            .map(modId => {
              const mod = modDefaults.find(mod => mod.name === modId);
              return mod; // 明确返回mod或undefined
            })
            .filter((mod): mod is typeof modDefaults[0] => mod !== undefined); // 类型守卫确保过滤掉undefined值
          setModVersions(filteredDefaultMods);
        }
      } catch (error) {
        console.error('Error fetching mod info:', error);
        // 如果发生错误，使用过滤后的默认信息
        const filteredDefaultMods = [
          'R.E.P.O. Roles', 
          'R.E.P.O. MorePlayers', 
          'MoreHead', 
          'LateJoin', 
          'MoreUpgrades', 
          'REPOLib', 
          'TeamUpgrades', 
          'MenuLib', 
          'MoreHeadPlus'
        ]
          .map(modId => {
            const mod = modDefaults.find(mod => mod.name === modId);
            return mod; // 明确返回mod或undefined
          })
          .filter((mod): mod is typeof modDefaults[0] => mod !== undefined); // 类型守卫确保过滤掉undefined值
        setModVersions(filteredDefaultMods);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchModInfo();
  }, []);

  return { modVersions, isLoading };
}

// 辅助函数：格式化日期显示
function formatLastUpdatedDate(lastUpdated: string): string {
  if (!lastUpdated) return 'Unknown';
  
  try {
    const date = new Date(lastUpdated);
    // 判断是否是一个有效的日期
    if (isNaN(date.getTime())) {
      return lastUpdated;
    }
    
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  } catch (e) {
    return lastUpdated;
  }
} 