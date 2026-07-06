<template>
  <main class="lab-shell py-12">
    <SectionTitle eyebrow="Gallery" title="图片资源库" />
    <div class="mt-8 flex flex-wrap gap-2">
      <button v-for="item in imageCategories" :key="item" class="rounded-full border px-4 py-2 text-sm" :class="active === item ? 'border-lab-lime bg-lab-lime/15 text-lab-lime' : 'border-white/10 text-slate-300'" @click="active = item">
        {{ item }}
      </button>
    </div>
    <section class="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
      <div v-for="image in filteredGallery" :key="image.title" class="glass lift mb-5 break-inside-avoid overflow-hidden rounded-lg">
        <button class="block w-full text-left" @click="selected = image">
          <img class="w-full object-cover" :src="image.url" :alt="image.title">
        </button>
        <div class="p-4">
          <h2 class="font-bold">{{ image.title }}</h2>
          <p class="mt-2 text-sm text-slate-300">{{ image.description }}</p>
          <div class="mt-4 flex items-center justify-between gap-3">
            <span class="text-xs text-slate-400">{{ image.downloads }} downloads</span>
            <div class="flex gap-2">
              <a :href="image.url" download class="rounded-full border border-white/10 px-3 py-1.5 text-xs hover:border-lab-cyan">下载</a>
              <button class="rounded-full border border-white/10 px-3 py-1.5 text-xs hover:border-lab-lime" @click="copyLink(image.url)">复制链接</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="selected" class="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur" @click.self="selected = null">
      <div class="glass max-w-4xl overflow-hidden rounded-lg">
        <img class="max-h-[76vh] w-full object-contain" :src="selected.url" :alt="selected.title">
        <div class="flex items-center justify-between p-4">
          <div>
            <h3 class="font-bold">{{ selected.title }}</h3>
            <p class="text-sm text-slate-400">{{ selected.description }}</p>
          </div>
          <button class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950" @click="selected = null">关闭</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { gallery, type GalleryImage } from '~/composables/useMockContent'

const imageCategories = ['全部', ...Array.from(new Set(gallery.map((item) => item.category)))]
const active = ref('全部')
const selected = ref<GalleryImage | null>(null)
const filteredGallery = computed(() => active.value === '全部' ? gallery : gallery.filter((item) => item.category === active.value))

async function copyLink(url: string) {
  await navigator.clipboard?.writeText(url)
}
</script>
