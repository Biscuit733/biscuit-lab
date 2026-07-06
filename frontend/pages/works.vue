<template>
  <main class="lab-shell py-12">
    <SectionTitle eyebrow="Works" title="作品集" />
    <section class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="work in works" :key="work.title" class="glass glow-border lift group rounded-lg p-4 [transform-style:preserve-3d] hover:[transform:translateY(-6px)_rotateX(2deg)_rotateY(-3deg)]">
        <img class="h-48 w-full rounded-md object-cover" :src="work.cover" :alt="work.title">
        <div class="mt-5 flex items-start justify-between gap-4">
          <div>
            <h2 class="text-2xl font-bold">{{ work.title }}</h2>
            <p class="mt-1 text-sm text-lab-cyan">{{ work.subtitle }}</p>
          </div>
          <span v-if="work.featured" class="rounded-full bg-lab-violet/20 px-3 py-1 text-xs text-lab-violet">精选</span>
        </div>
        <p class="mt-4 leading-7 text-slate-300">{{ work.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="tag in work.stack" :key="tag" class="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{{ tag }}</span>
        </div>
        <div class="mt-6 flex gap-3">
          <a :href="work.demoUrl" class="rounded-full bg-lab-cyan px-4 py-2 text-sm font-semibold text-slate-950">在线预览</a>
          <a :href="work.githubUrl" class="rounded-full border border-white/10 px-4 py-2 text-sm">GitHub</a>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { works } from '~/composables/useMockContent'
</script>
