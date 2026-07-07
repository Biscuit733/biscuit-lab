<template>
  <section id="gallery" class="gallery-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">Gallery / Resources</p>
      <h2>Visual assets for notes, covers, and downloadable resources.</h2>
    </div>
    <div class="gallery-rail">
      <article v-for="item in galleryItems" :key="item.title" class="gallery-card">
        <img :src="item.image" :alt="item.title">
        <div>
          <span>{{ item.tag }}</span>
          <h3>{{ item.title }}</h3>
          <button>Download</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { galleryItems } from '~/data/gallery'
</script>
