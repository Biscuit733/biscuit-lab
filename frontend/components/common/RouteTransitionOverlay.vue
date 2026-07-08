<template>
  <Transition name="route-overlay">
    <div v-if="active" class="route-transition-overlay" aria-hidden="true">
      <div class="route-transition-overlay__line" />
      <div class="route-transition-overlay__orb" />
      <div class="route-transition-overlay__wipe" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>
