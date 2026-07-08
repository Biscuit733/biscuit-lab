<template>
  <component
    :is="as"
    class="magnetic-button"
    :href="href"
    :style="style"
    @mousemove="onMove"
    @mouseleave="reset"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  href?: string
}>(), {
  as: 'button',
  href: undefined
})

const style = reactive({
  '--magnet-x': '0px',
  '--magnet-y': '0px'
})

function onMove(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  style['--magnet-x'] = `${((event.clientX - rect.left) / rect.width - 0.5) * 10}px`
  style['--magnet-y'] = `${((event.clientY - rect.top) / rect.height - 0.5) * 10}px`
}

function reset() {
  style['--magnet-x'] = '0px'
  style['--magnet-y'] = '0px'
}
</script>
