<template>
  <div class="hero-thumbnail-rail hide-scrollbar">
    <button
      v-for="(feature, index) in features"
      :key="feature.title"
      class="hero-thumbnail-rail__item shine-surface"
      :class="{ 'is-active': index % 4 === activeIndex }"
      type="button"
      @click="$emit('select', feature)"
    >
      <img :src="feature.image" :alt="feature.title">
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
      <strong>{{ feature.title }}</strong>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { HeroFeatureItem } from '~/data/heroFeatures'

defineProps<{
  features: HeroFeatureItem[]
  activeIndex: number
}>()

defineEmits<{
  select: [feature: HeroFeatureItem]
}>()
</script>
