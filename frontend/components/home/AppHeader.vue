<template>
  <header class="home-header">
    <nav class="home-header__inner section-shell">
      <a class="home-header__logo" href="/#home">
        <span class="home-header__mark">B</span>
        Biscuit Lab
      </a>

      <div class="home-header__nav">
        <a v-for="item in navItems" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </div>

      <div class="home-header__actions">
        <a class="home-header__ghost" href="https://github.com/Biscuit733" target="_blank" rel="noreferrer">GitHub</a>
        <a class="home-header__button" href="/contact">Contact</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { navItems } from '~/data/nav'
</script>
