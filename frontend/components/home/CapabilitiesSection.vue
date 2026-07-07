<template>
  <section class="capabilities-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">Capabilities</p>
      <h2>Engineering ability with a visual system mindset.</h2>
    </div>
    <div class="capability-grid">
      <article v-for="item in capabilities" :key="item.title" class="capability-card glass-card">
        <span>{{ item.icon }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div>
          <em v-for="tag in item.tags" :key="tag">{{ tag }}</em>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { capabilities } from '~/data/capabilities'
</script>
