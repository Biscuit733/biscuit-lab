<template>
  <main class="sub-page sub-page--works">
    <AppHeader />
    <section class="sub-hero section-shell">
      <p class="eyebrow">Selected Works</p>
      <h1>作品集</h1>
      <p>把能展示能力的项目做成清晰的作品资产，而不是散落在简历里的几个链接。</p>
    </section>

    <section class="work-grid-page section-shell">
      <article v-for="work in works" :key="work.title" class="work-showcase-card glass-card">
        <div class="work-showcase-card__image">
          <img :src="work.cover" :alt="work.title">
          <span v-if="work.featured">Featured</span>
        </div>
        <div class="work-showcase-card__body">
          <p>{{ work.status }}</p>
          <h2>{{ work.title }}</h2>
          <strong>{{ work.subtitle }}</strong>
          <span>{{ work.description }}</span>
          <div>
            <em v-for="tag in work.stack" :key="tag">{{ tag }}</em>
          </div>
          <nav>
            <a :href="work.demoUrl">Live Preview</a>
            <a :href="work.githubUrl">GitHub</a>
          </nav>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '~/components/home/AppHeader.vue'
import { works } from '~/composables/useMockContent'
</script>
