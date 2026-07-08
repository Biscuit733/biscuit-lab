export type LabExperiment = {
  code: string
  title: string
  description: string
  status: 'Building' | 'Testing' | 'Planned'
  tags: string[]
  gradient: string
}

export const labExperiments: LabExperiment[] = [
  {
    code: '01',
    title: 'AI App Prototype',
    description: '用于验证 AI 产品交互、流式输出和前端状态组织的实验。',
    status: 'Building',
    tags: ['AI', 'Vue', 'Workflow'],
    gradient: 'bg-[radial-gradient(circle_at_30%_30%,#b7ff2a,transparent_38%),radial-gradient(circle_at_70%_60%,#22f5d1,transparent_42%)]'
  },
  {
    code: '02',
    title: 'FastAPI Backend Practice',
    description: '拆解认证、响应结构、业务路由和后续 CMS 数据接入方式。',
    status: 'Testing',
    tags: ['FastAPI', 'API', 'Auth'],
    gradient: 'bg-[linear-gradient(135deg,rgba(34,245,209,.38),rgba(141,108,255,.2))]'
  },
  {
    code: '03',
    title: 'Nuxt UI Experiment',
    description: '沉淀电影感页面、玻璃卡片、滚动区域和资源型页面组件。',
    status: 'Building',
    tags: ['Nuxt', 'Motion', 'UI'],
    gradient: 'bg-[conic-gradient(from_90deg,#22f5d1,#8d6cff,#b9ff66,#22f5d1)]'
  },
  {
    code: '04',
    title: 'Deployment Pipeline',
    description: '把开发环境、构建、预览和部署流程串成稳定交付路径。',
    status: 'Planned',
    tags: ['Docker', 'Nginx', 'CI'],
    gradient: 'bg-[radial-gradient(circle_at_20%_20%,rgba(183,255,42,.42),transparent_32%),linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.02))]'
  },
  {
    code: '05',
    title: 'Prompt Workflow',
    description: '整理提示词、封面生成和内容发布的可复用流程。',
    status: 'Planned',
    tags: ['Prompt', 'XHS', 'Content'],
    gradient: 'bg-[radial-gradient(circle_at_70%_20%,#8d6cff,transparent_34%),radial-gradient(circle_at_30%_70%,#b7ff2a,transparent_38%)]'
  }
]
