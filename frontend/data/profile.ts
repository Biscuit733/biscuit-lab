export type ProfileStat = {
  value: string
  label: string
  detail: string
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export const profile = {
  name: 'YanTang / Biscuit',
  role: 'Frontend Developer turning into a Fullstack AI Application Engineer.',
  description:
    '我正在把前端经验升级为全栈交付能力，围绕 Vue、TypeScript、Node、AI 应用、部署和工程化构建长期作品集。',
  direction: 'AI Product / Fullstack Web / Visual Portfolio',
  currentProject: 'Biscuit Lab personal portfolio and AI learning system',
  focus: [
    'Nuxt 3 / Vue 3 / TypeScript 的产品化前端',
    'FastAPI 与全栈项目交付',
    'AI 应用集成、内容系统和自动化工作流',
    '视觉作品集、资源库和技术成长记录'
  ]
}

export const profileStats: ProfileStat[] = [
  { value: '3+', label: 'Projects', detail: '持续打磨的展示项目' },
  { value: '500+', label: 'Learning Notes', detail: '沉淀技术与复盘笔记' },
  { value: '95%', label: 'Execution', detail: '以交付为核心的训练方式' },
  { value: '20%', label: 'Weekly Growth', detail: '每周迭代作品和能力栈' }
]

export const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Frontend Foundation',
    description: '系统补齐 Vue、TypeScript、组件化、工程化和业务页面交付能力。'
  },
  {
    year: '2025',
    title: 'Fullstack Training',
    description: '从页面走向 API、数据结构、部署链路和完整项目闭环。'
  },
  {
    year: '2026',
    title: 'AI Application Engineer',
    description: '把 AI 能力、内容系统和真实产品体验整合为可展示的作品集。'
  }
]
