<template>
  <div class="season-visual" :class="`season-visual--${scene.key}`">
    <div class="season-visual__halo" />
    <div class="season-visual__orbit" />
    <div class="season-visual__card glass-card">
      <div class="season-visual__meta">
        <span>{{ scene.label }}</span>
        <strong>{{ scene.cnLabel }}</strong>
      </div>
      <h3>{{ scene.headline }}</h3>
      <p>{{ scene.description }}</p>
      <div class="season-visual__chips">
        <span v-for="keyword in scene.keywords" :key="keyword">{{ keyword }}</span>
      </div>
    </div>
    <div class="season-visual__plane season-visual__plane--one" />
    <div class="season-visual__plane season-visual__plane--two" />
  </div>
</template>

<script setup lang="ts">
import type { SeasonScene } from '~/data/seasons'

defineProps<{
  scene: SeasonScene
}>()
</script>
