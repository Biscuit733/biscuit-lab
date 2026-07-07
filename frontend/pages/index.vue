<template>
  <main class="home-page">
    <LoadingScreen v-if="showLoading" @complete="showLoading = false" />
    <SeasonHero />
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
import LoadingScreen from '~/components/home/LoadingScreen.vue'
import ProfileResumeSection from '~/components/home/ProfileResumeSection.vue'
import SeasonHero from '~/components/home/SeasonHero.vue'
import SelectedWork from '~/components/home/SelectedWork.vue'
import SiteFooter from '~/components/home/SiteFooter.vue'

const showLoading = ref(true)
</script>
