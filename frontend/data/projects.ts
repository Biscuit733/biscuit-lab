export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  status: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Biscuit Lab Personal Site',
    subtitle: 'Dark portfolio + resource hub',
    description: '暗黑科技风个人作品集，整合文章、图片资源、精选项目和前端实验室。',
    tags: ['Nuxt 3', 'Vue 3', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    status: 'Building'
  },
  {
    title: 'Fullstack AI Training',
    subtitle: 'Learning system for AI apps',
    description: '围绕前端、后端、AI API、部署和表达能力的系统化训练项目。',
    tags: ['TypeScript', 'FastAPI', 'AI Apps'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    status: 'Training'
  },
  {
    title: 'AI Content Hub',
    subtitle: 'Content workflow and visual assets',
    description: '用于沉淀小红书图片、封面、提示词和可下载资源的内容中台雏形。',
    tags: ['Gallery', 'CMS', 'Resources'],
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
    status: 'Prototype'
  },
  {
    title: 'MES Lite Dashboard',
    subtitle: 'Operational UI experiment',
    description: '面向生产、数据看板和业务管理场景的轻量管理系统视觉实验。',
    tags: ['Dashboard', 'Element Plus', 'Charts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    status: 'Concept'
  }
]
