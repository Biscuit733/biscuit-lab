<template>
  <span class="scramble-text" @pointerenter="play">
    {{ displayText }}
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  speed?: number
}>(), {
  speed: 28
})

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>/{}[]'
const displayText = ref(props.text)
let timer: number | undefined

function play() {
  window.clearInterval(timer)
  let frame = 0
  const total = Math.max(18, props.text.length * 2)
  timer = window.setInterval(() => {
    displayText.value = props.text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' '
        const threshold = (index / props.text.length) * total
        if (frame > threshold + 6) return char
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')
    frame += 1
    if (frame > total + 10) {
      window.clearInterval(timer)
      displayText.value = props.text
    }
  }, props.speed)
}

onMounted(() => {
  play()
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})

watch(() => props.text, () => {
  displayText.value = props.text
  play()
})
</script>
