<template>
  <PageShell>
    <PageHero eyebrow="Notes / Learning Lab" title="Notes Lab" description="把学习、项目复盘和 AI 产品思考整理成可持续升级的知识系统。" />

    <section class="notes-page section-shell">
      <NotesFilterBar v-model:keyword="keyword" v-model:active-category="activeCategory" :categories="noteCategories" />
      <NotesMasonry :notes="filteredNotes" />
    </section>
  </PageShell>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import PageShell from '~/components/common/PageShell.vue'
import NotesFilterBar from '~/components/notes/NotesFilterBar.vue'
import NotesMasonry from '~/components/notes/NotesMasonry.vue'
import { allNotes, noteCategories } from '~/data/notes'

const keyword = ref('')
const activeCategory = ref('全部')

const filteredNotes = computed(() => {
  return allNotes.filter((note) => {
    const matchCategory = activeCategory.value === '全部' || note.category === activeCategory.value
    const text = `${note.title} ${note.summary} ${note.tags.join(' ')}`.toLowerCase()
    return matchCategory && text.includes(keyword.value.toLowerCase())
  })
})
</script>
