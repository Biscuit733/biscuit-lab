<template>
  <main class="sub-page sub-page--lab">
    <AppHeader />
    <section class="sub-hero section-shell">
      <p class="eyebrow">Creative Lab</p>
      <h1>前端实验室</h1>
      <p>这里用于沉淀动效、AI 交互、视觉组件和未来可复用的产品片段。</p>
    </section>

    <section class="lab-grid section-shell">
      <article v-for="item in demos" :key="item.title" class="lab-experiment-card glass-card">
        <div class="lab-experiment-card__visual" :class="item.gradient" />
        <span>{{ item.code }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '~/components/home/AppHeader.vue'

const demos = [
  { code: '01', title: '粒子背景', description: '第二阶段接入粒子、鼠标跟随和性能开关。', gradient: 'bg-[radial-gradient(circle_at_30%_30%,#22f5d1,transparent_38%),radial-gradient(circle_at_70%_60%,#8d6cff,transparent_42%)]' },
  { code: '02', title: 'AI 对话流', description: '用于展示 AI 应用 Builder 的流式输出 UI。', gradient: 'bg-[linear-gradient(135deg,rgba(34,245,209,.36),rgba(141,108,255,.22))]' },
  { code: '03', title: '3D 卡片', description: '沉淀作品卡片、图片预览和后台仪表盘动效。', gradient: 'bg-[conic-gradient(from_90deg,#22f5d1,#8d6cff,#b9ff66,#22f5d1)]' }
]
</script>
