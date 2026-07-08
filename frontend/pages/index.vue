<template>
  <main class="home-page">
    <CinematicHero />
    <ProfileResumeSection />
    <SelectedWork />
    <CapabilitiesSection />
    <GallerySection />
    <ContactSection />
    <SiteFooter />
  </main>
</template>

<script setup lang="ts">
import CapabilitiesSection from '~/components/home/CapabilitiesSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'
import GallerySection from '~/components/home/GallerySection.vue'
import ProfileResumeSection from '~/components/home/ProfileResumeSection.vue'
import CinematicHero from '~/components/home/CinematicHero.vue'
import SelectedWork from '~/components/home/SelectedWork.vue'
import SiteFooter from '~/components/home/SiteFooter.vue'
</script>
