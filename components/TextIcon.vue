<template>
  <span class="flex gap-1 items-center">
    <NaiveIcon :name="icon" :size="18" />
    <n-text>
      <slot />
    </n-text>
  </span>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>
