<template>
  <main class="sub-page sub-page--articles">
    <AppHeader />
    <section class="sub-hero section-shell">
      <p class="eyebrow">Articles / Learning Notes</p>
      <h1>文章实验库</h1>
      <p>把学习、项目复盘和 AI 产品思考整理成可以持续升级的个人知识系统。</p>
    </section>

    <section class="content-layout section-shell">
      <aside class="content-filter glass-card">
        <label>
          <span>Search Notes</span>
          <input v-model="keyword" placeholder="搜索文章 / 标签 / 摘要">
        </label>
        <div class="content-filter__tags">
          <button
            v-for="item in categories"
            :key="item"
            type="button"
            :class="{ 'is-active': activeCategory === item }"
            @click="activeCategory = item"
          >
            {{ item }}
          </button>
        </div>
      </aside>

      <section class="article-list">
        <NuxtLink v-for="article in filteredArticles" :key="article.slug" :to="`/articles/${article.slug}`" class="article-card glass-card">
          <div class="article-card__image">
            <img :src="article.cover" :alt="article.title">
          </div>
          <div class="article-card__body">
            <p>{{ article.category }} · {{ article.date }} · {{ article.views }} reads</p>
            <h2>{{ article.title }}</h2>
            <span>{{ article.summary }}</span>
            <div>
              <em v-for="tag in article.tags" :key="tag">{{ tag }}</em>
            </div>
          </div>
        </NuxtLink>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '~/components/home/AppHeader.vue'
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
