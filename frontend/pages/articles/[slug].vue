<template>
  <main class="lab-shell grid gap-8 py-12 lg:grid-cols-[1fr_260px]">
    <article class="glass rounded-lg p-6 sm:p-8">
      <NuxtLink to="/articles" class="text-sm text-lab-cyan">返回文章列表</NuxtLink>
      <h1 class="mt-5 text-4xl font-black leading-tight sm:text-5xl">{{ article?.title }}</h1>
      <p class="mt-4 text-slate-400">{{ article?.category }} · {{ article?.date }} · {{ article?.views }} reads</p>
      <img v-if="article" class="mt-8 h-[360px] w-full rounded-lg object-cover" :src="article.cover" :alt="article.title">
      <div class="prose prose-invert mt-8 max-w-none">
        <p>{{ article?.content }}</p>
        <h2>实现重点</h2>
        <p>第一阶段使用 mock 数据把视觉和交互定型，后续再将数据源切换到 FastAPI。</p>
        <pre><code>const stack = ['Nuxt3', 'Tailwind CSS', 'FastAPI']</code></pre>
      </div>
      <div class="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
        <NuxtLink to="/articles/fastapi-shell-first" class="rounded-lg border border-white/10 p-4 transition hover:border-lab-cyan">上一篇：FastAPI 后端壳怎么先搭才不浪费</NuxtLink>
        <NuxtLink to="/articles/dark-tech-ui-depth" class="rounded-lg border border-white/10 p-4 transition hover:border-lab-violet">下一篇：暗黑科技风 UI 的层次感</NuxtLink>
      </div>
    </article>
    <aside class="glass h-fit rounded-lg p-5">
      <p class="font-semibold text-lab-cyan">目录</p>
      <div class="mt-4 grid gap-3 text-sm text-slate-300">
        <a href="#" class="hover:text-white">项目定位</a>
        <a href="#" class="hover:text-white">实现重点</a>
        <a href="#" class="hover:text-white">后续迭代</a>
      </div>
    </aside>
  </main>
</template>

<script setup lang="ts">
import { articles } from '~/composables/useMockContent'

const route = useRoute()
const article = computed(() => articles.find((item) => item.slug === route.params.slug) ?? articles[0])
</script>
