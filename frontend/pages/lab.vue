<template>
  <main class="lab-shell py-12">
    <SectionTitle eyebrow="Creative Lab" title="前端实验室" />
    <section class="mt-8 grid gap-5 md:grid-cols-3">
      <div v-for="item in demos" :key="item.title" class="glass lift rounded-lg p-5">
        <div class="mb-5 h-32 rounded-md" :class="item.gradient" />
        <h2 class="text-xl font-bold">{{ item.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-slate-300">{{ item.description }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const demos = [
  { title: '粒子背景', description: '第二阶段接入粒子、鼠标跟随和性能开关。', gradient: 'bg-[radial-gradient(circle_at_30%_30%,#22f5d1,transparent_38%),radial-gradient(circle_at_70%_60%,#8d6cff,transparent_42%)]' },
  { title: 'AI 对话流', description: '用于展示 AI 应用 Builder 的流式输出 UI。', gradient: 'bg-[linear-gradient(135deg,rgba(34,245,209,.36),rgba(141,108,255,.22))]' },
  { title: '3D 卡片', description: '沉淀作品卡片、图片预览和后台仪表盘动效。', gradient: 'bg-[conic-gradient(from_90deg,#22f5d1,#8d6cff,#b9ff66,#22f5d1)]' }
]
</script>
