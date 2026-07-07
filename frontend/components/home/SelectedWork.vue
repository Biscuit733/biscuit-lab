<template>
  <section id="projects" class="work-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">Selected Work</p>
      <h2>Projects, experiments, and AI-powered tools.</h2>
    </div>
    <div class="work-rail">
      <WorkCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkCard from '~/components/home/WorkCard.vue'
import { projects } from '~/data/projects'
</script>
