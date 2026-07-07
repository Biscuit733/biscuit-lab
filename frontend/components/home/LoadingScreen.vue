<template>
  <Transition name="loading-fade">
    <div v-if="visible" class="loading-screen" aria-live="polite">
      <div class="loading-screen__glow" />
      <div class="loading-screen__content">
        <span>LOADING PORTFOLIO</span>
        <strong>{{ progress }}%</strong>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  complete: []
}>()

const progress = ref(0)
const visible = ref(true)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    const step = progress.value < 70 ? 7 : progress.value < 92 ? 3 : 1
    progress.value = Math.min(100, progress.value + step)

    if (progress.value >= 100) {
      window.clearInterval(timer)
      window.setTimeout(() => {
        visible.value = false
        window.setTimeout(() => emit('complete'), 520)
      }, 360)
    }
  }, 54)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})
</script>
