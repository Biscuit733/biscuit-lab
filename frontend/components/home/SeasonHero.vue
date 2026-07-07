<template>
  <section
    id="home"
    class="season-hero"
    :class="`season-hero--${currentScene.key}`"
    :style="heroStyle"
  >
    <AppHeader />
    <div class="season-hero__backdrop" />
    <div class="season-hero__grain" />

    <div class="season-hero__content section-shell">
      <div class="season-hero__copy fade-up">
        <p class="eyebrow">AI Era / Personal Portfolio / Season System</p>
        <h1>Biscuit Lab</h1>
        <h2>Frontend Developer turning into a Fullstack AI Application Engineer.</h2>
        <p>
          我正在把前端经验升级为全栈交付能力，围绕 Vue、TypeScript、Node、AI 应用、部署和工程化构建长期作品集。
        </p>
        <div class="season-hero__actions">
          <a href="#projects" class="neon-button">View Projects</a>
          <a href="/articles" class="glass-button">Read Notes</a>
          <a href="#contact" class="glass-button">Contact Me</a>
        </div>
      </div>

      <Transition name="season-shift" mode="out-in">
        <SeasonVisual :key="currentScene.key" :scene="currentScene" />
      </Transition>
    </div>

    <div class="season-hero__season-tabs section-shell">
      <button
        v-for="(scene, index) in seasonScenes"
        :key="scene.key"
        type="button"
        :class="{ 'is-active': index === currentIndex }"
        @click="currentIndex = index"
      >
        <span>{{ scene.cnLabel }}</span>
        {{ scene.label }}
      </button>
    </div>

    <div class="season-hero__carousel section-shell">
      <HeroCarousel :features="heroFeatures" @select="selectedFeature = $event" />
    </div>

    <HeroFeatureModal :feature="selectedFeature" @close="selectedFeature = null" />
  </section>
</template>

<script setup lang="ts">
import AppHeader from '~/components/home/AppHeader.vue'
import HeroCarousel from '~/components/home/HeroCarousel.vue'
import HeroFeatureModal from '~/components/home/HeroFeatureModal.vue'
import SeasonVisual from '~/components/home/SeasonVisual.vue'
import { heroFeatures, type HeroFeatureItem } from '~/data/heroFeatures'
import { seasonScenes } from '~/data/seasons'

const currentIndex = ref(0)
const selectedFeature = ref<HeroFeatureItem | null>(null)
let seasonTimer: number | undefined

const currentScene = computed(() => seasonScenes[currentIndex.value])
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
  seasonTimer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % seasonScenes.length
  }, 4600)
  window.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  window.clearInterval(seasonTimer)
  window.removeEventListener('keydown', closeOnEscape)
})
</script>
