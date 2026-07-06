<template>
  <div>
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-lab-cyan">{{ eyebrow }}</p>
    <h2 class="mt-3 text-3xl font-black sm:text-4xl">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
}>()
</script>
