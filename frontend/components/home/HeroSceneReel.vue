<template>
  <TiltCard class="hero-scene-reel" :max-tilt="7">
    <HeroSceneLayer :scene="scene" />
    <div class="hero-scene-reel__glass hero-scene-reel__glass--main">
      <div>
        <span>{{ scene.label }}</span>
        <strong>LIVE REEL</strong>
      </div>
      <h3>{{ scene.title }}</h3>
      <p>{{ scene.description }}</p>
      <nav>
        <em v-for="keyword in scene.keywords" :key="keyword">{{ keyword }}</em>
      </nav>
    </div>
    <div class="hero-scene-reel__glass hero-scene-reel__glass--side">
      <span>AI</span>
      <small>workflow / app / deploy</small>
    </div>
    <div class="hero-scene-reel__glass hero-scene-reel__glass--mini">
      <span>notes</span>
      <small>gallery / lab / work</small>
    </div>
    <div class="hero-scene-reel__film">
      <i />
      <i />
      <i />
      <i />
    </div>
  </TiltCard>
</template>

<script setup lang="ts">
import TiltCard from '~/components/effects/TiltCard.vue'
import HeroSceneLayer from '~/components/home/HeroSceneLayer.vue'
import type { SceneReelItem } from '~/data/sceneReel'

defineProps<{
  scene: SceneReelItem
}>()
</script>
