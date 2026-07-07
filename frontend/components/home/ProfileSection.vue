<template>
  <section id="profile" class="profile-section section-shell">
    <div class="profile-card glass-card reveal-up">
      <div class="profile-card__logo">BL</div>
      <p class="eyebrow">Profile</p>
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.role }}</p>
    </div>

    <div class="profile-section__content reveal-up">
      <p class="eyebrow">Who I Am</p>
      <h2>前端开发者，正在转向全栈 + AI 应用工程师。</h2>
      <p>{{ profile.description }}</p>
      <ul>
        <li v-for="item in profile.focus" :key="item">{{ item }}</li>
      </ul>
      <StatsGrid />
    </div>
  </section>
</template>

<script setup lang="ts">
import StatsGrid from '~/components/home/StatsGrid.vue'
import { profile } from '~/data/profile'
</script>
