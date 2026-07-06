<template>
  <main class="home-page overflow-hidden pb-20" :style="homeMotionStyle">
    <section class="intro-screen">
      <div class="intro-noise" />
      <div class="intro-center">
        <p class="intro-kicker">Personal Creative Lab</p>
        <h1><ScrambleText text="biscuitLab" /></h1>
        <p>From Frontend to AI Application</p>
        <p class="intro-subtitle">Building a tiny universe for notes, visuals, works, and experiments.</p>
      </div>
      <a class="intro-scroll" href="#home">
        <span>SCROLL</span>
        <span class="intro-arrow">↓</span>
      </a>
    </section>

    <section id="home" class="hero-stage">
      <div class="hero-scanline" />
      <div class="color-bends color-bends--one" />
      <div class="color-bends color-bends--two" />
      <div class="lab-shell grid min-h-[calc(100vh-4rem)] items-center gap-8 py-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div class="hero-copy relative z-10 fade-up">
          <p class="mb-5 inline-flex rounded-full border border-lab-cyan/30 bg-lab-cyan/10 px-4 py-2 text-sm text-lab-cyan">
            Creative Web Lab / Personal Knowledge Base
          </p>
          <h1 class="neon-text max-w-3xl text-6xl font-black leading-none sm:text-7xl lg:text-8xl">
            <ScrambleText text="Make ideas visible." />
          </h1>
          <p class="mt-6 max-w-xl text-xl leading-8 text-slate-300">
            biscuitLab 把文章、图片资源、作品集和前端实验做成一个有开场感的个人创意站。
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <NuxtLink to="/works" class="rounded-full bg-lab-cyan px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.03]">
              查看作品
            </NuxtLink>
            <NuxtLink to="/articles" class="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lab-violet hover:text-lab-violet">
              阅读文章
            </NuxtLink>
            <NuxtLink to="/gallery" class="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lab-lime hover:text-lab-lime">
              图片资源库
            </NuxtLink>
          </div>
        </div>

        <div class="hero-visual rounded-lg fade-up [animation-delay:120ms]">
          <div class="orbital-ring orbital-ring--outer" />
          <div class="orbital-ring orbital-ring--inner" />
          <div class="beam beam--top" />
          <div class="beam beam--bottom" />
          <div class="kinetic-plane kinetic-plane--one rounded-md">
            <div class="flex h-full flex-col justify-between p-5">
              <span class="text-xs uppercase tracking-[0.28em] text-lab-cyan">OPENING</span>
              <span class="text-4xl font-black">biscuitLab</span>
            </div>
          </div>
          <div class="kinetic-plane kinetic-plane--two rounded-md">
            <div class="grid h-full place-items-center p-5 text-center">
              <span class="text-5xl font-black text-lab-violet">AI</span>
            </div>
          </div>
          <div class="kinetic-plane kinetic-plane--three rounded-md">
            <div class="flex h-full items-center justify-between gap-4 p-5">
              <span class="text-sm text-slate-300">articles / gallery / works / lab</span>
              <span class="rounded-full border border-lab-lime/40 px-3 py-1 text-xs text-lab-lime">live</span>
            </div>
          </div>
        </div>
      </div>

      <div class="lab-shell -mt-16 pb-14">
        <div class="hero-glass-dock grid gap-4 rounded-lg p-4 md:grid-cols-3">
          <NuxtLink v-for="item in dockItems" :key="item.title" :to="item.to" class="scroll-flip-card lift rounded-md border border-white/10 p-4">
            <span class="scroll-flip-card__halo" />
            <div class="scroll-flip-card__inner">
              <div class="scroll-flip-card__face scroll-flip-card__front">
                <span class="dock-corner dock-corner--tl" />
                <span class="dock-corner dock-corner--br" />
                <p class="text-xs uppercase tracking-[0.24em] text-lab-cyan">{{ item.eyebrow }}</p>
                <h2 class="mt-3 text-2xl font-black">{{ item.title }}</h2>
                <p class="mt-3 text-sm leading-6 text-slate-300">{{ item.description }}</p>
                <div class="dock-meter mt-5">
                  <span />
                </div>
              </div>
              <div class="scroll-flip-card__face scroll-flip-card__back">
                <span class="dock-corner dock-corner--tl" />
                <span class="dock-corner dock-corner--br" />
                <p class="text-xs uppercase tracking-[0.24em] text-lab-lime">ENTER PORTAL</p>
                <h2 class="mt-3 text-2xl font-black">{{ item.action }}</h2>
                <p class="mt-3 text-sm leading-6 text-slate-300">继续下滑，内容会从玻璃层后方展开。</p>
                <span class="dock-orbit" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="lab-shell py-16">
      <SectionTitle eyebrow="Effects Stack" title="前端特效栈" />
      <div class="effects-showcase mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article v-for="effect in effects" :key="effect.title" class="effect-tile">
          <span class="effect-tile__orb" />
          <p class="text-xs uppercase tracking-[0.24em] text-lab-cyan">{{ effect.type }}</p>
          <h3 class="mt-3 text-2xl font-black">{{ effect.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">{{ effect.description }}</p>
        </article>
      </div>
    </section>

    <section class="lab-shell py-14">
      <SectionTitle eyebrow="Selected Works" title="精选作品" />
      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <NuxtLink v-for="work in works" :key="work.title" to="/works" class="glass glow-border lift rounded-lg p-4">
          <img class="h-44 w-full rounded-md object-cover" :src="work.cover" :alt="work.title">
          <h3 class="mt-4 text-xl font-bold">{{ work.title }}</h3>
          <p class="mt-2 text-sm text-slate-300">{{ work.subtitle }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in work.stack" :key="tag" class="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">{{ tag }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="lab-shell py-14">
      <SectionTitle eyebrow="Latest Articles" title="最新文章" />
      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <NuxtLink v-for="article in articles" :key="article.slug" :to="`/articles/${article.slug}`" class="glass lift rounded-lg p-5">
          <p class="text-sm text-lab-cyan">{{ article.category }} · {{ article.date }}</p>
          <h3 class="mt-3 text-xl font-bold">{{ article.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">{{ article.summary }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="lab-shell py-14">
      <SectionTitle eyebrow="Gallery" title="图片资源预览" />
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="image in gallery" :key="image.title" to="/gallery" class="image-tile lift rounded-lg border border-white/10" :style="{ backgroundImage: `linear-gradient(to top, rgba(5,7,13,.88), transparent 55%), url(${image.url})` }">
          <div class="flex h-full items-end p-4">
            <div>
              <h3 class="font-bold">{{ image.title }}</h3>
              <p class="text-sm text-slate-300">{{ image.category }} · {{ image.downloads }} downloads</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <footer class="lab-shell border-t border-white/10 py-8 text-sm text-slate-400">
      <div class="flex flex-col justify-between gap-3 sm:flex-row">
        <span>biscuitLab © 2026</span>
        <span>GitHub · 小红书 · hello@biscuitlab.dev · 备案信息预留</span>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { articles, gallery, works } from '~/composables/useMockContent'

const scrollY = ref(0)
const updateScroll = () => {
  scrollY.value = window.scrollY
}
const scrollProgress = computed(() => {
  const start = 360
  const distance = 760
  return Math.min(Math.max((scrollY.value - start) / distance, 0), 1)
})
const homeMotionStyle = computed(() => ({
  '--home-progress': scrollProgress.value.toFixed(3),
  '--dock-rotate': `${Math.round(scrollProgress.value * 180)}deg`,
  '--dock-rotate-y': `${Math.round(scrollProgress.value * 178)}deg`,
  '--dock-tilt-z': `${Math.round((0.5 - scrollProgress.value) * 8)}deg`,
  '--dock-scale': (0.94 + scrollProgress.value * 0.06).toFixed(3),
  '--dock-y': `${Math.round((1 - scrollProgress.value) * 28)}px`,
  '--dock-opacity': (0.52 + scrollProgress.value * 0.48).toFixed(3),
  '--intro-y': `${Math.round(scrollProgress.value * -42)}px`,
  '--intro-opacity': (1 - scrollProgress.value * 0.7).toFixed(3),
  '--stage-shift': `${Math.round((1 - scrollProgress.value) * 70)}px`,
  '--stage-blur': `${Math.max(0, 3 - scrollProgress.value * 3).toFixed(1)}px`
}))

onMounted(() => {
  if (!window.location.hash) {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
      updateScroll()
    })
  }
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})

const dockItems = [
  {
    eyebrow: '01 / Works',
    title: works[0].title,
    description: works[0].subtitle,
    action: '进入作品集',
    to: '/works'
  },
  {
    eyebrow: '02 / Article',
    title: articles[0].title,
    description: articles[0].summary,
    action: '阅读最新文章',
    to: `/articles/${articles[0].slug}`
  },
  {
    eyebrow: '03 / Gallery',
    title: gallery[0].title,
    description: gallery[0].description,
    action: '打开图片库',
    to: '/gallery'
  }
]

const effects = [
  {
    type: 'Text',
    title: 'Scramble Text',
    description: '标题进入和 hover 时字符会快速洗牌，增强前端感。'
  },
  {
    type: 'Cursor',
    title: 'Blob Cursor',
    description: '全站跟随鼠标的发光 blob，加上点击火花反馈。'
  },
  {
    type: 'Background',
    title: 'Color Bends',
    description: '首页背景叠加柔性光带和点阵，形成流动舞台。'
  },
  {
    type: 'Portal',
    title: 'Orb Dock',
    description: '毛玻璃入口卡片带流光边框、轨道和翻转变化。'
  }
]
</script>
