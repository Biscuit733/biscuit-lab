<template>
  <article class="work-card">
    <div class="work-card__image">
      <img :src="project.image" :alt="project.title">
      <button>View Detail</button>
    </div>
    <div class="work-card__body">
      <span>{{ project.status }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div>
        <em v-for="tag in project.tags" :key="tag">{{ tag }}</em>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/data/projects'

defineProps<{
  project: ProjectItem
}>()
</script>
