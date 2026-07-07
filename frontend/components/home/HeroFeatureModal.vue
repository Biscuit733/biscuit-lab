<template>
  <Transition name="modal-fade">
    <div v-if="feature" class="feature-modal" role="dialog" aria-modal="true" @click.self="$emit('close')">
      <article class="feature-modal__panel glass-card">
        <button class="feature-modal__close" type="button" aria-label="Close modal" @click="$emit('close')">×</button>
        <div class="feature-modal__image">
          <img :src="feature.image" :alt="feature.title">
        </div>
        <div class="feature-modal__body">
          <p class="eyebrow">{{ feature.type }}</p>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <div class="feature-modal__tags">
            <span v-for="tag in feature.tags" :key="tag">{{ tag }}</span>
          </div>
          <a class="neon-button" href="#projects" @click="$emit('close')">{{ feature.actionLabel }}</a>
        </div>
      </article>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { HeroFeatureItem } from '~/data/heroFeatures'

defineProps<{
  feature: HeroFeatureItem | null
}>()

defineEmits<{
  close: []
}>()
</script>
