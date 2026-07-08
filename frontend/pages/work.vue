<template>
  <PageShell>
    <PageHero eyebrow="Work Archive" title="Work Archive" description="沉淀项目、实验 Demo 和可展示作品。" />

    <section class="section-shell">
      <div class="resource-tabs">
        <button v-for="item in filters" :key="item" type="button" :class="{ 'is-active': active === item }" @click="active = item">
          {{ item }}
        </button>
      </div>

      <div class="work-grid-page">
        <TiltCard v-for="project in filteredProjects" :key="project.title" class="work-showcase-card glass-card reveal-card shine-surface" :max-tilt="8">
          <div class="work-showcase-card__image">
            <img :src="project.image" :alt="project.title">
            <span>{{ project.status }}</span>
          </div>
          <div class="work-showcase-card__body">
            <p>{{ project.subtitle }}</p>
            <h2>{{ project.title }}</h2>
            <span>{{ project.description }}</span>
            <div>
              <em v-for="tag in project.tags" :key="tag">{{ tag }}</em>
            </div>
            <nav>
              <a href="/#projects">View Detail</a>
              <a href="https://github.com/Biscuit733" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
          </div>
        </TiltCard>
      </div>
    </section>
  </PageShell>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import PageShell from '~/components/common/PageShell.vue'
import TiltCard from '~/components/effects/TiltCard.vue'
import { projects } from '~/data/projects'

const filters = ['All', 'Frontend', 'Fullstack', 'AI', 'Dashboard', 'Portfolio']
const active = ref('All')

const filteredProjects = computed(() => {
  if (active.value === 'All') return projects
  const keyword = active.value.toLowerCase()
  return projects.filter((project) => `${project.title} ${project.subtitle} ${project.tags.join(' ')}`.toLowerCase().includes(keyword))
})
</script>
