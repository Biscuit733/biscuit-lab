<template>
  <PageShell>
    <PageHero eyebrow="Gallery / Resources" title="Gallery Resources" description="用于沉淀封面、视觉参考、Prompt 配图和后续可下载资源。" />

    <section class="section-shell">
      <div class="resource-tabs">
        <button v-for="item in imageCategories" :key="item" type="button" :class="{ 'is-active': active === item }" @click="active = item">
          {{ item }}
        </button>
      </div>

      <div class="resource-grid">
        <TiltCard v-for="image in filteredGallery" :key="image.title" class="resource-card glass-card reveal-card shine-surface" :max-tilt="6">
          <button type="button" @click="selected = image">
            <img :src="image.url" :alt="image.title">
          </button>
          <div>
            <span>{{ image.category }} · {{ image.downloads }} downloads</span>
            <h2>{{ image.title }}</h2>
            <p>{{ image.description }}</p>
            <div class="resource-card__actions">
              <a :href="image.url" download>Download</a>
              <button type="button" @click="copyLink(image.url)">Copy Link</button>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>

    <div v-if="selected" class="gallery-modal" @click.self="selected = null">
      <div class="gallery-modal__panel glass-card">
        <button class="gallery-modal__close" type="button" @click="selected = null">×</button>
        <img :src="selected.url" :alt="selected.title">
        <div>
          <p class="eyebrow">{{ selected.category }}</p>
          <h3>{{ selected.title }}</h3>
          <p>{{ selected.description }}</p>
        </div>
      </div>
    </div>
  </PageShell>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import PageShell from '~/components/common/PageShell.vue'
import TiltCard from '~/components/effects/TiltCard.vue'
import { gallery, type GalleryImage } from '~/composables/useMockContent'

const imageCategories = ['全部', ...Array.from(new Set(gallery.map((item) => item.category)))]
const active = ref('全部')
const selected = ref<GalleryImage | null>(null)
const filteredGallery = computed(() => active.value === '全部' ? gallery : gallery.filter((item) => item.category === active.value))

async function copyLink(url: string) {
  await navigator.clipboard?.writeText(url)
}
</script>
