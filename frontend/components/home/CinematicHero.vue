<template>
  <section
    id="home"
    class="cinematic-hero"
    :class="`cinematic-hero--${currentScene.key}`"
    :style="heroStyle"
  >
    <div class="cinematic-hero__backdrop" />
    <div class="cinematic-hero__scan" />

    <div class="cinematic-hero__content section-shell">
      <div class="cinematic-hero__copy fade-up">
        <p class="eyebrow">AI Era / Cinematic Portfolio Reel</p>
        <h1>
          <span>Biscuit</span>
          <em>Lab</em>
        </h1>
        <h2>
          Frontend Developer turning into a
          <strong>Fullstack AI</strong>
          Application Engineer.
        </h2>
        <p>
          我正在把前端经验升级为全栈交付能力，用 Vue、TypeScript、Node、AI 应用和部署工程，把想法做成真正可体验的产品。
        </p>
        <div class="cinematic-hero__actions">
          <a href="/work" class="neon-button magnetic-button">View Projects</a>
          <a href="/notes" class="glass-button magnetic-button">Read Notes</a>
          <a href="/contact" class="glass-button magnetic-button">Contact Me</a>
        </div>
      </div>

      <Transition name="season-shift" mode="out-in">
        <HeroSceneReel :key="currentScene.key" :scene="currentScene" />
      </Transition>
    </div>

    <div class="cinematic-hero__rail section-shell">
      <HeroThumbnailRail :features="heroFeatures" :active-index="currentIndex" @select="selectedFeature = $event" />
    </div>

    <HeroFeatureModal :feature="selectedFeature" @close="selectedFeature = null" />
  </section>
</template>

<script setup lang="ts">
import HeroFeatureModal from '~/components/home/HeroFeatureModal.vue'
import HeroSceneReel from '~/components/home/HeroSceneReel.vue'
import HeroThumbnailRail from '~/components/home/HeroThumbnailRail.vue'
import { heroFeatures, type HeroFeatureItem } from '~/data/heroFeatures'
import { sceneReel } from '~/data/sceneReel'

const currentIndex = ref(0)
const selectedFeature = ref<HeroFeatureItem | null>(null)
let reelTimer: number | undefined

const currentScene = computed(() => sceneReel[currentIndex.value])
const heroStyle = computed(() => ({
  '--season-primary': currentScene.value.palette.primary,
  '--season-secondary': currentScene.value.palette.secondary,
  '--season-glow': currentScene.value.palette.glow
}))

function closeOnEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    selectedFeature.value = null
  }
}

onMounted(() => {
  reelTimer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % sceneReel.length
  }, 5200)
  window.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  window.clearInterval(reelTimer)
  window.removeEventListener('keydown', closeOnEscape)
})
</script>
