<template>
  <PageShell>
    <section class="article-detail-layout section-shell">
      <article class="article-detail glass-card">
        <NuxtLink to="/notes" class="article-detail__back">← Back to Notes</NuxtLink>
        <p class="eyebrow">{{ article?.category }} / {{ article?.date }} / {{ article?.views }} reads</p>
        <h1>{{ article?.title }}</h1>
        <p class="article-detail__summary">{{ article?.summary }}</p>
        <img v-if="article" :src="article.cover" :alt="article.title">
        <div class="article-detail__content">
          <p>{{ article?.content }}</p>
          <h2>实现重点</h2>
          <p>第一阶段使用 mock 数据把视觉和交互定型，后续再将数据源切换到 FastAPI。</p>
          <pre><code>const stack = ['Nuxt3', 'Tailwind CSS', 'FastAPI']</code></pre>
        </div>
        <div class="article-detail__pager">
          <NuxtLink to="/articles/fastapi-shell-first">上一篇：FastAPI 后端壳怎么先搭才不浪费</NuxtLink>
          <NuxtLink to="/articles/dark-tech-ui-depth">下一篇：暗黑科技风 UI 的层次感</NuxtLink>
        </div>
      </article>
      <aside class="article-toc glass-card">
        <p class="eyebrow">Contents</p>
        <a href="#">项目定位</a>
        <a href="#">实现重点</a>
        <a href="#">后续迭代</a>
      </aside>
    </section>
  </PageShell>
</template>

<script setup lang="ts">
import PageShell from '~/components/common/PageShell.vue'
import { articles } from '~/composables/useMockContent'

const route = useRoute()
const article = computed(() => articles.find((item) => item.slug === route.params.slug) ?? articles[0])
</script>
