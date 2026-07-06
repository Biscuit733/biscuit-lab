<template>
  <div class="effects-layer" aria-hidden="true">
    <div class="blob-cursor" :style="cursorStyle" />
    <span
      v-for="spark in sparks"
      :key="spark.id"
      class="click-spark"
      :style="{ left: `${spark.x}px`, top: `${spark.y}px` }"
    />
    <span
      v-for="trail in trails"
      :key="trail.id"
      class="image-trail"
      :style="{ left: `${trail.x}px`, top: `${trail.y}px`, '--trail-hue': trail.hue }"
    />
  </div>
</template>

<script setup lang="ts">
type Spark = {
  id: number
  x: number
  y: number
}

type Trail = Spark & {
  hue: string
}

const cursor = reactive({ x: -120, y: -120 })
const sparks = ref<Spark[]>([])
const trails = ref<Trail[]>([])
let sparkId = 0
let lastTrailAt = 0

const cursorStyle = computed(() => ({
  transform: `translate3d(${cursor.x - 34}px, ${cursor.y - 34}px, 0)`
}))

function addTrail(x: number, y: number) {
  const now = performance.now()
  if (now - lastTrailAt < 95) return
  lastTrailAt = now
  const next = {
    id: sparkId++,
    x: x - 28,
    y: y - 28,
    hue: `${Math.round((x + y) % 360)}deg`
  }
  trails.value = [...trails.value.slice(-5), next]
  window.setTimeout(() => {
    trails.value = trails.value.filter((item) => item.id !== next.id)
  }, 900)
}

function onPointerMove(event: PointerEvent) {
  cursor.x += (event.clientX - cursor.x) * 0.28
  cursor.y += (event.clientY - cursor.y) * 0.28
  addTrail(event.clientX, event.clientY)
}

function onPointerDown(event: PointerEvent) {
  const next = { id: sparkId++, x: event.clientX, y: event.clientY }
  sparks.value = [...sparks.value, next]
  window.setTimeout(() => {
    sparks.value = sparks.value.filter((item) => item.id !== next.id)
  }, 650)
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerdown', onPointerDown, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerdown', onPointerDown)
})
</script>

<style scoped>
.effects-layer {
  position: fixed;
  inset: 0;
  z-index: 80;
  pointer-events: none;
  overflow: hidden;
}

.blob-cursor {
  position: fixed;
  width: 68px;
  height: 68px;
  border-radius: 999px;
  background:
    radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.8), transparent 18%),
    radial-gradient(circle, rgba(34, 245, 209, 0.34), rgba(141, 108, 255, 0.16) 58%, transparent 72%);
  mix-blend-mode: screen;
  filter: blur(1px);
  opacity: 0.62;
  transition: opacity 180ms ease;
}

.click-spark {
  position: fixed;
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #22f5d1;
  box-shadow:
    0 -28px 0 -2px #8d6cff,
    24px -14px 0 -2px #b9ff66,
    24px 14px 0 -2px #22f5d1,
    0 28px 0 -2px #8d6cff,
    -24px 14px 0 -2px #b9ff66,
    -24px -14px 0 -2px #22f5d1;
  animation: sparkPop 650ms ease-out forwards;
}

.image-trail {
  position: fixed;
  width: 56px;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  background:
    linear-gradient(135deg, hsla(var(--trail-hue), 90%, 62%, 0.54), rgba(34, 245, 209, 0.14)),
    radial-gradient(circle at 68% 32%, rgba(255, 255, 255, 0.6), transparent 18%);
  box-shadow: 0 16px 45px rgba(34, 245, 209, 0.16);
  transform: rotate(10deg);
  animation: trailFade 900ms ease-out forwards;
}

@keyframes sparkPop {
  from {
    transform: translate(-50%, -50%) scale(0.25) rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(1.8) rotate(90deg);
    opacity: 0;
  }
}

@keyframes trailFade {
  from {
    transform: translate3d(0, 0, 0) rotate(10deg) scale(0.9);
    opacity: 0.82;
  }
  to {
    transform: translate3d(18px, -22px, 0) rotate(-8deg) scale(0.65);
    opacity: 0;
  }
}

@media (pointer: coarse) {
  .blob-cursor,
  .image-trail {
    display: none;
  }
}
</style>
