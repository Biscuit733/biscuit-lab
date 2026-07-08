<template>
  <PageShell>
    <PageHero eyebrow="Creative Lab" title="Lab Experiments" description="记录全栈、AI 应用、工程化和产品实验。" />

    <section class="lab-grid section-shell">
      <FlipCard v-for="item in labExperiments" :key="item.title" class="lab-experiment-card glass-card">
        <template #front>
          <div class="lab-experiment-card__visual" :class="item.gradient" />
          <span><i />EXP-{{ item.code }} · {{ item.status }}</span>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </template>
        <template #back>
          <span><i />SYSTEM STACK</span>
          <h2>{{ item.title }}</h2>
          <p>实验目标：把视觉表现、前端工程、AI 工作流和部署路径沉淀成可复用模块。</p>
          <div>
            <em v-for="tag in item.tags" :key="tag">{{ tag }}</em>
          </div>
        </template>
      </FlipCard>
    </section>
  </PageShell>
</template>

<script setup lang="ts">
import PageHero from '~/components/common/PageHero.vue'
import PageShell from '~/components/common/PageShell.vue'
import FlipCard from '~/components/effects/FlipCard.vue'
import { labExperiments } from '~/data/lab'
</script>
