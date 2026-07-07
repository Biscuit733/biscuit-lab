<template>
  <div class="stats-grid">
    <article v-for="stat in profileStats" :key="stat.label" class="stat-card glass-card">
      <strong>{{ stat.value }}</strong>
      <span>{{ stat.label }}</span>
      <p>{{ stat.detail }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { profileStats } from '~/data/profile'
</script>
