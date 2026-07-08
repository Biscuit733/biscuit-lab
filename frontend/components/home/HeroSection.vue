<template>
  <section id="home" class="home-hero section-shell">
    <div class="home-hero__copy reveal-up">
      <p class="eyebrow">Personal Portfolio / AI Application Lab</p>
      <h1>
        <ScrambleText text="Biscuit Lab" />
      </h1>
      <h2>Frontend Developer turning into a Fullstack AI Application Engineer.</h2>
      <p class="home-hero__description">
        我正在把前端经验升级为全栈交付能力，围绕 Vue、TypeScript、Node、AI 应用、部署和工程化构建长期作品集。
      </p>
      <div class="home-hero__actions">
        <a href="/work" class="neon-button">View Projects</a>
        <a href="/notes" class="glass-button">Read Notes</a>
        <a href="/contact" class="glass-button">Contact Me</a>
      </div>
      <div class="home-hero__tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <div class="home-hero__visual reveal-up">
      <div class="portfolio-stage">
        <div class="portfolio-stage__hud">
          <span>LIVE PORTFOLIO</span>
          <span>2026</span>
        </div>
        <div class="portfolio-stage__title">AI / WEB / VISUAL</div>
        <div class="portfolio-stack">
          <article v-for="project in projects.slice(0, 3)" :key="project.title" class="portfolio-stack__card">
            <img :src="project.image" :alt="project.title">
            <span>{{ project.status }}</span>
          </article>
        </div>
        <div class="portfolio-stage__orb" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrambleText from '~/components/ScrambleText.vue'
import { projects } from '~/data/projects'

const tags = ['Vue 3', 'TypeScript', 'Nuxt 3', 'AI Apps', 'Fullstack']
</script>
