<template>
  <div class="season-visual" :class="`season-visual--${scene.key}`">
    <div class="season-visual__halo" />
    <div class="season-visual__orbit" />
    <div class="season-visual__cloud season-visual__cloud--one" />
    <div class="season-visual__cloud season-visual__cloud--two" />
    <div class="season-visual__card glass-card">
      <div class="season-visual__meta">
        <span>{{ scene.label }}</span>
        <strong>LIVE</strong>
      </div>
      <h3>{{ scene.title }}</h3>
      <p>{{ scene.description }}</p>
      <div class="season-visual__chips">
        <span v-for="keyword in scene.keywords" :key="keyword">{{ keyword }}</span>
      </div>
    </div>
    <div class="season-visual__plane season-visual__plane--one">
      <span>AI</span>
    </div>
    <div class="season-visual__plane season-visual__plane--two">
      <span>WORK</span>
    </div>
    <div class="season-visual__panel-strip">
      <i />
      <i />
      <i />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SceneReelItem } from '~/data/sceneReel'

defineProps<{
  scene: SceneReelItem
}>()
</script>
