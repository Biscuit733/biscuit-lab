export type Article = {
  title: string
  slug: string
  summary: string
  category: string
  tags: string[]
  date: string
  views: number
  cover: string
  content: string
}

export type Work = {
  title: string
  subtitle: string
  description: string
  stack: string[]
  cover: string
  status: string
  featured: boolean
  demoUrl: string
  githubUrl: string
}

export type GalleryImage = {
  title: string
  description: string
  category: string
  tags: string[]
  url: string
  downloads: number
}

export const articles: Article[] = [
  {
    title: '把个人站做成创意实验场',
    slug: 'creative-personal-site',
    summary: '为什么 biscuitLab 不走传统博客路线，而是把文章、作品、图片资源和实验室合在一起。',
    category: '项目复盘',
    tags: ['Nuxt', 'Design', '个人站'],
    date: '2026-07-01',
    views: 1280,
    cover: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    content: 'biscuitLab 的第一版目标是先建立视觉气质，再逐步接入真实内容管理。首页承担作品集入口，文章模块沉淀技术笔记，图片库承担资源分发。'
  },
  {
    title: 'FastAPI 后端壳怎么先搭才不浪费',
    slug: 'fastapi-shell-first',
    summary: '先把配置、路由、响应结构、CORS 和健康检查打好，再逐步补模型和业务接口。',
    category: 'FastAPI',
    tags: ['API', 'Backend', 'JWT'],
    date: '2026-06-28',
    views: 936,
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    content: '后端第一阶段不追求完整 CMS，而是保留可运行的服务边界。这样前端可以先稳定推进，后续再替换 mock 数据。'
  },
  {
    title: '暗黑科技风 UI 的层次感',
    slug: 'dark-tech-ui-depth',
    summary: '点阵、渐变光、玻璃拟态和克制动效如何组合出高级感，而不是简单堆特效。',
    category: '前端动效',
    tags: ['UI', 'Motion', 'Tailwind'],
    date: '2026-06-20',
    views: 2104,
    cover: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80',
    content: '视觉冲击来自层次关系：深色底、轻微网格、局部高亮、半透明内容面板，以及 hover 时非常短促的反馈。'
  }
]

export const works: Work[] = [
  {
    title: 'biscuitLab',
    subtitle: '个人创意内容站',
    description: '暗黑科技风的个人博客、图片资源库、作品集与前端实验室。',
    stack: ['Nuxt3', 'Tailwind', 'FastAPI'],
    cover: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    status: 'building',
    featured: true,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'iCamera',
    subtitle: 'AI 摄像头识别界面',
    description: '模拟实时检测框、指标面板和流式分析结果的 AI 应用界面。',
    stack: ['Vue3', 'AI UI', 'Canvas'],
    cover: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    status: 'online',
    featured: true,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Creative UI Lab',
    subtitle: '前端动效组件集合',
    description: '沉淀霓虹按钮、玻璃卡片、滚动视差和 3D 交互等前端实验。',
    stack: ['GSAP', 'Three.js', 'Motion'],
    cover: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
    status: 'prototype',
    featured: true,
    demoUrl: '#',
    githubUrl: '#'
  }
]

export const gallery: GalleryImage[] = [
  {
    title: 'Neon Desk',
    description: '适合做文章封面的暗色工作台视觉。',
    category: '壁纸',
    tags: ['dark', 'desk'],
    url: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
    downloads: 312
  },
  {
    title: 'AI Grid',
    description: '科技网格背景素材。',
    category: 'AI 图片',
    tags: ['grid', 'ai'],
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
    downloads: 221
  },
  {
    title: 'Purple Glass',
    description: '紫蓝玻璃质感封面。',
    category: '封面',
    tags: ['glass', 'cover'],
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80',
    downloads: 188
  },
  {
    title: 'Green Beam',
    description: '青绿色光效壁纸。',
    category: '壁纸',
    tags: ['neon', 'green'],
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    downloads: 146
  },
  {
    title: 'Code Night',
    description: '夜间代码氛围图。',
    category: '小红书',
    tags: ['code', 'note'],
    url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    downloads: 405
  },
  {
    title: 'Soft Terminal',
    description: '柔和终端窗口素材。',
    category: '设计素材',
    tags: ['terminal', 'ui'],
    url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=80',
    downloads: 260
  }
]

export const categories = ['全部', 'Vue', 'AI 前端', 'FastAPI', '前端动效', '项目复盘', '工具分享']
