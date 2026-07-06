<template>
  <div>
    <header
      class="sticky top-0 z-50 border-b border-white/10 bg-lab-bg/78 backdrop-blur-xl"
      :class="{ 'site-header--intro-hidden': hideHeaderForIntro }"
    >
      <nav class="lab-shell flex h-16 items-center justify-between">
        <NuxtLink to="/" class="text-lg font-semibold tracking-wide">
          biscuit<span class="text-lab-cyan">Lab</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <div class="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="transition hover:text-lab-cyan">
              {{ item.label }}
            </NuxtLink>
          </div>
          <ThemeToggle v-model="theme" />
        </div>
      </nav>
    </header>
    <EffectsLayer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const nav = [
  { label: '首页', to: '/' },
  { label: '文章', to: '/articles' },
  { label: '图片库', to: '/gallery' },
  { label: '作品集', to: '/works' },
  { label: 'Lab', to: '/lab' }
]

const route = useRoute()
const theme = ref<'dark' | 'light'>('dark')
const scrollY = ref(0)
const updateScroll = () => {
  scrollY.value = window.scrollY
}
const hideHeaderForIntro = computed(() => route.path === '/' && scrollY.value < 560)

function applyTheme(nextTheme: 'dark' | 'light') {
  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
  localStorage.setItem('biscuitlab-theme', nextTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('biscuitlab-theme')
  theme.value = savedTheme === 'light' ? 'light' : 'dark'
  applyTheme(theme.value)

  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})

watch(theme, (nextTheme) => {
  applyTheme(nextTheme)
})
</script>
