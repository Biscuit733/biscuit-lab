export type CapabilityItem = {
  title: string
  description: string
  tags: string[]
  icon: string
}

export const capabilities: CapabilityItem[] = [
  {
    title: 'Frontend Engineering',
    description: '把 UI、交互、状态管理和工程化做成可交付的产品体验。',
    tags: ['Vue', 'Nuxt', 'TypeScript'],
    icon: 'FE'
  },
  {
    title: 'Fullstack Development',
    description: '从页面到 API、数据模型、认证和部署链路的完整闭环。',
    tags: ['FastAPI', 'MySQL', 'REST'],
    icon: 'FS'
  },
  {
    title: 'AI Application Integration',
    description: '把 AI 能力嵌入实际产品流程，而不是停留在 demo。',
    tags: ['LLM', 'Workflow', 'Prompt'],
    icon: 'AI'
  },
  {
    title: 'Deployment & DevOps',
    description: '关注项目可运行、可上线、可维护的交付质量。',
    tags: ['Docker', 'Nginx', 'CI'],
    icon: 'DO'
  },
  {
    title: 'Content & Visual System',
    description: '用视觉系统、组件资产和内容结构强化个人品牌表达。',
    tags: ['Design', 'Gallery', 'Portfolio'],
    icon: 'VS'
  }
]
