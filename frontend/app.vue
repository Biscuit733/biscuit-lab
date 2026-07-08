<template>
  <div>
    <BootLoading v-if="showBootLoading" @complete="completeBootLoading" />
    <RouteTransitionOverlay :active="isRouteTransitioning" />
    <AppHeader />
    <EffectsLayer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import BootLoading from '~/components/common/BootLoading.vue'
import RouteTransitionOverlay from '~/components/common/RouteTransitionOverlay.vue'
import AppHeader from '~/components/home/AppHeader.vue'

const theme = ref<'dark' | 'light'>('dark')
const route = useRoute()
const { showBootLoading, completeBootLoading } = useBootLoading()
const { isRouteTransitioning, triggerRouteTransition } = useRouteTransition()
const { refreshScrollReveal } = useScrollReveal()

function applyTheme(nextTheme: 'dark' | 'light') {
  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
  localStorage.setItem('biscuitlab-theme', nextTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('biscuitlab-theme')
  theme.value = savedTheme === 'light' ? 'light' : 'dark'
  applyTheme(theme.value)
  refreshScrollReveal()
})

watch(theme, (nextTheme) => {
  applyTheme(nextTheme)
})

watch(() => route.fullPath, () => {
  if (!showBootLoading.value) {
    triggerRouteTransition()
  }
  if (import.meta.client) {
    window.setTimeout(() => {
      refreshScrollReveal()
    }, 80)
  }
})
</script>
