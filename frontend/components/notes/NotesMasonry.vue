<template>
  <section class="notes-masonry">
    <NoteCard v-for="note in notes" :key="note.slug" :note="note" />
  </section>
</template>

<script setup lang="ts">
import NoteCard from '~/components/notes/NoteCard.vue'
import type { NoteItem } from '~/data/notes'

defineProps<{
  notes: NoteItem[]
}>()
</script>
