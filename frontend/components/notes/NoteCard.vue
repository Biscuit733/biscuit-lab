<template>
  <NuxtLink
    :to="`/articles/${note.slug}`"
    class="note-card glass-card"
    :class="[`note-card--${note.variant}`, `note-card--${note.height}`]"
    :style="{ '--note-accent': note.accent }"
  >
    <div v-if="note.variant !== 'text' && note.variant !== 'quote'" class="note-card__media">
      <img :src="note.cover" :alt="note.title">
    </div>
    <div class="note-card__body">
      <p>{{ note.category }} · {{ note.date }}</p>
      <blockquote v-if="note.variant === 'quote'">{{ note.quote }}</blockquote>
      <h2>{{ note.title }}</h2>
      <span>{{ note.summary }}</span>
      <ul v-if="note.variant === 'checklist'">
        <li v-for="item in note.checklist" :key="item">{{ item }}</li>
      </ul>
      <div class="note-card__meta">
        <em v-for="tag in note.tags" :key="tag">{{ tag }}</em>
        <strong>{{ note.views }} reads</strong>
      </div>
    </div>
    <i class="note-card__view">VIEW</i>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NoteItem } from '~/data/notes'

defineProps<{
  note: NoteItem
}>()
</script>
