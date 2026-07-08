<template>
  <div
    class="tilt-card"
    :style="tiltStyle"
    @mousemove="onTiltMove"
    @mouseleave="resetTilt"
  >
    <slot />
    <span class="tilt-card__glare" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  maxTilt?: number
}>(), {
  maxTilt: 10
})

const { tiltStyle, onTiltMove, resetTilt } = useTiltCard(props.maxTilt)
</script>
