export type HeroFeatureItem = {
  title: string
  type: string
  description: string
  tags: string[]
  image: string
  actionLabel: string
}

export const heroFeatures: HeroFeatureItem[] = [
  {
    title: 'Biscuit Lab',
    type: 'Portfolio',
    description: '暗黑科技风个人作品集，把文章、项目、图片资源和 AI 学习路径组织成一个长期展示站。',
    tags: ['Nuxt 3', 'Portfolio', 'Visual System'],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'View Project'
  },
  {
    title: 'Fullstack AI Training',
    type: 'Learning System',
    description: '围绕前端、后端、AI API、部署和表达能力的全栈训练系统，目标是能独立交付 AI 产品。',
    tags: ['TypeScript', 'FastAPI', 'AI Apps'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'Open Roadmap'
  },
  {
    title: 'AI Content Hub',
    type: 'Content Workflow',
    description: '用于沉淀小红书图片、封面、提示词、下载资源和发布节奏的内容资源中台雏形。',
    tags: ['Gallery', 'CMS', 'Prompt'],
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'See Details'
  },
  {
    title: 'MES Lite Dashboard',
    type: 'Dashboard',
    description: '面向生产、业务数据和可视化管理的轻量 dashboard 方向，用来训练真实业务 UI 能力。',
    tags: ['Dashboard', 'Charts', 'Ops UI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'Preview'
  },
  {
    title: 'Visual Notes',
    type: 'Learning Notes',
    description: '把学习笔记做成可检索、可复盘、可继续写作的知识库，而不是零散备忘录。',
    tags: ['Notes', 'Review', 'Knowledge Base'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'Read Notes'
  },
  {
    title: 'Gallery Resources',
    type: 'Resource Library',
    description: '后续用于收纳封面、图片、Prompt、参考图和可下载资源，服务个人品牌内容生产。',
    tags: ['Xiaohongshu', 'Assets', 'Download'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
    actionLabel: 'Open Gallery'
  }
]
