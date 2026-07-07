export type SeasonScene = {
  key: string
  label: string
  cnLabel: string
  headline: string
  description: string
  keywords: string[]
  palette: {
    primary: string
    secondary: string
    glow: string
  }
}

export const seasonScenes: SeasonScene[] = [
  {
    key: 'spring',
    label: 'Spring',
    cnLabel: '春',
    headline: 'Ideas start to grow.',
    description: '绿色微光、植物生长感和轻盈数据层，代表作品从想法进入可见阶段。',
    keywords: ['Growth', 'Vue', 'Notes'],
    palette: {
      primary: '#b7ff2a',
      secondary: '#22f5d1',
      glow: 'rgba(183, 255, 42, 0.34)'
    }
  },
  {
    key: 'summer',
    label: 'Summer',
    cnLabel: '夏',
    headline: 'Build under bright clouds.',
    description: '蓝绿色云层和高亮玻璃质感，代表高频开发、前后端联调和作品发布。',
    keywords: ['Cloud', 'Fullstack', 'Deploy'],
    palette: {
      primary: '#5eead4',
      secondary: '#60a5fa',
      glow: 'rgba(94, 234, 212, 0.32)'
    }
  },
  {
    key: 'autumn',
    label: 'Autumn',
    cnLabel: '秋',
    headline: 'Review, refine, ship.',
    description: '暖光、橙色漂浮碎片和沉淀感，代表复盘、迭代和项目结构化。',
    keywords: ['Review', 'System', 'Ship'],
    palette: {
      primary: '#ffb020',
      secondary: '#f97316',
      glow: 'rgba(255, 176, 32, 0.28)'
    }
  },
  {
    key: 'winter',
    label: 'Winter',
    cnLabel: '冬',
    headline: 'Quiet systems, sharper AI.',
    description: '冷蓝、雪点和静默科技感，代表 AI 应用、自动化和长期工程能力。',
    keywords: ['AI', 'Automation', 'Focus'],
    palette: {
      primary: '#bfdbfe',
      secondary: '#8d6cff',
      glow: 'rgba(147, 197, 253, 0.28)'
    }
  }
]
