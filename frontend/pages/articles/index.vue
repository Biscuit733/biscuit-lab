<template>
  <main class="lab-shell py-12">
    <SectionTitle eyebrow="Articles" title="文章" />
    <div class="mt-8 grid gap-4 lg:grid-cols-[280px_1fr]">
      <aside class="glass h-fit rounded-lg p-4">
        <input v-model="keyword" class="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-lab-cyan" placeholder="搜索文章">
        <div class="mt-5 flex flex-wrap gap-2">
          <button v-for="item in categories" :key="item" class="rounded-full border px-3 py-1.5 text-sm transition" :class="activeCategory === item ? 'border-lab-cyan bg-lab-cyan/15 text-lab-cyan' : 'border-white/10 text-slate-300 hover:border-white/25'" @click="activeCategory = item">
            {{ item }}
          </button>
        </div>
      </aside>
      <section class="grid gap-5">
        <NuxtLink v-for="article in filteredArticles" :key="article.slug" :to="`/articles/${article.slug}`" class="glass lift grid overflow-hidden rounded-lg md:grid-cols-[260px_1fr]">
          <img class="h-56 w-full object-cover md:h-full" :src="article.cover" :alt="article.title">
          <div class="p-5">
            <p class="text-sm text-lab-cyan">{{ article.category }} · {{ article.date }} · {{ article.views }} reads</p>
            <h2 class="mt-3 text-2xl font-bold">{{ article.title }}</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ article.summary }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="tag in article.tags" :key="tag" class="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>
        </NuxtLink>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { articles, categories } from '~/composables/useMockContent'

const keyword = ref('')
const activeCategory = ref('全部')

const filteredArticles = computed(() => {
  return articles.filter((article) => {
    const matchCategory = activeCategory.value === '全部' || article.category === activeCategory.value
    const text = `${article.title} ${article.summary} ${article.tags.join(' ')}`.toLowerCase()
    return matchCategory && text.includes(keyword.value.toLowerCase())
  })
})
</script>
