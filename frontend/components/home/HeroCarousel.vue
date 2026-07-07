<template>
  <div class="hero-carousel" aria-label="Featured portfolio carousel">
    <button
      v-for="item in features"
      :key="item.title"
      class="hero-feature-card"
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
}>()

defineEmits<{
  select: [item: HeroFeatureItem]
}>()
</script>
