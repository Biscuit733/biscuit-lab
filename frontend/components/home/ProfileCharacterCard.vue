<template>
  <TiltCard class="profile-character-card glass-card" :max-tilt="8">
    <div class="profile-character-card__halo" />
    <div class="profile-character-card__status">
      <i />
      Available for AI Product Projects
    </div>
    <div class="profile-character-card__figure" aria-label="Biscuit Lab digital creator figure">
      <div class="profile-character-card__ring" />
      <div class="profile-character-card__head">
        <span />
        <i />
      </div>
      <div class="profile-character-card__neck" />
      <div class="profile-character-card__body">
        <strong>BL</strong>
        <em>AI APP BUILDER</em>
      </div>
      <div class="profile-character-card__arm profile-character-card__arm--left" />
      <div class="profile-character-card__arm profile-character-card__arm--right" />
    </div>
    <div class="profile-character-card__chip profile-character-card__chip--one">Vue / Nuxt</div>
    <div class="profile-character-card__chip profile-character-card__chip--two">FastAPI</div>
    <div class="profile-character-card__chip profile-character-card__chip--three">Prompt Flow</div>
    <p>Visual identity / frontend engineering / AI application workflow</p>
  </TiltCard>
</template>

<script setup lang="ts">
import TiltCard from '~/components/effects/TiltCard.vue'
</script>
