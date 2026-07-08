<template>
  <div class="notes-filter-bar glass-card">
    <label>
      <span>Search</span>
      <input :value="keyword" placeholder="搜索 notes / tags / category" @input="$emit('update:keyword', ($event.target as HTMLInputElement).value)">
    </label>
    <div>
      <button
        v-for="item in categories"
        :key="item"
        type="button"
        :class="{ 'is-active': activeCategory === item }"
        @click="$emit('update:activeCategory', item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  keyword: string
  activeCategory: string
  categories: string[]
}>()

defineEmits<{
  'update:keyword': [value: string]
  'update:activeCategory': [value: string]
}>()
</script>
