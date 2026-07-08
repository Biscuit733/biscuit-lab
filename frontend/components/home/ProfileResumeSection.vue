<template>
  <section id="profile" class="resume-section section-shell fade-up">
    <ProfileCharacterCard />

    <div class="resume-content">
      <p class="eyebrow">About Me</p>
      <h2>Hi, I am YanTang.</h2>
      <p class="resume-content__lead">{{ profile.description }}</p>

      <div class="resume-content__meta">
        <div>
          <span>Current Direction</span>
          <strong>{{ profile.direction }}</strong>
        </div>
        <div>
          <span>Now Building</span>
          <strong>{{ profile.currentProject }}</strong>
        </div>
      </div>

      <StatsGrid />

      <div class="resume-timeline">
        <article v-for="item in timelineItems" :key="item.year">
          <span>{{ item.year }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StatsGrid from '~/components/home/StatsGrid.vue'
import ProfileCharacterCard from '~/components/home/ProfileCharacterCard.vue'
import { profile, timelineItems } from '~/data/profile'
</script>
