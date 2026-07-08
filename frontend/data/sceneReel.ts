export type SceneReelItem = {
  key: string
  label: string
  title: string
  description: string
  keywords: string[]
  palette: {
    primary: string
    secondary: string
    glow: string
  }
}

export const sceneReel: SceneReelItem[] = [
  {
    key: 'spring',
    label: 'Spring Signal',
    title: 'Ideas sprout into visible systems.',
    description: '柔和荧光绿、云层、发芽粒子和漂浮玻璃卡，像灵感刚被启动的第一秒。',
    keywords: ['Signal', 'Growth', 'Idea'],
    palette: {
      primary: '#b7ff2a',
      secondary: '#86efac',
      glow: 'rgba(183, 255, 42, 0.3)'
    }
  },
  {
    key: 'summer',
    label: 'Summer Cloud Portfolio',
    title: 'A portfolio floating above the noise.',
    description: '明亮云层、浮岛和作品帧缓慢漂移，像把作品集放在云上的视频开场。',
    keywords: ['Cloud', 'Portfolio', 'Frame'],
    palette: {
      primary: '#d7ff5c',
      secondary: '#7dd3fc',
      glow: 'rgba(125, 211, 252, 0.28)'
    }
  },
  {
    key: 'archive',
    label: 'Autumn Archive',
    title: 'Cards, covers, resources, memories.',
    description: '暖橙、暗绿、资料卡和收藏墙组合成内容沉淀感，像翻开一个视觉档案库。',
    keywords: ['Archive', 'Assets', 'Notes'],
    palette: {
      primary: '#f7a84b',
      secondary: '#b7ff2a',
      glow: 'rgba(247, 168, 75, 0.28)'
    }
  },
  {
    key: 'winter',
    label: 'Winter AI Lab',
    title: 'From frontend craft to AI product.',
    description: '深蓝黑玻璃、光束和数据面板构成 AI 实验台，代表全栈应用工程的下一阶段。',
    keywords: ['Fullstack', 'AI Lab', 'Data'],
    palette: {
      primary: '#bfdbfe',
      secondary: '#8d6cff',
      glow: 'rgba(141, 108, 255, 0.26)'
    }
  }
]
