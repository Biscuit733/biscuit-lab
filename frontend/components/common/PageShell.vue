<template>
  <main class="page-shell sub-page">
    <CinematicBackdrop />
    <slot />
  </main>
</template>

<script setup lang="ts">
import CinematicBackdrop from '~/components/common/CinematicBackdrop.vue'
</script>
