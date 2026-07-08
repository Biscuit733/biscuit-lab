<template>
  <div class="hero-carousel" aria-label="Featured portfolio carousel">
    <button
      v-for="item in features"
      :key="item.title"
      class="hero-feature-card"
      :class="{ 'is-active': features.indexOf(item) % 4 === activeIndex }"
      type="button"
      @click="$emit('select', item)"
    >
      <img :src="item.image" :alt="item.title">
      <span>{{ item.type }}</span>
      <strong>{{ item.title }}</strong>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { HeroFeatureItem } from '~/data/heroFeatures'

defineProps<{
  features: HeroFeatureItem[]
  activeIndex?: number
}>()

defineEmits<{
  select: [item: HeroFeatureItem]
}>()
</script>
