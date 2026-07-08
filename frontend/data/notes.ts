import { articles, categories } from '~/composables/useMockContent'

export type NoteVariant = 'image' | 'text' | 'quote' | 'summary' | 'checklist'

export type NoteItem = {
  slug: string
  title: string
  summary: string
  cover: string
  category: string
  date: string
  views: number
  tags: string[]
  variant: NoteVariant
  accent: string
  height: 'compact' | 'medium' | 'tall'
  checklist?: string[]
  quote?: string
}

const variants: NoteVariant[] = ['image', 'summary', 'quote', 'text', 'checklist']
const heights: NoteItem['height'][] = ['tall', 'medium', 'compact', 'medium', 'tall']
const accents = ['#b7ff2a', '#22f5d1', '#f7a84b', '#c4b5fd', '#7dd3fc']

export const notes: NoteItem[] = articles.map((article, index) => ({
  ...article,
  variant: variants[index % variants.length],
  height: heights[index % heights.length],
  accent: accents[index % accents.length],
  checklist: [
    '拆出可复用组件',
    '补齐交互状态',
    '验证 build 与路由'
  ],
  quote: '把零散学习沉淀成能反复升级的创作系统。'
}))

export const featuredNotes: NoteItem[] = [
  {
    slug: 'ai-product-sprint-board',
    title: 'AI 产品 Sprint Board',
    summary: '用轻量看板组织需求、Prompt、接口和视觉验证，让 AI 应用开发更像产品迭代。',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    category: 'AI 前端',
    date: '2026-07-08',
    views: 2380,
    tags: ['AI', 'Workflow', 'Product'],
    variant: 'image',
    accent: '#b7ff2a',
    height: 'tall'
  },
  {
    slug: 'visual-system-memory',
    title: '视觉系统记忆库',
    summary: '把色彩、卡片、动效、封面和组件规则整理成一个可复用的视觉资产库。',
    cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
    category: '工具分享',
    date: '2026-07-06',
    views: 1672,
    tags: ['Design', 'Motion', 'Gallery'],
    variant: 'summary',
    accent: '#22f5d1',
    height: 'medium'
  }
]

export const allNotes = [...featuredNotes, ...notes]
export const noteCategories = categories
