<template>
  <div class="hero-scene-layer" :class="`hero-scene-layer--${scene.key}`">
    <div class="hero-scene-layer__sky" />
    <div class="hero-scene-layer__cloud hero-scene-layer__cloud--one" />
    <div class="hero-scene-layer__cloud hero-scene-layer__cloud--two" />
    <div class="hero-scene-layer__island">
      <span />
      <span />
      <span />
    </div>
    <div class="hero-scene-layer__beam" />
    <div class="hero-scene-layer__particle-field">
      <i
        v-for="item in 18"
        :key="item"
        :style="{
          '--i': item,
          left: `${(item * 43) % 100}%`,
          top: `${(item * 31) % 100}%`
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SceneReelItem } from '~/data/sceneReel'

defineProps<{
  scene: SceneReelItem
}>()
</script>
