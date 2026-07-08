<template>
  <section class="page-intro section-shell">
    <SectionEyebrow>{{ eyebrow }}</SectionEyebrow>
    <h1><slot name="title">{{ title }}</slot></h1>
    <p>{{ description }}</p>
  </section>
</template>

<script setup lang="ts">
import SectionEyebrow from '~/components/common/SectionEyebrow.vue'

defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>
