<template>
  <div>
    <EffectsLayer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const theme = ref<'dark' | 'light'>('dark')

function applyTheme(nextTheme: 'dark' | 'light') {
  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
  localStorage.setItem('biscuitlab-theme', nextTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('biscuitlab-theme')
  theme.value = savedTheme === 'light' ? 'light' : 'dark'
  applyTheme(theme.value)
})

watch(theme, (nextTheme) => {
  applyTheme(nextTheme)
})
</script>
