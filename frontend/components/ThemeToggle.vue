<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="`切换到${modelValue === 'dark' ? '白色' : '暗色'}主题`"
    @click="$emit('update:modelValue', modelValue === 'dark' ? 'light' : 'dark')"
  >
    <span class="theme-toggle__track">
      <span class="theme-toggle__thumb">
        <span v-if="modelValue === 'dark'">月</span>
        <span v-else>日</span>
      </span>
    </span>
    <span class="hidden text-sm font-medium md:inline">
      {{ modelValue === 'dark' ? '暗色' : '白色' }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: 'dark' | 'light'
}>()

defineEmits<{
  (event: 'update:modelValue', value: 'dark' | 'light'): void
}>()
</script>
